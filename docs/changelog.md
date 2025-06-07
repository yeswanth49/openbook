## chore: prune dead code

- Removed unused folders (`backup/`, `backup/terminal-chat-backup/`, `trash/`).
- Deleted obsolete files (`eslint.config.mjs.bak`, `backup/form-component.tsx.bak-20250514`, `test-ai-api.js`, `tsconfig.tsbuildinfo`).
- Verified all deleted items had no impact on build or tests.
- Implementation follows the plan in `docs/o3-rename/dead-code-removal.md`.

## sec(proxy-image): block SSRF + stream limit

- Implemented URL validation to prevent Server-Side Request Forgery (SSRF) attacks in `app/api/proxy-image/route.ts`.
- Added `isPublicHostname` utility function to block requests to private IP ranges, localhost, and cloud metadata services.
- Replaced response buffering with streaming implementation to prevent memory exhaustion DoS attacks.
- Added configurable size limit (default 5MB) with 413 status code when exceeded.
- Added support for allow-listing hosts via `PROXY_IMAGE_ALLOWED_HOSTS` environment variable.
- Implementation follows the plan in `docs/o3-clean/image-proxy-ssrf.md`.

## sec(env): restrict runtimeEnv exposure

- Replaced `experimental__runtimeEnv: process.env` with explicit whitelist of public variables in `env/server.ts`.
- Fixed direct usage of `process.env` in client components to prevent secret leakage.
- Verified no direct references to environment variables in app and components directories.
- Implementation follows the plan in `docs/o3-clean/env-secret-leak.md`.

## feat(deps): add dependabot and security audit

- Added `.github/dependabot.yml` for automated weekly dependency updates.
- Created GitHub Actions CI workflow with security audit integration.
- Configured weekly dependency checks with a limit of 10 PRs.
- Implementation follows the plan in `docs/o3-clean/dependabot.md`.

## perf(clean-images): pagination back-off and resilience

- Improved blob cleanup in `app/api/clean_images/route.ts` to be resilient against Edge 30s timeout and CPU starvation.
- Added a 30s time-box to ensure the function does not exceed execution limits.
- Introduced a 200ms back-off between blob list pages to reduce resource contention.
- Enhanced logging for progress and early exit conditions.
- Implementation follows the plan in `docs/o3-clean/blob-cleanup-dos.md`.

## feat(upload): harden public upload endpoint

- Added authentication requirement (Bearer token) to `app/api/upload/route.ts` (returns 401 if missing/invalid).
- Enforced file size limit (max 4MB, returns 413 if exceeded).
- Enforced file type validation using `file-type` (only allows image/jpeg, image/png, image/webp, image/gif; returns 415 otherwise).
- Randomized uploaded file path using userId/date to prevent enumeration.
- Stubbed logic for AV scan: ready for private upload and promotion to public after scan (currently uploads as public, with TODO for AV integration).
- Error responses now match the acceptance checklist in `docs/o3-clean/public-upload-validation.md`.
- Implementation follows the plan in `docs/o3-clean/public-upload-validation.md`.

## feat(rate-limit): global edge throttle

- Implemented global rate-limiting middleware in `middleware.ts` for all `/api/*` routes.
- Uses Upstash Redis (`@vercel/kv`) for IP-based throttling: 60 requests per minute per IP.
- Returns 429 status for clients exceeding the limit.
- Adds `x-ratelimit-remaining` header to all API responses.
- Structured JSON logging (IP, user agent, path, status, ms) to stdout for Vercel Log Drains.
- Implementation follows the plan in `docs/o3-clean/rate-limiting.md`.
