import { ImageResponse } from 'next/og';
import React from 'react';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          background: 'linear-gradient(to bottom, #1E293B, #0F172A)',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src="https://openbook.pecup.in/screenshots/main-interface.png"
          alt="OpenBook Interface"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
    ),
    size
  );
} 