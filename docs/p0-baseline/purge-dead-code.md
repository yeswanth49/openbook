# Task: Purge Dead Code & Assets

Phase reference: 0B.

Objective: Delete unused files identified by static-analysis while keeping CI green.

Implementation Steps

1. Run `pnpm ts-prune` and `pnpm webpack-bundle-analyzer` to generate unused reports.

2. Cross-check with manual grep to avoid false positives (e.g. dynamic imports).

3. Delete confirmed unused files/folders in a single commit.

4. Add script `scripts/verify-unused.ts` executed by `pnpm unused:check` that fails CI when new dead code appears.

Acceptance Checklist

✓ `pnpm test && pnpm build` succeeds after deletions.  
✓ `pnpm unused:check` returns 0 unused symbols.  
✓ CI remains green.

Commit: `chore(clean): purge dead code & add unused guard`.
