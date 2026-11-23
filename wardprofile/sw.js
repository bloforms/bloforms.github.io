const CACHE='ward-profile-v24';
const FILES=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-maskable-512.png'];
const LIBS=['https://unpkg.com/leaflet@1.9.4/dist/leaflet.css','https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES).then(()=>Promise.all(LIBS.map(u=>c.add(u).catch(()=>{})))) ).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('ward-profile-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const u=new URL(e.request.url);
  if(u.hostname.endsWith('supabase.co')||u.hostname.endsWith('openstreetmap.org'))return;
  if(LIBS.includes(e.request.url)){e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));return;}
  if(u.origin!==location.origin||!u.pathname.startsWith(new URL('./',location).pathname))return;
  e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));return r;}).catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html'))));
});
/* chat notifications */
self.addEventListener('push',e=>{let d={};try{d=e.data?e.data.json():{}}catch(x){d={title:'Ward Profile',body:e.data&&e.data.text()}}
  e.waitUntil(self.registration.showNotification(d.title||'Ward Profile',{body:d.body||'',icon:'icon-192.png',badge:'icon-192.png',tag:d.room||'chat',renotify:true,data:{url:d.url||'./#chat'}}));});
self.addEventListener('notificationclick',e=>{e.notification.close();const url=new URL((e.notification.data&&e.notification.data.url)||'./#chat',self.registration.scope).href;
  e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(ws=>{for(const w of ws){if(w.url.startsWith(self.registration.scope)){w.focus();return w.navigate(url)}}return self.clients.openWindow(url)}));});
