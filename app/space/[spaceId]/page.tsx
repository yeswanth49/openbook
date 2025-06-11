'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import Home from '@/app/(core)/page';
import { useSpaces } from '@/contexts/SpacesContext';

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
