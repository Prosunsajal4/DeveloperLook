
const CACHE_NAME = "newshub-v1.0.0";
const STATIC_CACHE = "newshub-static-v1.0.0";
const DYNAMIC_CACHE = "newshub-dynamic-v1.0.0";
const API_CACHE = "newshub-api-v1.0.0";


const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/favicon.ico",
];


const API_ENDPOINTS = [
  "/books",
  "/categories",
  
];


self.addEventListener("install", (event) => {
  console.log("Service Worker: Installing...");
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then((cache) => {
        console.log("Service Worker: Caching static assets");
        return cache.addAll(STATIC_ASSETS);
      }),
      self.skipWaiting(),
    ])
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activating...");
  event.waitUntil(
    Promise.all([
     
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (
              cacheName !== STATIC_CACHE &&
              cacheName !== DYNAMIC_CACHE &&
              cacheName !== API_CACHE
            ) {
              console.log("Service Worker: Deleting old cache:", cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
    
      self.clients.claim(),
    ])
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (
    url.pathname.startsWith("/api/") ||
    API_ENDPOINTS.some((endpoint) => url.pathname.includes(endpoint))
  ) {
    event.respondWith(networkFirstStrategy(request, API_CACHE));
    return;
  }


  if (
    STATIC_ASSETS.some((asset) => url.pathname === asset) ||
    request.destination === "style" ||
    request.destination === "script" ||
    request.destination === "image" ||
    request.destination === "font"
  ) {
    event.respondWith(cacheFirstStrategy(request, STATIC_CACHE));
    return;
  }

  if (request.destination === "document") {
    event.respondWith(networkFirstStrategy(request, DYNAMIC_CACHE));
    return;
  }

  event.respondWith(networkFirstStrategy(request, DYNAMIC_CACHE));
});

async function cacheFirstStrategy(request, cacheName) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log("Cache-first strategy failed:", error);
    if (request.destination === "image") {
      return caches.match("/offline-image.png");
    }
    throw error;
  }
}

async function networkFirstStrategy(request, cacheName) {
  try {
    const networkResponse = await fetch(request);

    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.log("Network-first strategy failed, trying cache:", error);

    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    if (request.destination === "document") {
      return caches.match("/offline.html");
    }

    throw error;
  }
}

self.addEventListener("sync", (event) => {
  console.log("Service Worker: Background sync triggered");

  if (event.tag === "background-sync") {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  console.log("Performing background sync...");
}

self.addEventListener("push", (event) => {
  console.log("Service Worker: Push received");

  const options = {
    body: event.data ? event.data.text() : "New notification from NewsHub!",
    icon: "/icon-192x192.png",
    badge: "/badge-72x72.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
    actions: [
      {
        action: "explore",
        title: "Open News",
        icon: "/explore-icon.png",
      },
      {
        action: "close",
        title: "Close",
        icon: "/close-icon.png",
      },
    ],
  };

  event.waitUntil(self.registration.showNotification("NewsHub", options));
});

self.addEventListener("notificationclick", (event) => {
  console.log("Service Worker: Notification clicked");

  event.notification.close();

  if (event.action === "explore") {
    event.waitUntil(self.clients.openWindow("/books"));
  } else {
    event.waitUntil(self.clients.openWindow("/"));
  }
});

self.addEventListener("periodicsync", (event) => {
  if (event.tag === "cache-cleanup") {
    event.waitUntil(cleanupCache());
  }
});

async function cleanupCache() {
  const cacheNames = await caches.keys();
  const validCaches = [STATIC_CACHE, DYNAMIC_CACHE, API_CACHE];

  for (const cacheName of cacheNames) {
    if (!validCaches.includes(cacheName)) {
      await caches.delete(cacheName);
    }
  }

  const dynamicCache = await caches.open(DYNAMIC_CACHE);
  const keys = await dynamicCache.keys();

  for (const request of keys) {
    const response = await dynamicCache.match(request);
    if (response) {
      const date = response.headers.get("date");
      if (date) {
        const responseDate = new Date(date);
        const now = new Date();
        const diffInHours = (now - responseDate) / (1000 * 60 * 60);

        if (diffInHours > 24) {
          await dynamicCache.delete(request);
        }
      }
    }
  }
}
