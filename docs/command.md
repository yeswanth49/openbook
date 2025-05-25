# Study Methods Command System Implementation Plan

## Overview
Implementation of a comprehensive study methods system that extends the current `/` command interface to include study frameworks, extreme mode, and tools. This system will be space-specific and integrate with the existing terminal input architecture.

## Study Frameworks to Implement

### 1. Memory Palace (Loci Method)
- **Description**: Ancient Greek/Roman technique using spatial memory
- **System Prompt**: Guide users to create mental maps and associate information with specific locations
- **API Endpoint**: `/api/study/memory-palace`

### 2. Feynman Technique
- **Description**: Learn by teaching - explain concepts in simple terms
- **System Prompt**: Encourage users to explain concepts as if teaching a child
- **API Endpoint**: `/api/study/feynman-technique`

### 3. Spaced Repetition
- **Description**: Review information at increasing intervals
- **System Prompt**: Schedule and track review sessions, optimize retention
- **API Endpoint**: `/api/study/spaced-repetition`

### 4. Extreme Mode
- **Description**: Intensive combination of all frameworks with time pressure
- **System Prompt**: Combines Memory Palace + Feynman + Spaced Repetition with urgency
- **API Endpoint**: `/api/study/extreme-mode`

## Command Structure Enhancement

### Current Command Structure
```
/ (triggers command menu)
├── /model (change AI model)
├── /clear (clear conversation)
└── /help (show help)
```

### New Enhanced Command Structure
```
/ (triggers command menu)
├── /model (change AI model)
├── /frameworks (study frameworks)
│   ├── 1. Memory Palace
│   ├── 2. Feynman Technique
│   ├── 3. Spaced Repetition
│   └── 4. Extreme Mode
├── /tools (study tools - future)
│   ├── Pomodoro Timer
│   ├── Flashcards
│   └── Question-Back Support
├── /rules (study rules/guidelines)
├── /clear (clear conversation)
└── /help (show help)
```

## Step-by-Step Implementation Plan

### Phase 1: Core Infrastructure (Week 1)

#### 1.1 Extend Command System
- **File**: `components/terminal/terminal-input.tsx`
- **Action**: Add new commands to the commands array
- **Details**: 
  ```typescript
  const commands: Command[] = [
    { name: "/model", description: "Change AI model" },
    { name: "/frameworks", description: "Study frameworks" },
    { name: "/extreme", description: "Extreme study mode" },
    { name: "/tools", description: "Study tools" },
    { name: "/rules", description: "Study rules" },
    { name: "/clear", description: "Clear conversation history" },
    { name: "/help", description: "List available commands" },
  ]
  ```

#### 1.2 Create Study Mode Context
- **File**: `contexts/StudyModeContext.tsx` (new)
- **Purpose**: Manage study mode state per space
- **Features**:
  - Track active study framework per space
  - Store framework-specific settings
  - Persist to localStorage with space-specific keys

#### 1.3 Extend Space Type Definition
- **File**: `contexts/SpacesContext.tsx`
- **Action**: Add study mode metadata to Space type
- **Details**:
  ```typescript
  export type Space = {
    // ... existing fields
    studyMode?: {
      framework: 'memory-palace' | 'feynman-technique' | 'spaced-repetition' | 'extreme-mode' | null;
      settings?: Record<string, any>;
      activatedAt?: number;
    };
  };
  ```

### Phase 2: Framework Selection Interface (Week 1)

#### 2.1 Create Framework Selector Component
- **File**: `components/study/framework-selector.tsx` (new)
- **Features**:
  - Grid layout showing 4 frameworks
  - Hover effects with descriptions
  - Keyboard navigation (1-4 keys)
  - Enter key selection

#### 2.2 Integrate Framework Selector with Terminal Input
- **File**: `components/terminal/terminal-input.tsx`
- **Action**: Add framework interface to activeInterface states
- **Details**: Handle `/frameworks` command to show selector

#### 2.3 Create Study Mode Badge Component
- **File**: `components/study/study-mode-badge.tsx` (new)
- **Features**:
  - Small badge showing active framework
  - Position: Top-left of input area or beside theme toggle
  - Click to change/disable mode
  - Minimalistic design

### Phase 3: API Endpoints and System Prompts (Week 2)

#### 3.1 Create Study Framework API Endpoints
- **Files**: 
  - `app/api/study/memory-palace/route.ts` (new)
  - `app/api/study/feynman-technique/route.ts` (new)
  - `app/api/study/spaced-repetition/route.ts` (new)
  - `app/api/study/extreme-mode/route.ts` (new)

#### 3.2 Design System Prompts for Each Framework

