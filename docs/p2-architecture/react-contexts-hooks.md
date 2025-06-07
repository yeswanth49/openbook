# Task: React Contexts & Guarded Hooks

Context: Implementation_Plan.md – Phase 2, Task 2B.

Goal: Provide global React contexts that expose Spaces and Notebook state while preventing misuse outside a provider.

Implementation Steps

1. Create `contexts/SpacesContext.tsx` and `contexts/NotebookContext.tsx`.
   • Export React contexts with sensible default of `undefined`.  
   • Export provider components accepting `children`.

2. Implement hooks in `hooks/useSpaces.ts` and `hooks/useJournal.ts`.

   ```ts
   export function useSpaces() {
     const ctx = useContext(SpacesContext);
     if (!ctx) throw new Error('useSpaces must be used within <SpacesProvider>');
     return ctx;
   }
   ```

3. Move CRUD logic from existing scattered utilities (if any) into the context to centralise state.

4. Add minimal unit tests with React Testing Library to ensure the guard throws when context is missing.

5. Update barrel file `contexts/index.ts` exposing both providers for ergonomic import.

Acceptance Checklist

✓ Rendering `<TestComponent />` outside a provider produces runtime error.  
✓ Inside provider, `useSpaces()` returns expected default state (empty array).  
✓ No React unstable warnings in tests.

Commit message: `feat(context): add Spaces / Notebook providers + guarded hooks`.
