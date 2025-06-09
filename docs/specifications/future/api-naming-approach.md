# API Naming & Organization Approach

## Overview

This document outlines the strategic approach for organizing and naming API endpoints in the OpenBook application, considering future integrations and scalability requirements.

## Current State (As of Implementation)

```
app/api/
├── chat/           # AI chat functionality
├── clean_images/   # Image cleaning operations
├── upload/         # File upload handling
├── proxy-image/    # Image proxy operations
├── search/         # Legacy redirect to /api/chat
└── study/          # AI-powered study features
    ├── extreme-mode/
    ├── feynman-technique/
    ├── memory-palace/
    └── spaced-repetition/
```

## Future Vision

Based on planned features including:
- Whiteboard integration (Memoboard)
- Graph integration
- Video generation
- Image generation
- Voice generation
- Realtime live API integration
- Traditional study tools (Pomodoro, flashcards, question bank, quiz)

## Recommended API Structure

```
app/api/
├── ai/                    # All AI-powered features
│   ├── chat/             # Current: /api/chat
│   ├── study/            # Move from root: /api/study/*
│   ├── image/            # Future: Image generation
│   ├── voice/            # Future: Voice generation  
│   └── video/            # Future: Video generation
├── media/                 # File handling & processing
│   ├── upload/           # Current: /api/upload
│   ├── clean/            # Current: /api/clean_images
│   ├── proxy/            # Current: /api/proxy-image
│   └── process/          # Future: transcoding, compression
├── integrations/          # External service integrations
│   ├── whiteboard/       # Future: Memoboard integration
│   ├── graph/            # Future: Graph/network integrations
│   └── realtime/         # Future: Live API integrations
├── study/                 # Traditional study tools & utilities
│   ├── pomodoro/         # Future: Pomodoro timer
│   ├── flashcards/       # Future: Flashcard system
│   ├── questions/        # Future: Question bank
│   ├── quiz/             # Future: Quiz system
│   └── analytics/        # Future: Study analytics
└── search/               # Legacy redirect (maintained for compatibility)
```

## Design Principles

### 1. Clear Separation of Concerns
- **`ai/`** - All AI-powered generation and processing
- **`media/`** - File operations (not AI-specific)
- **`integrations/`** - External service connections
- **`study/`** - Pure study utilities (timers, cards, etc.)

### 2. Scalability Considerations
- Easy to add new AI models under `ai/`
- New integrations have a clear home
- Study tools can expand without cluttering other areas
- Predictable URL patterns

### 3. Developer Experience
- Intuitive endpoint discovery: `/api/ai/image`, `/api/study/flashcards`
- Related functionality is co-located
- Clear mental model for where new features belong

### 4. Backward Compatibility
- Maintain existing endpoints during transition
- Implement redirects where necessary
- Gradual migration approach

## Migration Strategy

### Phase 1: Media Consolidation (Current Priority)
```bash
# Organize file-related APIs
/api/upload → /api/media/upload
/api/clean_images → /api/media/clean
/api/proxy-image → /api/media/proxy
```

### Phase 2: Integration Structure (Future)
```bash
# Prepare for external service integrations
mkdir app/api/integrations/
```

### Phase 3: AI vs Study Feature Separation (Future)
```bash
# When adding traditional study tools
current /api/study/* → /api/ai/study/*
new study tools → /api/study/*
```

## Implementation Notes

### Current Approach (Preserving Existing Endpoints)
- Keep all current endpoints functional
- Add new organized structure alongside existing
- Plan gradual migration with proper redirects
- Maintain backward compatibility during transition

### URL Pattern Examples

#### Current
- `POST /api/chat` - AI chat
- `POST /api/upload` - File upload
- `POST /api/clean_images` - Image cleaning
- `GET /api/proxy-image` - Image proxy
- `POST /api/study/feynman-technique` - AI study method

#### Future Target
- `POST /api/ai/chat` - AI chat
- `POST /api/media/upload` - File upload
- `POST /api/media/clean` - Image cleaning
- `GET /api/media/proxy` - Image proxy
- `POST /api/ai/study/feynman-technique` - AI study method
- `POST /api/study/pomodoro` - Traditional study timer
- `POST /api/integrations/whiteboard/sync` - External integration

## Benefits

1. **Maintainability** - Related functionality is grouped together
2. **Discoverability** - Predictable endpoint patterns
3. **Scalability** - Easy to add new features in appropriate categories
4. **Team Collaboration** - Clear ownership boundaries
5. **API Documentation** - Logical grouping for documentation generation
6. **Testing** - Easier to organize and maintain test suites

## Decision Log

**Date**: Current Implementation
**Decision**: Adopt hybrid domain-based API organization
**Rationale**: Balances current needs with future scalability requirements
**Impact**: Improved code organization, better developer experience, easier feature additions

---

*This document should be updated as the API structure evolves and new requirements emerge.* 