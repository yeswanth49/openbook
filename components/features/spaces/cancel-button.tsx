'use client';

import React from 'react';

interface CancelButtonProps {
    onCancel: () => void;
    isLoading: boolean;
    status: string;
    className?: string;
}

// TODO: [TICKET-XXX] Temporary stub to address visual glitches with large messages
// Original functionality: Rendered cancel buttons with loading states and animations
// This interim version keeps the API surface but provides a minimal functional UI so that
// downstream components relying on the onCancel callback continue to work.
// A full-featured implementation (styling, animations, accessibility) will be restored
// once the underlying layout issues are fixed.
export const CancelButton: React.FC<CancelButtonProps> = ({ onCancel, isLoading, className }) => {
    const handleClick = React.useCallback(() => {
        onCancel();
    }, [onCancel]);

    return (
        <button
            type="button"
            onClick={handleClick}
            disabled={isLoading}
            className={className}
            aria-label="Cancel current action"
        >
            Cancel
        </button>
    );
};

// A floating cancel button for mobile usage
export const FloatingCancelButton: React.FC<CancelButtonProps> = (_) => null;
