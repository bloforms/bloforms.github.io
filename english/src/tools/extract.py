"""Build section data from Open English WordNet (CC BY 4.0)."""
import pickle,re,collections,json,hashlib
syn,ent=pickle.load(open('/tmp/wn.pkl','rb'))
def ex_text(e): return (e if isinstance(e,str) else e.get('text','')).strip()
def h(s): return int(hashlib.md5(s.encode()).hexdigest()[:8],16)
# word frequency over all definitions + examples = commonness proxy
freq=collections.Counter()
for S in syn.values():
    for t in S.get('definition',[])+[ex_text(x) for x in S.get('example',[])]:
        for w in set(re.findall(r"[a-z]+",t.lower())): freq[w]+=1
def f(w): return freq[w]+freq[w+'s']+freq[w+'d']+freq[w+'ed']
BAD=re.compile(r'offensive|vulgar|obscen|slur|derogat|disparag|sexual|genital|prostitut|penis|vagina|breast|buttock|anus|excrement|defecat|urinat|copulat|intercourse|homosexual|lesbian|ethnic|racial|negro|nazi|rape|orgasm|erotic|lewd|whore|masturbat|incest|castrat|slang|drug|heroin|cocaine|marijuana|suicide|kill oneself',re.I)
POS={'n':'noun','v':'verb','a':'adjective','s':'adjective','r':'adverb'}
def sent(x):
    x=x.strip().strip('"').strip()
    x=x[0].upper()+x[1:]
    return x if x[-1] in '.?!' else x+'.'
def defn(d):
    d=d.strip(); d=d[0].upper()+d[1:]
    return d if d[-1] in '.?!)' else d+'.'
def ant_lemma(k): return k.split('%')[0].replace('_',' ')
PART=set('up down off on out in over away back through into after for with about around along across by forth apart together aside upon to at from'.split())

az=[];pv=[];idi=[];phr=[];subs=[]
SUBPAT=re.compile(r'^(a person who|someone who|one who|a person with|a woman who|a man who|the study of|the scientific study of|the branch of \w+ (that|concerned)|a morbid fear of|an abnormal fear of|the killing of|the murder of|a doctor who|a specialist in|a physician who|government by|a political system)')
for lem,poses in ent.items():
    words=lem.split(' ')
    best=None
    for pos,e in poses.items():
        senses=e.get('sense',[])
        if not senses or pos not in POS: continue
        s0=senses[0]; S=syn.get(s0['synset'])
        if not S: continue
        d=S['definition'][0]
        if BAD.search(d) or BAD.search(lem): continue
        exs=[ex_text(x) for x in S.get('example',[]) if ex_text(x)]
        exs=[x for x in exs if not BAD.search(x)]
        if len(words)==1 and re.fullmatch(r'[a-z]{5,13}',lem):
            fr=f(lem)
            syns=[m for m in S['members'] if m!=lem and re.fullmatch(r'[a-z]{3,14}',m) and m[:5]!=lem[:5]]
            syns=sorted(syns,key=lambda m:-f(m))[:3]
            stem=lem[:max(4,len(lem)-2)]
            good=[x for x in exs if re.search(r'\b'+stem,x.lower()) and 5<=len(x.split())<=22]
            ants=[]
            for a in s0.get('antonym',[]):
                a=ant_lemma(a)
                if re.fullmatch(r'[a-z]{3,14}',a) and a not in ants: ants.append(a)
            if syns and good and 3<=fr<=150 and lem[:4] not in d.lower():
                cand=dict(word=lem,pos=POS[pos],meaning_en=defn(d),meaning_te='',synonyms=syns,antonyms=ants[:3],sentence=sent(good[0]))
                sc=(2 if ants else 0)+(1 if len(syns)>1 else 0)
                if not best or sc>best[0]: best=(sc,cand)
            if pos=='n' and SUBPAT.match(d) and len(d.split())<=16:
                toks=re.findall(r'[a-z]+',d.lower())
                circular=any(t[:5]==lem[:5] for t in toks if len(t)>=5)
                special=bool(re.match(r'^(the|a morbid|an abnormal|a doctor|a specialist|a physician|government)',d))
                if not circular and (fr>=1 or special):
                    good=[x for x in exs if re.search(r'\b'+lem[:max(4,len(lem)-2)],x.lower()) and len(x.split())>=4]
                    subs.append((fr,dict(phrase=d[0].upper()+d[1:],substitute=lem.capitalize(),sentence=sent(good[0]) if good else '')))
        elif pos=='v' and len(words)==2 and words[1] in PART and re.fullmatch(r'[a-z]+ [a-z]+',lem):
            good=[x for x in exs if re.search(r'\b'+words[0][:3],x.lower()) and re.search(r'\b'+words[1]+r'\b',x.lower())]
            if (good or exs) and f(words[0])>=5:
                pv.append(dict(verb=lem.capitalize(),meaning_en=defn('To '+d) if not d.startswith('(') else defn(d),sentence=sent(good[0]) if good else ''))
        elif pos=='v' and len(words)>=3 and re.fullmatch(r"[a-z' ]+",lem) and words[0] not in('be',):
            cw=[w for w in words if len(w)>3 and w not in("one's","someone's","oneself","someone")]
            good=[x for x in exs if cw and sum(w[:4] in x.lower() for w in cw)>=max(1,len(cw)-0)]
            idi.append(dict(idiom=lem.capitalize(),meaning_en=defn('To '+d),sentence=sent(good[0]) if good else ''))
        elif pos=='r' and len(words)>=2 and re.fullmatch(r"[a-z' ]+",lem) and not lem.startswith("'"):
            good=[x for x in exs if lem in x.lower()]
            if good or f(words[-1])>=3:
                phr.append(dict(phrase=lem.capitalize(),meaning_en=defn(d),sentence=sent(good[0]) if good else ''))
    if best: az.append(best)
# A–Z: keep words with antonyms first, then a stable pseudo-random spread; cap
az.sort(key=lambda x:(-x[0],h(x[1]['word'])))
az=[c for _,c in az[:2600]]
subs.sort(key=lambda x:-x[0]); 
seen=set();S2=[]
for _,s in subs:
    if s['phrase'].lower() in seen: continue   # same definition for several words -> ambiguous question
    seen.add(s['phrase'].lower());S2.append(s)
subs=S2[:1300]
def dump(name,items): json.dump(items,open('data/'+name+'_wn.json','w',encoding='utf-8'),ensure_ascii=False,indent=0)
dump('a_to_z',az);dump('phrasal_verbs',pv);dump('idioms',idi);dump('phrases',phr);dump('one_word_substitutes',subs)
print('az',len(az),'ant',sum(1 for a in az if a['antonyms']),'| pv',len(pv),'| idioms',len(idi),sum(1 for i in idi if i['sentence']),'| phrases',len(phr),sum(1 for i in phr if i['sentence']),'| subs',len(subs))
import random;random.seed(3)
for name,items in [('az',az),('pv',pv),('idi',idi),('phr',phr),('subs',subs)]:
    print('\n',name)
    for x in random.sample(items,7): print('  ',json.dumps(x,ensure_ascii=False)[:230])
