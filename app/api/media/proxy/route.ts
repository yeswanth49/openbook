import { NextRequest, NextResponse } from 'next/server';
import dns from 'dns/promises';
import { serverEnv } from '@/lib/env/server';

/**
 * Determines whether a hostname is public and safe to access for proxying.
 *
 * Blocks local and private hostnames, including common loopback addresses and private IPv4 ranges. Performs DNS resolution to verify that resolved IPs are not within private or local ranges. If an allow-list is configured via the `PROXY_IMAGE_ALLOWED_HOSTS` environment variable, only hostnames in this list are permitted.
 *
 * @param hostname - The hostname to validate.
 * @returns `true` if the hostname is public and allowed; otherwise, `false`.
 */
async function isPublicHostname(hostname: string): Promise<boolean> {
    // Block localhost and common local hostnames
    const blockedHostnames = ['localhost', '127.0.0.1', '0.0.0.0', '::1'];
    if (blockedHostnames.includes(hostname.toLowerCase())) {
        return false;
    }

    // Check for private IPv4 ranges with regex
    const ipv4Regex = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
    const match = hostname.match(ipv4Regex);

    if (match) {
        const [, a, b, c, d] = match.map(Number);

        // Private IP ranges:
        // 10.0.0.0/8 (10.0.0.0 - 10.255.255.255)
        // 172.16.0.0/12 (172.16.0.0 - 172.31.255.255)
        // 192.168.0.0/16 (192.168.0.0 - 192.168.255.255)
        // Link-local: 169.254.0.0/16
        // Loopback: 127.0.0.0/8
        if (
            a === 10 ||
            (a === 172 && b >= 16 && b <= 31) ||
            (a === 192 && b === 168) ||
            (a === 169 && b === 254) ||
            a === 127
        ) {
            return false;
        }
    }

    // Optional: Check DNS resolution for hostname
    try {
        const addresses = await dns.lookup(hostname, { all: true });
        for (const addr of addresses) {
            const ip = addr.address;
            // Re-check resolved IPs against private ranges
            const ipMatch = ip.match(ipv4Regex);
            if (ipMatch) {
                const [, a, b, c, d] = ipMatch.map(Number);
                if (
                    a === 10 ||
                    (a === 172 && b >= 16 && b <= 31) ||
                    (a === 192 && b === 168) ||
                    (a === 169 && b === 254) ||
                    a === 127
                ) {
                    return false;
                }
            }
        }
    } catch (error) {
        // DNS lookup failed, consider unsafe
        return false;
    }

    // Check optional allow-list from environment
    const allowedHosts = serverEnv.PROXY_IMAGE_ALLOWED_HOSTS;
    if (allowedHosts) {
        const allowList = allowedHosts.split(',').map((h) => h.trim().toLowerCase());
        return allowList.includes(hostname.toLowerCase());
    }

    return true;
}

/**
 * Proxies and validates remote images, bypassing CORS restrictions for browser clients.
 *
 * Accepts a `url` query parameter specifying the image to fetch. Validates the hostname to prevent access to private or local networks. Supports two modes:
 * - Validation mode (when the `x-validate-only` header is `'true'`): Returns JSON with validation results, including HTTP status, content type, and redirect information.
 * - Proxy mode: Streams the image data to the client with a 5 MB size limit, setting appropriate CORS and caching headers.
 *
 * @returns A JSON response with validation results, or a streaming response with the proxied image data.
 *
 * @throws {Error} If the image exceeds the 5 MB size limit, returns a 413 error.
 * @throws {Error} If the URL is missing, invalid, blocked, or the fetch fails, returns an appropriate error response.
 *
 * @remark
 * Only public hostnames are allowed; requests to private or local addresses are blocked for security.
 */
export async function GET(request: NextRequest) {
    // Extract the URL from the query parameters
    const url = request.nextUrl.searchParams.get('url');

    if (!url) {
        return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
    }

    try {
        // Parse and validate URL
        const parsed = new URL(url);
        if (!(await isPublicHostname(parsed.hostname))) {
            return NextResponse.json({ error: 'Blocked host' }, { status: 400 });
        }

        // Attempt to fetch the image with timeout
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);

        const response = await fetch(url, {
            signal: controller.signal,
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; ImageValidator/1.0)',
                Accept: 'image/*',
            },
            redirect: 'follow',
        });

        clearTimeout(timeout);

        // Capture the final URL after any redirects
        const finalUrl = response.redirected ? response.url : url;

        // If we only want to validate the image exists, we can return the headers
        if (request.headers.get('x-validate-only') === 'true') {
            const contentType = response.headers.get('content-type');
            const status = response.status;

            return NextResponse.json(
                {
                    valid: response.ok && contentType?.startsWith('image/'),
                    status,
                    contentType,
                    redirected: response.redirected,
                    finalUrl,
                },
                {
                    headers: {
                        'x-final-url': finalUrl,
                        'x-redirected': response.redirected ? 'true' : 'false',
                    },
                },
            );
        }

        // Otherwise, stream the image data with size limit
        if (!response.ok) {
            return NextResponse.json({ error: 'Failed to fetch image' }, { status: response.status });
        }

        const contentType = response.headers.get('content-type') || 'application/octet-stream';

        // Stream with size limit instead of buffering
        const { readable, writable } = new TransformStream();
        let transferred = 0;
        const limit = 5 * 1024 * 1024; // 5 MB (env-tunable)

        const reader = response.body?.getReader();
        if (!reader) {
            return NextResponse.json({ error: 'No response body' }, { status: 500 });
        }

        const writer = writable.getWriter();

        const streamWithLimit = async () => {
            try {
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;

                    transferred += value.length;
                    if (transferred > limit) {
                        controller.abort();
                        await writer.abort(new Error('Size limit exceeded'));
                        return;
                    }

                    await writer.write(value);
                }
                await writer.close();
            } catch (error) {
                await writer.abort(error);
            }
        };

        // Start streaming in background
        streamWithLimit();

        // Return streaming response
        return new NextResponse(readable, {
            headers: {
                'Content-Type': contentType,
                'Access-Control-Allow-Origin': '*', // Allow access from any origin
                'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
                'x-final-url': finalUrl,
                'x-redirected': response.redirected ? 'true' : 'false',
            },
        });
    } catch (error) {
        console.error('Proxy image error:', error);

        // Return appropriate error status
        if (error instanceof Error && error.message.includes('Size limit')) {
            return NextResponse.json({ error: 'Image too large' }, { status: 413 });
        }

        // Return a 500 error for other failures
        return NextResponse.json(
            {
                error: 'Failed to fetch image',
                message: error instanceof Error ? error.message : String(error),
            },
            { status: 500 },
        );
    }
}

/**
 * Handles HTTP HEAD requests to validate an image URL without downloading the image data.
 *
 * Modifies the incoming request to perform validation only and delegates processing to the {@link GET} handler. Returns a JSON response with validation results, including status and content type, without streaming the image.
 */
export async function HEAD(request: NextRequest) {
    // Set validate-only to true and delegate to GET handler
    const headers = new Headers(request.headers);
    headers.set('x-validate-only', 'true');

    const modifiedRequest = new Request(request.url, {
        method: 'GET',
        headers,
    });

    return GET(modifiedRequest as NextRequest);
}
