# Add Global Rate-Limiting & Logging

Target: `middleware.ts` (new file) + Util libs.

## Why

High-cost endpoints (`/api/ai`, `/api/proxy-image`, `/api/upload`) are
unauthenticated and can be hammered. Need IP-based throttling.

## Steps

1. **Create KV store**  
   Use Upstash Redis or Vercel KV (edge-compatible).

2. **Implement edge middleware**

   ```ts
   export const config = { matcher: ['/api/:path*'] };

   import { kv } from '@vercel/kv';
   const WINDOW = 60; // seconds
   const LIMIT = 60; // requests

   export default async function middleware(req: NextRequest) {
     const ip = req.ip ?? 'unknown';
     const key = `ratelimit:${ip}`;
     const count = (await kv.incr(key)) ?? 0;
     if (count === 1) await kv.expire(key, WINDOW);
     if (count > LIMIT) {
       return NextResponse.json({ error: 'Too many' }, { status: 429 });
     }
   }
   ```

3. **Structured logging**  
   Wrap `NextResponse` to log JSON (ip, ua, path, status, ms) to stdout; ship
   via Vercel Log Drains.

Checklist:

- > 60 requests/min to `/api/ai` ➜ 429.
- All responses include `x-ratelimit-remaining` header.

Commit: `feat(rate-limit): global edge throttle`
