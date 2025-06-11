'use client';
import dynamic from 'next/dynamic';

// Client-only chat component, deferred to reduce initial bundle size
const ChatClient = dynamic(() => import('./ChatClient'), { ssr: false });
const StreakTester = dynamic(() => import('@/components/debug/StreakTester'), { ssr: false });

export default function Page() {
    return (
        <>
            <ChatClient />
            {/* TODO: Remove after testing streak changes */}
            <StreakTester />
        </>
    );
}
