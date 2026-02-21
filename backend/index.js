require("dotenv").config();


process.on("uncaughtException", (err) => {
  console.error("uncaughtException:", err && err.stack ? err.stack : err);
});
process.on("unhandledRejection", (reason, p) => {
  console.error("unhandledRejection:", reason);
});
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
let stripe = null;
if (process.env.STRIPE_SECRET_KEY) {
  try {
    stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  } catch (err) {
    console.warn("Stripe initialization failed:", err?.message || err);
    stripe = null;
  }
} else {
  console.warn("STRIPE_SECRET_KEY not set — Stripe endpoints will be disabled");
}
let admin = null;
const port = process.env.PORT || 3000;

let FIREBASE_AVAILABLE = false;
try {
  if (process.env.FB_SERVICE_KEY) {
    admin = require("firebase-admin");
    const decoded = Buffer.from(process.env.FB_SERVICE_KEY, "base64").toString(
      "utf-8",
    );
    const serviceAccount = JSON.parse(decoded);
    admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
    FIREBASE_AVAILABLE = true;
  } else {
    console.warn(
      "FB_SERVICE_KEY not set — Firebase admin disabled (local dev)",
    );
  }
} catch (err) {
  console.warn("Firebase admin initialization failed:", err?.message || err);
  admin = null;
  FIREBASE_AVAILABLE = false;
}

const app = express();
app.use(
  cors({
    origin: [
      "https://assignement11-8c757.web.app",
      "https://assignement11-8c757.firebaseapp.com",
      "http://localhost:5173",
      "http://localhost:5174",
    ],
    credentials: true,
    optionSuccessStatus: 200,
  }),
);
app.use(express.json());

let verifyJWT;
if (FIREBASE_AVAILABLE && admin) {
  verifyJWT = async (req, res, next) => {
    const token = req?.headers?.authorization?.split(" ")[1];
    if (!token)
      return res.status(401).send({ message: "Unauthorized Access!" });
    try {
      const decoded = await admin.auth().verifyIdToken(token);
      req.tokenEmail = decoded.email;
      next();
    } catch (err) {
      console.log("verifyJWT error:", err?.message || err);
      return res.status(401).send({ message: "Unauthorized Access!", err });
    }
  };
} else {
  verifyJWT = async (req, res, next) => {
    req.tokenEmail = req.headers["x-mock-email"] || null;
    next();
  };
}

