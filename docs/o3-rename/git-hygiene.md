# Git Hygiene & Guard Rails

## Goals

- Prevent `.bak`, build cache or large binary blobs from sneaking back in.
- Automate lint / test gate.

## Steps

1. **.gitignore additions**

   ```gitignore
   # backups
   *.bak
   backup/
   trash/

   # TS build cache
   *.tsbuildinfo
   ```

2. **Danger.js rule**

   ```js
   // dangerfile.js
   const bad = danger.git.modified_files
     .concat(danger.git.created_files)
     .filter((f) => f.endsWith('.bak') || f.startsWith('backup/'));
   if (bad.length) fail(`Backup artefacts detected: ${bad.join(', ')}`);
   ```

3. **Pre-commit hook** – run `pnpm lint --fix` & `pnpm test`.

Checklist: PR with `.bak` file fails CI.

Commit: `chore(ci): git hygiene rules`
