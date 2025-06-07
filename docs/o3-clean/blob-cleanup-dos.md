# Make Blob Clean-up Cron Resilient

Target: `app/api/clean_images/route.ts`

## Issue

Deletes 1 000 blobs per `list` call in a tight loop → may exceed Edge 30 s
timeout and starve CPU.

## Steps

1. **Add time-box**

   ```ts
   const started = Date.now();
   const MAX = 30_000; // 30 s
   … while(cursor) {
       if (Date.now() - started > MAX) break;
   }
   ```

2. **Back-off between pages**

   ```ts
   await new Promise((r) => setTimeout(r, 200));
   ```

3. **Log progress** to console / Datadog.

Checklist:

- Function finishes <30 s even with 10 000 blobs.

Commit: `perf(clean-images): pagination back-off`
