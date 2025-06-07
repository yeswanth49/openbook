# Task: Cross-linking Logic

Phase reference: 6B.

Objective: Enable users to jump from a search hit to the correct view and back.

Implementation Steps

1. For **space hits** – clicking a result navigates to `/app/space/[id]` and scrolls to the first matched message. Implement anchor by wrapping message divs in `ref` and calling `element.scrollIntoView()`.

2. For **journal hits** – clicking navigates to `/app/journal/[id]` and sets editor selection to the first matched position.

3. Add `router.query.fromSearch` flag so “Back to Search” button knows to restore sidebar search state (in-memory, no history spam).

Acceptance Checklist

✓ Clicking a search hit takes <200 ms to focus item.  
✓ Back button returns user to search with query intact.  
✓ No console warnings (React key or memory leaks).

Commit: `feat(search): cross-link spaces ↔ journal`.
