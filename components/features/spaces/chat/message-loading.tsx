'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface MessageLoadingProps {
    showThinking?: boolean;
    loadingText?: string;
    thinkingDuration?: number;
}

// Get thinking text based on duration
export function getThinkingText(duration: number): string {
    if (duration < 3) return 'Thinking...';
    if (duration < 7) return 'Processing your request...';
    if (duration < 12) return 'This might take a moment...';
    if (duration < 20) return 'Working on a detailed response...';
    return 'Still working on this complex query...';
}

export const MessageLoading: React.FC<MessageLoadingProps> = ({
    showThinking = false,
    loadingText = 'Thinking...',
    thinkingDuration = 0,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-5 mb-4 px-0 max-w-full"
        >
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                    <Image
                        src="/m.png"
                        alt="Neuman"
                        className="size-8"
                        width={100}
                        height={100}
                        unoptimized
                        quality={100}
                    />
                    <h2 className="text-md font-medium text-neutral-800 dark:text-neutral-200">Neuman</h2>
                </div>
            </div>

            <div className="mt-2 text-neutral-800 dark:text-neutral-200">
                {showThinking ? (
                    <div className="flex items-center py-2">
                        <span className="text-neutral-600 dark:text-neutral-400 mr-2 font-medium">
                            {thinkingDuration > 0 ? getThinkingText(thinkingDuration) : loadingText}
                        </span>
                        <div className="h-2 w-2 bg-neutral-400 dark:bg-neutral-500 rounded-full animate-pulse"></div>
                    </div>
                ) : (
                    <div className="space-y-3 max-w-full md:max-w-[80%]">
                        {/* First paragraph - shorter */}
                        <div className="space-y-2">
                            <motion.div
                                animate={{
                                    opacity: [0.5, 0.7, 0.5],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-[60%]"
                            />
                            <motion.div
                                animate={{
                                    opacity: [0.5, 0.7, 0.5],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: 0.1,
                                }}
                                className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-[85%]"
                            />
                            <motion.div
                                animate={{
                                    opacity: [0.5, 0.7, 0.5],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: 0.2,
                                }}
                                className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-[70%]"
                            />
                        </div>

                        {/* Second paragraph - longer, hide some parts on mobile */}
                        <div className="pt-1 space-y-2">
                            <motion.div
                                animate={{
                                    opacity: [0.5, 0.7, 0.5],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: 0.3,
                                }}
                                className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-[90%]"
                            />
                            <motion.div
                                animate={{
                                    opacity: [0.5, 0.7, 0.5],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: 0.4,
                                }}
                                className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-[95%]"
                            />
                            <motion.div
                                animate={{
                                    opacity: [0.5, 0.7, 0.5],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: 0.5,
                                }}
                                className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-[40%]"
                            />
                            <motion.div
                                animate={{
                                    opacity: [0.5, 0.7, 0.5],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: 0.6,
                                }}
                                className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-[75%] hidden md:block"
                            />
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

// A variation that shows a typing effect
export const TypingIndicator: React.FC<{ text?: string }> = ({ text = 'Neuman is typing' }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-neutral-800 shadow-md rounded-full border border-neutral-200 dark:border-neutral-700 max-w-full md:max-w-fit overflow-hidden"
        >
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm text-neutral-600 dark:text-neutral-300 truncate">{text}</span>
        </motion.div>
    );
};

export const StreamingProgress: React.FC<{ progress?: number }> = ({ progress = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full md:w-[80%] max-w-full mt-2 mb-4"
        >
            <div className="bg-neutral-200 dark:bg-neutral-700 h-1 w-full rounded-full overflow-hidden">
                <motion.div
                    className="bg-primary h-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                />
            </div>
            <div className="flex justify-between items-center mt-1.5 px-1 text-xs text-neutral-500 dark:text-neutral-400">
                <span>Generating response</span>
                <span className="tabular-nums">{Math.min(progress, 99)}%</span>
            </div>
        </motion.div>
    );
};
