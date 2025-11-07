'use client';

import React from 'react';
import Image from 'next/image';
import { LoadingDots } from '@/components/ui/loading-dots';
import { motion } from 'framer-motion';

/**
 * Skeleton component for AI message during space switching
 * Shows a placeholder that mimics the structure of an AI response
 */
export const SpaceSwitchingSkeleton: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex items-start gap-3 mt-5 mb-2"
            role="status"
            aria-live="polite"
        >
            {/* AI Avatar */}
            <div className="flex-shrink-0">
                <Image
                    src="/m.png"
                    alt=""
                    role="presentation"
                    className="size-8"
                    width={100}
                    height={100}
                    unoptimized
                    quality={100}
                />
            </div>

            {/* Message Content Skeleton */}
            <div className="flex-1 min-w-0">
                {/* Header with name and loading indicator */}
                <div className="flex items-center gap-2 mb-3">
                    <h2 className="text-md font-medium text-neutral-800 dark:text-neutral-200">
                        Neuman
                    </h2>
                    <LoadingDots />
                </div>

                {/* Text content skeleton lines */}
                <div className="space-y-2">
                    {/* First line - longer */}
                    <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse w-full" />
                    
                    {/* Second line - medium */}
                    <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse w-4/5" />
                    
                    {/* Third line - shorter */}
                    <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse w-3/5" />
                    
                    {/* Fourth line - longer */}
                    <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse w-5/6" />
                    
                    {/* Fifth line - short */}
                    <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse w-2/5" />
                </div>

                {/* Optional: Add a subtle loading message */}
                <div className="mt-3 text-sm text-neutral-500 dark:text-neutral-400 italic">
                    Loading conversation...
                </div>
            </div>
        </motion.div>
    );
};
