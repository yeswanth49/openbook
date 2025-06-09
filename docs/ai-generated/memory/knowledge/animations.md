---
id: "knowledge-animations-001"
type: "knowledge"
source: "user"
confidence: 0.95
created: "2023-10-15T12:50:00Z"
updated: "2023-10-15T12:50:00Z"
accessed: "2023-10-15T12:50:00Z"
contexts: ["animations", "transitions", "ui", "framer-motion"]
---

# Transition Animations

Guidelines and patterns for animations and transitions throughout the application.

## Animation Library

- Use Framer Motion for all complex animations and transitions
- Utilize CSS transitions for simpler hover/focus states
- Maintain consistent timing functions across similar animations

## Animation Principles

- Animations should be subtle and not disrupt the user experience
- Use transitions between loading and loaded states to create a smooth experience
- Ensure animations don't cause layout shifts that disrupt reading or interaction
- Keep durations short (generally 150-300ms) for interface transitions

## Common Patterns

### Hover Animations
```tsx
<div className="transition-all duration-300 opacity-0 group-hover:opacity-100">
  {/* Content revealed on hover */}
</div>
```

### Loading Transitions
```tsx
<AnimatePresence mode="wait">
  {isLoading ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <LoadingIndicator />
    </motion.div>
  ) : (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {content}
    </motion.div>
  )}
</AnimatePresence>
```

## Specific Applications

- **Loading State Transitions**: Fade between loading skeletons and content
- **Modal Windows**: Scale and fade animations for entry/exit
- **Sidebar Items**: Subtle hover effects and expansion animations
- **Message Typing**: Character-by-character typing effect for AI responses
- **Notification Toasts**: Slide and fade for entry/exit

## Accessibility Considerations

- Honor user preferences for reduced motion
- Ensure all animated elements are accessible via keyboard
- Don't rely solely on animation to convey important information
- Test animations with screen readers and keyboard navigation 