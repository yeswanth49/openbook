# Task: lib/motion-config.ts

Phase reference: 5A.

Objective: centralise Framer Motion variants and test that they never mutate at runtime.

Implementation Steps

1. Install `framer-motion`: `pnpm add framer-motion`.

2. Create `lib/motion-config.ts` exporting:

   ```ts
   export const slideIn = {
     hidden: { x: -20, opacity: 0 },
     visible: { x: 0, opacity: 1, transition: { duration: 0.2 } },
   };

   export const settle = {
     hidden: { scale: 0.95, opacity: 0 },
     visible: { scale: 1, opacity: 1, transition: { duration: 0.15 } },
   };
   ```

3. Freeze the config in development to avoid accidental mutation:

   ```ts
   if (process.env.NODE_ENV === 'development') {
     Object.freeze(slideIn.hidden);
     Object.freeze(slideIn.visible);
     Object.freeze(settle.hidden);
     Object.freeze(settle.visible);
   }
   ```

4. Add snapshot test verifying exported objects stay the same over time.

Acceptance Checklist

✓ Snapshot tests pass.  
✓ Importing `slideIn` twice returns the same object reference (memoize import cache).

Commit: `feat(motion): motion config`.
