// AI and Search Related Types
// Extracted from app/api/chat/route.ts

// Interface for X/Twitter search results
export interface XResult {
  id: string;
  url: string;
  title: string;
  author?: string;
  publishedDate?: string;
  text: string;
  highlights?: string[];
  tweetId: string;
}

// Academic search result type
export interface AcademicSearchResult {
  results: ExaResult[];
  query?: string;
  error?: string;
  totalResults?: number;
  filteredResults?: number;
}

// Research plan types
export interface ResearchPlan {
  search_queries: Array<{
    query: string;
    rationale: string;
    source: 'web' | 'academic' | 'x' | 'all';
    priority: number;
  }>;
  required_analyses: Array<{
    type: string;
    description: string;
    importance: number;
  }>;
}

// Search result types for reason search
export interface ProcessedResult {
  source: 'web' | 'academic' | 'x';
  title: string;
  url: string;
  content: string;
  tweetId?: string;
}

export interface SearchResult {
  type: 'web' | 'academic' | 'x';
  query: ResearchPlan['search_queries'][0];
  results: ProcessedResult[];
}

// Final synthesis type
export interface FinalSynthesis {
  key_findings: Array<{
    finding: string;
    confidence: number;
    supporting_evidence: string[];
  }>;
  remaining_uncertainties: string[];
}

// Reason search result type
export interface ReasonSearchResult {
  plan: ResearchPlan;
  results: SearchResult[];
  synthesis: FinalSynthesis;
}

// Interface for Exa search results (academic papers)
export interface ExaResult {
  title: string;
  url: string;
  publishedDate?: string;
  author?: string;
  score?: number;
  id: string;
  image?: string;
  favicon?: string;
  text: string;
  highlights?: string[];
  highlightScores?: number[];
  summary?: string;
  subpages?: ExaResult[];
  extras?: {
    links: any[];
    tweetId?: string;
  };
}

// Research plan structure for reason_search tool
export interface ResearchPlan {
  search_queries: SearchQuery[];
  required_analyses: RequiredAnalysis[];
}

export interface SearchQuery {
  query: string;
  rationale: string;
  source: 'web' | 'academic' | 'x' | 'all';
  priority: number;
}

export interface RequiredAnalysis {
  type: string;
  description: string;
  importance: number;
}

// Search result types
export interface SearchResult {
  type: 'web' | 'academic' | 'x';
  query: SearchQuery;
  results: ProcessedResult[];
}

export interface ProcessedResult {
  source: 'web' | 'academic' | 'x';
  title: string;
  url: string;
  content: string;
  tweetId?: string; // Only for X/Twitter results
}

// Analysis result types
export interface AnalysisResult {
  findings: Finding[];
  implications: string[];
  limitations: string[];
}

export interface Finding {
  insight: string;
  evidence: string[];
  confidence: number;
}

// Gap analysis types
export interface GapAnalysis {
  limitations: Limitation[];
  knowledge_gaps: KnowledgeGap[];
  recommended_followup: RecommendedAction[];
}

export interface Limitation {
  type: string;
  description: string;
  severity: number;
  potential_solutions: string[];
}

export interface KnowledgeGap {
  topic: string;
  reason: string;
  additional_queries: string[];
}

export interface RecommendedAction {
  action: string;
  rationale: string;
  priority: number;
}

// Final synthesis types
export interface FinalSynthesis {
  key_findings: KeyFinding[];
  remaining_uncertainties: string[];
}

export interface KeyFinding {
  finding: string;
  confidence: number;
  supporting_evidence: string[];
}

// Progress tracking types
export interface ProgressUpdate {
  id: string;
  type: 'web' | 'academic' | 'x' | 'analysis' | 'progress';
  status: 'running' | 'completed';
  title?: string;
  query?: string;
  message: string;
  timestamp: number;
  results?: any[];
  completedSteps?: number;
  totalSteps?: number;
  overwrite?: boolean;
}

// Tool execution context
export interface ToolContext {
  dataStream: any; // DataStream from AI SDK
  model: string;
  depth?: 'basic' | 'advanced';
}

// Academic search specific types
export interface AcademicSearchOptions {
  numResults?: number;
  summary?: boolean;
}



// Reason search specific types
export interface ReasonSearchOptions {
  topic: string;
  depth: 'basic' | 'advanced';
}

export interface ReasonSearchResult {
  plan: ResearchPlan;
  results: SearchResult[];
  synthesis: FinalSynthesis;
} 