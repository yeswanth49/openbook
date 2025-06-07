# API Route & Component Rename Implementation

This document tracks the progress of renaming API routes and components for better consistency.

## Completed Tasks

- [x] Create `/api/ai` route by duplicating `/api/search/route.ts`
- [x] Create `/api/search` route by duplicating `/api/raycast/route.ts`
- [x] Create `/api/learn/*` routes by duplicating `/api/study/*` routes
- [x] Update API endpoints in `/api/learn/*` routes to point to `/api/ai`
- [x] Add 308 redirects in old route files
- [x] Update references in `ChatClient.tsx` from `/api/search` to `/api/ai`
- [x] Update references in `ChatClient.tsx` from `/api/study` to `/api/learn`
- [x] Create `NeumanClient.tsx` from `ChatClient.tsx`
- [x] Create `ai-actions.ts` from `actions.ts`
- [x] Update imports in `page.tsx` to use `NeumanClient`
- [x] Update imports in client files to use `ai-actions.ts`
- [x] Add deprecation comments to old files

## Future Tasks

- [ ] Delete old files after CI pass:
  - [ ] `/app/ChatClient.tsx`
  - [ ] `/app/actions.ts`
  - [ ] `/app/api/search/route.ts` (after redirect period)
  - [ ] `/app/api/raycast/route.ts` (after redirect period)
  - [ ] `/app/api/study/*` (after redirect period)

## Implementation Notes

- Redirects (308) are in place to ensure backward compatibility
- All internal API fetches now use the new endpoints
- Component renames maintain the same functionality but with more consistent naming

## Relevant Files

- `/app/api/ai/route.ts` - New AI chat endpoint (was `/api/search`)
- `/app/api/search/route.ts` - New search endpoint (was `/api/raycast`)
- `/app/api/learn/*` - New learning endpoints (was `/api/study/*`)
- `/app/NeumanClient.tsx` - New client component (was `ChatClient.tsx`)
- `/app/ai-actions.ts` - New actions file (was `actions.ts`)
