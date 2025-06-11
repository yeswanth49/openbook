# Consolidation of Duplicate Interface Declarations in `app/api/lib/ai/types.ts`

## Objective
Resolve TypeScript name collisions and improve maintainability by consolidating duplicate interface declarations in `app/api/lib/ai/types.ts`.

## Scope of Work
1. **ResearchPlan**
   - Keep the first declaration (inline `search_queries` and `required_analyses` arrays).
   - Remove the second declaration (lines ~93-97).
   - Ensure all references remain valid.

2. **ProcessedResult**
   - Two identical declarations exist.
   - Keep the first; remove the second (lines ~118-123).

3. **SearchResult**
   - Merge duplicates and update the `query` field to use the `SearchQuery` type.
   - Delete the redundant declaration (lines ~112-116).

4. **FinalSynthesis**
   - Replace inline `key_findings` structure with the existing `KeyFinding` type.
   - Delete the duplicate declaration (lines ~166-170).

5. **ReasonSearchResult**
   - Remove the second duplicate declaration (lines ~213-217).

6. **General Clean-up**
   - Comment or delete duplicate blocks.
   - Run `tsc --noEmit` to verify type correctness.

## Implementation Steps
1. Update **SearchResult** interface (early section) to:
   ```ts
   export interface SearchResult {
     type: 'web' | 'academic' | 'x';
     query: SearchQuery;
     results: ProcessedResult[];
   }
   ```
2. Update **FinalSynthesis** interface (early section) to:
   ```ts
   export interface FinalSynthesis {
     key_findings: KeyFinding[];
     remaining_uncertainties: string[];
   }
   ```
3. Remove / comment out the following duplicate blocks:
   - `ResearchPlan` (second occurrence)
   - `SearchResult` (second occurrence)
   - `ProcessedResult` (second occurrence)
   - `FinalSynthesis` (second occurrence)
   - `ReasonSearchResult` (second occurrence)
4. Ensure helper types `SearchQuery`, `RequiredAnalysis`, and `KeyFinding` remain intact.
5. Re-run type-checker to confirm no redeclaration errors.

## Acceptance Criteria
- `tsc` passes with no duplicate identifier errors.
- File contains exactly one declaration for each of the affected interfaces.
- `SearchResult.query` references `SearchQuery`.
- `FinalSynthesis.key_findings` references `KeyFinding[]`.
- No functional or API surface changes outside the type definitions. 