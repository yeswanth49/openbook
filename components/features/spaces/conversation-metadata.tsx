'use client';

import React from 'react';
import { Space } from '@/contexts/SpacesContext';
import { calculateConversationMetadata } from '@/lib/conversation-utils';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Smile, Frown, MessageCircle, Clock } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface ConversationMetadataProps {
    space: Space;
    compact?: boolean;
    className?: string;
}

/**
 * Displays conversation metadata for a given space, including sentiment, message count, key terms, last activity, and summary.
 *
 * Renders either a compact horizontal view or a detailed vertical view based on the {@link compact} prop.
 *
 * @param space - The conversation space to display metadata for.
 * @param compact - If true, renders a compact sidebar-friendly layout; otherwise, shows a detailed view.
 * @param className - Optional additional CSS classes for custom styling.
 */
export function ConversationMetadata({ space, compact = false, className }: ConversationMetadataProps) {
    // Calculate metadata from conversation
    const metadata = calculateConversationMetadata(space);

    // Sentiment icon
    const SentimentIcon =
        metadata.sentiment === 'positive' ? Smile : metadata.sentiment === 'negative' ? Frown : undefined;

    // Format the last activity timestamp
    const lastActivityTime = formatDistanceToNow(new Date(metadata.lastActivity), {
        addSuffix: true,
    });

    if (compact) {
        // Compact view for sidebar - optimized for hover animations
        return (
            <div className={cn('flex items-center gap-1.5 text-xs', className)}>
                {metadata.sentiment !== 'neutral' && SentimentIcon && <SentimentIcon className="h-2.5 w-2.5" />}
                <div className="flex items-center">
                    <MessageCircle className="h-2.5 w-2.5 mr-1" />
                    <span className="truncate">{metadata.messageCount}</span>
                </div>
                <span className="text-xs opacity-60">•</span>
                <Clock className="h-2.5 w-2.5 mr-0.5" />
                <span className="whitespace-nowrap text-xs truncate">{lastActivityTime}</span>
            </div>
        );
    }

    // Full view for conversation details
    return (
        <div className={cn('flex flex-col space-y-2', className)}>
            <div className="flex flex-wrap gap-1.5">
                {metadata.keyTerms.map((term) => (
                    <Badge key={term} variant="outline" className="text-xs">
                        {term}
                    </Badge>
                ))}
                {metadata.sentiment !== 'neutral' && (
                    <Badge
                        variant="outline"
                        className={cn(
                            'text-xs',
                            metadata.sentiment === 'positive'
                                ? 'bg-green-100 dark:bg-green-950 text-green-800 dark:text-green-300'
                                : metadata.sentiment === 'negative'
                                  ? 'bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-300'
                                  : '',
                        )}
                    >
                        {metadata.sentiment === 'positive' ? (
                            <>
                                <Smile className="h-3 w-3 mr-1" /> Positive
                            </>
                        ) : (
                            <>
                                <Frown className="h-3 w-3 mr-1" /> Negative
                            </>
                        )}
                    </Badge>
                )}
            </div>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex items-center">
                    <MessageCircle className="h-3.5 w-3.5 mr-1.5" />
                    {metadata.messageCount} messages
                </div>
                <div className="flex items-center">
                    <Clock className="h-3.5 w-3.5 mr-1.5" />
                    {lastActivityTime}
                </div>
            </div>

            {metadata.summary && <p className="text-sm text-muted-foreground line-clamp-2">{metadata.summary}</p>}
        </div>
    );
}
