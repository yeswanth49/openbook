# Fix SSRF & DoS in /api/proxy-image

Target file: `app/api/proxy-image/route.ts`

## Why

- Any external URL can currently be fetched by the server – including the
  cloud-provider metadata service and internal network hosts (SSRF).
- Response bodies are fully buffered via `await response.blob()`, allowing an
  attacker to exhaust memory or edge-CPU (DoS).

## Implementation Steps (GPT-4.1 ready)

1. **Parse & validate URL**

   ```ts
   const parsed = new URL(url);
   if (!isPublicHostname(parsed.hostname)) {
     return NextResponse.json({ error: 'Blocked host' }, { status: 400 });
   }
   ```

2. **Implement `isPublicHostname` util** that rejects private IPv4 ranges,
   loopback, link-local and `localhost`. Use `dns.lookup(host, { all:true })`
   and CIDR match, or simpler regex for IPv4 literals + hostname allow-list.

3. **Stream the response** instead of buffering:

   ```ts
   const res = await fetch(url, { signal, redirect: 'follow' });
   const { readable, writable } = new TransformStream();
   let transferred = 0;
   const limit = 5 * 1024 * 1024; // 5 MB (env-tunable)

   res.body!.pipeTo(writable, {
     preventClose: true,
     signal,
     async transform(chunk, controller) {
       transferred += chunk.length;
       if (transferred > limit) {
         controller.error(new Error('size limit'));
         abortController.abort();
       }
       controller.enqueue(chunk);
     },
   });
   return new NextResponse(readable, { headers: { 'Content-Type': ct } });
   ```

4. **Optional env allow-list**  
   If `PROXY_IMAGE_ALLOWED_HOSTS` is set (comma-separated), only these hosts
   are accepted.

## Acceptance Checklist

- `GET /api/proxy-image?url=http://169.254.169.254/` ➜ 400.
- Fetching a 10 MB image ➜ 413 after ~5 MB transferred.
- Normal <1 MB external image still works.

> Commit message: `sec(proxy-image): block SSRF + stream limit`
