/* ============ CHAPTER MAP (McGraw Hill Indian History themes + AP history) ============ */
const GROUPS = [
 {id:'t1', en:'Ancient India', te:'ప్రాచీన భారతదేశం', ch:[
  ['prehistory','Ancient Prehistory','చరిత్ర పూర్వ యుగం'],
  ['chalco','Chalcolithic and Megalithic Age','తామ్ర శిలా, బృహత్ శిలా యుగాలు'],
  ['indus','Indus Valley Civilisation','సింధూ లోయ నాగరికత'],
  ['vedic','The Vedic Age','వైదిక కాలం'],
  ['sixth','Sixth Century BC: Buddhism and Jainism','క్రీ.పూ. 6వ శతాబ్దం: బౌద్ధం, జైనం'],
  ['maurya','Mauryan Age','మౌర్య యుగం'],
  ['postmaurya','Post-Mauryan Dynasties','మౌర్యానంతర రాజవంశాలు'],
  ['gupta','Gupta Age and Vakatakas','గుప్త యుగం, వాకాటకులు']]},
 {id:'t2', en:'Early Medieval India', te:'పూర్వ మధ్యయుగ భారతదేశం', ch:[
  ['postgupta','Post-Gupta Dynasties','గుప్తానంతర రాజవంశాలు'],
  ['earlymed','Early Medieval Dynasties','పూర్వ మధ్యయుగ రాజవంశాలు']]},
 {id:'t3', en:'Medieval India', te:'మధ్యయుగ భారతదేశం', ch:[
  ['c13','13th–14th Century: Delhi Sultanate','13–14 శతాబ్దాలు: ఢిల్లీ సుల్తానులు'],
  ['c14','14th–15th Century: Regional Kingdoms','14–15 శతాబ్దాలు: ప్రాంతీయ రాజ్యాలు'],
  ['mughal','Mughal India','మొఘల్ భారతదేశం'],
  ['maratha','Marathas and Sikhs','మరాఠాలు, సిక్కులు'],
  ['bhakti','Bhakti and Sufism','భక్తి, సూఫీ ఉద్యమాలు']]},
 {id:'t4', en:'Modern India', te:'ఆధునిక భారతదేశం', ch:[
  ['c18','Eighteenth Century India','18వ శతాబ్దపు భారతదేశం'],
  ['europeans','Advent of Europeans','ఐరోపావారి రాక'],
  ['britraj','Establishment of British Raj','బ్రిటిష్ పాలన స్థాపన'],
  ['consol','Consolidation of British Raj','బ్రిటిష్ పాలన సుస్థిరత'],
  ['econ','Economic Policies of British Raj','బ్రిటిష్ ఆర్థిక విధానాలు'],
  ['reform','Socio-Religious Reform Movements','సామాజిక–మత సంస్కరణ ఉద్యమాలు'],
  ['revolts','Peasant and Tribal Revolts','రైతు, గిరిజన తిరుగుబాట్లు'],
  ['r1857','Revolt of 1857','1857 తిరుగుబాటు'],
  ['nm1','National Movement (1857–1915)','జాతీయోద్యమం (1857–1915)'],
  ['nm2','National Movement (1915–1947)','జాతీయోద్యమం (1915–1947)'],
  ['facts','Press, Congress Sessions, Governors-General','పత్రికలు, కాంగ్రెస్ సమావేశాలు, గవర్నర్ జనరల్స్'],
  ['postind','Post-Independence India','స్వాతంత్ర్యానంతర భారతదేశం']]},
 {id:'t5', en:'Art and Culture', te:'కళలు, సంస్కృతి', ch:[
  ['caves','Caves, Temples and Architecture','గుహలు, ఆలయాలు, వాస్తుశిల్పం'],
  ['music','Indian Music','భారతీయ సంగీతం'],
  ['dance','Indian Dances','భారతీయ నృత్యాలు'],
  ['crafts','Handicrafts','హస్తకళలు'],
  ['theatre','Theatre Forms','నాటక రూపాలు'],
  ['puppet','Puppetry','తోలుబొమ్మలాట'],
  ['martial','Martial Arts','యుద్ధ కళలు'],
  ['unesco','UNESCO Heritage and GI Tags','యునెస్కో వారసత్వం, జి.ఐ. ట్యాగ్‌లు'],
  ['lang','Languages, Scripts and Literature','భాషలు, లిపులు, సాహిత్యం'],
  ['philo','Schools of Philosophy','తాత్విక సంప్రదాయాలు'],
  ['scitech','Science and Technology (Ancient, Medieval)','ప్రాచీన, మధ్యయుగ విజ్ఞానం'],
  ['fest','Festivals of India','భారతీయ పండుగలు'],
  ['coins','Numismatics (Coins)','నాణేల అధ్యయనం'],
  ['travellers','Foreign Travellers','విదేశీ యాత్రికులు']]},
 {id:'ap', en:'Andhra Pradesh History', te:'ఆంధ్రప్రదేశ్ చరిత్ర', ch:[
  ['ap-geo','Geography and Sources','భౌగోళిక నేపథ్యం, ఆధారాలు'],
  ['ap-pre','Prehistoric Andhra','చరిత్ర పూర్వ ఆంధ్ర'],
  ['ap-sata','Satavahanas','శాతవాహనులు'],
  ['ap-ikshvaku','Ikshvakus','ఇక్ష్వాకులు'],
  ['ap-postik','Post-Ikshvaku Dynasties and Vishnukundins','ఇక్ష్వాకుల తర్వాతి రాజవంశాలు, విష్ణుకుండినులు'],
  ['ap-chalukya','Eastern Chalukyas of Vengi','వేంగి తూర్పు చాళుక్యులు'],
  ['ap-kakatiya','Kakatiyas','కాకతీయులు'],
  ['ap-reddi','Musunuri Nayakas, Reddis, Velamas','ముసునూరి నాయకులు, రెడ్డి రాజ్యాలు, వెలమలు'],
  ['ap-vijay','Vijayanagara Empire','విజయనగర సామ్రాజ్యం'],
  ['ap-qutb','Qutb Shahis of Golconda','గోల్కొండ కుతుబ్ షాహీలు'],
  ['ap-asaf','Asaf Jahis (Nizams)','అసఫ్ జాహీలు (నిజాంలు)'],
  ['ap-british','British Rule in Andhra','ఆంధ్రలో బ్రిటిష్ పాలన'],
  ['ap-reform','Social Reform and Telugu Renaissance','సంఘ సంస్కరణ, తెలుగు పునరుజ్జీవనం'],
  ['ap-national','National Movement in Andhra','ఆంధ్రలో జాతీయోద్యమం'],
  ['ap-andhra','Andhra Movement and Andhra State (1953)','ఆంధ్రోద్యమం, ఆంధ్ర రాష్ట్రం (1953)'],
  ['ap-hyd','Hyderabad State and Telangana Struggle','హైదరాబాద్ రాష్ట్రం, తెలంగాణ సాయుధ పోరాటం'],
  ['ap-1956','Formation of Andhra Pradesh (1956)','ఆంధ్రప్రదేశ్ అవతరణ (1956)'],
  ['ap-after','Movements after 1956','1956 తర్వాతి ఉద్యమాలు'],
  ['ap-2014','Bifurcation (2014)','రాష్ట్ర విభజన (2014)'],
  ['ap-culture','Telugu Literature and Culture','తెలుగు సాహిత్యం, సంస్కృతి']]}
];

