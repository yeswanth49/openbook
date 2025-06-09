---
id: "knowledge-naming-conventions-001"
type: "knowledge"
source: "user"
confidence: 0.95
created: "2023-10-15T12:40:00Z"
updated: "2023-10-15T12:40:00Z"
accessed: "2023-10-15T12:40:00Z"
contexts: ["coding", "components", "naming"]
---

# Component Naming Conventions

Established naming patterns and conventions for components in the project.

## Component Naming Patterns

- Loading-related components should include their purpose in the name (e.g., `MessageLoading`, `NameLoading`)
- Use descriptive, function-specific names that clearly indicate the component's purpose
- Follow a consistent pattern across related components (e.g., all loading components follow the same naming structure)

## File and Directory Naming

- Use kebab-case for directory names (e.g., `components/auth-form`)
- Use PascalCase for component files (e.g., `MessageLoading.tsx`, `SpaceItem.tsx`)
- Name test files with `.test.tsx` suffix matching the component name

## Examples

| Component Purpose | Correct Name | Incorrect Name |
|-------------------|--------------|----------------|
| Loading state for messages | `MessageLoading` | `Loading` or `LoadingMessage` |
| Loading state for names | `NameLoading` | `LoadingName` or just `Name` |
| Sidebar space item | `SpaceItem` | `Item` or `Space` |

## Rationale

- Clear naming improves code readability and makes components easier to find
- Consistent patterns help developers understand the purpose of components at a glance
- Function-specific naming reduces confusion when working with related components 