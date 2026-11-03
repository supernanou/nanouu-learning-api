# Nanouu Learning API demo docs

A fictional, personal demo docs site made for Antonia / Nanouu to test Decodo's `/map` and `/scrape` workflow. The actual documentation body is inserted by `assets/docs.js`; without JavaScript the docs pages have a mostly empty content shell. The two version pages are listed in `sitemap.xml`.

## Pages
- `/docs/v1/` — positional `createLesson(name, language)`, returns `lesson_id` and `status`.
- `/docs/v2/` — object-based `create_lesson({title, language, level})`, returns `id` and `state`.

This is deliberately fictional. Do not present these endpoints as a real SDK or real Decodo feature.

## Publish it
Upload the contents of this folder to any public static host. Replace `YOUR-PUBLIC-HOST.example` in `sitemap.xml` and `robots.txt` with the host's actual domain. The site must be publicly reachable for Decodo to request it. This package is not hosted yet.

## Test in Decodo
1. Use `/map` with the public root URL. If the result includes `/docs/v1/` and `/docs/v2/`, select one of those exact URLs.
2. Use `/scrape` on `/docs/v1/`, format Markdown. First run without JavaScript rendering; then repeat with `"headless": "html"`. The JavaScript-rendered result should include the headings, signature and code example. Verify this before recording.
3. Repeat for `/docs/v2/` to show how Map can help select a version.
4. `/search` may not find this new site immediately because it has not been indexed. You can still test `/map` and `/scrape`; do not claim Search found the site unless it actually does.
5. For an LLM comparison, give it the v1 docs and ask for a v1 example. Compare with a run where you provide no docs.

## Local preview
Serve this folder over HTTP (not by opening `index.html` as a `file://` URL), for example with Python's built-in server: `python3 -m http.server 8000`. Then open `http://localhost:8000`. Decodo cannot reach localhost; publish the folder to a public static host before testing from Decodo.
