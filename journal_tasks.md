# Journal Interface Implementation

This document outlines the plan to implement and enhance the journaling functionality in the OpenBook application.

## Completed Tasks

- [x] Initial journal feature setup
- [x] Basic daily journal entry creation
- [x] Journal entry rendering system established
- [x] Implement calendar view for journal navigation
- [x] Add date-based journal entry filtering
- [x] Implement markdown support for journal entries
- [x] Add journal entry saving and auto-save functionality
- [x] Implement journal search capability
- [x] Add journal entry metadata tracking
- [x] Improve mobile responsiveness for journal interface
- [x] Implement minimalistic styling for journal entries in sidebar
  - [x] Reduce visual complexity of journal entry names
  - [x] Create consistent styling with subtle visual elements
  - [x] Implement minimalistic metadata display
  - [x] Add subtle hover effects and transitions
- [x] **AI-Assisted Journal Implementation**
  - [x] **"Explain Selected Blocks" feature with AI integration**
    - [x] Implement text selection handling in journal editor
    - [x] Create AI assistant panel component with streaming responses
    - [x] Add explanation request system with context-aware prompts
    - [x] Build explanation display with copy functionality
  - [x] **"Ask in Space" direct conversation feature**
    - [x] Integrate with existing Spaces API and context
    - [x] Create seamless transitions between journal and conversation
    - [x] Add journal context attachment to conversations
  - [x] **"Suggest Content" functionality for blocks**
    - [x] Implement context-aware prompt generation for suggestions
    - [x] Add surrounding block context collection
    - [x] Build content insertion system with apply/create options
    - [x] **"Add to Journal" button in spaces**
      - [x] Create add-to-journal-button component for conversation strips
      - [x] Implement automatic journal entry creation/updating
      - [x] Add visual feedback and navigation to journal entries
      - [x] Integrate button into spaces message display

## In Progress Tasks

- [ ] Enhancing editor block functionality
  - [ ] Enable content persistence across page loads
  - [ ] Implement improved block navigation with keyboard shortcuts
  - [ ] Add block drag-and-drop reordering

## Future Tasks

- [ ] Add AI-assisted journal 
  - [ ] Implement "Explain Selected Blocks" feature with AI integration
  - [ ] Create "Ask in Space" direct conversation feature 
  - [ ] Develop "Ask AI to Fill This Block" functionality
- [ ] Add image and attachment support for journal entries
- [ ] Implement journal entry export functionality
- [ ] Implement journal templates for different entry types
- [ ] Add tagging system for journal entries

## Implementation Plan

### 1. Block Editor Enhancements

- [ ] Extend current editor component
  - [ ] Implement persistent state for editor blocks
  - [ ] Add autosave to localStorage
  - [ ] Create block-level undo/redo functionality
- [ ] Improve navigation
  - [ ] Add keyboard shortcuts for navigating between blocks
  - [ ] Implement tab-based indentation for nested lists
  - [ ] Create keyboard shortcuts guide
- [ ] Add drag-and-drop functionality
  - [ ] Implement visual indicators for drag operations
  - [ ] Add block position tracking
  - [ ] Enable smooth animations for reordering

### 2. AI-Assisted Journal Implementation

#### A. Preparation Phase

- [ ] Set up API integration
  - [ ] Create API service for AI requests (use google ai sdk, groq api)
  - [ ] Implement authentication and API key management
  - [ ] Add rate limiting and error handling
- [ ] Design UI components
  - [ ] Create AI assistant panel component
  - [ ] Design selection highlighting system
  - [ ] Implement response rendering with markdown support

#### B. "Explain Selected Blocks" Feature

- [ ] Implement text selection handling
  - [ ] Add selection detection in journal editor
  - [ ] Create context menu for selected text
  - [ ] Implement selection highlighting
- [ ] Build explanation request system
  - [ ] Create prompt template for explanations
  - [ ] Add streaming response handling
  - [ ] Implement error states and fallbacks
- [ ] Design explanation display
  - [ ] Create modal component for explanations
  - [ ] Add copy/save functionality
  - [ ] Implement loading states

#### C. "Ask in Space" Conversation Feature

- [ ] Integrate with existing Spaces API
  - [ ] Update SpacesContext to support journal conversations
  - [ ] Create conversation state management
  - [ ] Add journal context attachment to conversations
- [ ] Build conversation UI
  - [ ] Extend existing conversation components
  - [ ] Add journal-specific conversation templates
  - [ ] Create smooth transitions between journal and conversation

#### D. "Ask AI to Fill This Block" Functionality

- [ ] Implement block-level assistance
  - [ ] Create context-aware prompt generation
  - [ ] Add surrounding block context collection
  - [ ] Build content insertion system
- [ ] Add user controls
  - [ ] Create tone/style selection component
  - [ ] Add length control options
  - [ ] Implement content type selection

### 3. Image and Attachment Support

- [ ] Extend Block system
  - [ ] Add image block type
  - [ ] Create attachment block type
  - [ ] Update editor to handle media blocks
- [ ] Implement media handling
  - [ ] Add image upload functionality
  - [ ] Create file attachment system
  - [ ] Implement image resizing and alignment
- [ ] Add storage solution
  - [ ] Implement client-side storage for small files
  - [ ] Add cloud storage option for larger files
  - [ ] Create media library management

### 4. Export Functionality

