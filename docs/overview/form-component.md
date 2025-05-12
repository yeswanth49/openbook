# Form Component System

## Overview

The Form Component is the primary interface through which users interact with OpenBook. It manages text input, file attachments, and form submission. This document details the implementation and features of the form component system.

## Key Features

- Text input for queries and conversations
- File attachments (particularly images)
- Drag-and-drop file upload
- Clipboard paste support
- Form validation
- Real-time feedback

## Component Structure

The form component is implemented in `components/ui/form-component.tsx` and consists of several sub-components:

```
FormComponent
├── TextInput
├── AttachmentArea
│   ├── FileUpload
│   ├── DragDropZone
│   └── AttachmentPreview
├── ModelSelector
├── SubmitButton
└── FormFeedback
```

## Usage Example

```tsx
import { FormComponent } from '@/components/ui/form-component';

export default function ChatPage() {
  const handleSubmit = async (data) => {
    // Handle form submission
  };

  return (
    <div className="container">
      <FormComponent
        onSubmit={handleSubmit}
        allowAttachments={true}
        supportedFileTypes={['image/jpeg', 'image/png', 'image/gif']}
        maxAttachments={4}
      />
    </div>
  );
}
```

## Props API

| Prop | Type | Description | Default |
|------|------|-------------|---------|
| `onSubmit` | `(data: FormData) => Promise<void>` | Form submission handler | Required |
| `allowAttachments` | `boolean` | Enable file attachments | `true` |
| `supportedFileTypes` | `string[]` | Array of MIME types | `['image/*', 'application/pdf']` |
| `maxAttachments` | `number` | Maximum attachments allowed | `10` |
| `placeholder` | `string` | Text input placeholder | `"Type your message..."` |
| `initialValue` | `string` | Initial text value | `""` |
| `isDisabled` | `boolean` | Disable the form | `false` |
| `showModelSelector` | `boolean` | Show model selection | `true` |

## File Attachment Handling

The form component supports various methods for file attachments:

### 1. File Input

```tsx
<input
  type="file"
  multiple
  accept={supportedFileTypes.join(',')}
  onChange={handleFileChange}
  className="hidden"
  ref={fileInputRef}
/>
```

### 2. Drag and Drop

```tsx
<div
  className={`${isDragging ? 'bg-blue-50' : ''} border-2 border-dashed...`}
  onDragOver={handleDragOver}
  onDragLeave={handleDragLeave}
  onDrop={handleDrop}
>
  Drop files here
</div>
```

### 3. Clipboard Paste

```tsx
useEffect(() => {
  const handlePaste = (e: ClipboardEvent) => {
    if (e.clipboardData?.files?.length) {
      handleFiles(Array.from(e.clipboardData.files));
    }
  };

  document.addEventListener('paste', handlePaste);
  return () => document.removeEventListener('paste', handlePaste);
}, []);
```

## Form Validation

The form uses React Hook Form and Zod for validation:

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  message: z.string().min(1, "Message can't be empty"),
  attachments: z.array(z.any()).optional(),
});

const form = useForm({
  resolver: zodResolver(formSchema),
  defaultValues: {
    message: initialValue || '',
    attachments: [],
  },
});
```

## Attachment Preview

The AttachmentPreview component shows thumbnails of attached files with metadata:

```tsx
<div className="flex flex-wrap gap-2 mt-2">
  {attachments.map((file, index) => (
    <AttachmentPreview 
      key={index}
      file={file}
      onRemove={() => removeAttachment(index)}
    />
  ))}
</div>
```

## Integration with AI Models

The form component integrates with the AI model system by including a model selector:

```tsx
{showModelSelector && (
  <ModelSwitcher 
    selectedModel={selectedModel}
    onChange={handleModelChange}
    disabled={isLoading}
  />
)}
```

The ModelSwitcher component filters available models based on capabilities, such as showing only vision-capable models when images are attached.

## Streaming Response Handling

When a form is submitted, it can trigger a streaming response from the AI:

```tsx
const handleSubmit = async (data) => {
  setIsLoading(true);
  
  try {
    const response = await fetch('/api/search', {
      method: 'POST',
      body: JSON.stringify({
        query: data.message,
        model: selectedModel,
        attachments: data.attachments,
      }),
    });
    
    if (response.body) {
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        const chunk = decoder.decode(value);
        setStreamingResponse(prev => prev + chunk);
      }
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    setIsLoading(false);
  }
};
```

## Notifications and Feedback

The form provides user feedback through notifications:

```tsx
{errorMessage && (
  <div className="text-red-500 text-sm mt-2">
    {errorMessage}
  </div>
)}

{successMessage && (
  <div className="text-green-500 text-sm mt-2">
    {successMessage}
  </div>
)}
```

## Styling

The form component uses Tailwind CSS for styling:

```tsx
<form 
  onSubmit={form.handleSubmit(onSubmit)} 
  className="bg-white rounded-lg shadow-md p-4 max-w-3xl mx-auto"
>
  {/* Form content */}
</form>
```

## Accessibility Considerations

The form component includes several accessibility features:

- ARIA labels for all inputs
- Keyboard navigation support
- Focus management
- Screen reader compatible error messages

## Related Components

- [AttachmentPreview](./ui-components.md#attachment-preview) - Shows previews of attached files
- [ModelSwitcher](./ui-components.md#model-switcher) - Allows selection of different AI models
- [Upload API](./api-routes.md#upload-api) - Handles file uploads initiated from the form 