const TIMELINE = [
 ['c. 2600–1900 BCE','Mature Indus Valley Civilisation'],['c. 1500–600 BCE','Vedic age'],['6th century BCE','Mahavira, Buddha; rise of Magadha'],
 ['c. 322 BCE','Mauryan empire founded'],['c. 261 BCE','Kalinga war'],['c. 1st century BCE','Satavahanas rise in the Deccan'],['78 CE','Saka era (Kanishka)'],
 ['c. 320 CE','Gupta era begins'],['606 CE','Harsha’s reign begins'],['624 CE','Eastern Chalukyas of Vengi founded'],['1025','Mahmud of Ghazni attacks Somnath'],
 ['1163','Thousand Pillar temple, Hanumakonda'],['1192','Second Battle of Tarain'],['1206','Delhi Sultanate founded'],['1323','Fall of the Kakatiyas'],
 ['1336','Vijayanagara founded'],['1347','Bahmani kingdom founded'],['1398','Timur sacks Delhi'],['1498','Vasco da Gama at Calicut'],['1509','Krishnadevaraya’s reign begins'],
 ['1518','Qutb Shahi dynasty founded'],['1526','First Battle of Panipat'],['1565','Battle of Talikota'],['1591','Hyderabad and Charminar'],['1611','English factory at Masulipatnam'],
 ['1687','Aurangzeb annexes Golconda'],['1707','Death of Aurangzeb'],['1724','Asaf Jahi dynasty founded'],['1757','Plassey; Bobbili'],['1764','Buxar'],
 ['1798','Subsidiary Alliance (Hyderabad first)'],['1800','Ceded Districts to the British'],['1857','Revolt of 1857'],['1881','First widow remarriage in Andhra'],['1885','INC founded'],
 ['1905','Partition of Bengal'],['1913','First Andhra Mahasabha, Bapatla'],['1917','Champaran'],['1919','Jallianwala Bagh'],['1922–24','Rampa rebellion'],
 ['1930','Dandi March'],['1937','Sri Bagh Pact'],['1942','Quit India'],['1947','Independence'],['1948','Operation Polo'],['1950','Constitution in force'],
 ['15 Dec 1952','Death of Potti Sriramulu'],['1 Oct 1953','Andhra State'],['1 Nov 1956','Andhra Pradesh'],['1973','Article 371D'],['2 Jun 2014','Telangana formed']
];

const TECHNIQUES = [
 ['Anchor dates','Learn the Timeline dates first. Place every other event before or after one of them.'],
 ['Order games','In Kings & Kingdoms, tap the dynasties or kings in the right order. Do it daily until you make no mistakes.'],
 ['Story links','Turn a date into a short story. Example: “1565 — Talikota: the city fell, the stones still stand.”'],
 ['First-letter codes','Make a sentence from first letters. Example: “Some Sweet Tasty Apples” for Vijayanagara’s four dynasties.'],
 ['Cause → effect chains','Read each chapter’s chain aloud. One link reminds you of the next.'],
 ['Map route','Walk across the AP map in your mind, from Srikakulam to Anantapur. Pin each dynasty to the place it ruled.'],
 ['Recall first','In the Daily Prelims, answer before you look. Wrong answers come back on later days until you get them right.'],
 ['Spaced revision','Revise a chapter after 1 day, 3 days, 7 days and 21 days. Progress shows which chapters you read.'],
 ['Teach it','Explain one chapter aloud in Telugu in two minutes. Where you stop is what to revise.']
];

/* ============ STATE ============ */
let S = {};
try{ S = JSON.parse(localStorage.getItem('itihasam_v2')) || {}; }catch(e){ S = {}; }
S.seen = S.seen || []; S.wrong = S.wrong || {}; S.days = S.days || {}; S.read = S.read || {}; S.orders = S.orders || {};
let LANG = S.lang || 'en';
let R = S.route || 'home';
let Z = null;          /* current non-daily quiz (chapter or mock) */
let G = null;          /* current order game */
let TIMER = null;
function save(){ try{ localStorage.setItem('itihasam_v2', JSON.stringify(S)); }catch(e){} }

