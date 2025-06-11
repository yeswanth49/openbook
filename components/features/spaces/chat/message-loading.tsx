'use client';

import React from 'react';

// All loading-related visuals have been temporarily disabled to achieve a cleaner, minimal UI.
// These stub components keep the API surface unchanged while rendering nothing.

export const MessageLoading: React.FC<{ showThinking?: boolean; loadingText?: string; thinkingDuration?: number }> = () => null;

export const TypingIndicator: React.FC<{ text?: string }> = () => null;

export const StreamingProgress: React.FC<{ progress?: number }> = () => null;
