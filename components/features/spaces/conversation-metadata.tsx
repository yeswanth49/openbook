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

export function ConversationMetadata({ space, compact = false, className }: ConversationMetadataProps) {
    // Safely calculate metadata and handle any errors
    let metadata: ReturnType<typeof calculateConversationMetadata>;
    try {
        metadata = calculateConversationMetadata(space);
    } catch (error) {
        console.error('Failed to calculate conversation metadata:', error);
        // Provide sensible defaults to keep component from crashing
        metadata = {
            topics: [],
            summary: '',
            sentiment: 'neutral',
            lastActivity: Date.now(),
            wordCount: 0,
            messageCount: space.messages?.length ?? 0,
            keyTerms: [],
        };
    }

    // Sentiment icon
    const SentimentIcon =
        metadata.sentiment === 'positive' ? Smile : metadata.sentiment === 'negative' ? Frown : undefined;

    // Validate last activity date to avoid runtime errors
    let lastActivityTime = 'just now';
    const lastActivityDate = new Date(metadata.lastActivity);
    if (!isNaN(lastActivityDate.getTime())) {
        lastActivityTime = formatDistanceToNow(lastActivityDate, { addSuffix: true });
    }

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
                {(metadata.keyTerms as string[]).map((term: string) => (
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
