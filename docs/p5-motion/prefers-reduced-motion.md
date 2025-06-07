# Task: usePrefersReducedMotion Hook

Phase reference: 5C.

Objective: provide a simple React hook that reads the user’s “prefers-reduced-motion” media query so animations can be conditionally disabled.

Implementation Steps

1. Create `hooks/usePrefersReducedMotion.ts`:

   ```ts
   export function usePrefersReducedMotion(): boolean {
     const [prefers, setPrefers] = useState(false);
     useEffect(() => {
       const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
       const handler = () => setPrefers(mq.matches);
       handler();
       mq.addEventListener('change', handler);
       return () => mq.removeEventListener('change', handler);
     }, []);
     return prefers;
   }
   ```

2. Provide server-side fallback returning `true` (animations off) when `typeof window === 'undefined'` to avoid hydration mismatch.

3. Add unit test mocking `matchMedia`.

Acceptance Checklist

✓ Hook updates when user toggles OS setting.  
✓ Server render does not throw.  
✓ Coverage report shows hook lines executed.

Commit: `feat(motion): hook – prefers reduced motion`.
