# Nazar-e-Awam

**Public Problems. Verified Facts. Official Responses.**  
*Awam Ki Awaaz, Saboot Ke Saath.*

Nazar-e-Awam is a nonprofit public-interest journalism project. It explains the editorial process, lets visitors browse verified reports and official responses, and provides contact links for submitting a concern.

## Run

This project uses npm workspaces and pins npm through Corepack:

```sh
corepack npm ci
corepack npm run dev
corepack npm run lint
corepack npm run build
```

The Replit web workflow runs the root Vite app and supplies its port and base path. The static build is written to `dist/public` in that workflow; a local build without Replit's artifact environment writes to `dist`.

## Site features

- Responsive homepage with an Urdu/English tagline toggle and an explanation of the review process.
- Verified-cases listing with live title/keyword search and category filtering.
- Individual report pages, official-response listing, and editorial, privacy, governance, contact, and other information pages.
- Client-side routes with browser history and static-host rewrites for direct links.

The published report and response datasets are intentionally empty until material has been verified and approved for publication. The site does not promise anonymity, confidentiality, a reply, or publication. Submissions are ordinary email links, not a secure upload or whistleblower system.

## Source map

- `src/App.jsx` and `src/index.css` connect the root Replit artifact to the recovered original site source.
- `artifacts/nazra-e-awam/src/` contains the original React pages, router, styles, and public report/response data files recovered from Git history.
- `public/` contains the root site's favicon, crawler rules, and XML sitemap.
- `vite.config.ts` configures the root React/Vite app and Replit's `PORT` / `BASE_PATH`.

The project uses React 19, React Router 6, Vite 7, JavaScript modules, and plain CSS. It has no API, database, login, or third-party font dependency.

## Cloudflare Pages

Use the repository root as the project root:

- Build command: `corepack npm run build`
- Build output directory: `dist`

Configure an SPA fallback to `index.html` for application routes, while leaving real static files such as `robots.txt` and `sitemap.xml` accessible.
