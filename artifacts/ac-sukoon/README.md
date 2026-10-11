# AC Sukoon artifact routing

The runnable Vite app and its package configuration now live in the repository
root. This directory remains to hold the Replit artifact service metadata.

The workflow runs the root `ac-sukoon` package. Replit's build output is
`dist/public`; Cloudflare Pages uses the root build output `dist`.
