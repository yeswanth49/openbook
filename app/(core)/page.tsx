'use client';
import dynamic from 'next/dynamic';

// Client-only chat component, deferred to reduce initial bundle size
const ChatClient = dynamic(() => import('./ChatClient'), { ssr: false });

/**
 * Renders the chat page by displaying the client-only {@link ChatClient} component.
 */
export default function Page() {
    return <ChatClient />;
}
