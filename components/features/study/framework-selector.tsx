'use client';

import React, { useState, useEffect } from 'react';
import { StudyFramework } from '@/lib/types';
import { getFrameworkDisplayName, getFrameworkDescription, getFrameworkIcon } from '@/lib/study-prompts';

interface FrameworkSelectorProps {
    onSelect: (framework: StudyFramework) => void;
    onClose: () => void;
}

/**
 * Renders a modal UI for selecting a study framework from a predefined list, supporting both mouse and keyboard interaction.
 *
 * Displays selectable cards for each available study framework, allowing users to navigate with arrow keys, select with number keys or mouse, confirm with Enter, or cancel with Escape. Invokes {@link onSelect} when a framework is chosen and {@link onClose} when canceled.
 */
export function FrameworkSelector({ onSelect, onClose }: FrameworkSelectorProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const frameworks = React.useMemo(
        () => [
            StudyFramework.MemoryPalace,
            StudyFramework.FeynmanTechnique,
            StudyFramework.SpacedRepetition,
            StudyFramework.ExtremeMode,
        ],
        [],
    );

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case '1':
                case '2':
                case '3':
                case '4':
                    e.preventDefault();
                    const index = parseInt(e.key) - 1;
                    if (index >= 0 && index < frameworks.length) {
                        onSelect(frameworks[index]);
                    }
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : frameworks.length - 1));
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    setSelectedIndex((prev) => (prev < frameworks.length - 1 ? prev + 1 : 0));
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : frameworks.length - 1));
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    setSelectedIndex((prev) => (prev < frameworks.length - 1 ? prev + 1 : 0));
                    break;
                case 'Enter':
                    e.preventDefault();
                    onSelect(frameworks[selectedIndex]);
                    break;
                case 'Escape':
                    e.preventDefault();
                    onClose();
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, frameworks, onSelect, onClose]);

    return (
        <div className="absolute bottom-full left-0 w-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm rounded-md overflow-hidden mb-1 text-neutral-900 dark:text-white">
            <div className="p-3">
                <div className="text-base font-medium mb-3">Select Study Framework</div>

                <div className="grid grid-cols-2 gap-2 mb-3">
                    {frameworks.map((framework, index) => {
                        const isSelected = index === selectedIndex;
                        const isHovered = hoveredIndex === index;
                        const displayIndex = index + 1;

                        return (
                            <div
                                key={framework}
                                className={`p-3 rounded-md cursor-pointer transition-all duration-200 border ${
                                    isSelected || isHovered
                                        ? 'bg-neutral-100 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-600'
                                        : 'bg-neutral-50 dark:bg-neutral-800/50 border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                }`}
                                onClick={() => onSelect(framework)}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-lg">{getFrameworkIcon(framework)}</span>
                                    <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                                        {displayIndex}
                                    </span>
                                </div>
                                <div className="text-sm font-medium mb-1">{getFrameworkDisplayName(framework)}</div>
                                <div className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                                    {getFrameworkDescription(framework)}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="border-t border-neutral-200/50 dark:border-neutral-800/50 pt-2">
                    <div className="text-xs text-neutral-500 dark:text-neutral-400">
                        <div className="flex justify-between items-center">
                            <span>Press 1-4 to select • Enter to confirm • Esc to cancel</span>
                            <span>Use arrow keys to navigate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
