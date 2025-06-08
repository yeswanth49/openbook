export enum BlockType {
    Text = 'text',
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    BulletList = 'bullet-list',
    NumberedList = 'numbered-list',
    TodoList = 'todo-list',
    ToggleList = 'toggle-list',
    Quote = 'quote',
    Divider = 'divider',
    Code = 'code',
    Image = 'image',
    Table = 'table',
    Page = 'page',
    Link = 'link',
    Mention = 'mention',
    Date = 'date',
    Embed = 'embed',
}

export interface Block {
    id: string;
    type: BlockType;
    content: string;
    isFocused?: boolean;
    metadata?: Record<string, any>;
}

export interface Notebook {
    id: string;
    name: string;
    order: number;
    createdAt: number;
    updatedAt: number;
    isExpanded?: boolean;
    metadata?: {
        icon?: string;
        color?: string;
    };
}

export interface JournalEntry {
    id: string;
    title: string;
    blocks: Block[];
    createdAt: string;
    updatedAt: string;
    notebook_id?: string;
}

export enum StudyFramework {
    MemoryPalace = 'memory-palace',
    FeynmanTechnique = 'feynman-technique',
    SpacedRepetition = 'spaced-repetition',
    ExtremeMode = 'extreme-mode',
}

export interface StudyModeSettings {
    framework: StudyFramework | null;
    activatedAt: number;
    settings: {
        memoryPalace?: {
            currentLocation?: string;
            stations?: Array<{ id: string; name: string; concept: string }>;
        };
        feynman?: {
            currentConcept?: string;
            simplificationLevel?: number;
        };
        spacedRepetition?: {
            reviewSchedule?: Array<{ concept: string; nextReview: number; interval: number }>;
        };
        extremeMode?: {
            sessionStartTime?: number;
            targetDuration?: number;
            combinedTechniques?: StudyFramework[];
        };
    };
}
