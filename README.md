# AC Sukoon

AC Sukoon is a React 19 + Vite frontend using Bootstrap, Chart.js,
`react-chartjs-2`, and Swiper. The Vite app now lives at the repository root:
`src/`, `public/`, `index.html`, `vite.config.ts`, and `eslint.config.js`.

The original product source was not included in the imported workspace, so the
current page is a starter—not a restoration of the previous application.

## Run

This Replit workspace uses pnpm:

```sh
pnpm install --filter .
pnpm run dev
pnpm run lint
pnpm run build
pnpm run preview
```

The package is named `ac-sukoon`. Its existing `typecheck` and
`build:workspace` scripts remain available for the other workspace packages.

## Cloudflare Pages

Use the repository root as the project root:

- Build command: `pnpm run build`
- Build output directory: `dist`

The Replit artifact workflow sets its own `PORT` and `BASE_PATH`, which makes
the same Vite config emit to `dist/public` for Replit's static artifact server.
The workspace uses `pnpm-lock.yaml`; do not add a competing npm lockfile.
