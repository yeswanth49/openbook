# Remove Dead Code & Artefacts

## Scope

Delete unused folders/files listed below. Verified by `ts-prune`, `depcheck`
and manual grep.

### Folders

- `backup/`
- `backup/terminal-chat-backup/`
- `trash/`

### Files

- `eslint.config.mjs.bak`
- `backup/form-component.tsx.bak-20250514`
- `test-ai-api.js`
- `tsconfig.tsbuildinfo`

### Steps

1. Run tests & build (`pnpm test && pnpm build`).
2. Delete items above in a single commit.
3. CI must stay green.

Checklist:

- `pnpm build` succeeds after deletion.
- `git grep backup/terminal-chat-backup` returns nothing.

Commit: `chore: prune dead code`
