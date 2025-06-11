'use client';

import React from 'react';

interface CancelButtonProps {
    onCancel: () => void;
    isLoading: boolean;
    status: string;
    className?: string;
}

export const CancelButton: React.FC<CancelButtonProps> = () => null;

// A floating cancel button for mobile usage
export const FloatingCancelButton: React.FC<CancelButtonProps> = () => null;
