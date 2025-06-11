'use client';

import React, { useEffect } from 'react';
import { Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useStreak } from '@/hooks/useStreak';

export const Streak: React.FC = () => {
    const streak = useStreak();

    /* --------------------------------- Styling --------------------------------- */
    const bgClass = React.useMemo(() => {
        if (streak >= 7 && streak <= 13) {
            return 'bg-yellow-100 dark:bg-yellow-900/30';
        }
        if (streak >= 14 && streak <= 29) {
            return 'bg-orange-100 dark:bg-orange-900/30';
        }
        if (streak >= 30 && streak <= 49) {
            return 'bg-red-100 dark:bg-red-900/30';
        }
        if (streak >= 50 && streak <= 100) {
            return 'bg-white dark:bg-neutral-900';
        }
        return 'bg-white dark:bg-neutral-900';
    }, [streak]);

    /* ------------------------------ Confetti Burst ------------------------------ */
    const LAST_CELEBRATED_MILESTONE_KEY = 'openbook.streak.lastCelebratedMilestone';

    useEffect(() => {
        const milestones = [7, 30, 100];
        const currentMilestone = milestones.find(milestone => milestone === streak);
        
        if (typeof window === 'undefined') return;
        
        const lastCelebratedMilestone = parseInt(
            localStorage.getItem(LAST_CELEBRATED_MILESTONE_KEY) || '0', 
            10
        );
        
        if (currentMilestone && lastCelebratedMilestone !== currentMilestone) {
            localStorage.setItem(LAST_CELEBRATED_MILESTONE_KEY, currentMilestone.toString());

            const triggerSideCannonConfetti = async () => {
                const confetti = (await import('canvas-confetti')).default;
                // Colors from streak (orange/flame) and surprise me (purple) badges
                const colors = ["#f97316", "#a855f7"]; // orange-500 and purple-500
                const end = Date.now() + 5 * 1000;
                
                function frame() {
                    // Left side cannon
                    confetti({
                        particleCount: 2,
                        angle: 60,
                        spread: 55,
                        origin: { x: 0 },
                        colors: colors,
                    });
                    // Right side cannon
                    confetti({
                        particleCount: 2,
                        angle: 120,
                        spread: 55,
                        origin: { x: 1 },
                        colors: colors,
                    });

                    if (Date.now() < end) {
                        requestAnimationFrame(frame);
                    }
                }
                requestAnimationFrame(frame);
            };
            
            triggerSideCannonConfetti();
        }
    }, [streak]);

    return (
        <Button
            variant="outline"
            className={`group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:shadow-xs transition-all h-auto ${bgClass}`}
        >
            <Flame className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 dark:text-orange-400 group-hover:rotate-12 transition-transform" />
            <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                {streak} day{streak !== 1 ? 's' : ''} 🔥
            </span>
        </Button>
    );
};

export default Streak; 