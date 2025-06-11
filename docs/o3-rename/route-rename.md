# Rename API Routes & Components

## Why

Current names are misleading (`/api/chat` is _chat_). Consistent naming improves DX.

## Mapping

| Old            | New            |
| -------------- | -------------- |
| `/api/chat`  | `/api/ai`      |

## Steps

1. **Duplicate** old route file to new path, adjust imports.
2. Add 308 redirect in old file:
   ```ts
   export async function ALL() {
     return NextResponse.redirect('/api/ai', 308);
   }
   ```
3. Grep-replace internal fetches:  
   `grep -Rl "/api/chat" | xargs sed -i '' 's/\/api\/search/\/api\/ai/g'`
4. Rename components with IDE “rename symbol” to update imports.
5. Delete old files after CI pass.

## Checklist

- GET `/api/chat` → 308 to `/api/ai`.

Commit: `refactor: route + component rename`
