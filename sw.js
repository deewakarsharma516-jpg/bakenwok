/* ============================================================
   Bake 'N' Wok — Service Worker (v2)
   RULE: App hamesha FRESH dikhega —
   - Net hai → seedha internet se nayi file (cache update hoti rehti hai)
   - Net nahi → cache se chalega (offline support)
   Naya version aate hi purana cache khud saaf + turant activate
   ============================================================ */

const CACHE = "bnw-v3";   // <-- har bade update par yeh number badha dena (v3, v4...)

self.addEventListener("install", (e) => {
  // Naya SW aate hi turant taiyaar — purane ka wait nahi
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(["./", "./index.html"]).catch(() => {}))
  );
});

self.addEventListener("activate", (e) => {
  // Purane version ke cache saaf karo + sab open tabs par control lo
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;

  // Page/app khud (index.html) → NETWORK FIRST (hamesha fresh)
  if (req.mode === "navigate" || req.destination === "document") {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((r) => r || caches.match("./index.html")))
    );
    return;
  }

  // Baaki (images, manifest, icon) → cache pehle, background me refresh
  e.respondWith(
    caches.match(req).then((cached) => {
      const fresh = fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => cached);
      return cached || fresh;
    })
  );
});
