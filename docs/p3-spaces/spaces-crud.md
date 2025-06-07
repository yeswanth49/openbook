# Task: Spaces CRUD & Persistence

Phase reference: 3A in `Implementation_Plan.md`.

Objective

Implement the underlying data structures, CRUD operations and LocalStorage persistence for chat “Spaces”. No UI work – focus on logic.

Implementation Steps

1. Extend `lib/types/space.ts` (added in Phase 2) to include an `updatedAt` timestamp and optional `title`.

2. Add `lib/spaces/useSpacesStore.ts` using Zustand or React Context (if preferred). Expose methods:
   • `create(initial?: Partial<Space>): string` → returns new id  
   • `update(id: string, patch: Partial<Space>): void`  
   • `remove(id: string): void`  
   • `list(): Space[]`

3. Persist state with the versioned storage helper (`createStorage`) created earlier.

4. Implement **auto-name** algorithm:

   ```ts
   function defaultTitle(spaces: Space[]) {
     const n = spaces.length + 1;
     return `Untitled Space ${n}`;
   }
   ```

5. Wire `updatedAt` to refresh on every modification so sort-by-recent works later.

Acceptance Checklist

✓ Calling `create()` twice yields IDs `space-1`, `space-2` and default titles `Untitled Space 1`, `Untitled Space 2`.  
✓ Refreshing the page restores the same two spaces from LocalStorage.  
✓ Unit tests cover create / update / remove behaviour.

Commit: `feat(spaces): CRUD logic + persistence`.
