# Input Content Box Implementation

This document tracks the implementation of a simplified input content box component using terminal-chat components.

## Objectives
- Set the default model to Google Gemini 2.5 Flash
- Replace the existing form-component with terminal-chat components to create a minimal input interface with:
  - Single-line input field
  - Send button
  - Upload button

## Implementation Plan

### Phase 1: Terminal-Chat Component Integration
- Copy the necessary components from terminal-chat project to our project
- Adapt these components to work with our existing application logic

### Phase 2: Default Model Setting
- Modify the model configuration to set Google Gemini 2.5 Flash as the default model

### Phase 3: Cleanup
- Remove terminal-chat files after successful integration

## Tasks

### In Progress Tasks
- [x] Remove all existing input components and show the result
- [x] Copy required terminal-chat components to our project
- [x] Adapt components to work with our existing application
- [x] Set Google Gemini 2.5 Flash as the default model
- [x] Ensure compatibility with existing file upload functionality
- [x] Test the integrated components
- [x] Clean up by removing terminal-chat files after integration
- [x] Replace upload button and send button with a minimalistic send icon, and ensure messages can be sent by pressing Enter

## Step-by-Step Action Plan

1. **Remove All Existing Input Components**
   - Identify and remove the current input components
   - Create a demonstration of the application without input components
   - Show the result to verify the removal before proceeding with new implementation
   - This ensures a clean slate for the new implementation

2. **Create Backup of Existing Components**
   - Create backups of the current `form-component.tsx` file and any other files that will be modified
   - This allows for easy reversal if needed

3. **Copy Required Terminal-Chat Components**
   - Copy the following files from the terminal-chat project:
     - `terminal-chat/components/terminal-input.tsx` → `components/terminal-input.tsx`
     - `terminal-chat/components/chat-message.tsx` → `components/chat-message.tsx`
     - `terminal-chat/components/command-panel.tsx` → `components/command-panel.tsx`
   - Copy any additional component files needed (clear-confirmation.tsx, help-panel.tsx, etc.)

4. **Modify Terminal-Input Component**
   - Update the `terminal-input.tsx` component to:
     - Add file upload button similar to the existing form component
     - Integrate with our existing attachment handling logic
     - Update styling to match our application design

5. **Create Integration Component**
   - Create a new component that will replace form-component.tsx
   - This component will integrate terminal-input with our existing application
   - Ensure it maintains the same props interface as the current FormComponentProps
   - Example structure:
     ```tsx
     import { TerminalInput } from "./terminal-input";
     
     const FormComponent: React.FC<FormComponentProps> = ({
       input,
       setInput,
       attachments,
       setAttachments,
       handleSubmit,
       fileInputRef,
       // ...other props
     }) => {
       // Integration logic
       return (
         <div className="terminal-form-wrapper">
           <TerminalInput 
             value={input}
             onChange={setInput}
             onSubmit={handleSubmit}
             // ...pass other required props
           />
           {/* File upload button */}
         </div>
       );
     };
     ```

6. **Update Model Configuration**
   - Locate the models array definition (likely in the terminal-input component or a related file)
   - Modify the order to place "neuman-google" (Gemini 2.5 Flash) as the first/default model
   - Update any related model selection logic

7. **Styling and UI Refinements**
   - Update the styling of the terminal-input to match our application
   - Ensure responsive design on different screen sizes
   - Maintain accessibility features

8. **Connect to Existing Application Logic**
   - Update how the new components interact with message state
   - Ensure file upload functionality works correctly
   - Make sure the command system integrates with our existing application

9. **Testing**
   - Test that model selection works correctly with Gemini 2.5 Flash as default
   - Verify that text input and submission work
   - Test file uploads
   - Ensure commands work correctly
   - Test on different screen sizes to verify responsive design

10. **Cleanup: Remove Terminal-Chat Files**
    - After successful integration and testing, remove the original terminal-chat files
    - This step ensures we don't have duplicate code in the project
    - Files to consider removing:
      - Original terminal-chat directory if it's no longer needed
      - Any temporary files created during the integration process
    - Ensure dependencies are updated if necessary

## File Modifications Required

1. **New Files to Create:**
   - `components/terminal-input.tsx` - Adapted from the reference project
   - `components/chat-message.tsx` - For message rendering
   - `components/command-panel.tsx` - For command handling
   - Additional support components (help-panel, clear-confirmation, etc.)

2. **Files to Modify:**
   - `components/ui/form-component.tsx` - Either replace completely or modify to use new components

3. **Implementation Approach:**
   - Remove all existing input components and demonstrate the result
   - Create all necessary new files first
   - Adapt them to work with our existing application
   - Then update or replace form-component.tsx
   - After successful integration, remove original terminal-chat files

## File Integration Details

### terminal-input.tsx
```tsx
// Key adaptations needed:
// 1. Add file upload button
// 2. Connect to existing message state
// 3. Maintain compatibility with FormComponentProps interface
```

### chat-message.tsx
```tsx
// Will need to adapt this to work with our message format
// Ensure styling matches our application
```

### command-panel.tsx
```tsx
// Needs to integrate with our existing command handling
// May need to add additional commands for our specific application
``` 