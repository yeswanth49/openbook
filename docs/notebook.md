# Notebook Feature - Implementation Plan

## Overview
The Notebook feature will serve as a superset organizational category that encompasses both spaces and journals. This restructuring will improve information architecture by grouping related content types under a single umbrella while maintaining their distinct functionalities.

## Current Structure
- Sidebar has separate sections for "Spaces" and "Journals"
- Each section has its own state management, creation flows, and display logic
- Spaces and Journals are displayed directly in the sidebar hierarchy

## Target Structure
- New "Notebooks" parent category in the sidebar
- Spaces and Journals contained within Notebooks
- When a Notebook is opened, it displays the same content currently shown in Spaces and Journals

## Data Model Changes

### 1. Notebook Type
```typescript
export type Notebook = {
  id: string;
  name: string;
  spaceIds: string[];
  journalIds: string[];
  createdAt: number;
  updatedAt: number;
  metadata?: {
    pinned?: boolean;
    color?: string;
    icon?: string;
  };
};
```

## Implementation Steps

### Phase 1: Create Notebook Context and Data Management (1-2 days)

1. Create a new context for notebooks:
   - Create `contexts/NotebooksContext.tsx`
   - Implement CRUD operations (create, read, update, delete)
   - Setup local storage persistence with key `openbook_notebooks_data`
   - Create hook `useNotebooks` for accessing notebook functionality

2. Modify existing contexts to support notebook association:
   - Update `SpacesContext` to support notebook association
   - Update `JournalContext` to support notebook association
   - Add methods to associate/disassociate spaces/journals with notebooks

### Phase 2: Sidebar UI Modifications (2-3 days)

1. Update the sidebar component structure:
   - Add a new "NOTEBOOKS" section in `components/sidebar.tsx`
   - Modify existing Spaces and Journals sections to be collapsible within notebooks
   - Implement notebook list UI with expand/collapse functionality

2. Implement notebook item UI:
   - Create notebook item component with notebook name, icon, and action buttons
   - Add expand/collapse functionality to show spaces and journals within each notebook
   - Add hover interactions and metadata display

3. Update creation flows:
   - Modify "New Space" and "New Journal" buttons to create within selected notebook
   - Add "New Notebook" button to sidebar
   - Update existing space/journal creation to prompt for notebook selection

### Phase 3: Routing and Navigation Updates (1-2 days)

1. Implement notebook routing:
   - Create `app/notebook/[notebookId]/page.tsx` for notebook view
   - Update navigation to handle notebook selection
   - Ensure proper URL routing for notebooks, spaces, and journals

2. Implement notebook content view:
   - Display spaces and journals associated with selected notebook
   - Maintain same functionality and content display as current implementation
   - Support filtering and searching within a notebook

### Phase 4: Data Association and Migration (1-2 days)

1. Implement data migration strategy:
   - Create default notebook for existing spaces and journals
   - Associate existing spaces and journals with default notebook
   - Ensure backward compatibility for users without notebooks

2. Add notebook assignment functionality:
   - Create UI for assigning spaces/journals to notebooks
   - Implement drag-and-drop for moving between notebooks
   - Add bulk selection and assignment actions

### Phase 5: Search and Filter Integration (1 day)

1. Update search functionality:
   - Extend search to include notebooks
   - Support filtering by notebook in search results
   - Update global search to search across notebooks

2. Implement notebook-specific filters:
   - Add filter by notebook options
   - Support sorting and organization within notebooks
   - Update UI to show notebook context in filtered views

### Phase 6: UX Refinement and Testing (1-2 days)

1. Polish UI interactions:
   - Add animations for notebook expansion/collapse
   - Implement consistent hover states and transitions
   - Ensure mobile responsiveness for notebooks section

2. Thoroughly test all functionality:
   - Verify notebook creation, editing, and deletion
   - Test space/journal association and disassociation
   - Ensure proper data persistence and state management
   - Validate search and filter functionality

## Code Changes Required

### 1. Create NotebooksContext

Create a new context file at `contexts/NotebooksContext.tsx` with CRUD operations and persistence logic similar to existing contexts.

### 2. Update Sidebar Component

Modify `components/sidebar.tsx` to include the notebooks section and reorganize spaces and journals within notebooks.

### 3. Create Notebook Routing

Create new page component at `app/notebook/[notebookId]/page.tsx` to handle notebook viewing.

### 4. Update Data Models

Modify existing types in `lib/types.ts` to include notebook associations.

### 5. Update Creation Flows

Modify space and journal creation functions to support notebook association.

## Integration Points

- **Sidebar Component**: Primary UI change to reorganize information architecture
- **Context Providers**: Update to support notebook associations
- **Creation Flows**: Modify to associate new content with notebooks
- **Search & Filtering**: Extend to support notebooks
- **Routing**: Add notebook routes and navigation

## Backwards Compatibility

To ensure backward compatibility:
1. Create a default "General" notebook for existing users
2. Associate all existing spaces and journals with this default notebook
3. Maintain direct access to spaces and journals through their existing routes
4. Ensure all existing functionality continues to work without disruption

## Testing Strategy

1. Unit test notebook context functions
2. Test UI components for notebook display and interaction
3. Verify data persistence and state management
4. Test migration of existing data to notebook structure
5. Validate search and filter functionality with notebooks
6. Test mobile responsiveness and accessibility

## Rollout Plan

1. Implement the feature in development environment
2. Test thoroughly with sample data
3. Deploy to staging for extended testing
4. Create documentation for the notebook feature
5. Roll out to production with automatic migration for existing users 