# Action Plan: Implement "Notebook" Superset in Sidebar

This document outlines a step-by-step plan to introduce a **Notebook** superset in the application sidebar, under which Journals and Spaces will be nested. All changes should preserve the existing sidebar style (padding, icon style, font, font-size).

## 1. Define Data Model Changes

1. Add `Notebook` entity:
   - Fields: `id`, `name`, `order`, (optional) `icon`.
2. Add `notebook_id` foreign key to existing `Journal` and `Space` models.

## 2. Backend Implementation

1. Create database migration:
   - Create `notebooks` table.
   - Add `notebook_id` column (nullable for backwards compatibility) to `journals` and `spaces`.
   - Set up foreign key constraints.
2. Update ORM models/services:
   - Define `Notebook` model/service.
   - Update `Journal` and `Space` services to accept and filter by `notebook_id`.
3. Implement API endpoints:
   - `GET /api/notebooks` → return list of notebooks with nested journals and spaces.
   - `POST /api/notebooks` → create a notebook.
   - `PATCH /api/notebooks/:id` → rename/reorder.
   - `DELETE /api/notebooks/:id` → remove notebook (and optionally cascade or reassign children).
4. Deprecate or update existing endpoints:
   - `GET /api/journals` and `/api/spaces` may now filter by notebook if no notebooks exist.

## 3. Frontend Data Layer

1. Define TypeScript types:
   ```ts
   interface Notebook {
     id: string;
     name: string;
     journals: Journal[];
     spaces: Space[];
   }
   ```
2. Update API client:
   - Add functions: `fetchNotebooks`, `createNotebook`, `updateNotebook`, `deleteNotebook`.
3. Update global state/store:
   - Store notebooks array instead of flat journals and spaces.
   - Update relevant selectors/hooks to retrieve active notebook.

## 4. Sidebar UI Components

1. Create new `SidebarNotebook` component:
   - Renders notebook header (name, icon, expand/collapse toggle).
   - Renders nested `SidebarJournalList` and `SidebarSpaceList` when expanded.
   - Preserves existing padding, icon style, font, font-size.
2. Refactor existing `Sidebar` component:
   - Remove top-level journals and spaces.
   - Map through `notebooks` to render `SidebarNotebook` instances.
   - Add a "Create Notebook" button at the top or bottom of the sidebar.
3. Update styling:
   - Ensure indent levels match previous nested list styles.
   - Use existing CSS classes or Tailwind utilities.

## 5. Interactive Behavior

1. Expand/collapse logic:
   - Manage local component state or global UI state for open notebooks.
2. Notebook selection:
   - Highlight active notebook; propagate selection to main content area.
3. Create/Delete notebooks:
   - Hook "Create Notebook" button to API.
   - Confirm deletion and handle cascade.

## 6. Migration Strategy

1. Data migration script:
   - Create a "Default" notebook.
   - Reassign all existing journals and spaces to this notebook.
   - Set `notebook_id` non-nullable if desired.
2. Run migration in staging before production.

## 7. Testing

1. Backend:
   - Migration tests.
   - API endpoint unit/integration tests.
2. Frontend:
   - Unit tests for new components.
   - E2E tests for sidebar navigation.
3. Visual QA:
   - Compare before/after screenshots for style consistency.

## 8. Documentation

1. Update `README.md` to describe the Notebook feature.
2. Add inline docs in code where appropriate.
3. Review and merge documentation in `docs/architecture.md` or relevant files.

## 9. Rollout

1. Feature flag implementation (optional).
2. Staged rollout: internal testing → beta users → production.
3. Gather user feedback (monitor analytics). 