- [ ] Design export options
  - [ ] Implement Markdown export
  - [ ] Add PDF export capability
  - [ ] Create HTML export option
- [ ] Build export UI
  - [ ] Create export settings component
  - [ ] Add format selection interface
  - [ ] Implement progress indicators
- [ ] Add sharing options
  - [ ] Implement direct link sharing
  - [ ] Add social media integration
  - [ ] Create email sharing capability

### 5. Journal Templates

- [ ] Design template system
  - [ ] Create template data structure
  - [ ] Add template management UI
  - [ ] Implement template preview
- [ ] Build core templates
  - [ ] Daily reflection template
  - [ ] Gratitude journal template
  - [ ] Goal planning template
  - [ ] Project tracking template
- [ ] Add customization
  - [ ] Create template editor
  - [ ] Implement custom field support
  - [ ] Add template import/export

### 6. Tagging System

- [ ] Design tag architecture
  - [ ] Create tag data structure
  - [ ] Implement tag storage
  - [ ] Add tag management system
- [ ] Build tagging UI
  - [ ] Add tag creation interface
  - [ ] Implement tag assignment to entries
  - [ ] Create tag visualization
- [ ] Implement tag functionality
  - [ ] Add tag-based filtering
  - [ ] Create tag search capability
  - [ ] Implement tag statistics

## Technical Components

### Core Components to Update

1. **Journal Hook (`useJournal.ts`)**
   - Add support for block-level persistence
   - Implement tagging functionality
   - Add template support

2. **Journal Editor (`components/journal/editor/editor.tsx`)**
   - Extend with drag-and-drop capabilities
   - Add AI integration points
   - Implement image/attachment handling

3. **Journal Sidebar (`components/journal/JournalSidebar.tsx`)**
   - Add tag filtering
   - Implement template selection
   - Create AI assistant access point

4. **Types (`lib/types.ts`)**
   - Extend Block types for media content
   - Add tag-related types
   - Create template interfaces

### New Components to Create

1. **AI Integration Components**
   - `components/journal/ai-assistant/selection-handler.tsx`
   - `components/journal/ai-assistant/explanation-modal.tsx`
   - `components/journal/ai-assistant/block-assistant.tsx`

2. **Media Components**
   - `components/journal/media/image-block.tsx`
   - `components/journal/media/attachment-block.tsx`
   - `components/journal/media/media-picker.tsx`

3. **Template System**
   - `components/journal/templates/template-selector.tsx`
   - `components/journal/templates/template-editor.tsx`
   - `components/journal/templates/template-preview.tsx`

4. **Export and Sharing**
   - `components/journal/export/export-modal.tsx`
   - `components/journal/export/format-selector.tsx`
   - `components/journal/export/share-options.tsx`

5. **Tagging System**
   - `components/journal/tags/tag-manager.tsx`
   - `components/journal/tags/tag-selector.tsx`
   - `components/journal/tags/tag-filter.tsx`

## Implementation Approach

### Phase 1: Core Improvements (2-3 weeks)
Focus on enhancing the existing editor with better block handling, drag-and-drop, and persistence to create a solid foundation for future features.

### Phase 2: AI Integration (3-4 weeks)
Implement AI capabilities to enhance the journaling experience while ensuring all functionality degrades gracefully when AI is unavailable.

### Phase 3: Media Support and Export (2-3 weeks)
Add support for images, attachments, and export functionality to improve the versatility of journal entries.

### Phase 4: Templates and Tags (2-3 weeks)
Implement template system and tagging to enhance organization and provide structured journaling options.

## Development Guidelines

1. **Progressive Enhancement**
   - Ensure all features work without AI before adding AI capabilities
   - Implement features incrementally with working milestones

2. **Performance Focus**
   - Prioritize client-side performance for large journal entries
   - Use virtualization for long entries with many blocks
   - Implement efficient persistence strategies

3. **Accessibility**
   - Ensure keyboard navigation throughout the journal interface
   - Maintain ARIA attributes for screen readers
   - Test with various assistive technologies

4. **Mobile-First**
   - Design all new features with mobile compatibility in mind
   - Test on various device sizes throughout development
   - Optimize touch interactions for block manipulation

## Modified Files

- `/components/journal-editor.tsx` - Main journal editing interface
- `/components/journal-calendar.tsx` - Date navigation component
- `/components/journal-metadata.tsx` - Metadata display components
- `/components/journal-search.tsx` - Search interface for journal entries
- `/contexts/JournalContext.tsx` - Journal data management
- `/lib/journal-utils.ts` - Utilities for journal management
- `/components/sidebar.tsx` - Updated to display journal entries with minimalistic styling

## Future Improvements

1. **Journal Templates**:
   - Create pre-designed templates for different journaling purposes
   - Implement template selection interface
   - Allow saving custom templates

2. **Tagging System**:
   - Add ability to tag journal entries
   - Implement tag-based filtering and search
   - Create tag management interface

3. **Journal Insights**:
   - Implement analytics dashboard for journal activity
   - Show writing trends and patterns
   - Provide mood and topic analysis

4. **Sharing Capabilities**:
   - Add ability to share specific journal entries
   - Implement privacy controls for shared entries
   - Create shareable journal digests

5. **Version History**:
   - Track changes to journal entries over time
   - Allow viewing and restoring previous versions
   - Visualize writing evolution 