##### Memory Palace System Prompt
```
You are a Memory Palace study assistant. Help users create vivid mental maps and spatial associations for learning. Guide them to:
1. Choose a familiar location (home, school, route)
2. Create specific "stations" or rooms for different concepts
3. Associate information with vivid, memorable images at each location
4. Practice mental walks through their palace
5. Use sensory details and emotional connections

Always encourage spatial thinking and visualization techniques.
```

##### Feynman Technique System Prompt
```
You are a Feynman Technique study assistant. Help users learn by teaching. Guide them to:
1. Explain concepts in simple, plain language
2. Identify gaps in understanding when explanations break down
3. Use analogies and examples a child could understand
4. Break complex ideas into fundamental principles
5. Iterate and refine explanations until crystal clear

Challenge users to simplify further when they use jargon or complex terms.
```

##### Spaced Repetition System Prompt
```
You are a Spaced Repetition study assistant. Help users optimize long-term retention. Guide them to:
1. Identify key concepts that need reinforcement
2. Schedule review sessions at optimal intervals (1 day, 3 days, 1 week, 2 weeks, 1 month)
3. Test recall before reviewing material
4. Adjust intervals based on recall difficulty
5. Focus on weak areas while maintaining strong ones

Always emphasize testing recall over passive review.
```

##### Extreme Mode System Prompt
```
You are an Extreme Study Mode assistant. Combine Memory Palace, Feynman Technique, and Spaced Repetition for intensive learning. Guide users to:
1. Create memory palaces for complex information
2. Explain concepts using Feynman technique
3. Schedule immediate and future review sessions
4. Work with urgency and focus
5. Use time pressure to enhance retention
6. Combine all techniques for maximum effectiveness

Push users to work intensively while maintaining learning quality.
```

#### 3.3 Modify Chat API Integration
- **File**: `app/ChatClient.tsx`
- **Action**: Integrate study mode with chat options
- **Details**: Pass study framework to API calls, modify system prompts

### Phase 4: UI Integration and Visual Indicators (Week 2)

#### 4.1 Integrate Study Mode Badge
- **File**: `app/ChatClient.tsx`
- **Action**: Add StudyModeBadge component to UI
- **Position**: Near input area or beside theme toggle

#### 4.2 Update Command Interface Styling
- **File**: `components/terminal/terminal-input.tsx`
- **Action**: Enhance command suggestions with framework icons/colors
- **Features**: Visual distinction for study commands

#### 4.3 Create Framework-Specific UI Elements
- **Files**:
  - `components/study/memory-palace-helper.tsx` (new)
  - `components/study/feynman-helper.tsx` (new)
  - `components/study/spaced-repetition-tracker.tsx` (new)
  - `components/study/extreme-mode-timer.tsx` (new)

### Phase 5: Keyboard Shortcuts and UX (Week 3)

#### 5.1 Implement Keyboard Shortcuts
- **File**: `components/terminal/terminal-input.tsx`
- **Shortcuts**:
  - `/frameworks` then `1-4` for quick selection
  - `Enter` to confirm selection
  - `Esc` to cancel
  - Hover + Enter for framework selection

#### 5.2 Add Hover Interactions
- **File**: `components/study/framework-selector.tsx`
- **Features**: Detailed descriptions on hover, smooth animations

#### 5.3 Enhance Help System
- **File**: `components/terminal/terminal-input.tsx`
- **Action**: Update help panel with study commands and shortcuts

### Phase 6: Persistence and State Management (Week 3)

#### 6.1 Implement Space-Specific Study Mode Persistence
- **File**: `contexts/StudyModeContext.tsx`
- **Features**:
  - Save study mode per space ID
  - Restore mode when switching spaces
  - Clear mode when space is deleted

#### 6.2 Add Study Mode to Space Export/Import
- **File**: `contexts/SpacesContext.tsx`
- **Action**: Include study mode in space export functionality

### Phase 7: Future Tools Architecture (Week 4)

#### 7.1 Create Tools Command Structure
- **File**: `components/terminal/terminal-input.tsx`
- **Action**: Add `/tools` command with placeholder for future tools

#### 7.2 Design Tools Integration Points
- **Files**:
  - `components/tools/pomodoro-timer.tsx` (placeholder)
  - `components/tools/flashcard-system.tsx` (placeholder)
  - `components/tools/question-back.tsx` (placeholder)

#### 7.3 Create Tools Context
- **File**: `contexts/ToolsContext.tsx` (new)
- **Purpose**: Manage tool states and integration with study frameworks

## Technical Implementation Details

