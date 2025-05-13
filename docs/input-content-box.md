# Input Content Box Implementation

This document tracks the implementation of a simplified input content box component.

## Objectives
- Set the default model to Google Gemini 2.5 Flash
- Simplify the existing form component to a minimal version with:
  - Single-line input field
  - Send button
  - Upload button

## Implementation Plan

### Phase 1: Default Model Setting
- Modify the models configuration in `form-component.tsx` to set Google Gemini 2.5 Flash as the default model
- Update any related model selection logic

### Phase 2: Input Component Simplification
- Simplify the existing form component's structure
- Remove unnecessary features while maintaining core functionality
- Keep only input field, send button, and upload button
- Ensure compatibility with existing message handling system

### Relevant Files
- `components/ui/form-component.tsx` - Main component to be modified
- `components/ui/input.tsx` - May be used for the simplified input field
- `components/ui/button.tsx` - Used for send and upload buttons

## Tasks

### In Progress Tasks
- [ ] Set Google Gemini 2.5 Flash as the default model
- [ ] Simplify form component to basic input line with send and upload buttons
- [ ] Ensure compatibility with existing file upload functionality
- [ ] Test simplified component with the application

### Technical Details

#### Component Structure
The simplified component will:
1. Use a single-line input rather than the current textarea
2. Maintain file upload capability
3. Keep send button functionality
4. Remove excess UI elements while preserving core functionality

#### API Compatibility
The component should maintain the same props interface to ensure it works with the existing application:
```tsx
interface FormComponentProps {
    input: string;
    setInput: (input: string) => void;
    attachments: Array<Attachment>;
    setAttachments: React.Dispatch<React.SetStateAction<Array<Attachment>>>;
    handleSubmit: (event?: {preventDefault?: () => void}, chatRequestOptions?: ChatRequestOptions) => void;
    fileInputRef: React.RefObject<HTMLInputElement>;
    inputRef: React.RefObject<HTMLTextAreaElement>;
    // Other required props...
}
```

## Step-by-Step Action Plan

1. **Set Default Model to Google Gemini 2.5 Flash**
   - Locate the models array in `components/ui/form-component.tsx`
   - Update default model ordering to place "neuman-google" (Gemini 2.5 Flash) first in the models array
   - Verify any model selection logic is updated accordingly

2. **Create Backup of Existing Component**
   - Create a backup of the current `form-component.tsx` file before making changes
   - This allows for easy reversal if needed

3. **Remove Unnecessary UI Elements**
   - Remove group selector UI and related functionality
   - Remove model switcher dropdown from UI while preserving the model selection logic
   - Remove any unnecessary containers and wrappers
   - Preserve essential functionality like text input and file uploads

4. **Simplify the Input Field**
   - Modify the textarea component to be more compact
   - Consider replacing textarea with a single-line input if appropriate
   - Maintain key event handlers (e.g., for Enter key submission)

5. **Simplify Button Layout**
   - Maintain the send button with its existing functionality
   - Keep the file upload button with its functionality
   - Arrange these in a clean, minimal layout

6. **Refine Styling**
   - Update CSS/Tailwind classes for a more minimalist appearance
   - Ensure responsive behavior on different screen sizes
   - Maintain accessibility features

7. **Testing**
   - Test that model selection works correctly with default set to Gemini 2.5 Flash
   - Verify that all essential functionality works:
     - Text input and submission
     - File uploads
     - Message handling
   - Test on different screen sizes to ensure responsive design

8. **Documentation**
   - Update this document with completed tasks
   - Document any changes to component interface or behavior

## File Modifications Required

1. **components/ui/form-component.tsx**
   - Primary file to modify
   - Reorder models array to set Gemini 2.5 Flash as default
   - Simplify component structure
   - Update styling for minimalist appearance

2. **No new files needed**
   - This implementation will modify existing components rather than creating new ones
   - Will leverage existing UI components like `button.tsx` and `input.tsx`

## Project Structure Comparison

### Reference Project Structure
The reference project has a well-organized structure with:
- App router approach with `app/` directory
- Separate `components/` and `components/ui/` directories
- Well-defined UI component library including:
  - Basic form controls (input, textarea, button)
  - Layout components (accordion, card, dialog)
  - Navigation components (breadcrumb, menu)
  - Interactive elements (dropdown, command)
- Shared hooks in a dedicated `hooks/` directory
- Global styling in `styles/globals.css`

### Our Project Structure
Our project shares similar organization:
- Components in `components/` with UI components in `components/ui/`
- UI components match many of those in the reference project (button, input, textarea, dialog)
- We have hooks in a separate `hooks/` directory

### Component Compatibility
The reference project includes:
- `terminal-input.tsx` - Possibly a specialized input for terminal-like commands
- `terminal-chat.tsx` - Potentially handling terminal-style chat interfaces

Our project uses:
- `form-component.tsx` - A complex form component we need to simplify
- Standard UI components like `input.tsx` and `button.tsx`

### Implementation Strategy
Based on the comparison:
1. We don't need to add any new files from the reference project
2. We can leverage our existing UI components to achieve the simplified design
3. Our implementation will focus on modifying the existing `form-component.tsx` rather than creating new components

This strategy aligns with our project structure while achieving the goal of simplifying the input form to a clean, minimal interface with just input field, send button, and upload button. 