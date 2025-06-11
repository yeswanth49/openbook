import { useEffect, useState } from 'react';

/**
 * Tracks the user's consecutive-day login streak using localStorage.
 *
 * Streak rules:
 *  – Everyone starts at 1 on their first visit.
 *  – If the user visits again on the next consecutive day, the streak increments.
 *  – If they miss a day (diff > 1), the streak resets to 1.
 *
 * The hook returns the current streak value (number).
 */
export function useStreak(): number {
    const STREAK_COUNT_KEY = 'openbook.streak.count';
    const STREAK_LAST_VISIT_KEY = 'openbook.streak.lastVisit';

    // Helper to normalise a date to midnight for day-level comparison
    const normalise = (d: Date) => {
        const copy = new Date(d);
        copy.setHours(0, 0, 0, 0);
        return copy.getTime();
    };

    const calculateStreak = (): number => {
        if (typeof window === 'undefined') return 1;

        const today = new Date();
        const todayMidnight = normalise(today);

        const storedCount = parseInt(localStorage.getItem(STREAK_COUNT_KEY) || '0', 10);
        const storedDateString = localStorage.getItem(STREAK_LAST_VISIT_KEY);

        if (!storedDateString) {
            // First visit
            localStorage.setItem(STREAK_COUNT_KEY, '1');
            localStorage.setItem(STREAK_LAST_VISIT_KEY, today.toISOString());
            return 1;
        }

        const lastVisitMidnight = normalise(new Date(storedDateString));
        const diffDays = Math.floor((todayMidnight - lastVisitMidnight) / (1000 * 60 * 60 * 24));

        let newCount = storedCount || 1; // default to 1 if somehow 0
        if (diffDays === 0) {
            // Same day – keep existing streak
            newCount = storedCount || 1;
        } else if (diffDays === 1) {
            // Consecutive day – increment
            newCount = (storedCount || 1) + 1;
        } else {
            // Missed one or more days – reset
            newCount = 1;
        }

        // Persist updated values
        localStorage.setItem(STREAK_COUNT_KEY, newCount.toString());
        localStorage.setItem(STREAK_LAST_VISIT_KEY, today.toISOString());

        return newCount;
    };

    const [streak, setStreak] = useState<number>(() => calculateStreak());

    // Update streak automatically at midnight if the tab stays open
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            // If time is within first minute of a new day, recalc
            if (now.getHours() === 0 && now.getMinutes() === 0) {
                setStreak(calculateStreak());
            }
        }, 60 * 1000); // check each minute
        return () => clearInterval(interval);
    }, []);

    return streak;
} 