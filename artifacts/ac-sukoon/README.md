# AC Sukoon

React 19 + Vite frontend using the supplied Bootstrap, Chart.js, React Chart.js,
and Swiper packages. The imported workspace did not include the original
product source; the current page is a starter, not the restored application.

## Run in Replit

The managed `artifacts/ac-sukoon: web` workflow starts the Vite development
server. You can also run the package scripts from the workspace root:

```sh
pnpm --filter ac-sukoon run dev
pnpm --filter ac-sukoon run lint
pnpm --filter ac-sukoon run build
pnpm --filter ac-sukoon run preview
```

## Cloudflare Pages

For a Pages project using the workspace root:

- Build command: `pnpm --filter ac-sukoon run build`
- Build output directory: `artifacts/ac-sukoon/dist`

The Vite config emits `dist/public` when the Replit artifact environment is
present and plain `dist` for a standard static-host build.
