# Task: Journal Sidebar – Sort & Search

Phase reference: 4C.

Goal: Provide a list of journal entries in the sidebar with sort options and a blazing-fast client-side search (<100 ms on 1 000 entries).

Implementation Steps

1. Create `components/SidebarJournal.tsx`.

2. Render entries pulled from `useJournal`.

3. Sorting: dropdown with _Date (new→old)_ and _Title (A→Z)_. Maintain selected option in component state.

4. Search: simple `<input type="search" />` that filters client-side. Use `fuse.js` if fuzzy needed, but plain `includes` is enough for now.

5. Performance guard: wrap filter + sort in `useMemo` keyed by `[entries, query, sort]`.

6. Add unit test that searches through 1 000 mocked entries in under 100 ms.

Acceptance Checklist

✓ Typing ‘draft’ filters list instantly (<100 ms).  
✓ Changing sort order re-renders list correctly.  
✓ No reflow jank in Chrome performance profiler.

Commit: `feat(journal): sidebar list + sort + search`.
