'use client';
import { cn } from '@/lib/utils';
import { motion, Transition } from 'motion/react';

type BorderTrailProps = {
    className?: string;
    size?: number;
    transition?: Transition;
    delay?: number;
    onAnimationComplete?: () => void;
    style?: React.CSSProperties;
};

/**
 * Renders an animated border trail effect that moves continuously along a rounded rectangular path.
 *
 * The trail's size, animation transition, delay, and styling can be customized via props. The animation loops infinitely by default and triggers the optional {@link onAnimationComplete} callback when finished.
 *
 * @param size - The width and height of the animated trail in pixels. Defaults to 60.
 * @param delay - Optional delay before the animation starts, in seconds.
 * @param onAnimationComplete - Optional callback invoked when the animation completes a cycle.
 * @param style - Additional inline styles for the animated trail element.
 * @returns A React element displaying the animated border trail.
 */
export function BorderTrail({ className, size = 60, transition, delay, onAnimationComplete, style }: BorderTrailProps) {
    const BASE_TRANSITION = {
        repeat: Infinity,
        duration: 5,
        ease: 'linear',
    };

    return (
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
            <motion.div
                className={cn('absolute aspect-square bg-zinc-500', className)}
                style={{
                    width: size,
                    offsetPath: `rect(0 auto auto 0 round ${size}px)`,
                    ...style,
                }}
                animate={{
                    offsetDistance: ['0%', '100%'],
                }}
                transition={{
                    ...(transition ?? BASE_TRANSITION),
                    delay: delay,
                }}
                onAnimationComplete={onAnimationComplete}
            />
        </div>
    );
}
