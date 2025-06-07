# Harden Public Upload Endpoint

Target file: `app/api/upload/route.ts`

## Why

Uploads are unauthenticated and unlimited, allowing cost-abuse and malware
distribution.

## Implementation Steps

1. **Require authentication**

   - Use existing auth middleware (`lib/auth.ts`) or add simple bearer check.
   - Return 401 if not authenticated.

2. **Validate file size & type**

   ```ts
   import { fileTypeFromBlob } from 'file-type';

   if (file.size > 4 * 1024 * 1024) return NextResponse.json({ error: 'too big' }, { status: 413 });
   const { mime } = await fileTypeFromBlob(file);
   const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
   if (!allowed.includes(mime)) return NextResponse.json({ error: 'bad type' }, { status: 415 });
   ```

3. **Keep public access but randomise path**  
   Prefix path with userId/date to avoid enumeration.

4. **(Harden) AV scan**  
   Upload temporarily with `access:'private'`, call external AV API, then
   promote to `public` if clean.

## Acceptance Checklist

- Un-authed request ➜ 401.
- 5 MB jpeg ➜ 413.
- 3 MB pdf ➜ 415.
- Valid 500 KB png ➜ 200 + JSON `{ url:"…" }`.

Commit: `feat(upload): auth & validation`
