'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, Image as ImageIcon, FileText } from 'lucide-react';

interface FileUploadZoneProps {
    onFileUpload: (file: File) => void;
    acceptedTypes?: string[];
    maxSizeMB?: number;
}

/**
 * Renders a drag-and-drop and click-to-upload file input zone with validation and animated error feedback.
 *
 * Allows users to upload a file by dragging it onto the zone or selecting it via a file picker. Validates the file type and size before invoking the provided callback.
 *
 * @param onFileUpload - Callback invoked with the uploaded file if it passes validation.
 * @param acceptedTypes - Optional array of accepted MIME types. Defaults to common image formats.
 * @param maxSizeMB - Optional maximum file size in megabytes. Defaults to 10MB.
 *
 * @returns A React component for file uploads with drag-and-drop support, validation, and animated error display.
 */
export default function FileUploadZone({
    onFileUpload,
    acceptedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    maxSizeMB = 10,
}: FileUploadZoneProps) {
    const [isHovering, setIsHovering] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsHovering(true);
    }, []);

    const handleDragLeave = useCallback(() => {
        setIsHovering(false);
    }, []);

    const validateAndUploadFile = useCallback(
        (file: File) => {
            // Check file type
            if (!acceptedTypes.includes(file.type)) {
                setError(`File type not supported. Please upload ${acceptedTypes.join(', ')}`);
                return;
            }

            // Check file size
            if (file.size > maxSizeMB * 1024 * 1024) {
                setError(`File too large. Maximum size is ${maxSizeMB}MB`);
                return;
            }

            onFileUpload(file);
        },
        [acceptedTypes, maxSizeMB, onFileUpload],
    );

    const handleDrop = useCallback(
        (e: React.DragEvent<HTMLDivElement>) => {
            e.preventDefault();
            setIsHovering(false);
            setError(null);

            const files = e.dataTransfer.files;
            if (files.length === 0) return;

            const file = files[0];
            validateAndUploadFile(file);
        },
        [validateAndUploadFile],
    );

    const handleFileSelect = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setError(null);
            const files = e.target.files;
            if (!files || files.length === 0) return;

            const file = files[0];
            validateAndUploadFile(file);

            // Reset the input
            e.target.value = '';
        },
        [validateAndUploadFile],
    );

    return (
        <div className="my-4 relative">
            <AnimatePresence>
                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mb-2 p-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg flex items-center text-sm"
                    >
                        <span className="flex-1">{error}</span>
                        <button onClick={() => setError(null)}>
                            <X className="h-4 w-4" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    borderColor: isHovering ? 'var(--color-primary)' : 'var(--color-border)',
                    backgroundColor: isHovering ? 'var(--color-accent)' : 'var(--color-background)',
                }}
                className={`
          border-2 border-dashed rounded-lg p-6
          flex flex-col items-center justify-center
          cursor-pointer transition-all
        `}
            >
                <input
                    type="file"
                    className="hidden"
                    accept={acceptedTypes.join(',')}
                    onChange={handleFileSelect}
                    id="file-upload"
                />
                <label htmlFor="file-upload" className="w-full cursor-pointer">
                    <div className="flex flex-col items-center text-center">
                        {acceptedTypes.some((t) => t.startsWith('image/')) ? (
                            <ImageIcon className="h-12 w-12 mb-3 text-neutral-400" />
                        ) : (
                            <FileText className="h-12 w-12 mb-3 text-neutral-400" />
                        )}
                        <div className="flex items-center mb-2">
                            <Upload className="h-4 w-4 mr-2" />
                            <span className="font-medium text-sm">Upload file</span>
                        </div>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">
                            Drag & drop or click to upload
                            <br />
                            {acceptedTypes.map((t) => t.replace('image/', '.')).join(', ')} (max {maxSizeMB}MB)
                        </p>
                    </div>
                </label>
            </motion.div>
        </div>
    );
}
