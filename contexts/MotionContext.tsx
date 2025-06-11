'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { animationConfig } from '@/lib/motion-config';
import { ANIMATIONS_PREFERENCE_KEY } from '@/lib/storageKeys';

// Define the context type
interface MotionContextType {
    prefersReducedMotion: boolean;
    enableAnimations: boolean;
    setEnableAnimations: (enable: boolean) => void;
    settings: typeof animationConfig;
}

// Create context with default values
const MotionContext = createContext<MotionContextType>({
    prefersReducedMotion: false,
    enableAnimations: true,
    setEnableAnimations: () => {},
    settings: animationConfig,
});

/**
 * Hook to use the motion context
 */
export const useMotionContext = () => useContext(MotionContext);

/**
 * Provider component for motion preferences
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
    // Check system preference for reduced motion
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    // User preference can override system preference
    const [enableAnimations, setEnableAnimations] = useState(true);

    // Listen for system preference changes
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const updateMotionPreference = (event: MediaQueryListEvent) => {
            setPrefersReducedMotion(event.matches);
        };

        // Initial value
        setPrefersReducedMotion(mediaQuery.matches);

        // Listen for changes
        mediaQuery.addEventListener('change', updateMotionPreference);

        // Check local storage for user preference
        const storedPreference = localStorage.getItem(ANIMATIONS_PREFERENCE_KEY);
        if (storedPreference !== null) {
            setEnableAnimations(storedPreference === 'true');
        }

        return () => {
            mediaQuery.removeEventListener('change', updateMotionPreference);
        };
    }, []);

    // Save user preference to local storage
    useEffect(() => {
        if (typeof window === 'undefined') return;
        localStorage.setItem(ANIMATIONS_PREFERENCE_KEY, String(enableAnimations));
    }, [enableAnimations]);

    // Context value
    const contextValue = {
        prefersReducedMotion,
        enableAnimations,
        setEnableAnimations,
        settings: animationConfig,
    };

    return <MotionContext.Provider value={contextValue}>{children}</MotionContext.Provider>;
}
