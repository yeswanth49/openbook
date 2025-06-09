'use client';
import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface TextShimmerProps {
    children: string;
    as?: React.ElementType;
    className?: string;
    duration?: number;
    spread?: number;
}

/**
 * Renders text with an animated shimmering gradient effect.
 *
 * The shimmer animation moves continuously from right to left, with its spread dynamically calculated based on the text length and the provided spread factor. The component supports customization of the rendered element, animation duration, and additional CSS classes.
 *
 * @param children - The text content to display with the shimmer effect.
 * @param as - Optional React element type to render (defaults to 'p').
 * @param className - Optional additional CSS classes.
 * @param duration - Optional animation duration in seconds (defaults to 2).
 * @param spread - Optional multiplier for the shimmer spread (defaults to 2).
 *
 * @returns A React element displaying the shimmering text animation.
 */
export function TextShimmer({ children, as: Component = 'p', className, duration = 2, spread = 2 }: TextShimmerProps) {
    const MotionComponent = motion.create(Component as keyof JSX.IntrinsicElements);

    const dynamicSpread = useMemo(() => {
        return children.length * spread;
    }, [children, spread]);

    return (
        <MotionComponent
            className={cn(
                'relative inline-block bg-[length:250%_100%,auto] bg-clip-text',
                'text-transparent [--base-color:#a1a1aa] [--base-gradient-color:#000]',
                '[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))] [background-repeat:no-repeat,padding-box]',
                'dark:[--base-color:#71717a] dark:[--base-gradient-color:#ffffff] dark:[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]',
                className,
            )}
            initial={{ backgroundPosition: '100% center' }}
            animate={{ backgroundPosition: '0% center' }}
            transition={{
                repeat: Infinity,
                duration,
                ease: 'linear',
            }}
            style={
                {
                    '--spread': `${dynamicSpread}px`,
                    backgroundImage: `var(--bg), linear-gradient(var(--base-color), var(--base-color))`,
                } as React.CSSProperties
            }
        >
            {children}
        </MotionComponent>
    );
}
