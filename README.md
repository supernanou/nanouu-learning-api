# Nanouu Learning API demo docs

A screen-recording-ready, fictional API documentation site for Antonia / Nanouu. Version 1 and Version 2 use different request and response fields. The reference pages render their documentation body with inline JavaScript and carry inline CSS, so the page styling and rendering demo work without external assets.

## GitHub Pages
Upload the contents of this folder at the repository root. Enable Pages from `main` and `/(root)`. The expected project URL is `https://supernanou.github.io/nanouu-learning-api/`.

After GitHub gives you the site URL, replace `supernanou` and `nanouu-learning-api` in `sitemap.xml` and `robots.txt`, then commit. Check `/`, `/docs/v1/`, `/docs/v2/`, and `/sitemap.xml`.

## Decodo demo
Use `/map` on the public site root and choose the v1 or v2 reference URL. For `/scrape`, request Markdown and compare the result without JavaScript rendering with a request using `"headless": "html"`. Confirm the first is empty/incomplete and the second includes the API docs before filming. A new site may not appear in `/search` immediately, so only claim that Search found it if the result appears.

The API and SDK examples are fictional, for demonstrating the workflow only. Don’t present them as a real service.
