# Task: Add Baseline Tooling

Phase reference: 0C.

Goal: Establish ESLint, Prettier, lint-staged and Global-Style-Guard lint rule to maintain code quality from day one.

Implementation Steps

1. Install tooling: `pnpm add -D eslint prettier eslint-config-prettier eslint-plugin-react eslint-plugin-import lint-staged husky`.

2. Create `.eslintrc.cjs` extending `next` and `prettier`.

3. Implement custom rule `eslint-plugin-no-style-regression` under `eslint-rules/`.

4. Configure `lint-staged` in `package.json`:

   ```json
   "lint-staged": {
     "**/*.{ts,tsx,js,jsx}": "eslint --fix"
   }
   ```

5. Setup Husky: `npx husky install && pnpm husky add .husky/pre-commit "pnpm lint && pnpm test"`.

6. Update CI workflow to run `pnpm lint` and `pnpm test`.

Acceptance Checklist

✓ Running `git commit` triggers lint-staged and rejects commit on lint errors.  
✓ CI pipeline fails on ESLint or Jest failures.  
✓ Custom style-guard rule warns when deleting Tailwind classes.

Commit: `chore(tooling): eslint + prettier + style guard`.
