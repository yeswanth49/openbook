# Task: Apply Animations Across UI

Phase reference: 5B.

Goal: Wrap sidebars and modals with Framer Motion components respecting the new motion presets.

Implementation Steps

1. Convert `components/SidebarSpaces.tsx` and `components/SidebarJournal.tsx` to `motion.aside` using `slideIn` variant.

2. Find any `Modal` component and pass `settle` variant to its root container.

3. Guard props with `prefersReducedMotion` hook (see next task).

4. Ensure animations are disabled during `jest` tests by mocking framer-motion to plain div.

Acceptance Checklist

✓ Animation plays on mount in the browser.  
✓ Setting OS “reduce motion” preference skips animations.  
✓ Jest tests still green.

Commit: `feat(motion): apply slide & settle variants`.
