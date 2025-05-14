# AI Memory Directory

This directory contains the persistent memory of the AI assistant for this project, stored in markdown files with YAML frontmatter for structured metadata.

## Directory Structure

```
ai_docs/memory/
├── README.md                  # This file
├── preferences/               # User and project preferences
│   ├── coding-style.md        # Code formatting and style choices
│   ├── ui-design.md           # UI/UX preferences
│   └── workflow.md            # Development workflow preferences
├── knowledge/                 # Project knowledge
│   ├── architecture.md        # System architecture information
│   ├── components.md          # Common components and usage
│   └── patterns.md            # Code patterns and conventions
├── decisions/                 # Technical decisions
│   ├── tech-stack.md          # Technology choices and rationale
│   ├── naming-conventions.md  # Agreed naming standards
│   └── api-design.md          # API design principles
└── interactions/              # Conversation history insights
    ├── common-questions.md    # Frequently asked questions
    ├── clarifications.md      # Important clarifications from user
    └── index.md               # Index of key interactions
```

## File Format

Each memory entry follows this format:

```markdown
---
id: "unique-identifier"
type: "preference|knowledge|decision|pattern"
source: "user|inference"
confidence: 0.95
created: "2023-07-15T10:30:00Z"
updated: "2023-07-15T14:45:00Z"
accessed: "2023-07-16T09:20:00Z"
contexts: ["context1", "context2"]
---

# Title of Memory Entry

Brief description of the memory content.

## Details

- Additional details
- Supporting information
- Examples or references
```

## Usage Guidelines

1. **Adding Memory**: When you want the AI to remember something important, ask it to store the information in the appropriate directory.

2. **Referencing Memory**: Mention the relevant memory file or topic when asking questions to help the AI give more contextual responses.

3. **Updating Memory**: If information changes, request an update to the specific memory file rather than creating duplicates.

4. **Manual Editing**: You can manually edit any file in this directory to correct or enhance the AI's memory.

## Privacy Note

This directory contains project-specific knowledge. You may want to add it to `.gitignore` if it contains sensitive information you don't want to commit to the repository. 