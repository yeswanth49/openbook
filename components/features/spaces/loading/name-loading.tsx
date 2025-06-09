'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface NameLoadingProps {
    isLoading?: boolean;
    defaultText?: string;
    className?: string;
}

/**
 * Displays a loading spinner and cycles through placeholder messages while a conversation name is being generated.
 *
 * @param isLoading - Whether to show the loading state. Defaults to true.
 * @param className - Additional CSS classes for styling.
 *
 * @returns A loading indicator with animated text, or null if not loading.
 */
export function NameLoading({ isLoading = true, defaultText = 'Untitled Conversation', className }: NameLoadingProps) {
    // Loading text states
    const loadingTexts = ['Generating title...', 'Analyzing conversation...', 'Creating title...'];

    const [loadingTextIndex, setLoadingTextIndex] = React.useState(0);

    // Cycle through loading texts for better UX
    React.useEffect(() => {
        if (!isLoading) return;

        const interval = setInterval(() => {
            setLoadingTextIndex((prev) => (prev + 1) % loadingTexts.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [isLoading, loadingTexts.length]);

    if (!isLoading) return null;

    return (
        <div className={cn('flex items-center gap-1 text-xs', className)}>
            <Loader2 className="h-2.5 w-2.5 animate-spin text-muted-foreground" />
            <span className="text-muted-foreground text-xs">{loadingTexts[loadingTextIndex]}</span>
        </div>
    );
}

/**
 * Displays a conversation name with visual indicators for loading and auto-naming states.
 *
 * Shows the conversation name or a default if none is provided. When loading, fades the name and displays a loading indicator below. If the conversation is auto-named and not loading, shows a blue dot with a tooltip.
 */
export function ConversationNameDisplay({
    name,
    isLoading,
    isAutoNamed,
    className,
}: {
    name: string;
    isLoading?: boolean;
    isAutoNamed?: boolean;
    className?: string;
}) {
    return (
        <div className={cn('relative', className)}>
            {/* Always show the name (or default) */}
            <span className={cn('transition-opacity duration-200', isLoading ? 'opacity-60' : 'opacity-100')}>
                {name || 'Untitled Conversation'}
            </span>

            {/* Show loading indicator when generating */}
            {isLoading && (
                <div className="absolute -bottom-3.5 left-0 right-0">
                    <NameLoading />
                </div>
            )}

            {/* Minimalistic indicator for auto-named conversations */}
            {!isLoading && isAutoNamed && (
                <div
                    className="absolute -top-0.5 -right-2 w-1 h-1 rounded-full bg-blue-400/70"
                    title="Automatically named based on conversation content"
                />
            )}
        </div>
    );
}
