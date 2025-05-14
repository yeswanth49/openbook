import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GeistSans } from 'geist/font/sans';
import 'katex/dist/katex.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Metadata, Viewport } from "next";
import { Syne } from 'next/font/google';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Toaster } from "sonner";
import "./globals.css";
import { Providers } from './providers';
import { SpacesProvider } from '../contexts/SpacesContext';

export const metadata: Metadata = {
  metadataBase: new URL("https://goopenbook.in"),
  title: "OpenBook",
  description: "Your learning, your way.",
  openGraph: {
    url: "https://goopenbook.in",
    siteName: "OpenBook",
    title: "OpenBook - Your learning, your way.",
    description: "An AI-powered knowledge exploration platform for information search, AI conversations, and academic research.",
    images: [
      {
        url: '/screenshots/main-interface.png',
        width: 1200,
        height: 630,
        alt: 'OpenBook Interface'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenBook - Your learning, your way.',
    description: 'An AI-powered knowledge exploration platform for information search, AI conversations, and academic research.',
    images: ['/screenshots/main-interface.png'],
    creator: '@OpenBook',
    site: '@OpenBook',
  },
  keywords: [
    "OpenBook",
    "openbook",
    "Open Book",
    "AI Integrated Book",
  ],
  icons: {
    icon: [
      { url: '/images/favicon.ico' },
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#000000',
      },
      {
        rel: 'apple-touch-startup-image',
        url: '/screenshots/main-interface.png',
        media: '(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3)',
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: 'OpenBook',
    statusBarStyle: 'black-translucent',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' }
  ],
}

const syne = Syne({ 
  subsets: ['latin'], 
  variable: '--font-syne',
   preload: true,
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${syne.variable} font-sans antialiased`} suppressHydrationWarning>
        <NuqsAdapter>
          <Providers>
            <SpacesProvider>
              <Toaster position="top-center" />
              {children}
            </SpacesProvider>
          </Providers>
        </NuqsAdapter>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
