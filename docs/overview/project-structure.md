# Project Structure

## Overview

This document provides an overview of the OpenBook project structure and organization. Understanding this structure is essential for new developers to navigate the codebase effectively.

## Root Directory Structure

```
openbook/
├── app/                  # Next.js application
│   ├── api/              # API routes
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── ui/               # UI components
│   └── core/             # Core application components
├── contexts/             # React contexts
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and libraries
├── public/               # Static assets
├── types/                # TypeScript type definitions
├── docs/                 # Documentation
├── .next/                # Next.js build output (generated)
├── node_modules/         # Dependencies (generated)
├── package.json          # Project dependencies and scripts
└── next.config.js        # Next.js configuration
```

## Key Directories In Detail

### `/app` Directory

The `/app` directory contains the Next.js App Router structure:

```
app/
├── api/                  # Backend API routes
│   ├── search/           # Search API
│   ├── upload/           # File upload API
│   ├── proxy-image/      # Image proxy API
│   ├── clean_images/     # Image maintenance API
│   └── raycast/          # Raycast integration API
├── ChatClient.tsx        # Main chat client component
├── actions.ts            # Server actions
├── layout.tsx            # Root layout with providers
├── page.tsx              # Home page component
├── providers.tsx         # Provider wrapper components
└── globals.css           # Global CSS styles
```

### `/components` Directory

The `/components` directory contains all React components:

```
components/
├── ui/                   # UI components
│   ├── form-component.tsx # Main form component
│   ├── button.tsx        # Button component
│   ├── input.tsx         # Input component
│   ├── card.tsx          # Card component
│   └── ...               # Other UI components
├── core/                 # Core application components
│   ├── search-results.tsx # Search results display
│   └── ...               # Other core components
├── messages.tsx          # Message display components
├── message.tsx           # Individual message component
├── sidebar.tsx           # Sidebar navigation component
├── reason-search.tsx     # Reason search implementation
└── markdown.tsx          # Markdown rendering component
```

### `/api` Directory

The `/api` directory within the app folder contains all API routes:

```
app/api/
├── search/               # Search functionality
│   └── route.ts          # Search API handler
├── upload/               # File upload handling
│   └── route.ts          # Upload API handler
├── proxy-image/          # Image proxy to avoid CORS
│   └── route.ts          # Proxy image handler
├── clean_images/         # Image maintenance
│   └── route.ts          # Clean images handler
└── raycast/              # Raycast integration
    └── route.ts          # Raycast API handler
```

### `/contexts` Directory

The `/contexts` directory contains React contexts for state management:

```
contexts/
└── SpacesContext.tsx     # Context for spaces management
```

### `/hooks` Directory

The `/hooks` directory contains custom React hooks:

```
hooks/
├── useJournal.ts         # Hook for journal functionality
├── use-local-storage.tsx # Local storage hook
├── use-media-query.tsx   # Media query hook
└── use-window-size.tsx   # Window size hook
```

### `/lib` Directory

The `/lib` directory contains utility functions and libraries:

```
lib/
├── types.ts              # Common type definitions
└── utils.ts              # Utility functions
```

## Key Files

### Configuration Files

- `next.config.js`: Next.js configuration including API rewrites and environment variables
- `package.json`: Project dependencies and scripts
- `tsconfig.json`: TypeScript configuration
- `eslint.config.mjs`: ESLint configuration
- `postcss.config.mjs`: PostCSS configuration for Tailwind
- `components.json`: Component configuration for the UI system

### Entry Points

- `app/layout.tsx`: Root layout that includes global providers
- `app/page.tsx`: Main page component
- `app/ChatClient.tsx`: Main chat client implementation

## Code Organization

### Component Pattern

Components follow a consistent pattern:

```tsx
// components/ui/example.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface ExampleProps {
  children: React.ReactNode;
  className?: string;
  // Other props...
}

export function Example({ children, className, ...props }: ExampleProps) {
  return (
    <div className={cn('base-styles', className)} {...props}>
      {children}
    </div>
  );
}
```

### API Route Pattern

API routes follow a consistent pattern using the App Router:

```tsx
// app/api/example/route.ts
export async function GET(req: Request) {
  // Handle GET request
  return new Response(JSON.stringify({ data: 'example' }), {
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function POST(req: Request) {
  // Handle POST request
  const body = await req.json();
  
  // Process request
  
  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
```

## Module Imports

The project uses path aliases for cleaner imports:

```tsx
// Instead of relative imports like:
import { Button } from '../../../components/ui/button';

// We use path aliases:
import { Button } from '@/components/ui/button';
```

The path aliases are configured in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

## State Management

State management is handled through a combination of:

1. React Context API for global state
2. React Hooks (`useState`, `useReducer`) for component state
3. Custom hooks for reusable stateful logic

## Styling Approach

The project uses Tailwind CSS for styling with the following organization:

1. Global styles in `app/globals.css`
2. Component-specific styles using Tailwind utility classes
3. The `cn` utility function for conditional class name merging

## Build and Deployment

The project is configured for deployment on Vercel with:

- `next.config.js` for build configuration
- `vercel.json` for Vercel-specific settings

## Documentation

The `/docs` directory contains comprehensive documentation:

```
docs/
├── overview.md           # Documentation index
├── ai-models.md          # AI models documentation
├── form-component.md     # Form component documentation
├── search-functionality.md # Search functionality documentation
└── ...                   # Other documentation files
```

## Related Resources

- [Environment Setup](./environment-setup.md) - Development environment configuration
- [API Routes](./api-routes.md) - Detailed API documentation
- [UI Components](./ui-components.md) - UI component library documentation 