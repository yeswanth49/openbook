import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Toaster } from 'sonner';
import './globals.css';
import { Providers } from '../(config)/providers';
import { SpacesProvider } from '@/contexts/SpacesContext';
import { NotebookProvider } from '@/contexts/NotebookContext';

/**
 * Provides a layout wrapper that composes context providers, analytics, and utility components around its children.
 *
 * Wraps the content with application-wide providers and includes analytics and performance monitoring components.
 *
 * @param children - The content to be rendered within the layout.
 */
export default function CoreLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <NuqsAdapter>
            <Providers>
                <NotebookProvider>
                    <SpacesProvider>
                        <Toaster position="top-center" />
                        {children}
                    </SpacesProvider>
                </NotebookProvider>
            </Providers>
            <Analytics />
            <SpeedInsights />
        </NuqsAdapter>
    );
}
