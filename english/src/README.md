# Learn English: source files

- `template.html`: the app (layout, reading views, exam engine).
- `data/`: word lists. Files without `_wn` were written by hand; files ending `_wn.json` come from Open English WordNet.
- `build.py`: merges `data/*.json` into `template.html` and writes `dist/index.html`.
- `pages_build.py v2`: makes the installable copy (manifest, icons, `sw.js`). Raise the version each time.
- `tools/load_wn.py`, `tools/extract.py`: rebuild the `_wn` files from a clone of github.com/globalwordnet/english-wordnet.

Dictionary data: Open English WordNet (CC BY 4.0), derived from Princeton WordNet.
