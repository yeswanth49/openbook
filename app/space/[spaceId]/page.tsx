'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import Home from '@/app/(core)/page';
import { useSpaces } from '@/contexts/SpacesContext';

export default function SpacePage() {
    const { spaceId } = useParams();
    const { currentSpaceId, switchSpace } = useSpaces();

    useEffect(() => {
        if (typeof spaceId !== 'string') return;

        // Avoid redundant switching if URL already matches current space
        if (currentSpaceId === spaceId) return;

        // Use context-driven switch; this will trigger the skeleton in ChatClient
        void switchSpace(spaceId);
    }, [spaceId, currentSpaceId, switchSpace]);

    return <Home />;
}
