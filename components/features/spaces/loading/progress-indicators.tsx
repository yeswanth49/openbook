'use client';

// Temporary minimalist stubs – we are removing all advanced progress UI during message streaming.
// The original implementation (token counters, timers, progress bars, etc.) caused visual glitches
// when very large messages streamed in.  For now these components simply render nothing so that
// the rest of the application logic can stay intact while we redesign the experience.

import React from 'react';

interface AIProgressProps {
    // TODO: [TICKET-XXX] These props are retained for type safety but are currently unused.
    // When the redesigned progress UI is implemented, ensure each prop is properly consumed
    // or remove it if no longer necessary.
    status?: string;
    startTime?: number | null;
    estimatedTokens?: number;
    tokenCount?: number;
    isVisible?: boolean;
}

 
export const AIProgressIndicator: React.FC<AIProgressProps> = () => null;

export const WordCountIndicator: React.FC<{ text?: string; isVisible?: boolean }> = () => null;
