'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import Home from '@/app/(core)/page';
import { useSpaces } from '@/contexts/SpacesContext';

/**
 * React component that sets the current space based on the URL parameter and renders the home page.
 *
 * Extracts the `spaceId` from the route parameters and invokes `switchSpace` when `spaceId` is a string.
 * Always renders the {@link Home} component.
 */
export default function SpacePage() {
    const { spaceId } = useParams();
    const { switchSpace } = useSpaces();

    useEffect(() => {
        if (typeof spaceId === 'string') {
            switchSpace(spaceId);
        }
    }, [spaceId, switchSpace]);

    return <Home />;
}