### Type Definitions
```typescript
// lib/types.ts additions
export enum StudyFramework {
  MemoryPalace = 'memory-palace',
  FeynmanTechnique = 'feynman-technique',
  SpacedRepetition = 'spaced-repetition',
  ExtremeMode = 'extreme-mode'
}

export interface StudyModeSettings {
  framework: StudyFramework | null;
  activatedAt: number;
  settings: {
    memoryPalace?: {
      currentLocation?: string;
      stations?: Array<{ id: string; name: string; concept: string; }>;
    };
    feynman?: {
      currentConcept?: string;
      simplificationLevel?: number;
    };
    spacedRepetition?: {
      reviewSchedule?: Array<{ concept: string; nextReview: number; interval: number; }>;
    };
    extremeMode?: {
      sessionStartTime?: number;
      targetDuration?: number;
      combinedTechniques?: StudyFramework[];
    };
  };
}
```

### API Route Structure
```typescript
// app/api/study/[framework]/route.ts
export async function POST(request: Request, { params }: { params: { framework: string } }) {
  const { framework } = params;
  const body = await request.json();
  
  // Get framework-specific system prompt
  const systemPrompt = getStudyFrameworkPrompt(framework);
  
  // Modify the existing chat API logic to use study-specific prompts
  // ... existing chat logic with modified system prompt
}
```

### Component Integration
```typescript
// components/terminal/terminal-input.tsx additions
const handleCommand = (command: string) => {
  const cmd = command.split(" ")[0].toLowerCase();
  
  switch (cmd) {
    case "/frameworks":
      setActiveInterface("frameworks");
      break;
    case "/extreme":
      // Quick access to extreme mode
      handleFrameworkSelect(StudyFramework.ExtremeMode);
      break;
    // ... existing cases
  }
};
```

## File Structure Changes

### New Files to Create
```
components/
├── study/
│   ├── framework-selector.tsx
│   ├── study-mode-badge.tsx
│   ├── memory-palace-helper.tsx
│   ├── feynman-helper.tsx
│   ├── spaced-repetition-tracker.tsx
│   └── extreme-mode-timer.tsx
├── tools/ (placeholders)
│   ├── pomodoro-timer.tsx
│   ├── flashcard-system.tsx
│   └── question-back.tsx

contexts/
├── StudyModeContext.tsx
└── ToolsContext.tsx

app/api/study/
├── memory-palace/
│   └── route.ts
├── feynman-technique/
│   └── route.ts
├── spaced-repetition/
│   └── route.ts
└── extreme-mode/
    └── route.ts

lib/
└── study-prompts.ts (new)
```

### Files to Modify
```
components/terminal/terminal-input.tsx (extend commands)
contexts/SpacesContext.tsx (add study mode to Space type)
app/ChatClient.tsx (integrate study mode badge and API calls)
lib/types.ts (add study framework types)
```

## Testing Strategy

### Unit Tests
- Test framework selection logic
- Test study mode persistence
- Test command parsing for new study commands

### Integration Tests
- Test study mode switching between spaces
- Test API endpoint responses with different frameworks
- Test UI state management with study modes

### User Experience Tests
- Test keyboard navigation through framework selection
- Test hover interactions and descriptions
- Test study mode badge visibility and functionality

## Success Metrics

### Functional Requirements
- [ ] All 4 study frameworks accessible via `/frameworks` command
- [ ] Space-specific study mode persistence
- [ ] Visual indicator showing active study mode
- [ ] Keyboard shortcuts working (1-4 for selection, Enter for confirm)
- [ ] Hover descriptions for each framework
- [ ] API endpoints responding with framework-specific prompts

### User Experience Requirements
- [ ] Smooth transitions between study modes
- [ ] Clear visual feedback for active mode
- [ ] Intuitive command structure
- [ ] Responsive design on all screen sizes
- [ ] Accessible keyboard navigation

## Future Enhancements (Post-Implementation)

### Phase 8: Advanced Tools Integration
- Pomodoro timer with study framework integration
- Flashcard system with spaced repetition scheduling
- Question-back support for active recall

### Phase 9: Analytics and Progress Tracking
- Study session analytics
- Framework effectiveness metrics
- Progress visualization

### Phase 10: Collaboration Features
- Shared study spaces with framework modes
- Study group coordination
- Peer review integration

## Risk Mitigation

### Technical Risks
- **API Performance**: Implement caching for framework prompts
- **State Management**: Use React Context efficiently to avoid re-renders
- **Persistence**: Implement backup/restore for study mode data

### User Experience Risks
- **Complexity**: Keep interface simple with progressive disclosure
- **Learning Curve**: Provide clear onboarding and help documentation
- **Performance**: Optimize component rendering for smooth interactions

## Conclusion

This implementation plan provides a comprehensive roadmap for adding study methods to OpenBook while maintaining the existing architecture patterns. The phased approach allows for iterative development and testing, ensuring each component works well before moving to the next phase.

The system is designed to be extensible, allowing for easy addition of new study frameworks and tools in the future while maintaining the clean, minimalistic interface that users expect from OpenBook. 