const CACHE='ward-profile-v27';
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
const callJoin=u=>u+'#config.prejoinConfig.enabled=false';
self.addEventListener('push',e=>{let d={};try{d=e.data?e.data.json():{}}catch(x){d={title:'Ward Profile',body:e.data&&e.data.text()}}
  const call=d.kind==='call'&&d.call_url;
  e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(ws=>{
    if(call)ws.forEach(w=>w.postMessage({type:'call',call:{id:d.id,room:d.room,name:d.title,url:d.call_url}}));
    return self.registration.showNotification(d.title||'Ward Profile',call?
      {body:d.body||'',icon:'icon-192.png',badge:'icon-192.png',tag:'call-'+d.id,renotify:true,requireInteraction:true,vibrate:[800,300,800,300,800,300,800,300,800,300,800],
       actions:[{action:'join',title:'📹 Join'},{action:'no',title:'✖ Later'}],data:{url:d.url||'./#chat',call:d.call_url}}:
      {body:d.body||'',icon:'icon-192.png',badge:'icon-192.png',tag:d.room||'chat',renotify:true,vibrate:[200,100,200],data:{url:d.url||'./#chat'}})}));});
self.addEventListener('notificationclick',e=>{e.notification.close();const dt=e.notification.data||{};if(e.action==='no')return;
  if(dt.call){e.waitUntil(self.clients.openWindow(callJoin(dt.call)));return}
  const url=new URL(dt.url||'./#chat',self.registration.scope).href;
  e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(ws=>{for(const w of ws){if(w.url.startsWith(self.registration.scope)){w.focus();return w.navigate(url)}}return self.clients.openWindow(url)}));});
