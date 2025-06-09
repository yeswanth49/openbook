# Enable Back-Pressure in Streaming Search

Target: `app/api/chat/route.ts` (+ variants)

## Issue

`createDataStreamResponse` sometimes buffers large reasoning chunks before
pushing downstream. We can pipe directly from `streamText` to the response to
save memory and reduce TTFB.

## Steps

1. Replace manual `smoothStream` transform with native `ReadableStream`
   piping:

   ```ts
   const { textStream } = await streamText(…);
   return new NextResponse(textStream, { headers });
   ```

2. Ensure chunks are flushed with `flush()` on TransformStream.

3. Benchmark with `wrk -c100 -d30s --latency`.

Checklist:

- Peak RSS < 50 MB under 100 concurrent streams.

Commit: `perf(search): zero-copy streaming`
