# Task: Automated Tests Suite

Phase reference: 7B.

Objective: Reach ≥85 % unit-test coverage and add basic Playwright e2e flows to keep the main user journeys green.

Implementation Steps

1. Audit current coverage with `pnpm jest --coverage`.

2. Add tests where gaps > 40 %:  
   • storage helpers  
   • providers  
   • search component logic.

3. Configure Playwright with two journeys:  
   • create → rename → delete space  
   • add journal entry → search → open entry.

4. Wire Playwright to CI using `--shard` for parallelism.

Acceptance Checklist

✓ Jest coverage summary shows 85 %+ statements, branches, functions, lines.  
✓ Playwright suite passes locally and on CI.  
✓ CI time increase < 3 minutes.

Commit: `test: unit + e2e coverage improvements`.
