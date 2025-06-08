'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { GripVertical } from 'lucide-react';
import { type Block } from '../../../lib/types';

interface SortableBlockProps {
    block: Block;
    index: number;
    onMove: (dragIndex: number, hoverIndex: number) => void;
    children: React.ReactNode;
}

export default function SortableBlock({ block, index, onMove, children }: SortableBlockProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    // Track drag position
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('text/plain', index.toString());
        setIsDragging(true);

        // Set drag image
        if (ref.current) {
            const dragImage = ref.current.cloneNode(true) as HTMLElement;
            dragImage.style.transform = 'translateY(-10000px)';
            dragImage.style.opacity = '0.5';
            document.body.appendChild(dragImage);
            e.dataTransfer.setDragImage(dragImage, 0, 0);
            setTimeout(() => {
                document.body.removeChild(dragImage);
            }, 0);
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const dragIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
        if (dragIndex !== index) {
            onMove(dragIndex, index);
        }
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    return (
        <div
            ref={ref}
            className={`relative group rounded-lg transition-all ${isDragging ? 'z-10' : ''}`}
            draggable
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onDragEnd={handleDragEnd}
        >
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: isDragging ? 0.95 : 1,
                    boxShadow: isDragging ? '0 10px 15px rgba(0, 0, 0, 0.1)' : 'none',
                }}
                transition={{ duration: 0.2 }}
            >
                <div className="relative flex items-start">
                    <div
                        className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 cursor-grab opacity-0 group-hover:opacity-100 transition-opacity"
                        onMouseDown={(e) => e.stopPropagation()}
                    >
                        <GripVertical className="h-5 w-5 text-neutral-400" />
                    </div>
                    <div className="w-full">{children}</div>
                </div>
            </motion.div>
        </div>
    );
}
