# Slide & Settle Motion System

The OpenBook UI implements a consistent animation pattern called "Slide & Settle" that creates a cohesive, predictable motion experience across the application. This specification outlines the core principles and implementation details of this motion system.

## Core Principles

1. **Consistency**: All interactive elements follow the same motion patterns
2. **Subtlety**: Animations enhance without distracting
3. **Responsiveness**: Motion provides immediate feedback
4. **Intentionality**: Every animation serves a purpose
5. **Performance**: Animations are optimized for smooth performance

## Animation Configuration

The Slide & Settle motion system is implemented through a centralized animation configuration object that defines standard settings:

```typescript
const animationConfig = {
  // Standard transition preset
  transition: {
    ease: [0.25, 0.1, 0.25, 1], // Cubic bezier curve
    duration: 0.3               // 300ms duration
  },

  // Spring configuration
  spring: {
    type: 'spring',
    stiffness: 400,
    damping: 30
  },

  // Fade in/out preset
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2 }
  },
  
  // Hover animation preset
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 }
  },
  
  // Tap animation preset
  tap: {
    scale: 0.98
  }
};
```

## Standard Animation Patterns

### 1. Hover Interactions

All interactive elements use a small horizontal slide (x: 3) on hover. This creates a consistent "nudge" effect that indicates interactivity:

```tsx
<motion.button
  whileHover={{ x: 3 }}
  whileTap={animationConfig.tap}
  className="..."
>
  Button Content
</motion.button>
```

### 2. Click/Tap Feedback

When clicked or tapped, elements slightly reduce in scale (scale: 0.98) to provide tactile feedback:

```tsx
whileTap={{ scale: 0.98 }}
```

### 3. Element Transitions

Elements entering or exiting the DOM use consistent fade animations:

```tsx
<AnimatePresence>
  {isVisible && (
    <motion.div 
      {...animationConfig.fade}
      className="..."
    >
      Content
    </motion.div>
  )}
</AnimatePresence>
```

### 4. Panel Expansions

Panels and containers use spring physics when expanding or collapsing:

```tsx
const sectionVariants = {
  open: { 
    height: "auto",
    opacity: 1,
    transition: {
      height: {
        type: "spring",
        stiffness: 400,
        damping: 30
      }
    }
  },
  closed: { 
    height: 0, 
    opacity: 0,
    transition: {
      height: {
        type: "spring",
        stiffness: 400,
        damping: 30
      }
    }
  }
};
```

### 5. Modal Animations

Modals use a combination of fade and scale effects:

```tsx
const modalVariants = {
  initial: { opacity: 0, scale: 0.95, y: 10 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.98, y: 10 },
  transition: animationConfig.spring
};
```

## Component Implementation

The animation configuration is passed between components to ensure consistency:

```tsx
interface SidebarNotebookProps {
  notebook: Notebook;
  currentPageType: string;
  currentPageId: string;
  animationConfig?: AnimationConfig;
}
```

Each component can then use the same animation patterns or override them when necessary, while maintaining the overall motion language of the application.

## Animation Usage Guidelines

1. **Be selective**: Not every element needs animation
2. **Be efficient**: Group animations that happen simultaneously
3. **Be responsive**: Animations should never make the UI feel slow
4. **Be accessible**: Respect user preferences for reduced motion
5. **Be consistent**: Use the standard animation patterns

## Reduced Motion Support

For users who prefer reduced motion, implement a system that respects the `prefers-reduced-motion` media query:

```tsx
const prefersReducedMotion = typeof window !== 'undefined' 
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
  : false;

// Use in components
const animationSettings = prefersReducedMotion 
  ? { duration: 0 } // Disable animations
  : animationConfig.spring; // Use standard animations
```

## Future Enhancements

1. Add animation variants for different types of interactions
2. Implement scroll-triggered animations
3. Add page transition animations
4. Develop a component library with animation built-in
5. Consider adding sound design to complement animations 