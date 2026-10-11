# Nazra-e-Awam

**Public Problems. Verified Facts. Official Responses.**  
*Awam Ki Awaaz, Saboot Ke Saath.*

Nazra-e-Awam is a static public-interest journalism publication. It receives public concerns, reviews evidence, independently checks relevant facts, seeks the concerned authority's response, and publishes only when the evidence and public interest justify it. It is not a daily news feed, a complaint-management system, or a secure whistleblower portal.

## Important safety boundary

The site accepts submissions by ordinary email only. Email does not guarantee anonymity, confidentiality, secure storage, a response, coverage, or publication. Do not send passwords, OTPs, banking credentials, unnecessary identity documents, or classified or highly sensitive material through ordinary email without appropriate guidance. Redact third-party personal information where possible.

Private submissions and source material must **never** be put in public JavaScript files, the `public/` folder, a public issue tracker, or a public Git repository. Public report data contains only material that has been editorially reviewed for publication.

## Technology

- React 19 and React DOM 19: reusable functional interface components.
- Vite 6: local development server and static production build.
- React Router DOM 6: client-side page routes and browser history.
- JavaScript ES modules and plain CSS: easy-to-edit content and presentation.
- ESLint 9: basic code-quality checks.
- System sans-serif and Georgia serif fonts: no external font requests or tracker scripts.

Vite is the actual dev/build tool, and React Router DOM is the actual router. `react-scripts` is intentionally not included: it is Create React App's runner and would conflict with this Vite project. The listed MathJax/KaTeX, Konva, Mammoth and swipe packages are not installed because no current site feature needs mathematics rendering, canvas, document conversion or swipe gestures. The initial site has no testing suite, so testing-library packages are not needed. These choices keep the install small without changing the requested core stack. This pnpm workspace artifact intentionally has no separate npm lockfile; use the workspace's package manager/lockfile.

## Run locally

From the workspace root, install the workspace dependencies once:

```sh
pnpm install
pnpm --filter nazra-e-awam run dev
```

The Replit preview starts the same Vite development server. If you are working from inside `artifacts/nazra-e-awam` after the workspace dependencies are installed, the package scripts can also be run with the requested npm commands:

```sh
npm run dev
npm run build
npm run lint
npm run preview
```

`build` creates static production files in `dist/public/`. `preview` serves that built output locally; build first. In this workspace, use pnpm from the root to target the app, for example `pnpm --filter nazra-e-awam run build`.

## Folder guide

```text
index.html                    Shared document shell and default SEO metadata
public/
  favicon.svg                 Original text-mark favicon
  robots.txt                  Crawler instructions
  sitemap.xml                 Search-engine sitemap; add report URLs here
src/
  App.jsx                     All React Router routes
  main.jsx                    React entry point
  index.css                   Palette, typography, layout and responsive styles
  components/
    Content.jsx               Page intro, sections, email and empty-state blocks
    Metadata.jsx              Per-route title, description, canonical and social tags
    Shell.jsx                 Shared header, mobile menu, footer and page frame
  data/
    articles.js               Public report data (currently intentionally empty)
    responses.js              Published authority response data (currently empty)
  pages/
    Home.jsx                  Homepage and empty report/response blocks
    Cases.jsx                 Search, category filters and reusable report details
    OfficialResponses.jsx     Public response listing
    InformationPages.jsx      Policy, information and not-found routes
```

## Add a public report

Only add a report after verification, right of reply, privacy and editorial review. Edit `src/data/articles.js`; append one object to the `articles` array. It currently contains no reports intentionally.

Example structure (replace every example value with checked, publication-ready material; this example is documentation, not a published report):

