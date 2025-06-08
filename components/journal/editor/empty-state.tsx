'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, PlusCircle } from 'lucide-react';

interface EmptyStateProps {
    onCreateBlock: () => void;
}

export default function EmptyState({ onCreateBlock }: EmptyStateProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center py-16 text-center"
        >
            <div className="w-16 h-16 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-5">
                <FileText className="w-8 h-8 text-neutral-400 dark:text-neutral-500" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-neutral-800 dark:text-neutral-200">Empty journal</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xs mb-6">
                Begin your thoughts by typing or create a new block using any of the commands below
            </p>
            <div className="flex flex-col gap-4 items-center">
                <button
                    onClick={onCreateBlock}
                    className="flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-md text-sm font-medium transition-colors"
                >
                    <PlusCircle className="w-4 h-4" />
                    <span>Add a block</span>
                </button>

                <div className="flex flex-col items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                    <div className="flex items-center gap-1.5">
                        <span className="inline-block px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded text-xs font-medium">
                            /
                        </span>
                        <span>to open command menu</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="inline-block px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded text-xs font-medium">
                            #
                        </span>
                        <span>for heading</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="inline-block px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded text-xs font-medium">
                            -
                        </span>
                        <span>for bullet list</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="inline-block px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded text-xs font-medium">
                            []
                        </span>
                        <span>for todo list</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
