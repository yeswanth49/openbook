import type { MetadataRoute } from 'next';

/**
 * Returns the web app manifest configuration for the OpenBook Waitlist application.
 *
 * The manifest defines metadata such as the app's name, description, start URL, display mode, theme colors, icons for various platforms, and screenshots for visual representation. This configuration enables proper installation and display of the app on supported devices.
 *
 * @returns The manifest object conforming to {@link MetadataRoute.Manifest} for the OpenBook Waitlist web application.
 */
export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'OpenBook Waitlist',
        short_name: 'OpenBook',
        description:
            'Join the Waitlist for Early Access to OpenBook. Be the first to explore AI-powered, multilingual learning.',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#000000',
        icons: [
            {
                src: '/images/favicon.ico',
                sizes: '48x48',
                type: 'image/x-icon',
            },
            {
                src: '/images/favicon-16x16.png',
                sizes: '16x16',
                type: 'image/png',
            },
            {
                src: '/images/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                src: '/images/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/images/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: '/images/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: '/images/apple-touch-icon.png',
                sizes: '180x180',
                type: 'image/png',
            },
        ],
        screenshots: [
            {
                src: '/screenshots/waitlist-opengraph.png',
                type: 'image/png',
                sizes: '1200x630',
                form_factor: 'wide',
            },
            {
                src: '/screenshots/main-interface.png',
                type: 'image/png',
                form_factor: 'wide',
            },
            {
                src: '/screenshots/journal-interface.png',
                type: 'image/png',
                form_factor: 'narrow',
            },
        ],
    };
}
