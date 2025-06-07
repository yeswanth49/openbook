# Task: Sidebar List UI for Spaces

Phase reference: 3B.

Goal: Render the list of Spaces in the sidebar, adhering strictly to existing typography and spacing utilities (no new global styles).

Implementation Steps

1. Create `components/SidebarSpaces.tsx`.

2. Reuse already-defined list item primitives – search for `components/ui/list-item.tsx` or similar; avoid reinventing the wheel.

3. Show title and last-updated timestamp. Selected space should get `data-active` attribute for styling (existing CSS likely targets this attr).

4. Add `onClick` that calls `router.push('/app/space/[id]')`.

5. Integrate component into `app/layout.tsx` (Phase 2) using a simple responsive flex layout.

Acceptance Checklist

✓ Navigating between spaces updates URL and highlights active item.  
✓ Lighthouse colour-contrast score remains unchanged (≥ previous run).  
✓ Component is treeshake-friendly (no dynamic import loops).

Commit: `feat(spaces): sidebar list UI`.
