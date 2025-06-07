# Task: Performance & Accessibility Passes

Phase reference: 7A.

Goal: Achieve Lighthouse LCP < 2.5 s and fix critical Axe accessibility issues.

Implementation Steps

1. Install `@lhci/cli` and add `pnpm lhci:collect && pnpm lhci:assert` to CI.

2. Profile bundle sizes with `next build --profile` and reduce vendor chunk by code-splitting heavy editors and syntax highlighters.

3. Optimise images in `public/` via `next/image` or `pnpm sharp-cli`.

4. Run `axe-core` automated tests and fix _critical_ and _serious_ violations – focus on colour contrast and ARIA labels.

Acceptance Checklist

✓ lhci CI job passes with LCP < 2.5 s, TTI < 3 s.  
✓ axe test suite returns 0 critical/serious issues.  
✓ No visual regressions in manual smoke test.

Commit: `perf: optimise bundle & fix a11y issues`.
