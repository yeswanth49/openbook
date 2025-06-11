'use client';

import React from 'react';

// TODO: [TICKET-XXX] These components are temporary placeholders put in place while
// the original rich typewriter and typing animations are being refactored.
// They intentionally avoid any visual rendering to prevent performance regressions,
// but they MUST still respect the `onComplete` callback so that higher-level flow
// control (e.g., sequential message streaming) continues to work as expected.
// Once the new animation system is ready, these placeholders will be removed.
export const TypewriterEffect: React.FC<{ content: string; speed?: number; delay?: number; onComplete?: () => void }> = ({ onComplete }) => {
    const hasCompletedRef = React.useRef(false);

    React.useEffect(() => {
        if (hasCompletedRef.current) return;
        // Immediately signal completion since no animation is performed.
        onComplete?.();
        hasCompletedRef.current = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps -- we intentionally want this to run only once on mount
    }, []);

    return null;
};

export const TypingMessage: React.FC<{ content: string; onComplete?: () => void; speed?: number }> = ({ onComplete }) => {
    const hasCompletedRef = React.useRef(false);

    React.useEffect(() => {
        if (hasCompletedRef.current) return;
        // Immediately signal completion since no typing simulation is performed.
        onComplete?.();
        hasCompletedRef.current = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps -- we intentionally want this to run only once on mount
    }, []);

    return null;
};
