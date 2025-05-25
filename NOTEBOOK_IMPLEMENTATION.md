# Notebook Implementation Task List

Implementation of the Notebook superset feature that acts as a parent container for Journals and Spaces in the sidebar.

## Completed Tasks

- [x] Created action plan in docs/note.md
- [x] Analyzed current codebase structure and data models
- [x] Define Notebook TypeScript types and interfaces
- [x] Create NotebookContext with CRUD operations
- [x] Update existing data models to include notebook_id
- [x] Create SidebarNotebook component
- [x] Update Sidebar component to use notebooks structure
- [x] Add "Create Notebook" functionality
- [x] Update styling to match existing sidebar patterns
- [x] Implement expand/collapse functionality for notebooks
- [x] Implement notebook management features (rename, delete)
- [x] Added NotebookProvider to app layout
- [x] Add persistence layer for notebooks

## In Progress Tasks

- [ ] Test the complete implementation
- [ ] Create default notebook for existing data migration

## Future Tasks

- [ ] Update documentation
- [ ] Add notebook reordering functionality
- [ ] Add notebook icons/colors support
- [ ] Implement notebook search functionality
- [ ] Add search functionality within notebooks
- [ ] Update routing to handle notebook-based navigation
- [ ] Write tests for notebook functionality

## Implementation Plan

### Phase 1: Data Layer (Current)
1. Define Notebook interface and types
2. Create NotebookContext with state management
3. Update Journal and Space types to include notebook_id
4. Implement data migration strategy

### Phase 2: UI Components
1. Create SidebarNotebook component with expand/collapse
2. Update main Sidebar component structure
3. Preserve existing styling patterns (padding, icons, fonts)

### Phase 3: Functionality
1. Implement notebook CRUD operations
2. Add notebook management UI
3. Update search to work within notebook structure

### Phase 4: Integration
1. Update routing for notebook-based navigation
2. Ensure backward compatibility
3. Add persistence and migration

## Relevant Files

- `contexts/SpacesContext.tsx` - ✅ Analyzed
- `components/sidebar.tsx` - ✅ Analyzed  
- `lib/types.ts` - ✅ Analyzed
- `hooks/useJournal.ts` - To be updated
- `contexts/NotebookContext.tsx` - To be created
- `components/SidebarNotebook.tsx` - To be created

## Architecture Notes

Current structure:
```
Sidebar
├── Journals (collapsible section)
│   ├── New Journal button
│   └── Journal entries list
└── Spaces (collapsible section)
    ├── New Space button
    └── Space entries list
```

Target structure:
```
Sidebar
├── Create Notebook button
└── Notebooks list
    └── Notebook1 (collapsible)
        ├── Journals (collapsible subsection)
        │   ├── New Journal button
        │   └── Journal entries list
        └── Spaces (collapsible subsection)
            ├── New Space button
            └── Space entries list
``` 