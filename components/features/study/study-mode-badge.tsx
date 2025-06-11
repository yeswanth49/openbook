'use client';

import React from 'react';
import { StudyFramework } from '@/lib/types';
import { getFrameworkDisplayName, getFrameworkIcon } from '@/lib/study-prompts';

interface StudyModeBadgeProps {
    framework: StudyFramework | null;
    onClick: () => void;
    className?: string;
}

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

// Centralized color mapping to avoid duplication between background and text colors
const frameworkColors: Record<StudyFramework | 'default', { bg: string; text: string }> = {
    [StudyFramework.MemoryPalace]: { bg: 'rgba(59, 130, 246, 0.1)', text: 'rgb(59, 130, 246)' }, // blue
    [StudyFramework.FeynmanTechnique]: { bg: 'rgba(16, 185, 129, 0.1)', text: 'rgb(16, 185, 129)' }, // green
    [StudyFramework.SpacedRepetition]: { bg: 'rgba(245, 158, 11, 0.1)', text: 'rgb(245, 158, 11)' }, // amber
    [StudyFramework.ExtremeMode]: { bg: 'rgba(239, 68, 68, 0.1)', text: 'rgb(239, 68, 68)' }, // red
    default: { bg: 'rgba(107, 114, 128, 0.1)', text: 'rgb(107, 114, 128)' }, // gray
};

function getFrameworkColor(framework: StudyFramework): string {
    return frameworkColors[framework]?.bg || frameworkColors.default.bg;
}

function getFrameworkTextColor(framework: StudyFramework): string {
    return frameworkColors[framework]?.text || frameworkColors.default.text;
}

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
