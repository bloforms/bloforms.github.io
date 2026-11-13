import yaml, glob, os, pickle, sys
SRC='/home/claude/globalwordnet/english-wordnet/src/yaml'
syn={}; ent={}
for f in sorted(glob.glob(SRC+'/*.yaml')):
    b=os.path.basename(f)
    if b=='frames.yaml': continue
    d=yaml.load(open(f,encoding='utf-8'),Loader=yaml.CLoader)
    if b.startswith('entries-'): ent.update(d)
    else:
        for k,v in d.items(): v['file']=b[:-5]; syn[k]=v
pickle.dump((syn,ent),open('/tmp/wn.pkl','wb'))
print(len(syn),'synsets',len(ent),'lemmas')
