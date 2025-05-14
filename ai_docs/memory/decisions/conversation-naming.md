---
id: "decision-conversation-naming-001"
type: "decision"
source: "user"
confidence: 0.95
created: "2023-10-15T12:30:00Z"
updated: "2023-10-15T12:30:00Z"
accessed: "2023-10-15T12:30:00Z"
contexts: ["conversations", "spaces", "ui", "loading-states"]
---

# Conversation Auto-Naming Strategy

Decision on how to automatically name conversations in the Spaces feature.

## Implementation Approach

The project employs a sophisticated auto-naming system for conversations:

### Generation Strategy
- Extract subject from first user message as initial title
- Fallback to key terms extraction if first message is unclear
- Respect manually set names with visual indicator for auto-named conversations

### Loading States
- Show "Generating title..." with rotating messages during processing
- Use small loading spinner and faded text for visual feedback
- Provide smooth transitions when name is generated

### Technical Implementation
- Track naming state in conversation metadata (`isGeneratingName`)
- Add cooldown period (5 min) between auto-naming attempts
- Support manual override with option to reset to auto-naming

## Rationale

- Eliminates cognitive load of users having to name every conversation
- Creates more meaningful organization than timestamp-based naming
- Provides visual feedback during processing for better UX
- Balances automatic updates with respect for user customization 