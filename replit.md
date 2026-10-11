# Nazar-e-Awam

Static public-interest journalism site for explaining its editorial process, browsing verified public reports and official responses, and contacting the editors.

## Run & Operate

- `pnpm install` — install workspace dependencies
- `pnpm run dev` — start the root Vite app locally
- `pnpm run lint` — run ESLint
- `pnpm run build` — build the site; the artifact workflow supplies `BASE_PATH` and outputs to `dist/public`
- No database or backend service is required for the public site.

## Stack

- React 19, React Router 6, Vite 7, JavaScript ES modules, plain CSS
- pnpm workspace; root `package.json` owns the running Vite app
- Static hosting with a single-page-app fallback for client-side routes

## Where things live

- `src/main.jsx` — app entry point
- `src/App.jsx` and `src/index.css` — adapters to the original site source recovered from Git history
- `artifacts/nazra-e-awam/src/App.jsx` — routes
- `artifacts/nazra-e-awam/src/components/` — shared header, footer, page layout, metadata, and content elements
- `artifacts/nazra-e-awam/src/pages/` — homepage, cases/search, response listing, and information pages
- `artifacts/nazra-e-awam/src/data/articles.js` and `responses.js` — public datasets; intentionally empty until verified material is approved
- `public/` — root favicon, robots rules, and XML sitemap

## Product & safety

- A visitor can search reports by title/keyword, filter by category, open a published report, browse official responses, and read the site's editorial and governance policies.
- Concern/contact links use ordinary email. Do not describe them as anonymous, confidential, secure, or guaranteed to receive a response or publication.
- Never put private submissions, source identities, or confidential material in public JavaScript, the `public/` directory, or Git.
- Add only editorially verified, publication-ready reports or checked official responses to the public data files.

## Hosting

The intended canonical domain is `https://nazra-e-awam.com/`. Before launch, confirm domain/HTTPS configuration and that the privacy policy matches the actual email and hosting providers.
