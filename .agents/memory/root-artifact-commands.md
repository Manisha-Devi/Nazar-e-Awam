---
name: Root package commands
description: Run commands for a Vite app moved to the pnpm workspace root from its Replit artifact workflow.
---

When an app's `package.json` is at the pnpm workspace root, `pnpm --filter <root-package-name>` may not select it for `run` commands. Replit's artifact workflow starts in the artifact directory, so use `pnpm --dir ../.. run <script>` to invoke the root package.

**Why:** The root layout was needed for a Cloudflare Pages build, while Replit still manages the app through an artifact whose working directory is nested.

**How to apply:** If converting a workspace artifact to root-level Vite files, use root-directed dev and build commands in `artifact.toml`, verify the build output path, and confirm workflow logs show Vite starting from the workspace root.
