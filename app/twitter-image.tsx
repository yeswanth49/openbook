import { ImageResponse } from 'next/og';
import React from 'react';

export const runtime = 'edge';

export const alt = 'OpenBook - Your learning, your way';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  // Use the same image as OpenGraph for Twitter
  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'url(https://goopenbook.in/screenshots/main-interface.png)',
          backgroundSize: 'cover',
        }}
      >
      </div>
    ),
    { ...size }
  );
} 