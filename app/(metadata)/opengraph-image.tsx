import { ImageResponse } from 'next/og';
import { renderMainOgImage, imageSize } from './image-template';

export const runtime = 'edge';

export const alt = 'OpenBook - Your learning, your way';
export const size = imageSize;

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(renderMainOgImage(), { ...size });
}
