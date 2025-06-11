'use client';

import React from 'react';

// TODO: [TICKET-XXX] These components are temporary placeholders put in place while
// the original rich typewriter and typing animations are being refactored.
// They intentionally avoid any visual rendering to prevent performance regressions,
// but they MUST still respect the `onComplete` callback so that higher-level flow
// control (e.g., sequential message streaming) continues to work as expected.
// Once the new animation system is ready, these placeholders will be removed.
export const TypewriterEffect: React.FC<{ content: string; speed?: number; delay?: number; onComplete?: () => void }> = ({ onComplete }) => {
    React.useEffect(() => {
        // Immediately signal completion since no animation is performed.
        onComplete?.();
    }, [onComplete]);

    return null;
};

export const TypingMessage: React.FC<{ content: string; onComplete?: () => void; speed?: number }> = ({ onComplete }) => {
    React.useEffect(() => {
        // Immediately signal completion since no typing simulation is performed.
        onComplete?.();
    }, [onComplete]);

    return null;
};
