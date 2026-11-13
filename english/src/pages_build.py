"""Make the GitHub Pages (installable, offline) copy of the app in dist/pages/."""
import os, sys
from PIL import Image, ImageDraw, ImageFont
BASE=os.path.dirname(os.path.abspath(__file__)); OUT=os.path.join(BASE,'dist','pages'); os.makedirs(OUT,exist_ok=True)
VERSION=sys.argv[1] if len(sys.argv)>1 else 'v1'
html=open(os.path.join(BASE,'dist','index.html'),encoding='utf-8').read()
head='''<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="icon-192.png">
<link rel="apple-touch-icon" href="icon-192.png">
<meta name="apple-mobile-web-app-title" content="Learn English">
<meta name="apple-mobile-web-app-capable" content="yes">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;700&display=swap">
</head>'''
tail='''<script>
/* installable app: offline support + install card on the home screen */
if('serviceWorker' in navigator && (location.protocol==='https:'||location.hostname==='localhost'))navigator.serviceWorker.register('sw.js').catch(()=>{});
let installEvt=null;
const standalone=window.matchMedia('(display-mode: standalone)').matches||navigator.standalone;
function installCard(){
  if(standalone||(location.hash.slice(1)||'home')!=='home'||document.getElementById('installCard'))return;
  const d=document.createElement('div');d.id='installCard';d.className='wotd';
  d.innerHTML='<b>&#128242; Install app</b><div class="muted" style="margin:4px 0 8px">Use Learn English like a phone app. It works without internet after installing.</div>'+
    '<button class="btn small" id="installBtn">Install</button><div class="muted" id="installHelp" style="display:none;margin-top:8px">Android (Chrome): tap the &#8942; menu, then "Add to Home screen" or "Install app".<br>iPhone (Safari): tap Share, then "Add to Home Screen".</div>';
  const m=document.getElementById('main');m.insertBefore(d,m.children[1]||null);
  document.getElementById('installBtn').onclick=async()=>{
    if(installEvt){installEvt.prompt();try{await installEvt.userChoice}catch(e){}installEvt=null}
    else document.getElementById('installHelp').style.display='block';
  };
}
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();installEvt=e});
window.addEventListener('appinstalled',()=>{const c=document.getElementById('installCard');if(c)c.remove()});
window.addEventListener('hashchange',installCard);installCard();
</script>
</body>'''
assert html.count('</head>')==1 and html.count('</body>')==1
html=html.replace('</head>',head).replace('</body>',tail)
open(os.path.join(OUT,'index.html'),'w',encoding='utf-8').write(html)
open(os.path.join(OUT,'manifest.webmanifest'),'w').write('''{
  "name": "Learn English",
  "short_name": "Learn English",
  "description": "English vocabulary, idioms, phrases and a daily exam.",
  "start_url": "./",
  "scope": "./",
  "display": "standalone",
  "background_color": "#f5f7fb",
  "theme_color": "#1f3a5f",
  "icons": [
    {"src": "icon-192.png", "sizes": "192x192", "type": "image/png"},
    {"src": "icon-512.png", "sizes": "512x512", "type": "image/png"},
    {"src": "icon-maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"}
  ]
}
''')
open(os.path.join(OUT,'sw.js'),'w').write('''// Learn English: works without internet after the first visit; the app page is checked online first so updates arrive.
const CACHE = "learn-english-%s";
const LOCAL = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./icon-maskable-512.png"];
const LIBS = ["https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;700&display=swap"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(async c => {
    await c.addAll(LOCAL);
    await Promise.all(LIBS.map(u => fetch(u, { mode: "cors" }).then(r => r.ok && c.put(u, r)).catch(() => {})));
  }).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k.startsWith("learn-english-") && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); return r; })
      .catch(() => caches.match(req).then(r => r || caches.match("./index.html"))));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    if (r.ok || r.type === "opaque") { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); }
    return r;
  })));
});
''' % VERSION)
def font(sz):
    for p in ['/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf','/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf']:
        if os.path.exists(p): return ImageFont.truetype(p,sz)
    return ImageFont.load_default()
def icon(size,pad,name):
    im=Image.new('RGB',(size,size),'#1f3a5f'); d=ImageDraw.Draw(im)
    s=size-2*pad
    d.rounded_rectangle([pad+s*0.14,pad+s*0.12,pad+s*0.86,pad+s*0.62],radius=s*0.06,fill='#fff7e6')
    f1=font(int(s*0.34)); t='Aa'; w=d.textlength(t,font=f1); d.text((size/2-w/2,pad+s*0.16),t,font=f1,fill='#1f3a5f')
    f2=font(int(s*0.15)); t='English'; w=d.textlength(t,font=f2); d.text((size/2-w/2,pad+s*0.68),t,font=f2,fill='#ffffff')
    im.save(os.path.join(OUT,name))
icon(192,0,'icon-192.png'); icon(512,0,'icon-512.png'); icon(512,60,'icon-maskable-512.png')
print(sorted(os.listdir(OUT)))