```js
{
  slug: 'short-descriptive-address',
  title: 'A precise, evidence-led headline',
  summary: 'A concise account of what the report establishes and its limits.',
  publishedAt: 'YYYY-MM-DD',
  updatedAt: '', // Keep empty until there is a real update.
  category: 'Public services',
  location: '', // Omit or leave empty if not relevant and safe to disclose.
  body: ['Background and chronology paragraph.'],
  evidence: ['Describe records actually examined; do not imply authenticity without checks.'],
  verifiedFacts: ['State facts supported by verification.'],
  unverifiedClaims: ['Identify disputed or unverified claims, or explain that none are included.'],
  authority: 'Concerned institution, if safe and relevant',
  questions: ['Specific questions sent to the authority.'],
  deadline: '', // Add only if a real deadline was documented.
  officialResponse: ['Accurately summarise or quote an actual checked response.'],
  assessment: 'Editorial assessment and reasoning.',
  limitations: ['Important unresolved questions or limitations.'],
  updates: ['Dated subsequent developments, if any.'],
  sources: [{ label: 'Public record title', url: 'https://example.org/record' }],
  corrections: [], // Add dated, transparent factual correction notes.
  relatedReports: [], // Other published slugs only.
  keywords: ['search phrase']
}
```

The report becomes available at `/cases/short-descriptive-address`; the listing, search and category filter read from this one data file. Unknown slugs display a not-found state. Add a public article URL to `public/sitemap.xml` when publishing. The HTML sitemap page at `/sitemap` lists all current reports automatically.

### Sources, official responses and corrections

- Put relevant sources in that article's `sources` array. Use descriptive labels and publicly accessible source URLs. Check the source and its safety before publishing.
- Add an actual checked reply to the report's `officialResponse` field. For a separately listed response, add a record to `src/data/responses.js` with `authority`, `reportSlug`, `date`, `status`, `summary`, and optional `sourceUrl`. Never fabricate an authority's reply.
- Record significant factual corrections in the report's `corrections` array with the date, what changed and why. Update `updatedAt` only for a real update. Do not silently hide material corrections.
- Never publish a private submission, personal source details or confidential attachment as an article or source.

## Add a page

1. Add a named function component to `src/pages/InformationPages.jsx`, or create a separate `.jsx` file in `src/pages/`.
2. Use the shared `Page`/`PageIntro`, `Section`, and `MailLink` components where appropriate. Write specific copy and link relevant policies.
3. Import the component in `src/App.jsx` and add a `<Route path="/your-path" element={<YourPage />} />` inside `<Routes>`.
4. Give it a unique title/description and canonical path through the shared `Metadata` component (the `Page` helper already does so).
5. Add the new public route to `public/sitemap.xml` and to the HTML sitemap's `pages` array in `src/pages/InformationPages.jsx`.
6. Use semantic headings, descriptive links and visible keyboard focus. Check the page on a narrow screen.

## SEO, domain and hosting

`Metadata.jsx` updates each route's document title, description, canonical URL and Open Graph/Twitter title and description. `index.html` provides the home-page defaults. `public/robots.txt`, `public/sitemap.xml` and `public/favicon.svg` are copied into the production build. The XML sitemap is deliberately limited to actual public pages; add each published report URL manually.

The intended canonical domain is `https://nazra-e-awam.com/`. Configure the domain at your hosting provider and enable HTTPS. Before launch, check the privacy policy against the actual mail and hosting provider configuration and applicable law.

This app uses browser-side React Router. Configure the static host to serve `index.html` for unknown page paths (SPA history fallback) so direct links such as `/cases/a-report` and browser refreshes reach React. Do not rewrite requests for existing assets, `robots.txt` or `sitemap.xml`. For Netlify, a typical `public/_redirects` rule is `/* /index.html 200`; for Vercel use a rewrite to `/index.html` for application routes while leaving static assets untouched. Check your platform's current routing docs before deployment.

Deploy the contents of `dist/public/` as the static site output. No API, database, login or server-side publication workflow is required.

## Publish source on GitHub

Create a new GitHub repository, review every staged file, then commit and push the public frontend source. Configure hosting to build the repository's Vite project and publish `dist/`. Never commit email credentials, API keys, private submissions, source identities, identity documents or confidential evidence. Public Git history can preserve deleted information indefinitely; removing a file later does not reliably make a secret private again.

## Maintenance reminders

- Keep article and response data empty until genuine, verified material is ready.
- Do not claim anonymity, secure upload, secure storage, guaranteed publication or a secure whistleblower portal.
- Keep policy language aligned with the real hosting and email setup.
- Keep `public/sitemap.xml` current when public routes or reports change.
