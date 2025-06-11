'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, BarChart2, Zap } from 'lucide-react';

interface AIProgressProps {
    status: string;
    startTime: number | null;
    estimatedTokens?: number;
    tokenCount?: number;
    isVisible?: boolean;
}

export const AIProgressIndicator: React.FC<AIProgressProps> = ({
    status,
    startTime,
    estimatedTokens = 500,
    tokenCount = 0,
    isVisible = true,
}) => {
    const [elapsedTime, setElapsedTime] = useState(0);
    const [estimatedTimeRemaining, setEstimatedTimeRemaining] = useState<number | null>(null);

    // Update elapsed time
    useEffect(() => {
        if (!isVisible || !startTime || status === 'ready') {
            setElapsedTime(0);
            return;
        }

        const timer = setInterval(() => {
            const timeElapsed = Math.floor((Date.now() - startTime) / 1000);
            setElapsedTime(timeElapsed);

            // Calculate estimated time remaining
            if (tokenCount > 0 && estimatedTokens > tokenCount) {
                // Avoid division by zero; if timeElapsed is 0 we cannot compute rate yet
                const tokensPerSecond = timeElapsed > 0 ? tokenCount / timeElapsed : 0;
                if (tokensPerSecond === 0) {
                    setEstimatedTimeRemaining(null);
                } else {
                    const tokensRemaining = estimatedTokens - tokenCount;
                    const secondsRemaining = Math.ceil(tokensRemaining / tokensPerSecond);
                    setEstimatedTimeRemaining(secondsRemaining);
                }
            } else {
                setEstimatedTimeRemaining(null);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [isVisible, startTime, status, tokenCount, estimatedTokens]);

    // Format time as mm:ss
    const formatTime = (seconds: number): string => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    // Calculate progress percentage
    const progressPercentage = tokenCount ? Math.min(100, Math.round((tokenCount / estimatedTokens) * 100)) : 0;

    if (!isVisible) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-2 max-w-md mx-auto mt-2 px-4 py-3 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800"
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                        {elapsedTime > 0 ? `Elapsed: ${formatTime(elapsedTime)}` : 'Starting...'}
                    </span>
                </div>

                {estimatedTimeRemaining !== null && (
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                        Est. remaining: {formatTime(estimatedTimeRemaining)}
                    </span>
                )}
            </div>

            {tokenCount > 0 && (
                <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <BarChart2 className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
                            <span className="text-sm text-neutral-600 dark:text-neutral-400">
                                {tokenCount} / ~{estimatedTokens} tokens
                            </span>
                        </div>
                        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                            {progressPercentage}%
                        </span>
                    </div>

                    <div className="h-1.5 w-full bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-primary rounded-full"
                            initial={{ width: '0%' }}
                            animate={{ width: `${progressPercentage}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </div>
            )}

            {status === 'submitted' && (
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 mt-1">
                    <Zap className="h-4 w-4" />
                    <span className="text-sm">AI is thinking about your request...</span>
                </div>
            )}

            {status === 'streaming' && (
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mt-1">
                    <Zap className="h-4 w-4" />
                    <span className="text-sm">AI is generating content...</span>
                </div>
            )}
        </motion.div>
    );
};

// A component that shows word count for current generation
export const WordCountIndicator: React.FC<{
    text: string;
    isVisible?: boolean;
}> = ({ text, isVisible = true }) => {
    if (!isVisible || !text) return null;

    // Count words in text
    const trimmedText = text.trim();
    const wordCount = trimmedText === '' ? 0 : trimmedText.split(/\s+/).length;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-1"
        >
            <span>{wordCount} words</span>
        </motion.div>
    );
};
