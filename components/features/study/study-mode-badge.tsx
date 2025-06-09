'use client';

import React from 'react';
import { StudyFramework } from '@/lib/types';
import { getFrameworkDisplayName, getFrameworkIcon } from '@/lib/study-prompts';

interface StudyModeBadgeProps {
    framework: StudyFramework | null;
    onClick: () => void;
    className?: string;
}

/**
 * Renders a styled button badge representing the current study framework mode.
 *
 * Displays an icon and the framework's name or abbreviation, with dynamic colors based on the selected framework. Returns `null` if no framework is provided.
 *
 * @param framework - The active study framework mode, or `null` to render nothing.
 * @param onClick - Callback invoked when the badge is clicked.
 * @param className - Optional additional CSS class names for the button.
 *
 * @returns A React button element representing the study mode badge, or `null` if no framework is active.
 */
export function StudyModeBadge({ framework, onClick, className = '' }: StudyModeBadgeProps) {
    if (!framework) return null;

    return (
        <button
            onClick={onClick}
            className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium transition-all duration-200 hover:scale-105 ${className}`}
            style={{
                backgroundColor: getFrameworkColor(framework),
                color: getFrameworkTextColor(framework),
            }}
            title={`Active: ${getFrameworkDisplayName(framework)} - Click to change`}
        >
            <span className="text-sm">{getFrameworkIcon(framework)}</span>
            <span className="hidden sm:inline">{getFrameworkDisplayName(framework)}</span>
            <span className="sm:hidden">{getFrameworkAbbreviation(framework)}</span>
        </button>
    );
}

/**
 * Returns the background color associated with a given study framework.
 *
 * @param framework - The study framework for which to retrieve the background color.
 * @returns A semi-transparent color string representing the framework's background color.
 */
function getFrameworkColor(framework: StudyFramework): string {
    switch (framework) {
        case StudyFramework.MemoryPalace:
            return 'rgba(59, 130, 246, 0.1)'; // blue
        case StudyFramework.FeynmanTechnique:
            return 'rgba(16, 185, 129, 0.1)'; // green
        case StudyFramework.SpacedRepetition:
            return 'rgba(245, 158, 11, 0.1)'; // amber
        case StudyFramework.ExtremeMode:
            return 'rgba(239, 68, 68, 0.1)'; // red
        default:
            return 'rgba(107, 114, 128, 0.1)'; // gray
    }
}

/**
 * Returns the text color associated with a given study framework.
 *
 * @param framework - The study framework for which to retrieve the text color.
 * @returns An RGB color string representing the framework's text color.
 */
function getFrameworkTextColor(framework: StudyFramework): string {
    switch (framework) {
        case StudyFramework.MemoryPalace:
            return 'rgb(59, 130, 246)'; // blue
        case StudyFramework.FeynmanTechnique:
            return 'rgb(16, 185, 129)'; // green
        case StudyFramework.SpacedRepetition:
            return 'rgb(245, 158, 11)'; // amber
        case StudyFramework.ExtremeMode:
            return 'rgb(239, 68, 68)'; // red
        default:
            return 'rgb(107, 114, 128)'; // gray
    }
}

/**
 * Returns the two-letter abbreviation for a given study framework.
 *
 * @param framework - The study framework to abbreviate.
 * @returns The abbreviation for the specified {@link framework}, or "ST" if unrecognized.
 */
function getFrameworkAbbreviation(framework: StudyFramework): string {
    switch (framework) {
        case StudyFramework.MemoryPalace:
            return 'MP';
        case StudyFramework.FeynmanTechnique:
            return 'FT';
        case StudyFramework.SpacedRepetition:
            return 'SR';
        case StudyFramework.ExtremeMode:
            return 'EX';
        default:
            return 'ST';
    }
}
