---
name: Vite and esbuild target compatibility
description: A workspace-level esbuild version can fail on Vite's default browser target when bundling modern React Router dependencies.
---

Keep Vite's dependency optimizer and production bundle on a modern JavaScript target when working in this workspace.

**Why:** Vite's default dependency optimization target failed while transforming destructuring in React Router under the workspace's esbuild version. An ESNext target worked for both the dev optimizer and production build.

**How to apply:** If a future dependency upgrade triggers this transform error, preserve the explicit modern target for both `optimizeDeps.esbuildOptions.target` and `build.target`; verify the build and running preview before changing it.