let client = null;
const mongodbUri = process.env.MONGODB_URI;
if (mongodbUri) {
  client = new MongoClient(mongodbUri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
} else {
  console.warn(
    "MONGODB_URI not set — using in-memory fallback for development",
  );
}

function createInMemoryDb() {
  const store = new Map();

  function ensureCollection(name) {
    if (!store.has(name)) store.set(name, []);
    return store.get(name);
  }

  function match(doc, filter) {
    if (!filter) return true;
    return Object.keys(filter).every((k) => {
      const val = filter[k];
      if (k === "$or") return val.some((q) => match(doc, q));
      if (
        typeof val === "object" &&
        (val.$gte || val.$lte || val.$in || val.$regex)
      ) {
        if (val.$gte && doc[k] < val.$gte) return false;
        if (val.$lte && doc[k] > val.$lte) return false;
        if (val.$in && !val.$in.includes(doc[k])) return false;
        if (
          val.$regex &&
          !new RegExp(val.$regex, val.$options).test(doc[k] || "")
        )
          return false;
        return true;
      }
      return doc[k] === val;
    });
  }

  function collection(name) {
    const arr = ensureCollection(name);

    return {
      find(filter) {
        const results = arr.filter((d) => match(d, filter));
        return {
          sort() {
            return this;
          },
          skip() {
            return this;
          },
          limit() {
            return this;
          },
          toArray: async () => results,
        };
      },
      findOne: async (filter) => arr.find((d) => match(d, filter)) || null,
      insertOne: async (doc) => {
        arr.push(doc);
        return { insertedId: doc._id || null };
      },
      updateOne: async (filter, update, opts = {}) => {
        let doc = arr.find((d) => match(d, filter));
        if (!doc && opts.upsert) {
          const newDoc = {
            ...(filter._id ? { _id: filter._id } : {}),
            ...(update.$set || {}),
          };
          arr.push(newDoc);
          return { upsertedCount: 1, modifiedCount: 0 };
        }
        if (doc) {
          if (update.$set) Object.assign(doc, update.$set);
          if (update.$inc)
            Object.keys(update.$inc).forEach((k) => {
              doc[k] = (doc[k] || 0) + update.$inc[k];
            });
          return { upsertedCount: 0, modifiedCount: 1 };
        }
        return { upsertedCount: 0, modifiedCount: 0 };
      },
      deleteOne: async (filter) => {
        const idx = arr.findIndex((d) => match(d, filter));
        if (idx >= 0) {
          arr.splice(idx, 1);
          return { deletedCount: 1 };
        }
        return { deletedCount: 0 };
      },
      countDocuments: async (filter) =>
        arr.filter((d) => match(d, filter)).length,
      aggregate: (pipeline) => ({ toArray: async () => [] }),
      bulkWrite: async (ops, opts) => {
        for (const op of ops) {
          if (op.updateOne) {
            const { filter, update, upsert } = op.updateOne;
            await this.updateOne(filter, update, { upsert });
          }
        }
        return { result: { ok: 1 }, modifiedCount: 0 };
      },
    };
  }

  return { collection };
}
async function run() {
  try {
    const db = client ? client.db("newshubDB") : createInMemoryDb();

    const usersCollection = db.collection("users");
    const articlesCollection = db.collection("articles");

    try {
      const initNewsService = require("./newsService");
      initNewsService({
        db,
        apiKey: process.env.NEWSDATA_API_KEY,
        cronSchedule: process.env.NEWSDATA_CRON || "0 * * * *",
      });
    } catch (err) {
      console.warn("Could not initialize news service:", err?.message || err);
    }

    app.post("/user", async (req, res) => {
      const userData = req.body;
      userData.created_at = new Date().toISOString();
      userData.last_loggedIn = new Date().toISOString();

      userData.role = userData.role || "reader";

      const query = {
        email: userData.email,
      };

      const alreadyExists = await usersCollection.findOne(query);
      console.log("User Already Exists---> ", !!alreadyExists);

      if (alreadyExists) {
        console.log("Updating user info......");
        const updateFields = {
          last_loggedIn: new Date().toISOString(),
        };
        if (userData.email === "prosunsajal123@gmail.com") {
          updateFields.role = "admin";
        } else if (userData.email === "admin@newshub.com") {
          updateFields.role = "admin";
        } else if (userData.email === "seller@newshub.com") {
          updateFields.role = "seller";
        } else if (userData.email === "customer@newshub.com") {
          updateFields.role = "customer";
        }
        const result = await usersCollection.updateOne(query, {
          $set: updateFields,
        });
        return res.send(result);
      }

      console.log("Saving new user info......");
      const result = await usersCollection.insertOne(userData);
      res.send(result);
    });

    app.get("/user/role", verifyJWT, async (req, res) => {
      const result = await usersCollection.findOne({ email: req.tokenEmail });
      res.send({ role: result?.role });
    });

    app.get("/stats", async (req, res) => {
      try {
        const totalArticles = await articlesCollection.countDocuments();
        const totalUsers = await usersCollection.countDocuments();

        const categories = await articlesCollection
          .aggregate([
            { $group: { _id: "$category", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
          ])
          .toArray();
        res.send({ totalArticles, totalUsers, categories });
      } catch (error) {
        console.error("Stats error:", error);
        res.status(500).send({ message: "Error fetching stats" });
      }
    });

    app.get("/api/news", async (req, res) => {
      try {
        const {
          startDate,
          endDate,
          author,
          language,
          country,
          categories,
          contentType,
          q,
          page = 1,
          limit = 20,
          sort = "desc",
        } = req.query;

        const filter = {};

        if (startDate || endDate) {
          filter.pubDate = {};
          if (startDate) filter.pubDate.$gte = new Date(startDate);
          if (endDate) filter.pubDate.$lte = new Date(endDate);
        }

        if (author) {
          filter.creator = { $regex: author, $options: "i" };
        }

        if (language) {
          filter.language = language;
        }

        if (country) {
          filter.country = country;
        }

        if (categories) {
          const cats = String(categories)
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean);
          if (cats.length) filter.category = { $in: cats };
        }

        if (contentType) {
          const ct = contentType;
          filter.$or = [
            { type: ct },
            { source_type: ct },
            { contentType: ct },
            { "raw.type": ct },
            { "raw.source_type": ct },
          ];
        }

        if (q) {
          filter.$or = filter.$or || [];
          filter.$or.push({ title: { $regex: q, $options: "i" } });
          filter.$or.push({ content: { $regex: q, $options: "i" } });
        }

        const pageNum = Math.max(1, parseInt(page, 10) || 1);
        const lim = Math.min(100, parseInt(limit, 10) || 20);
        const skip = (pageNum - 1) * lim;

        const sortOrder = sort === "asc" ? 1 : -1;

        const cursor = articlesCollection
          .find(filter)
          .sort({ pubDate: sortOrder })
          .skip(skip)
          .limit(lim);
        const data = await cursor.toArray();
        const total = await articlesCollection.countDocuments(filter);

        res.send({ data, total, page: pageNum, limit: lim });
      } catch (err) {
        console.error("/api/news error", err);
        res
          .status(500)
          .send({ message: "Error querying news", err: err?.message || err });
      }
    });

    if (client) {
      try {
        await client.db("admin").command({ ping: 1 });
        console.log(
          "Pinged your deployment. You successfully connected to MongoDB!",
        );
      } catch (err) {
        console.warn("MongoDB ping failed:", err?.message || err);
      }
    } else {
      console.log("Running with in-memory DB fallback (no MongoDB connection)");
    }
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello from NewsHub Server! 📰");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
