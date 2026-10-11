# Vercel migration

This is the original React 17 frontend, with its original dependency lockfile,
components, CSS, fonts, images, routes and themes retained. The Vercel project is
`ianrackson` in `iracksons-projects` (Hobby).

`npm run build` uses a cross-platform Node wrapper for the legacy Webpack build.
Vercel serves existing static files before the client-side routing fallback.

Build configuration:
- `REACT_APP_API_URL`: defaults to `https://api.ianrackson.com`.
- `REACT_APP_BASE_URL`: defaults to the current origin for Prism stylesheets.
- `REACT_APP_MAPS_API`: existing public browser Maps configuration in Vercel.

The API hostname must be migrated separately using `irackson/PersonalBackend`.
A frontend preview that still uses the old API is not a complete Heroku migration.

Rollback: deploy the previous known-good Git revision, or promote the previous
Vercel deployment. Until DNS cutover, the existing site remains in service. At
cutover, save the Cloudflare records and preserve unrelated mail/TXT/subdomain
records so the previous web origin can be restored if verification fails.
