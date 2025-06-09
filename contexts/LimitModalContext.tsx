'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { LimitReachedModal } from '@/components/modals/LimitReachedModal';

interface LimitModalContextType {
    showLimitModal: (message: string, limitType: 'notebook' | 'journal' | 'space') => void;
}

const LimitModalContext = createContext<LimitModalContextType | undefined>(undefined);

export const LimitModalProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [limitType, setLimitType] = useState<'notebook' | 'journal' | 'space'>('notebook');

    const showLimitModal = (message: string, limitType: 'notebook' | 'journal' | 'space') => {
        setModalMessage(message);
        setLimitType(limitType);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <LimitModalContext.Provider value={{ showLimitModal }}>
            {children}
            <LimitReachedModal isOpen={isOpen} onClose={closeModal} message={modalMessage} limitType={limitType} />
        </LimitModalContext.Provider>
    );
};

export const useLimitModal = () => {
    const context = useContext(LimitModalContext);
    if (context === undefined) {
        throw new Error('useLimitModal must be used within a LimitModalProvider');
    }
    return context;
};
