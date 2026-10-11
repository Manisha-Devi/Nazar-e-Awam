---
name: Package firewall behavior
description: Replit package registry failures seen while installing dependencies in this workspace.
---

When a package install returns a Replit registry 403, do not bypass the firewall. Check whether the requested package version is still installable, and scope installation to the relevant workspace package when unrelated services are not needed.

**Why:** A full workspace install was blocked by an API server's transitive dependency, and the requested Swiper tarball was also denied. A filtered install of the AC Sukoon package succeeded after updating Swiper to a current release.

**How to apply:** For frontend-only dependency work, use the app's pnpm workspace filter first. If a directly requested version is denied, check the package's current version and retry that package before changing unrelated services.
