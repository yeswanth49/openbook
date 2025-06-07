# Task: Premium-limit Gating

Phase reference: 6C.

Goal: Add a flexible limit system that can restrict certain actions when a user exceeds the free quota, showing an existing modal component.

Implementation Steps

1. Create `contexts/LimitContext.tsx` exposing `{ canCreateSpace, canCreateEntry, remaining, upgrade() }`.

2. Initialise default limits via env vars (`NEXT_PUBLIC_FREE_SPACE_LIMIT`, etc.).

3. Wrap `create()` calls in Spaces and Journal hooks to consult the context before proceeding.

4. When the limit is hit, open `components/PremiumModal.tsx` (existing) with props `feature` and `limit`.

5. Add integration test using Playwright: attempt to add 6 spaces when free limit is 5 → modal appears.

Acceptance Checklist

✓ Limit values update in context after each create.  
✓ Modal shows exactly once per limit breach.  
✓ Playwright test passes.

Commit: `feat(limits): premium gating for spaces & journal`.
