'use client';

import React from 'react';
import Image from 'next/image';
import { LoadingDots } from '@/components/ui/loading-dots';

// All loading-related visuals have been temporarily disabled to achieve a cleaner, minimal UI.
// These stub components keep the API surface unchanged while rendering nothing.

// A lightweight loader row shown inside the message list while the AI is thinking or streaming
export const MessageLoading: React.FC<{ showThinking?: boolean; loadingText?: string; thinkingDuration?: number }> = () => {
    return (
        <div className="flex items-center gap-2 mt-5 mb-2">
            <Image src="/m.png" alt="Neuman" className="size-8" width={100} height={100} unoptimized quality={100} />
            <h2 className="text-md font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                Neuman
                <LoadingDots />
            </h2>
        </div>
    );
};

// Small dots animation that floats at the bottom of the screen while streaming
export const TypingIndicator: React.FC<{ text?: string }> = () => {
    return (
        <div className="rounded-full bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 px-3 py-1.5 backdrop-blur flex items-center">
            <LoadingDots />
        </div>
    );
};

// Keep the previous API for streaming progress but render nothing for now.
export const StreamingProgress: React.FC<{ progress?: number }> = () => null;
