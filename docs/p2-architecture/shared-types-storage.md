# Task: Shared Types & Versioned Storage Helpers

Context: Implementation_Plan.md – Phase 2, Task 2A.

Goal: Define domain types in `lib/types/` and ship a small but future-proof LocalStorage wrapper that handles data migrations via semantic versioning.

Implementation Steps

1. Create `lib/types/space.ts`, `lib/types/journal.ts`, `lib/types/index.ts`.
   • Include `Space`, `Message`, `JournalEntry`, `Notebook` interfaces.  
   • Export all public types from `lib/types/index.ts` for DX.

2. Build `lib/storage/versioned.ts` with the following surface API:

   ```ts
   interface StorageSchema<T> {
     version: number;
     migrate?: (old: any) => T; // invoked when stored version < current
     schema: ZodType<T>; // zod validation
   }

   export function createStorage<T>(
     key: string,
     schema: StorageSchema<T>
   ): {
     get(): T | null;
     set(value: T): void;
     clear(): void;
   };
   ```

3. Persist the version number alongside the payload: `{ v:1, data:{…} }`.

4. Use `zod.safeParse` to validate reads; fallback to `null` when invalid.

5. Write lightweight Jest tests in `__tests__/storage-versioned.test.ts` covering:
   • valid read/write round-trip  
   • automatic migration when stored version is outdated  
   • graceful failure on corrupted data.

Acceptance Checklist

✓ `pnpm test` passes with the new suite.  
✓ No TypeScript errors in `lib/types/**/*.ts`.  
✓ Calling `createStorage` from a component still tree-shakes (no dynamic `require`).

Suggested commit message: `feat(storage): add versioned LocalStorage helper + shared domain types`.
