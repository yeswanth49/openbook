# Task: Next.js App-Router Skeleton & Tailwind Upgrade

Context: Implementation_Plan.md – Phase 2, Task 2C.

Objectives

• Introduce `/app` directory with a minimal layout.  
• Compose global providers in a single `_providers.tsx` module.  
• Upgrade Tailwind to v4 **add-only** – no changes to existing class names.

Implementation Steps

1. Create `app/layout.tsx`:

   ```tsx
   import Providers from './_providers';

   export const metadata = { title: 'OpenBook' };

   export default function RootLayout({ children }: { children: React.ReactNode }) {
     return (
       <html lang="en" suppressHydrationWarning>
         <body>
           <Providers>{children}</Providers>
         </body>
       </html>
     );
   }
   ```

2. Extract existing provider composition (SpacesProvider, NotebookProvider, ThemeProvider…) into `app/_providers.tsx`.

3. Add `app/page.tsx` placeholder returning “hello”.

4. Tailwind upgrade:  
   • `pnpm install tailwindcss@latest postcss@latest autoprefixer@latest`  
   • Generate `tailwind.config.js` via `npx tailwindcss init -p` and merge current plugin section.  
   • Keep all old utility classes; only add new ones.

5. Verify build with `pnpm dev` and ensure no class names break in rendered HTML.

Acceptance Checklist

✓ Visiting `/` renders page without style regressions.  
✓ Running `npx browserslist@latest --update-db` still returns 0 vulnerabilities.  
✓ `pnpm build` passes.

Commit: `chore(app): scaffold App Router + Tailwind v4 upgrade`.
