# Task: Unified Sidebar Search

Phase reference: 6A.

Goal: Display instant search results from both Spaces and Journal entries in a single list component.

Implementation Steps

1. Implement `components/GlobalSearch.tsx` with an `<input>` and results list.

2. On every input change debounce(200ms) perform in-memory search:

   ```ts
   const spaceHits = spaces.filter((s) => s.title.includes(q));
   const entryHits = entries.filter((e) => e.title.includes(q) || e.content.includes(q));
   ```

3. Show a labelled group “Spaces” / “Journal” when results exist for that entity type.

4. Render up to 5 hits per group with “See more…” at bottom (future work). Keep component small.

Acceptance Checklist

✓ Typing queries returns mixed results under 50 ms.  
✓ Keyboard navigation (arrow keys + Enter) chooses selection.  
✓ No re-renders when input is unchanged.

Commit: `feat(search): unified sidebar search`.
