# Rename API Routes & Components

## Why

Current names are misleading (`/api/search` is _chat_, `/api/raycast` is _search_). Consistent naming improves DX.

## Mapping

| Old            | New            |
| -------------- | -------------- |
| `/api/search`  | `/api/ai`      |
| `/api/raycast` | `/api/search`  |
| `/api/study/*` | `/api/learn/*` |

Components:

| Old                  | New                    |
| -------------------- | ---------------------- |
| `app/ChatClient.tsx` | `app/NeumanClient.tsx` |
| `app/actions.ts`     | `app/ai-actions.ts`    |

## Steps

1. **Duplicate** old route file to new path, adjust imports.
2. Add 308 redirect in old file:
   ```ts
   export async function ALL() {
     return NextResponse.redirect('/api/ai', 308);
   }
   ```
3. Grep-replace internal fetches:  
   `grep -Rl "/api/search" | xargs sed -i '' 's/\/api\/search/\/api\/ai/g'`
4. Rename components with IDE “rename symbol” to update imports.
5. Delete old files after CI pass.

## Checklist

- GET `/api/search` → 308 to `/api/ai`.
- Raycast extension uses `/api/search` (new behaviour).

Commit: `refactor: route + component rename`
