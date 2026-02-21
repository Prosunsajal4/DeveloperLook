const axios = require("axios");
const cron = require("node-cron");

module.exports = function initNewsService({
  db,
  apiKey,
  // default: run at minute 0 every hour
  cronSchedule = "0 * * * *",
} = {}) {
  if (!db) throw new Error("db is required for news service");
  if (!apiKey) {
    console.warn("NEWSDATA_API_KEY not provided — news ingestion disabled");
    return;
  }

  const articlesCol = db.collection("articles");

  articlesCol.createIndex({ articleId: 1 }, { unique: true }).catch(() => {});

  async function fetchAndStore() {
    try {
      console.log("[newsService] fetching latest news...");
      // Avoid sending a default `page` value — NewsData may reject pagination
      // when no query/filter is provided. Let the API return the first page
      // by omitting `page` unless explicitly required.
      const params = {
        apikey: apiKey,
      };
      const resp = await axios.get("https://newsdata.io/api/1/news", {
        params,
        timeout: 30_000,
      });

      // NewsData sometimes returns an error object with code 'UnsupportedFilter'
      // when certain filters/pagination values are not allowed. If that occurs,
      // log and exit early.
      if (resp?.data?.status === "error") {
        const code = resp.data?.results?.code;
        if (code === "UnsupportedFilter") {
          console.warn(
            "[newsService] NewsData returned UnsupportedFilter:",
            resp.data?.results?.message || JSON.stringify(resp.data),
          );
          return;
        }
      }

      const data = resp.data;
      const results = data?.results || [];

      const ops = results.map((item) => {
        const articleId =
          item?.id ||
          item?.guid ||
          item?.link ||
          `${item?.title}-${item?.pubDate}`;
        const pubDate = item?.pubDate ? new Date(item.pubDate) : null;

        const doc = {
          articleId,
          title: item.title || null,
          link: item.link || null,
          content: item.content || item?.description || null,
          pubDate: pubDate,
          language: item.language || null,
          country: item.country || null,
          category: item.category || null,
          creator: item.creator || null,
          source_id: item.source_id || null,

          raw: item,
          fetchedAt: new Date(),
        };

        return {
          updateOne: {
            filter: { articleId },
            update: { $set: doc },
            upsert: true,
          },
        };
      });

      if (ops.length) {
        const bulk = await articlesCol.bulkWrite(ops, { ordered: false });
        console.log(
          "[newsService] upserted/modified articles:",
          bulk.result?.nInserted || bulk.modifiedCount || 0,
        );
      } else {
        console.log("[newsService] no articles returned");
      }
    } catch (err) {
      console.error("[newsService] fetch error:", err?.message || err);
      if (err.response) {
        try {
          console.error("[newsService] response status:", err.response.status);
          console.error(
            "[newsService] response data:",
            typeof err.response.data === "string"
              ? err.response.data
              : JSON.stringify(err.response.data, null, 2),
          );
        } catch (e) {
          console.error(
            "[newsService] error logging response body:",
            e?.message || e,
          );
        }
      } else {
        console.error("[newsService] no HTTP response available for error");
      }
    }
  }

  fetchAndStore();

  try {
    const task = cron.schedule(cronSchedule, () => {
      fetchAndStore();
    });
    console.log(`[newsService] scheduled news ingestion (${cronSchedule})`);
    return { fetchAndStore, task };
  } catch (err) {
    console.error("[newsService] cron schedule error:", err?.message || err);
    return { fetchAndStore };
  }
};
