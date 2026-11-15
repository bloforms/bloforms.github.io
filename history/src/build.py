import pathlib
src = pathlib.Path(__file__).parent
parts = ['content_india.js','content_art.js','content_ap.js','questions1.js','questions2.js','questions3.js','kings.js','app.js']
js = '\n'.join((src/p).read_text() for p in parts)
html = (src/'shell.html').read_text().replace('/*__DATA__*/', js)
(pathlib.Path(__file__).parent.parent/'index.html').write_text(html)
print(len(html)//1024, 'KB')