const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const T = (en, te) => (LANG === 'te' && te) ? te : en;
const DAILY = 30, MOCK = 50;
const CHAPTERS = []; GROUPS.forEach(g => g.ch.forEach(c => CHAPTERS.push({id:c[0], en:c[1], te:c[2], g})));
const chName = id => { const c = CHAPTERS.find(x => x.id === id); return c ? T(c.en, c.te) : id; };
function todayStr(){ try{ return new Date().toLocaleDateString('en-CA',{timeZone:'Asia/Kolkata'}); }catch(e){ return new Date().toISOString().slice(0,10); } }
function shuffle(a){ a = a.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function dayNum(){ return Math.floor(new Date(todayStr()+'T00:00:00Z').getTime()/86400000); }

/* ============ SIDE MENU ============ */
function navBtn(r, label){ return '<button class="nav'+(R===r?' on':'')+'" data-go="'+r+'">'+esc(label)+'</button>'; }
function renderSide(){
 let h = '<div class="brand">Itihasam <span class="te">ఇతిహాసం</span><small>Indian &amp; AP History · Group 1 / 2</small></div>';
 h += '<input id="q" class="search" type="search" placeholder="'+T('Search topics, kings…','అంశాలు, రాజులు వెతకండి…')+'" value="'+esc(S.q||'')+'">';
 h += navBtn('home','🏠 '+T('Home','హోమ్'));
 h += '<details open><summary>'+T('Practice','అభ్యాసం')+'</summary>';
 h += navBtn('daily','📝 '+T('Daily Prelims (30)','రోజువారీ ప్రిలిమ్స్ (30)'));
 h += navBtn('mock','⏱️ '+T('Mock Test (50)','మాక్ టెస్ట్ (50)'));
 h += navBtn('mains','✍️ '+T('Mains 150 / 250','మెయిన్స్ 150 / 250'));
 h += navBtn('kings','👑 '+T('Kings & Kingdoms','రాజులు, రాజ్యాలు'));
 h += navBtn('timeline','📅 '+T('Timeline','కాలక్రమం'));
 h += navBtn('memory','🧠 '+T('Memory Tricks','జ్ఞాపక చిట్కాలు'));
 h += navBtn('books','📚 '+T('Best Books','ఉత్తమ పుస్తకాలు'));
 h += navBtn('progress','📊 '+T('Progress','ప్రగతి'));
 h += '</details>';
 GROUPS.forEach(g => {
  const here = R.startsWith('ch:') && g.ch.some(c => 'ch:'+c[0] === R);
  h += '<details'+(here?' open':'')+'><summary>'+esc(T(g.en,g.te))+' <span class="cnt">'+g.ch.length+'</span></summary>';
  g.ch.forEach(c => { h += '<button class="nav'+(R==='ch:'+c[0]?' on':'')+'" data-go="ch:'+c[0]+'"><span class="dot'+(S.read[c[0]]?' done':'')+'"></span>'+esc(T(c[1],c[2]))+'</button>'; });
  h += '</details>';
 });
 h += '<div class="credit">Designed by Sivananda Pujari</div>';
 $('#side').innerHTML = h;
}

/* ============ ROUTER ============ */
function go(r){ R = r; S.route = r; save(); document.body.classList.remove('menu-open'); render(); window.scrollTo(0,0); }
function render(){
 if(TIMER && R !== 'mock'){ clearInterval(TIMER); TIMER = null; }
 renderSide();
 $('#langBtn').textContent = LANG === 'en' ? 'తెలుగు' : 'English';
 if(R.startsWith('ch:')) return renderChapter(R.slice(3));
 if(R.startsWith('order:')) return renderOrder();
 const views = {daily:renderDaily, mock:renderMock, cquiz:renderCQuiz, mains:renderMains, kings:renderKings, timeline:renderTimeline,
   memory:renderMemory, books:renderBooks, progress:renderProgress, search:renderSearch};
 (views[R] || renderHome)();
}
function crumb(t){ $('#crumb').textContent = t; }
function view(h){ $('#view').innerHTML = h; }

/* ============ HOME ============ */
function renderHome(){
 crumb(T('Home','హోమ్'));
 const t = S.today && S.today.date === todayStr() ? S.today : null;
 let h = '<div class="card hero"><h1>'+T('Indian &amp; Andhra Pradesh History','భారత, ఆంధ్రప్రదేశ్ చరిత్ర')+'</h1><p>'+
  T('For APPSC Group 1, Group 2 and civil services. '+CHAPTERS.length+' chapters, '+BANK.length+' Prelims questions, kings in order, and Mains answer practice.',
    'ఏపీపీఎస్సీ గ్రూప్ 1, గ్రూప్ 2, సివిల్ సర్వీసెస్ కోసం. '+CHAPTERS.length+' అధ్యాయాలు, '+BANK.length+' ప్రిలిమ్స్ ప్రశ్నలు, రాజుల క్రమం, మెయిన్స్ సాధన.')+'</p></div>';
 h += '<div class="grid">';
 h += stat(Object.keys(S.read).length+' / '+CHAPTERS.length, T('Chapters read','చదివిన అధ్యాయాలు'));
 h += stat((t ? t.i : 0)+' / '+DAILY, T("Today's Prelims",'నేటి ప్రిలిమ్స్'));
 h += stat(Object.keys(S.wrong).length, T('Questions to revise','పునశ్చరణ ప్రశ్నలు'));
 h += stat(streak(), T('Day streak','రోజుల వరుస'));
 h += '</div>';
 h += '<div class="tiles">';
 h += tile('daily','📝',T("Today's 30 questions",'నేటి 30 ప్రశ్నలు'),T('New questions plus your mistakes','కొత్త ప్రశ్నలు, మీ తప్పులు'));
 h += tile('kings','👑',T('Kings in order','రాజుల క్రమం'),T('Dynasty charts and order games','రాజవంశ పట్టికలు, క్రమ ఆటలు'));
 h += tile('mains','✍️',T("Today's Mains question",'నేటి మెయిన్స్ ప్రశ్న'),T('150 or 250 words with an outline','150 లేదా 250 పదాలు'));
 h += tile('ch:'+nextUnread(),'📖',T('Continue reading','చదవడం కొనసాగించండి'),chName(nextUnread()));
 h += '</div>';
 h += installCardHTML();
 view(h);
}
const stat = (n, l) => '<div class="card"><div class="big">'+n+'</div><div class="muted">'+l+'</div></div>';
const tile = (r, i, t, s) => '<button class="tile" data-go="'+r+'"><span class="ti">'+i+'</span><b>'+esc(t)+'</b><span class="muted">'+esc(s)+'</span></button>';
function nextUnread(){ const c = CHAPTERS.find(c => !S.read[c.id]); return (c || CHAPTERS[0]).id; }
function streak(){ let n = 0, d = new Date(todayStr()+'T00:00:00Z'); for(;;){ const k = d.toISOString().slice(0,10); if(S.days[k]){ n++; d.setUTCDate(d.getUTCDate()-1); } else break; } return n; }

/* ============ CHAPTER ============ */
function renderChapter(id){
 const idx = CHAPTERS.findIndex(c => c.id === id);
 if(idx < 0) return go('home');
 const c = CHAPTERS[idx], d = CONTENT[id];
 crumb(T(c.g.en, c.g.te)+' › '+T(c.en, c.te));
 S.read[id] = S.read[id] || todayStr(); save();
 const nq = BANK.filter(q => q[0] === id).length;
 let h = '<div class="card"><span class="tag">'+esc(T(c.g.en,c.g.te))+'</span><h1>'+esc(c.en)+'</h1><div class="te-title">'+esc(c.te)+'</div></div>';
 h += '<div class="card"><h2>'+T('Introduction','పరిచయం')+'</h2><p>'+esc(d.intro)+'</p></div>';
 h += '<div class="card"><h2>'+T('Key points','ముఖ్యాంశాలు')+'</h2><ul>'+d.points.map(p => '<li>'+esc(p)+'</li>').join('')+'</ul></div>';
 h += '<div class="card"><h2>'+T('Cause → Effect','కారణం → ఫలితం')+'</h2><p class="chain">'+esc(d.chain)+'</p></div>';
 h += '<div class="card"><h2>'+T('Memory hook','జ్ఞాపక సూత్రం')+'</h2><p class="hook">'+esc(d.hook)+'</p></div>';
 h += '<div class="card"><h2>'+T('Persons and places','వ్యక్తులు, ప్రదేశాలు')+'</h2><p><b>'+T('Persons','వ్యక్తులు')+':</b> '+esc(d.persons)+'</p><p><b>'+T('Places','ప్రదేశాలు')+':</b> '+esc(d.places)+'</p></div>';
 h += '<div class="card"><h2>'+T('Mains question','మెయిన్స్ ప్రశ్న')+'</h2><p><b>'+esc(d.mq)+'</b></p><p class="muted">'+T('Answer outline','జవాబు రూపురేఖ')+':</p><ol>'+d.ma.map(p => '<li>'+esc(p)+'</li>').join('')+'</ol>';
 h += '<button class="btn alt" data-mains="'+id+'">'+T('Write this answer','ఈ జవాబు రాయండి')+' →</button></div>';
 if(nq) h += '<div class="card"><button class="btn wide" data-cquiz="'+id+'">📝 '+T('Practise this chapter','ఈ అధ్యాయం సాధన')+' ('+nq+' '+T('questions','ప్రశ్నలు')+')</button></div>';
 const prev = CHAPTERS[idx-1], next = CHAPTERS[idx+1];
 h += '<div class="btns"><button class="btn alt" '+(prev?'data-go="ch:'+prev.id+'"':'disabled')+'>← '+T('Back','వెనుకకు')+'</button>';
 h += '<button class="btn" '+(next?'data-go="ch:'+next.id+'"':'disabled')+'>'+T('Next','తదుపరి')+' →</button></div>';
 view(h);
}

/* ============ QUIZ ENGINE ============ */
function makeQuiz(ids){ return {ids:ids, i:0, score:0, answered:null, order:ids.map(() => shuffle([0,1,2,3])), wrongIds:[]}; }
function quizHTML(z, title){
 const n = z.ids.length, qi = z.ids[z.i], q = BANK[qi];
 let h = '<div class="card"><div class="qhead"><span>'+esc(title)+'</span><span>'+T('Q','ప్ర')+' '+(z.i+1)+' / '+n+' · ✅ '+z.score+'</span></div>';
 if(z.end) h += '<div class="muted" id="clock"></div>';
 h += '<div class="bar"><span style="width:'+(z.i/n*100)+'%"></span></div>';
 h += '<span class="tag">'+esc(chName(q[0]))+'</span><h2 class="q">'+esc(q[1])+'</h2>';
 z.order[z.i].forEach(oi => {
  let cls = 'opt';
  if(z.answered !== null){ if(oi === 0) cls += ' right'; else if(oi === z.answered) cls += ' wrong'; }
  h += '<button class="'+cls+'" data-ans="'+oi+'">'+esc(q[2][oi])+'</button>';
 });
 if(z.answered !== null){
  h += '<p class="hook">'+(z.answered === 0 ? '✅ ' : '❌ ')+esc(q[3])+'</p>';
  h += '<div class="btns"><button class="btn alt" data-go="ch:'+q[0]+'">'+T('Read chapter','అధ్యాయం చదవండి')+'</button><button class="btn" data-next="1">'+T('Next','తదుపరి')+' →</button></div>';
 }
 return h + '</div>';
}
function resultHTML(z, title, note){
 const n = z.ids.length;
 let h = '<div class="card center"><h1>'+esc(title)+'</h1><div class="big">'+z.score+' / '+n+'</div><p class="muted">'+Math.round(z.score/n*100)+'%</p><p>'+esc(note)+'</p></div>';
 if(z.wrongIds.length){
  h += '<div class="card"><h2>'+T('Review your mistakes','మీ తప్పులు చూడండి')+'</h2><ul>'+z.wrongIds.map(i => '<li><b>'+esc(BANK[i][1])+'</b><br>✅ '+esc(BANK[i][2][0])+' — <span class="muted">'+esc(BANK[i][3])+'</span></li>').join('')+'</ul></div>';
 }
 return h;
}
function answerZ(z, oi){
 if(z.answered !== null) return;
 const qi = z.ids[z.i];
 z.answered = oi;
 if(oi === 0){ z.score++; delete S.wrong[qi]; } else { S.wrong[qi] = (S.wrong[qi]||0)+1; z.wrongIds.push(qi); }
 if(!S.seen.includes(qi)) S.seen.push(qi);
 save();
}
function currentQuiz(){ return R === 'daily' ? S.today : Z; }
function answer(oi){ const z = currentQuiz(); if(!z) return; answerZ(z, oi); render(); }
function nextQ(){ const z = currentQuiz(); if(!z) return; z.i++; z.answered = null; save(); render(); window.scrollTo(0,0); }

/* Daily: 30 a day; up to 10 past mistakes, then unseen, then least recent */
function todaySession(){
 const d = todayStr();
 if(S.today && S.today.date === d && S.today.ids.length) return S.today;
 const all = BANK.map((_,i) => i);
 const wrong = shuffle(Object.keys(S.wrong).map(Number).filter(i => i < BANK.length)).slice(0,10);
 const unseen = shuffle(all.filter(i => !S.seen.includes(i) && !wrong.includes(i)));
 const old = S.seen.filter(i => !wrong.includes(i) && i < BANK.length);
 S.today = Object.assign(makeQuiz(wrong.concat(unseen, old).slice(0, DAILY)), {date:d});
 save(); return S.today;
}
function renderDaily(){
 crumb(T('Daily Prelims','రోజువారీ ప్రిలిమ్స్'));
 const t = todaySession();
 if(t.i >= t.ids.length){
  S.days[t.date] = {score:t.score, total:t.ids.length}; save();
  return view(resultHTML(t, T("Today's test is done",'నేటి పరీక్ష పూర్తయింది'), T('Mistakes come back in the coming days. Come back tomorrow for the next 30.','తప్పు జవాబులు రాబోయే రోజుల్లో మళ్లీ వస్తాయి. రేపు మరో 30 ప్రశ్నల కోసం రండి.')));
 }
 view(quizHTML(t, T('Daily Prelims','రోజువారీ ప్రిలిమ్స్')+' · '+t.date));
}
function startChapterQuiz(id){ Z = Object.assign(makeQuiz(shuffle(BANK.map((q,i) => q[0] === id ? i : -1).filter(i => i >= 0))), {title:chName(id), ch:id}); go('cquiz'); }
function renderCQuiz(){
 if(!Z || Z.mock) return go('home');
 crumb(T('Chapter practice','అధ్యాయ సాధన')+' › '+Z.title);
 if(Z.i >= Z.ids.length) return view(resultHTML(Z, Z.title, T('Read the chapter again for any mistakes.','తప్పుల కోసం అధ్యాయం మళ్లీ చదవండి.'))+'<div class="btns"><button class="btn alt" data-go="ch:'+Z.ch+'">'+T('Back to chapter','అధ్యాయానికి')+'</button><button class="btn" data-cquiz="'+Z.ch+'">'+T('Try again','మళ్లీ ప్రయత్నించండి')+'</button></div>');
 view(quizHTML(Z, Z.title));
}
/* Mock: 50 random questions, 50 minutes */
function renderMock(){
 crumb(T('Mock Test','మాక్ టెస్ట్'));
 if(!Z || !Z.mock){
  return view('<div class="card"><h1>'+T('Mock Test','మాక్ టెస్ట్')+'</h1><p>'+T('50 questions from all chapters, with a 50-minute timer, like a real exam section. Do one every week.','అన్ని అధ్యాయాల నుండి 50 ప్రశ్నలు, 50 నిమిషాల సమయం. వారానికి ఒకసారి రాయండి.')+'</p><button class="btn wide" data-startmock="1">'+T('Start mock test','మాక్ టెస్ట్ ప్రారంభించండి')+'</button></div>'+mockHistory());
 }
 if(Z.i >= Z.ids.length || Date.now() > Z.end){
  if(!Z.saved){ S.mocks = S.mocks || []; S.mocks.unshift({date:todayStr(), score:Z.score, total:Z.ids.length}); S.mocks = S.mocks.slice(0,20); Z.saved = 1; save(); }
  const z = Z;
  return view(resultHTML(z, T('Mock test finished','మాక్ టెస్ట్ పూర్తయింది'), Date.now() > z.end && z.i < z.ids.length ? T('Time is up. Unanswered questions count as wrong.','సమయం ముగిసింది.') : '')+'<div class="btns"><span></span><button class="btn" data-startmock="1">'+T('New mock test','కొత్త మాక్ టెస్ట్')+'</button></div>');
 }
 view(quizHTML(Z, T('Mock Test','మాక్ టెస్ట్')));
 tick();
 if(!TIMER) TIMER = setInterval(() => { if(R !== 'mock'){ clearInterval(TIMER); TIMER = null; return; } if(Date.now() > Z.end){ clearInterval(TIMER); TIMER = null; render(); } else tick(); }, 1000);
}
function tick(){ const el = $('#clock'); if(!el || !Z) return; const s = Math.max(0, Math.round((Z.end - Date.now())/1000)); el.textContent = '⏱️ '+Math.floor(s/60)+':'+String(s%60).padStart(2,'0')+' '+T('left','మిగిలింది'); }
function startMock(){ Z = Object.assign(makeQuiz(shuffle(BANK.map((_,i) => i)).slice(0, MOCK)), {mock:1, end:Date.now()+MOCK*60000}); go('mock'); }
function mockHistory(){ const m = S.mocks || []; return m.length ? '<div class="card"><h2>'+T('Past mock tests','గత మాక్ టెస్టులు')+'</h2><ul>'+m.map(x => '<li>'+x.date+': '+x.score+' / '+x.total+'</li>').join('')+'</ul></div>' : ''; }

/* ============ MAINS ============ */
const MAINS_IDS = CHAPTERS.map(c => c.id);
function renderMains(){
 crumb(T('Mains answer practice','మెయిన్స్ జవాబు సాధన'));
 const target = S.target || 150;
 const id = S.mainsCh || MAINS_IDS[dayNum() % MAINS_IDS.length];
 const d = CONTENT[id];
 let h = '<div class="card"><h1>'+T('Mains answer writing','మెయిన్స్ జవాబు రాత')+'</h1><p class="muted">'+(S.mainsCh ? T('Chosen question','ఎంచుకున్న ప్రశ్న') : T("Today's question — it changes every day",'నేటి ప్రశ్న — రోజూ మారుతుంది'))+'</p>';
 h += '<span class="tag">'+esc(chName(id))+'</span><h2 class="q">'+esc(d.mq)+'</h2>';
 h += '<div class="btns" style="justify-content:flex-start"><button class="btn'+(target===150?'':' alt')+'" data-target="150">150 '+T('words','పదాలు')+'</button><button class="btn'+(target===250?'':' alt')+'" data-target="250">250 '+T('words','పదాలు')+'</button>';
 h += '<select id="mpick" class="pick"><option value="">'+T('Pick another question…','మరో ప్రశ్న ఎంచుకోండి…')+'</option>'+CHAPTERS.map(c => '<option value="'+c.id+'"'+(c.id===S.mainsCh?' selected':'')+'>'+esc(T(c.en,c.te))+'</option>').join('')+'</select></div></div>';
 const split = target === 150 ? ['20–25','30–35','30–35','30–35','20'] : ['30–40','45–50','45–50','45–50','30–35'];
 h += '<div class="card"><h2>'+T('Answer outline','జవాబు రూపురేఖ')+' ('+target+' '+T('words','పదాలు')+')</h2><ol>'+d.ma.map((p,i) => '<li>'+esc(p)+' <span class="muted">· '+(split[i]||'25')+' '+T('words','పదాలు')+'</span></li>').join('')+'</ol>';
 h += '<p class="muted">'+T('Tip: use the chapter’s Cause → Effect chain for your body points, and give one fact, date or name in each point.','చిట్కా: ప్రతి అంశంలో ఒక తేదీ లేదా పేరు ఇవ్వండి.')+'</p></div>';
 h += '<div class="card"><h2>'+T('Write here','ఇక్కడ రాయండి')+'</h2><textarea id="ans" placeholder="'+T('Write your answer…','మీ జవాబు రాయండి…')+'">'+esc((S.drafts||{})[id+':'+target] || '')+'</textarea><p id="wc" class="muted"></p>';
 h += '<div class="btns"><button class="btn alt" data-go="ch:'+id+'">'+T('Read the chapter','అధ్యాయం చదవండి')+'</button>'+(S.mainsCh?'<button class="btn alt" data-mainsreset="1">'+T("Back to today's question",'నేటి ప్రశ్నకు')+'</button>':'')+'</div></div>';
 view(h); countWords();
}
function countWords(){
 const ta = $('#ans'); if(!ta) return;
 const n = (ta.value.trim().match(/\S+/g) || []).length, target = S.target || 150;
 $('#wc').textContent = n+' / '+target+' '+T('words','పదాలు')+(n > target+20 ? ' — '+T('too long','ఎక్కువైంది') : n >= target-20 ? ' ✓' : '');
}

/* ============ KINGS & KINGDOMS ============ */
function renderKings(){
 crumb(T('Kings & Kingdoms','రాజులు, రాజ్యాలు'));
 const tab = S.ktab || 'ap';
 let h = '<div class="card"><h1>'+T('Kings &amp; Kingdoms in order','రాజులు, రాజ్యాల క్రమం')+'</h1><p class="muted">'+T('Learn the order with the chart, then play the order game until you make no mistakes.','పట్టికతో క్రమం నేర్చుకోండి, తర్వాత తప్పులు లేకుండా క్రమ ఆట ఆడండి.')+'</p>';
 h += '<div class="btns" style="justify-content:flex-start"><button class="btn'+(tab==='ap'?'':' alt')+'" data-ktab="ap">'+T('Andhra Pradesh','ఆంధ్రప్రదేశ్')+'</button><button class="btn'+(tab==='in'?'':' alt')+'" data-ktab="in">'+T('India','భారతదేశం')+'</button></div></div>';
 if(tab === 'ap'){
  h += '<div class="card"><h2>'+T('Order of AP kingdoms','ఆంధ్ర రాజ్యాల క్రమం')+'</h2><p class="hook">'+esc(AP_ORDER_HOOK)+'</p>';
  h += '<div class="flow">'+AP_SIDE.map((x,i) => '<div class="fl"><span class="n">'+(i+1)+'</span><div><b>'+esc(x[1])+'</b><div class="muted">'+esc(x[0])+' · '+esc(x[2])+'</div></div></div>').join('')+'</div>';
  h += '<button class="btn wide" data-go="order:ap-main">🎯 '+T('Play: put AP kingdoms in order','ఆట: ఆంధ్ర రాజ్యాలను క్రమంలో పెట్టండి')+'</button>'+orderBadge('ap-main')+'</div>';
 }
 (tab === 'ap' ? DYN_AP : DYN_IN).forEach(d => {
  h += '<details class="card dyn"><summary><b>'+esc(T(d.name,d.te))+'</b> <span class="muted">· '+esc(d.years)+'</span>'+orderBadge(d.id)+'</summary>';
  h += '<p><b>'+T('Capital','రాజధాని')+':</b> '+esc(d.capital)+'</p><p class="hook">'+esc(d.hook)+'</p>';
  h += '<table class="kt"><tr><th>#</th><th>'+T('Ruler / stage','పాలకుడు')+'</th><th>'+T('Years','సంవత్సరాలు')+'</th><th>'+T('Remember','గుర్తుంచుకోండి')+'</th></tr>';
  d.kings.forEach((k,i) => { h += '<tr><td>'+(i+1)+'</td><td><b>'+esc(k[0])+'</b></td><td>'+esc(k[1])+'</td><td>'+esc(k[2])+'</td></tr>'; });
  h += '</table>';
  if(d.kings.length > 2) h += '<button class="btn alt wide" data-go="order:'+d.id+'">🎯 '+T('Play: kings in order','ఆట: రాజులను క్రమంలో పెట్టండి')+'</button>';
  h += '</details>';
 });
 view(h);
}
function orderBadge(k){ const o = S.orders[k]; return o ? ' <span class="badge'+(o.best===0?' ok':'')+'">'+(o.best===0?'✓ ':'')+T('best','ఉత్తమ')+': '+o.best+' '+T('mistakes','తప్పులు')+'</span>' : ''; }
function orderItems(key){
 if(key === 'ap-main') return {title:T('AP kingdoms in order','ఆంధ్ర రాజ్యాల క్రమం'), items:['Satavahanas','Ikshvakus','Salankayanas','Vishnukundins','Eastern Chalukyas','Kakatiyas','Musunuri Nayakas','Reddis','Vijayanagara','Qutb Shahis','Mughals','Asaf Jahis']};
 const d = DYN_AP.concat(DYN_IN).find(x => x.id === key);
 return d ? {title:T(d.name,d.te), items:d.kings.map(k => k[0])} : null;
}
function renderOrder(){
 const key = R.slice(6), def = orderItems(key);
 if(!def) return go('kings');
 crumb(T('Order game','క్రమ ఆట')+' › '+def.title);
 if(!G || G.key !== key) G = {key, items:def.items, pool:shuffle(def.items.map((_,i) => i)), done:[], miss:0, flash:null};
 let h = '<div class="card"><h1>'+esc(def.title)+'</h1><p class="muted">'+T('Tap them from first to last.','మొదటి నుండి చివరి వరకు నొక్కండి.')+' ❌ '+G.miss+'</p>';
 h += '<div class="flow">'+G.done.map((i,n) => '<div class="fl"><span class="n">'+(n+1)+'</span><b>'+esc(G.items[i])+'</b></div>').join('')+'</div>';
 if(G.done.length < G.items.length){
  h += '<div class="chips">'+G.pool.filter(i => !G.done.includes(i)).map(i => '<button class="chip'+(G.flash===i?' bad':'')+'" data-pick="'+i+'">'+esc(G.items[i])+'</button>').join('')+'</div>';
 } else {
  h += '<p class="hook">'+(G.miss === 0 ? '🎉 '+T('Perfect order!','సరైన క్రమం!') : T('Done with','పూర్తయింది')+' '+G.miss+' '+T('mistakes. Play again until you get zero.','తప్పులతో. సున్నా వచ్చే వరకు మళ్లీ ఆడండి.'))+'</p>';
  h += '<div class="btns"><button class="btn alt" data-go="kings">← '+T('Kings & Kingdoms','రాజులు, రాజ్యాలు')+'</button><button class="btn" data-replay="1">'+T('Play again','మళ్లీ ఆడండి')+'</button></div>';
 }
 view(h + '</div>');
}
function pick(i){
 if(!G) return;
 if(i === G.done.length){ G.done.push(i); G.flash = null;
  if(G.done.length === G.items.length){ const o = S.orders[G.key]; if(!o || G.miss < o.best) S.orders[G.key] = {best:G.miss}; save(); }
 } else { G.miss++; G.flash = i; }
 renderOrder();
}

/* ============ TIMELINE, MEMORY, BOOKS, PROGRESS, SEARCH ============ */
function renderTimeline(){
 crumb(T('Timeline','కాలక్రమం'));
 let h = '<div class="card"><h1>'+T('Anchor dates','ముఖ్య తేదీలు')+'</h1><p class="muted">'+T('India and Andhra together, in one line. Learn these first; every other event hangs on them.','భారత, ఆంధ్ర చరిత్ర ఒకే వరుసలో. ముందు ఇవి నేర్చుకోండి.')+'</p><div class="tl">';
 TIMELINE.forEach(x => { const ap = /Andhra|Chalukya|Kakatiya|Vijayanagara|Talikota|Qutb|Hyderabad|Golconda|Masulipatnam|Asaf|Ceded|Bobbili|Bapatla|Rampa|Sri Bagh|Sriramulu|Polo|371D|Telangana|Thousand|Krishnadevaraya|Satavahana/.test(x[1]); h += '<div'+(ap?' class="ap"':'')+'><b>'+esc(x[0])+'</b> '+esc(x[1])+'</div>'; });
 h += '</div><p class="muted">'+T('Green = Andhra events.','ఆకుపచ్చ = ఆంధ్ర సంఘటనలు.')+'</p></div>';
 view(h);
}
function renderMemory(){
 crumb(T('Memory Tricks','జ్ఞాపక చిట్కాలు'));
 let h = '<div class="card"><h1>'+T('Ways to remember fast','వేగంగా గుర్తుంచుకునే మార్గాలు')+'</h1></div>';
 TECHNIQUES.forEach(x => { h += '<div class="card"><h2>'+esc(x[0])+'</h2><p>'+esc(x[1])+'</p></div>'; });
 h += '<div class="card"><h2>'+T('Dynasty order codes','రాజవంశ క్రమ సూత్రాలు')+'</h2><div class="list">';
 DYN_AP.concat(DYN_IN).forEach(d => { h += '<button data-go="kings"><b>'+esc(T(d.name,d.te))+'</b><br><span class="muted">'+esc(d.hook)+'</span></button>'; });
 h += '</div></div><div class="card"><h2>'+T('Chapter hooks','అధ్యాయ సూత్రాలు')+'</h2><div class="list">';
 CHAPTERS.forEach(c => { h += '<button data-go="ch:'+c.id+'"><b>'+esc(T(c.en,c.te))+'</b><br><span class="muted">'+esc(CONTENT[c.id].hook)+'</span></button>'; });
 view(h + '</div></div>');
}
function renderBooks(){
 crumb(T('Best Books','ఉత్తమ పుస్తకాలు'));
 const list = rows => '<table class="kt"><tr><th>'+T('Book','పుస్తకం')+'</th><th>'+T('Author','రచయిత')+'</th><th>'+T('Use it for','దేనికి')+'</th></tr>'+rows.map(b => '<tr><td><b>'+esc(b[0])+'</b></td><td>'+esc(b[1])+'</td><td>'+esc(b[2])+'</td></tr>').join('')+'</table>';
 let h = '<div class="card"><h1>'+T('Best books','ఉత్తమ పుస్తకాలు')+'</h1><p class="muted">'+T('This app is a summary. For depth, read these. Start with P. Raghunatha Rao for AP and NCERT plus one McGraw Hill book for India.','ఈ యాప్ సారాంశం మాత్రమే. లోతుగా చదవడానికి ఈ పుస్తకాలు చూడండి.')+'</p></div>';
 h += '<div class="card"><h2>'+T('Andhra Pradesh history','ఆంధ్రప్రదేశ్ చరిత్ర')+'</h2>'+list(BOOKS.ap)+'</div>';
 h += '<div class="card"><h2>'+T('Indian history and culture','భారత చరిత్ర, సంస్కృతి')+'</h2>'+list(BOOKS.india)+'</div>';
 h += '<div class="card"><h2>'+T('Before the exam','పరీక్షకు ముందు')+'</h2><ul><li>'+T('Check the latest APPSC syllabus notification.','తాజా ఏపీపీఎస్సీ సిలబస్ చూడండి.')+'</li><li>'+T('Solve previous APPSC Group 1 and Group 2 papers.','గత ప్రశ్నపత్రాలు సాధన చేయండి.')+'</li><li>'+T('When two books disagree on a date, follow the standard book (P. Raghunatha Rao, NCERT).','తేదీలు వేరైతే ప్రామాణిక పుస్తకం అనుసరించండి.')+'</li></ul></div>';
 view(h);
}
function renderProgress(){
 crumb(T('Progress','ప్రగతి'));
 const days = Object.keys(S.days).sort().reverse();
 let correct = 0, total = 0; days.forEach(d => { correct += S.days[d].score; total += S.days[d].total; });
 let h = '<div class="grid">'+stat(Object.keys(S.read).length+' / '+CHAPTERS.length, T('Chapters read','చదివిన అధ్యాయాలు'))+stat(days.length, T('Daily tests done','పూర్తయిన పరీక్షలు'))+stat((total ? Math.round(correct/total*100) : 0)+'%', T('Accuracy','ఖచ్చితత్వం'))+stat(S.seen.length+' / '+BANK.length, T('Questions seen','చూసిన ప్రశ్నలు'))+'</div>';
 const weak = {}; Object.keys(S.wrong).forEach(i => { const q = BANK[i]; if(q) weak[q[0]] = (weak[q[0]]||0) + 1; });
 const wl = Object.keys(weak).sort((a,b) => weak[b]-weak[a]).slice(0,8);
 h += '<div class="card"><h2>'+T('Weak chapters','బలహీన అధ్యాయాలు')+'</h2>'+(wl.length ? '<div class="list">'+wl.map(id => '<button data-go="ch:'+id+'"><b>'+esc(chName(id))+'</b> <span class="muted">· '+weak[id]+' '+T('to revise','పునశ్చరణ')+'</span></button>').join('')+'</div>' : '<p class="muted">'+T('No mistakes yet.','ఇంకా తప్పులు లేవు.')+'</p>')+'</div>';
 const rev = CHAPTERS.filter(c => { const r = S.read[c.id]; if(!r) return false; const age = Math.round((new Date(todayStr()) - new Date(r))/86400000); return [1,3,7,21].includes(age); });
 h += '<div class="card"><h2>'+T('Revise today (spaced revision)','నేడు పునశ్చరణ')+'</h2>'+(rev.length ? '<div class="list">'+rev.map(c => '<button data-go="ch:'+c.id+'">'+esc(T(c.en,c.te))+'</button>').join('')+'</div>' : '<p class="muted">'+T('Nothing due today.','నేడు ఏమీ లేదు.')+'</p>')+'</div>';
 h += '<div class="card"><h2>'+T('Recent daily tests','ఇటీవలి పరీక్షలు')+'</h2>'+(days.length ? '<ul>'+days.slice(0,14).map(d => '<li>'+d+': '+S.days[d].score+' / '+S.days[d].total+'</li>').join('')+'</ul>' : '<p class="muted">'+T('No tests yet.','ఇంకా పరీక్షలు లేవు.')+'</p>')+'</div>';
 h += '<div class="card"><button class="btn alt" data-reset="1">'+T('Reset all progress','మొత్తం ప్రగతి తొలగించు')+'</button></div>';
 view(h);
}
function renderSearch(){
 const q = (S.q || '').trim().toLowerCase();
 crumb(T('Search','వెతుకు')+': '+q);
 if(q.length < 2) return view('<div class="card"><p class="muted">'+T('Type at least 2 letters.','కనీసం 2 అక్షరాలు టైప్ చేయండి.')+'</p></div>');
 const hits = [];
 CHAPTERS.forEach(c => { const d = CONTENT[c.id]; const txt = [c.en, c.te, d.intro, d.points.join(' '), d.persons, d.places, d.hook].join(' ').toLowerCase(); if(txt.includes(q)) hits.push('<button data-go="ch:'+c.id+'"><b>'+esc(T(c.en,c.te))+'</b><br><span class="muted">'+esc(snippet(d, q))+'</span></button>'); });
 DYN_AP.concat(DYN_IN).forEach(d => { const k = d.kings.find(k => k.join(' ').toLowerCase().includes(q)); if(k || d.name.toLowerCase().includes(q)) hits.push('<button data-go="kings"><b>👑 '+esc(T(d.name,d.te))+'</b><br><span class="muted">'+esc(k ? k[0]+' — '+k[1]+' '+k[2] : d.years)+'</span></button>'); });
 view('<div class="card"><h1>'+hits.length+' '+T('results','ఫలితాలు')+'</h1><div class="list">'+hits.join('')+'</div></div>');
}
function snippet(d, q){ const p = d.points.find(x => x.toLowerCase().includes(q)); return p || d.intro.slice(0,110)+'…'; }

/* ============ INSTALL & OFFLINE ============ */
let installEvt = null;
const standalone = (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
function installCardHTML(){
 if(standalone) return '';
 const iphone = /iPhone|iPad/.test(navigator.userAgent);
 return '<div class="card" id="installCard"><h2>📲 '+T('Install app','యాప్ ఇన్‌స్టాల్ చేయండి')+'</h2><p class="muted">'+T('Put Itihasam on your home screen. After the first visit it works without internet.','హోమ్ స్క్రీన్‌పై పెట్టండి. మొదటిసారి తెరిచిన తర్వాత ఇంటర్నెట్ లేకుండా పనిచేస్తుంది.')+'</p>'+
  (installEvt ? '<button class="btn" data-install="1">'+T('Install','ఇన్‌స్టాల్')+'</button>' :
   '<p>'+(iphone ? T('iPhone: tap Share, then “Add to Home Screen”.','ఐఫోన్: Share నొక్కి “Add to Home Screen” ఎంచుకోండి.') : T('Chrome: tap the ⋮ menu, then “Add to Home screen” or “Install app”.','క్రోమ్: ⋮ మెనూ నొక్కి “Add to Home screen” ఎంచుకోండి.'))+'</p>')+'</div>';
}
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); installEvt = e; if(R === 'home') renderHome(); });
window.addEventListener('appinstalled', () => { const c = document.getElementById('installCard'); if(c) c.remove(); });
if('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) navigator.serviceWorker.register('sw.js').catch(() => {});
document.addEventListener('click', e => { if(e.target.closest('[data-install]') && installEvt){ installEvt.prompt(); installEvt.userChoice.finally(() => { installEvt = null; renderHome(); }); } });

/* ============ EVENTS ============ */
document.addEventListener('click', e => {
 const t = e.target;
 const g = t.closest('[data-go]'); if(g && !g.disabled){ if(g.dataset.go.startsWith('order:')) G = null; go(g.dataset.go); return; }
 const a = t.closest('[data-ans]'); if(a){ answer(Number(a.dataset.ans)); return; }
 if(t.closest('[data-next]')){ nextQ(); return; }
 const cq = t.closest('[data-cquiz]'); if(cq){ startChapterQuiz(cq.dataset.cquiz); return; }
 if(t.closest('[data-startmock]')){ startMock(); return; }
 const tg = t.closest('[data-target]'); if(tg){ S.target = Number(tg.dataset.target); save(); renderMains(); return; }
 const mn = t.closest('[data-mains]'); if(mn){ S.mainsCh = mn.dataset.mains; go('mains'); return; }
 if(t.closest('[data-mainsreset]')){ S.mainsCh = null; save(); renderMains(); return; }
 const kt = t.closest('[data-ktab]'); if(kt){ S.ktab = kt.dataset.ktab; save(); renderKings(); return; }
 const pk = t.closest('[data-pick]'); if(pk){ pick(Number(pk.dataset.pick)); return; }
 if(t.closest('[data-replay]')){ G = null; renderOrder(); return; }
 if(t.closest('[data-reset]')){ if(confirm(T('Delete all progress on this phone?','ఈ ఫోన్‌లో మొత్తం ప్రగతి తొలగించాలా?'))){ S = {seen:[],wrong:{},days:{},read:{},orders:{},lang:LANG}; save(); go('home'); } return; }
});
document.addEventListener('input', e => {
 if(e.target.id === 'ans'){ const id = S.mainsCh || MAINS_IDS[dayNum() % MAINS_IDS.length]; S.drafts = S.drafts || {}; S.drafts[id+':'+(S.target||150)] = e.target.value; save(); countWords(); }
 if(e.target.id === 'q'){ S.q = e.target.value; save(); if(S.q.trim().length >= 2){ R = 'search'; S.route = R; renderSearch(); } }
});
document.addEventListener('change', e => { if(e.target.id === 'mpick' && e.target.value){ S.mainsCh = e.target.value; save(); renderMains(); } });
document.addEventListener('keydown', e => { if(e.target.id === 'q' && e.key === 'Enter'){ e.target.blur(); go('search'); } });
$('#burger').onclick = () => document.body.classList.toggle('menu-open');
$('#scrim').onclick = () => document.body.classList.remove('menu-open');
$('#langBtn').onclick = () => { LANG = LANG === 'en' ? 'te' : 'en'; S.lang = LANG; save(); render(); };
if(R === 'cquiz' || R.startsWith('order:')) R = 'home';
if(R === 'mock') Z = null;
render();
