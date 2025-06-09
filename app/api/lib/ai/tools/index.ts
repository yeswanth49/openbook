// Tool Registry
// Central registry for all AI tools

export { academicSearchTool } from './academic-search';
export { reasonSearchTool } from './reason-search';

// Export a tools object for easy importing in the main route
export const tools = {
  academic_search: academicSearchTool,
  reason_search: reasonSearchTool,
} as const; 