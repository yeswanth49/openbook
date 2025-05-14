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
  metadataBase: new URL("https://openbook.pecup.in"),
  title: "OpenBook",
  description: "Your learning, your way.",
  openGraph: {
    url: "https://openbook.pecup.in",
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
  keywords: [
    "OpenBook",
    "openbook",
    "Open Book",
    "AI Integrated Book",
  ]
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
