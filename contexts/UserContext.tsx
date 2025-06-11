'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface UserContextType {
    premium: boolean;
    setPremium: (value: boolean) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);
const STORAGE_KEY = 'openbook_user_data';

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [premium, setPremium] = useState<boolean>(false);
    const [isInitialized, setIsInitialized] = useState<boolean>(false);

    // Load from localStorage
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            try {
                const parsed = JSON.parse(stored) as { premium: boolean };
                setPremium(parsed.premium);
            } catch {
                // ignore parse errors
            }
        }
        setIsInitialized(true);
    }, []);

    // Persist to localStorage
    useEffect(() => {
        if (!isInitialized) return;
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ premium }));
    }, [premium, isInitialized]);

    return (
        <UserContext.Provider
            value={{
                premium,
                setPremium,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
