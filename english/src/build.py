"""Merge data/*.json into the app template -> dist/index.html"""
import json, glob, os, re, sys

BASE = os.path.dirname(os.path.abspath(__file__))
SECTIONS = {
    "az": ("a_to_z", "word"),
    "confused": ("words_often_confused", "pair"),
    "subs": ("one_word_substitutes", "phrase"),
    "idioms": ("idioms", "idiom"),
    "phrases": ("phrases", "phrase"),
    "phrasal": ("phrasal_verbs", "verb"),
    "roots": ("root_list", "root"),
}

data, problems = {}, []
for sec, (prefix, key) in SECTIONS.items():
    seen, items = set(), []
    files = sorted(glob.glob(os.path.join(BASE, "data", prefix + "*.json")))
    for f in files:
        for e in json.load(open(f, encoding="utf-8")):
            k = e[key].strip().lower()
            k2 = e.get("substitute", "").strip().lower() if sec == "subs" else ""
            if k2 and "s:" + k2 in seen:
                continue
            if k2:
                seen.add("s:" + k2)
            if k in seen:
                problems.append(f"duplicate in {sec}: {e[key]}")
                continue
            seen.add(k)
            items.append(e)
    if sec == "az":
        items.sort(key=lambda e: e["word"].lower())
    data[sec] = items

tpl = open(os.path.join(BASE, "template.html"), encoding="utf-8").read()
js = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
out = tpl.replace("/*__DATA__*/null", js)
os.makedirs(os.path.join(BASE, "dist"), exist_ok=True)
open(os.path.join(BASE, "dist", "index.html"), "w", encoding="utf-8").write(out)
print(len(problems), "duplicates skipped (hand-written entry kept)")
print({s: len(v) for s, v in data.items()}, "total", sum(len(v) for v in data.values()))
