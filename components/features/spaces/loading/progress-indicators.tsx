'use client';

// Temporary minimalist stubs – we are removing all advanced progress UI during message streaming.
// The original implementation (token counters, timers, progress bars, etc.) caused visual glitches
// when very large messages streamed in.  For now these components simply render nothing so that
// the rest of the application logic can stay intact while we redesign the experience.

import React from 'react';

interface AIProgressProps {
    // Keep the prop definitions so existing callers remain type-safe,
    // but they are no longer used in this interim implementation.
    status?: string;
    startTime?: number | null;
    estimatedTokens?: number;
    tokenCount?: number;
    isVisible?: boolean;
}

 
export const AIProgressIndicator: React.FC<AIProgressProps> = () => null;

export const WordCountIndicator: React.FC<{ text?: string; isVisible?: boolean }> = () => null;
