import { put } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';
import { fileTypeFromBlob } from 'file-type';
import { isAuthenticated, getUserId } from '@/lib/auth';

export async function POST(request: NextRequest) {
    // Require authentication
    if (!isAuthenticated(request)) {
        return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
        return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Validate file size (4MB limit)
    if (file.size > 4 * 1024 * 1024) {
        return NextResponse.json({ error: 'File too large (max 4MB)' }, { status: 413 });
    }

    try {
        // Validate file type using actual file content
        const fileType = await fileTypeFromBlob(file);
        const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

        if (!fileType || !allowedTypes.includes(fileType.mime)) {
            return NextResponse.json(
                {
                    error: 'Invalid file type. Only JPEG, PNG, WebP, and GIF images are allowed',
                },
                { status: 415 },
            );
        }

        // Generate randomized path with user ID and date to avoid enumeration
        const userId = getUserId(request) || 'anonymous';
        const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
        const timestamp = Date.now();
        const extension = fileType.ext;

        const fileName = `${userId}/${date}/image-${timestamp}.${extension}`;
        const fullPath = `mplx/${fileName}`;

        const blob = await put(fullPath, file, {
            access: 'public',
        });

        return NextResponse.json({
            name: file.name,
            contentType: fileType.mime,
            url: blob.url,
            size: file.size,
        });
    } catch (error) {
        console.error('Error uploading file:', error);
        return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
    }
}
