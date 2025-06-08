'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface CancelButtonProps {
    onCancel: () => void;
    isLoading: boolean;
    status: string;
    className?: string;
}

export const CancelButton: React.FC<CancelButtonProps> = ({ onCancel, isLoading, status, className = '' }) => {
    // Only show if loading
    if (!isLoading) return null;

    const handleCancel = () => {
        onCancel();
        toast.info('Request canceled', {
            description: 'The AI response generation has been stopped.',
        });
    };

    // Determine the button text based on status
    const getButtonText = () => {
        if (status === 'submitted') return 'Cancel thinking';
        if (status === 'streaming') return 'Stop generation';
        return 'Cancel';
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className={`${className} inline-flex`}
        >
            <Button
                variant="outline"
                size="sm"
                onClick={handleCancel}
                className="flex items-center gap-1 text-xs text-neutral-600 dark:text-neutral-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
            >
                <X className="h-3.5 w-3.5" />
                <span>{getButtonText()}</span>
            </Button>
        </motion.div>
    );
};

// A floating cancel button for mobile usage
export const FloatingCancelButton: React.FC<CancelButtonProps> = (props) => {
    if (!props.isLoading) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-[140px] right-4 z-10"
        >
            <Button
                size="icon"
                variant="secondary"
                onClick={props.onCancel}
                className="h-12 w-12 rounded-full shadow-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
            >
                <X className="h-5 w-5 text-red-600 dark:text-red-400" />
                <span className="sr-only">Cancel AI generation</span>
            </Button>
        </motion.div>
    );
};
