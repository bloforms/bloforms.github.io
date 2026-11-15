// Itihasam: works without internet after the first visit; the app page is checked online first so updates arrive.
const CACHE = "itihasam-v2";
const LOCAL = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./icon-maskable-512.png"].concat(["./img/fig_12.1.jpg", "./img/fig_13.1.jpg", "./img/fig_14.1.jpg", "./img/fig_14.2.jpg", "./img/fig_14.3.jpg", "./img/fig_14.4.jpg", "./img/fig_14.5.jpg", "./img/fig_14.7.jpg", "./img/fig_14.8.jpg", "./img/fig_17.1.jpg", "./img/fig_18.1.jpg", "./img/fig_18.2.jpg", "./img/fig_19.1.jpg", "./img/fig_19.3.jpg", "./img/fig_2.1.jpg", "./img/fig_2.2.jpg", "./img/fig_2.3.jpg", "./img/fig_2.4.jpg", "./img/fig_2.5.jpg", "./img/fig_2.6.jpg", "./img/fig_2.7.jpg", "./img/fig_3.1.jpg", "./img/fig_3.10.jpg", "./img/fig_3.2.jpg", "./img/fig_3.3.jpg", "./img/fig_3.4.jpg", "./img/fig_3.6.jpg", "./img/fig_3.7.jpg", "./img/fig_3.8.jpg", "./img/fig_5.1.jpg", "./img/fig_5.2.jpg", "./img/fig_5.3.jpg", "./img/fig_5.4.jpg", "./img/fig_6.1.jpg", "./img/fig_6.2.jpg", "./img/fig_6.3.jpg", "./img/fig_7.1.jpg", "./img/fig_7.2.jpg", "./img/fig_8.1.jpg", "./img/map_10.2.jpg", "./img/map_10.3.jpg", "./img/map_16.1.jpg", "./img/map_16.2.jpg", "./img/map_16.3.jpg", "./img/map_2.1.jpg", "./img/map_2.2.jpg", "./img/map_2.3.jpg", "./img/map_2.4.jpg", "./img/map_21.1.jpg", "./img/map_4.1.jpg", "./img/map_4.2.jpg", "./img/map_5.1.jpg", "./img/map_5.2.jpg", "./img/map_5.3.jpg", "./img/map_6.1.jpg", "./img/map_6.2.jpg", "./img/map_6.3.jpg", "./img/map_7.1.jpg", "./img/map_7.2.jpg", "./img/map_8.1.jpg", "./img/map_8.2.jpg", "./img/map_8.3.jpg"]);
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(LOCAL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k.startsWith("itihasam-") && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); return r; })
    .catch(() => caches.match(req).then(r => r || caches.match("./index.html"))));
});
