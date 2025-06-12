'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Define the model options - with Google Gemini 2.5 Flash as the default
const models = [
    {
        value: 'neuman-google',
        label: 'Gemini 2.5 Flash (Preview)',
        description: "Google's advanced small reasoning model",
        color: 'gemini',
    },
    {
        value: 'neuman-default',
        label: 'o4 mini',
        description: "OpenAI's faster mini reasoning model",
        color: 'blue',
    },
    {
        value: 'neuman-gemini',
        label: 'Gemini 2.5 Pro (Preview)',
        description: "Google's advanced reasoning model",
        color: 'gemini',
    },
    { value: 'neuman-4o', label: 'GPT 4o', description: "OpenAI's flagship model", color: 'blue' },
    {
        value: 'neuman-4.1-nano',
        label: 'GPT 4.1-nano',
        description: "OpenAI's nano model",
        color: 'blue',
    },
];

interface AiModelPickerProps {
    selectedModel: string;
    onSelect: (model: string) => void;
    onClose: () => void;
    className?: string;
}

export function AiModelPicker({ selectedModel, onSelect, onClose, className = '' }: AiModelPickerProps) {
    const currentModel = models.find((model) => model.value === selectedModel) || models[0];

    return (
        <motion.div 
            className={`
                absolute bottom-full left-0 w-80 mb-2 z-[1000]
                bg-white/80 dark:bg-neutral-900/80 
                backdrop-blur-xl backdrop-saturate-150
                border border-white/30 dark:border-neutral-700/40
                shadow-xl shadow-black/5 dark:shadow-black/20
                rounded-lg overflow-hidden 
                text-neutral-900 dark:text-white
                ${className}
            `}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ 
                duration: 0.2, 
                ease: [0.4, 0.0, 0.2, 1] 
            }}
        >
            <div className="p-2">
                <div className="mb-1.5">
                    <div className="text-xs font-medium mb-0.5 text-neutral-800 dark:text-neutral-100">
                        AI Model
                    </div>
                    <div className="text-[9px] text-neutral-600 dark:text-neutral-400">
                        Current: <span className="text-neutral-800 dark:text-neutral-100 font-medium">{currentModel.label}</span>
                    </div>
                </div>

                <div
                    className="max-h-[160px] overflow-y-auto mb-1.5"
                    role="listbox"
                    aria-label="Available AI models"
                >
                    <div className="space-y-2">
                        {models.map((model) => (
                            <motion.div
                                key={model.value}
                                role="option"
                                aria-selected={model.value === selectedModel}
                                className={`
                                    p-1.5 cursor-pointer rounded transition-all duration-150 
                                    border backdrop-blur-sm
                                    ${
                                        model.value === selectedModel
                                            ? 'bg-white/50 dark:bg-neutral-800/50 border-neutral-300/40 dark:border-neutral-600/40 shadow-md'
                                            : 'bg-white/20 dark:bg-neutral-800/20 border-neutral-200/20 dark:border-neutral-700/20 hover:bg-white/40 dark:hover:bg-neutral-800/40'
                                    }
                                `}
                                onClick={() => onSelect(model.value)}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                            >
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                        <span className="text-[11px] font-medium text-neutral-800 dark:text-neutral-100">
                                            {model.label}
                                        </span>
                                        {model.value === selectedModel && (
                                            <span className="text-[8px] bg-emerald-100/60 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 px-1 py-0.5 rounded font-medium">
                                                ✓
                                            </span>
                                        )}
                                    </div>
                                    <span className="text-[9px] text-neutral-600 dark:text-neutral-400">
                                        {model.description}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="border-t border-neutral-200/20 dark:border-neutral-700/20 pt-1.5">
                    <div className="text-[9px] text-neutral-500 dark:text-neutral-400 flex items-center justify-between">
                        <span>Click to select</span>
                        <span className="flex items-center gap-1">
                            <span className="bg-neutral-100/40 dark:bg-neutral-700/40 px-0.5 py-0.5 rounded font-mono text-[8px]">esc</span>
                            <span>close</span>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
} 