# Task: Journal CRUD & Persistence

Phase reference: 4A.

Goal

Create data models and hooks that power a personal Journal, persisted to LocalStorage via the versioned storage helper.

Implementation Steps

1. Define `JournalEntry` and `Notebook` interfaces in `lib/types/journal.ts` (append if already exists).

2. Implement `hooks/useJournal.ts` (or Zustand store) mirroring API similar to `useSpacesStore`:
   • `createEntry(initial?: Partial<JournalEntry>): string`  
   • `updateEntry(id, patch)`  
   • `removeEntry(id)`  
   • `listEntries()`

3. Persist notebook state with `createStorage('notebook', schema)`. Increment schema version when entry shape changes.

4. Unit tests asserting CRUD and persistence round-trip.

Acceptance Checklist

✓ After adding two entries and refreshing, they are still present.  
✓ Removing an entry triggers storage write and it stays removed.  
✓ Test coverage ≥ 90 % in `hooks/useJournal.test.ts`.

Commit: `feat(journal): CRUD + persistence`.
