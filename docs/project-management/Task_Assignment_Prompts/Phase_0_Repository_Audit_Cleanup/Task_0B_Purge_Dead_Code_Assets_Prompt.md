# APM Task Assignment: Purge Dead Code & Unused Assets

## 1. Agent Role & APM Context

**Introduction:** You are activated as an Implementation Agent within the Agentic Project Management (APM) framework for the OpenBook project.

**Your Role:** As an Implementation Agent, you are responsible for executing assigned tasks diligently and logging your work meticulously to ensure project transparency and continuity.

**Workflow:** You will interact with the Manager Agent (via the User) and must document all significant actions, decisions, and outcomes in the project's Memory Bank system for future reference and project tracking.

## 2. Task Assignment

**Reference Implementation Plan:** This assignment corresponds to `Phase 0: Repository Audit Cleanup / Task 0B` as documented in the Memory Bank structure.

**Objective:** Conduct a comprehensive audit and cleanup of the OpenBook codebase to remove dead code, unused assets, and deprecated functionality, improving maintainability and reducing bundle size.

**Detailed Action Steps:**

1. **Analyze Codebase Structure & Dependencies**

   - Review the entire project structure including `components/`, `lib/`, `hooks/`, `contexts/`, and `app/` directories
   - Examine `package.json` dependencies and identify any unused packages
   - Use tools like `knip` (already configured in package.json) to identify unused code and dependencies
   - Generate comprehensive reports of potentially unused files and exports

2. **Identify Dead Code & Unused Components**

   - Scan for unused React components in the `components/` directory
   - Identify orphaned utility functions in `lib/` that are no longer referenced
   - Find unused custom hooks in `hooks/` directory
   - Check for unused context providers or consumers in `contexts/`
   - Locate unused API routes in `app/api/` if any exist

3. **Analyze Asset Usage & Optimization**

   - Review assets in `public/` directory for unused images, icons, or static files
   - Check for redundant or duplicate assets (similar images, unused screenshots)
   - Identify outdated screenshots or assets that no longer reflect current UI
   - Analyze CSS/styling for unused classes or style definitions
   - Review any unused font files or icon sets

4. **Clean Up Import/Export Statements**

   - Remove unused imports across all TypeScript/JavaScript files
   - Clean up barrel exports (`index.ts` files) that export unused modules
   - Remove circular dependencies or redundant re-exports
   - Optimize import statements for better tree-shaking

5. **Remove Deprecated or Legacy Code**

   - Identify and remove any commented-out code blocks
   - Remove deprecated component variants or legacy implementations
   - Clean up any TODO comments that reference completed work
   - Remove development-only code that shouldn't be in production

6. **Dependency Cleanup**

   - Remove unused packages from `package.json`
   - Update `pnpm-lock.yaml` after dependency removal
   - Verify that removed dependencies don't break any functionality
   - Consider replacing heavy dependencies with lighter alternatives where appropriate

7. **Validate & Test Cleanup**

   - Run the application to ensure no functionality is broken
   - Execute `pnpm lint` and `pnpm build` to verify no build errors
   - Test core features (Spaces, Journal, AI integration) to ensure they work correctly
   - Check that the application starts and renders properly
   - Verify that asset cleanup doesn't break any UI elements

8. **Documentation Cleanup**
   - Remove outdated documentation references to removed code
   - Update README.md if any described features were removed
   - Clean up code comments that reference removed functionality
   - Ensure specifications in `specs/` directory still align with cleaned codebase

**Execution Notes:**

- Use `pnpm knip` to assist with automated dead code detection
- Be conservative - when in doubt, keep the code and mark it for review
- Test thoroughly after each major cleanup operation
- Document any removed functionality that might be needed in the future

## 3. Expected Output & Deliverables

**Define Success:** Successful completion requires:

- Measurable reduction in codebase size and complexity
- Removal of all genuinely unused code without breaking functionality
- Cleaner, more maintainable codebase with optimized dependencies
- No regression in existing functionality or performance
- Improved build times and reduced bundle size where possible

**Specify Deliverables:**

- List of removed files, functions, and components with justification
- Updated `package.json` with cleaned dependencies
- Clean build and lint passes with no errors
- Documentation of bundle size reduction achieved
- Summary report of cleanup impact and recommendations for future maintenance

**Performance Metrics:**

- Before/after comparison of `node_modules` size
- Before/after comparison of build output size
- Number of files removed and lines of code eliminated
- List of unused dependencies removed

## 4. Memory Bank Logging Instructions

**Instruction:** Upon successful completion of this task, you **must** log your work comprehensively to the project's Memory Bank at `Memory/Phase_0_Repository_Audit_Cleanup/Task_0B_Purge_Dead_Code_Log.md`.

**Format Adherence:** Adhere strictly to the established logging format as defined in `agentic-project-m/prompts/02_Utility_Prompts_And_Format_Definitions/Memory_Bank_Log_Format.md`. Ensure your log includes:

- A reference to this assigned task: "Task 0B - Purge Dead Code & Assets"
- Detailed list of removed files, components, and dependencies
- Quantified impact: lines of code removed, bundle size reduction, etc.
- Any decisions made about questionable code (kept vs. removed and why)
- Challenges encountered during cleanup and how they were resolved
- Confirmation that all tests pass and functionality remains intact
- Recommendations for ongoing code hygiene practices

**Focus on Impact:** Emphasize the measurable improvements to codebase maintainability and performance.

## 5. Clarification Instruction

**Instruction:** If any part of this task assignment is unclear, or if you're uncertain whether specific code should be removed, please state your specific questions before proceeding. When in doubt about removing functionality, err on the side of caution and document the uncertainty for Manager Agent review.
