import { serverEnv } from '@/lib/env/server';
import { del, list, ListBlobResult } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

/**
 * Handles an authenticated GET request to delete all blobs under the 'mplx/' folder in blob storage.
 *
 * Responds with a summary message and appropriate HTTP status code based on the outcome of the cleanup operation.
 * Returns 401 if the request is unauthorized, 200 if cleanup succeeds, or 500 if an error occurs during deletion.
 *
 * @returns A {@link NextResponse} containing the cleanup result message and cache-control headers.
 */
export async function GET(req: NextRequest) {
    if (req.headers.get('Authorization') !== `Bearer ${serverEnv.CRON_SECRET}`) {
        return new NextResponse('Unauthorized', { status: 401 });
    }

    try {
        const result = await deleteAllBlobsInFolder('mplx/');
        return new NextResponse(`Cleanup completed. ${result.message}`, {
            status: 200,
            headers: {
                'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
            },
        });
    } catch (error) {
        console.error('An error occurred:', error);
        return new NextResponse('An error occurred while deleting images', {
            status: 500,
            headers: {
                'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=3600',
            },
        });
    }
}

/**
 * Deletes all blobs within the specified folder prefix from blob storage, processing in batches with pagination and a time limit.
 *
 * @param folderPrefix - The prefix of the folder whose blobs should be deleted.
 * @returns An object containing a summary message and the total number of deleted blobs.
 *
 * @remark The operation enforces a maximum duration of 25 seconds and may stop early if this limit is reached, returning a partial cleanup summary.
 */
async function deleteAllBlobsInFolder(folderPrefix: string): Promise<{ message: string; totalDeleted: number }> {
    const started = Date.now();
    const MAX_DURATION = 25_000; // 25 seconds to leave buffer for response
    let cursor;
    let totalDeleted = 0;
    let batchCount = 0;

    console.log(`Starting blob cleanup for folder: ${folderPrefix}`);

    do {
        // Check if we're approaching timeout
        if (Date.now() - started > MAX_DURATION) {
            const message = `Cleanup stopped due to time limit. Deleted ${totalDeleted} blobs in ${batchCount} batches.`;
            console.log(message);
            return { message, totalDeleted };
        }

        try {
            const listResult: ListBlobResult = await list({
                prefix: folderPrefix,
                cursor,
                limit: 1000,
            });

            if (listResult.blobs.length > 0) {
                await del(listResult.blobs.map((blob) => blob.url));
                totalDeleted += listResult.blobs.length;
                batchCount++;
                console.log(`Batch ${batchCount}: Deleted ${listResult.blobs.length} blobs (total: ${totalDeleted})`);
            }

            cursor = listResult.cursor;

            // Add back-off between pages to prevent overwhelming the system
            if (cursor) {
                await new Promise((resolve) => setTimeout(resolve, 200));
            }
        } catch (error) {
            console.error(`Error in batch ${batchCount + 1}:`, error);
            // Continue with next batch instead of failing completely
            break;
        }
    } while (cursor);

    const duration = Date.now() - started;
    const message = `Cleanup completed successfully. Deleted ${totalDeleted} blobs in ${batchCount} batches. Duration: ${duration}ms`;
    console.log(message);

    return { message, totalDeleted };
}
