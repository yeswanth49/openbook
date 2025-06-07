# Prevent `.env` Secret Leakage

Target file: `env/server.ts`

## Problem

`experimental__runtimeEnv: process.env` exposes **every** env var to the
Next.js client bundle whenever referenced. Risk: secrets leak via client-side
code.

## Steps

1. Replace the line with explicit **whitelist**:

   ```ts
   experimental__runtimeEnv: {
     NEXT_PUBLIC_MAPBOX_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
   },
   ```

2. Add ESLint rule (or enable `eslint-plugin-no-secrets`) to forbid
   `process.env.*` in `app/**` and `components/**`.

3. Run `pnpm lint --max-warnings=0` to ensure compliance.

Checklist:

- `grep -R "process.env." app components` returns zero matches after fixes.

Commit: `sec(env): restrict runtimeEnv exposure`
