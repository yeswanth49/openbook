// @ts-nocheck
// /app/api/search/route.ts
import { getGroupConfig } from '@/app/actions';
import { serverEnv } from '@/env/server';
import { xai } from '@ai-sdk/xai';
import { groq } from "@ai-sdk/groq";
import { google } from "@ai-sdk/google";
import { openai } from "@ai-sdk/openai";
import { anthropic } from "@ai-sdk/anthropic";
import { tavily } from '@tavily/core';
import {
    convertToCoreMessages,
    smoothStream,
    streamText,
    tool,
    createDataStreamResponse,
    customProvider,
    generateObject,
    NoSuchToolError,
    extractReasoningMiddleware,
    wrapLanguageModel,
    DataStreamingToolCallResponse, // Assuming this is implicitly used or needed
    DataStream // Assuming this is implicitly used or needed
} from 'ai';
import Exa from 'exa-js';
import { z } from 'zod';
// Removed MemoryClient import as memory_manager tool is removed.

// Removed CURRENCY_SYMBOLS constant

const middleware = extractReasoningMiddleware({
    tagName: 'think',
});

const neuman = customProvider({
    languageModels: {
        'neuman-default': openai('o4-mini-2025-04-16'),
        'neuman-grok-3': xai('grok-3-fast-beta'),
        'neuman-vision': xai('grok-2-vision-1212'),
        'neuman-4o': openai('gpt-4o', {
            structuredOutputs: true,
        }),
        'neuman-4.1-nano': openai('gpt-4.1-nano', {
        }),
        'neuman-o4-mini': openai.responses('o4-mini-2025-04-16'),
        'neuman-qwq': wrapLanguageModel({
            model: groq('qwen-qwq-32b'),
            middleware,
        }),
        'neuman-google': google('gemini-2.5-flash-preview-04-17', {
            structuredOutputs: true,
        }),
        'neuman-gemini': google('gemini-2.5-pro-exp-03-25', {
            structuredOutputs: true,
        }),
        'neuman-anthropic': anthropic('claude-3-7-sonnet-20250219'),
    }
})

// Interface for X results (used by reason_search)
interface XResult {
    id: string;
    url: string;
    title: string;
    author?: string;
    publishedDate?: string;
    text: string;
    highlights?: string[];
    tweetId: string;
}

// Removed MapboxFeature, GoogleResult, VideoDetails, VideoResult interfaces

// Removed sanitizeUrl, isValidImageUrl, extractDomain, deduplicateByDomainAndUrl helper functions
// Note: reason_search might implicitly rely on deduplication/validation logic not shown here.

// Initialize Exa client
const exa = new Exa(serverEnv.EXA_API_KEY);

// Add interface for Exa search results (used by academic_search and reason_search)
interface ExaResult {
    title: string;
    url: string;
    publishedDate?: string;
    author?: string;
    score?: number;
    id: string;
    image?: string; // Kept as Exa might return it, even if not explicitly used in kept tools
    favicon?: string; // Kept as Exa might return it
    text: string;
    highlights?: string[];
    highlightScores?: number[];
    summary?: string;
    subpages?: ExaResult[];
    extras?: {
        links: any[];
    };
}


// Modify the POST function to use only the two academic-related tools
export async function POST(req: Request) {
    const { messages, model, group, user_id, timezone } = await req.json(); // user_id and timezone might not be used by kept tools, but kept for consistency
    const { tools: activeTools, instructions } = await getGroupConfig(group);

    console.log("--------------------------------");
    console.log("Messages received:", JSON.stringify(messages, null, 2));
    console.log("Messages count:", messages.length);
    console.log("--------------------------------");
    console.log("Running with model: ", model.trim());
    console.log("Group: ", group);
    console.log("Timezone: ", timezone); // Kept for logging

    return createDataStreamResponse({
        execute: async (dataStream: DataStream) => { // Added type hint for clarity
            const result = streamText({
                model: neuman.languageModel(model),
                messages: convertToCoreMessages(messages),
                ...(model !== 'neuman-o4-mini' ? {
                    temperature: 0,
                } : {}),
                maxSteps: 5,
                experimental_activeTools: [...activeTools], // Active tools might need filtering based on available ones
                system: instructions,
                toolChoice: 'auto',
                experimental_transform: smoothStream({
                    chunking: 'word',
                    delayInMs: 15,
                }),
                providerOptions: { // Keeping provider options for potential model usage
                    neuman: {
                        ...(model === 'neuman-default' ?
                            {
                                reasoningEffort: 'high',
                            }
                            : {}
                        ),
                        ...(model === 'neuman-o4-mini' ? {
                            reasoningEffort: 'medium'
                        } : {}),
                        ...(model === 'neuman-google' ? {
                            thinkingConfig: {
                                thinkingBudget: 5000,
                            },
                        } : {}),
                    },
                    google: {
                        thinkingConfig: {
                            thinkingBudget: 5000,
                        },
                    },
                    openai: {
                        ...(model === 'neuman-o4-mini' ? {
                            reasoningEffort: 'medium'
                        } : {})
                    },
                    xai: {
                        ...(model === 'neuman-default' ? {
                            reasoningEffort: 'high',
                        } : {}),
                    },
                    anthropic: {
                        thinking: { type: 'enabled', budgetTokens: 12000 },
                    }
                },
                tools: {
                    // --- Kept Tools ---
                    academic_search: tool({
                        description: 'Search academic papers and research.',
                        parameters: z.object({
                            query: z.string().describe('The search query'),
                        }),
                        execute: async ({ query }: { query: string }) => {
                            try {
                                // Exa client is initialized outside POST
                                // const exa = new Exa(serverEnv.EXA_API_KEY as string); // Re-initializing here is redundant

                                // Search academic papers with content summary
                                const result = await exa.searchAndContents(query, {
                                    type: 'auto',
                                    numResults: 20,
                                    category: 'research paper',
                                    summary: {
                                        query: 'Abstract of the Paper',
                                    },
                                });

                                // Process and clean results
                                const processedResults = result.results.reduce<typeof result.results>((acc, paper) => {
                                    // Skip if URL already exists or if no summary available
                                    if (acc.some((p) => p.url === paper.url) || !paper.summary) return acc;

                                    // Clean up summary (remove "Summary:" prefix if exists)
                                    const cleanSummary = paper.summary.replace(/^Summary:\s*/i, '');

                                    // Clean up title (remove [...] suffixes)
                                    const cleanTitle = paper.title?.replace(/\s\[.*?\]$/, '');

                                    acc.push({
                                        ...paper,
                                        title: cleanTitle || '', // Ensure title is always a string
                                        summary: cleanSummary, // Use cleaned summary
                                    });

                                    return acc;
                                }, []);

                                return {
                                    results: processedResults,
                                };
                            } catch (error) {
                                console.error('Academic search error:', error);
                                throw error; // Re-throw or handle error appropriately
                            }
                        },
                    }),
                    reason_search: tool({
                        description: 'Perform a reasoned web search with multiple steps and sources.',
                        parameters: z.object({
                            topic: z.string().describe('The main topic or question to research'),
                            depth: z.enum(['basic', 'advanced']).describe('Search depth level'),
                        }),
                        execute: async ({ topic, depth }: { topic: string; depth: 'basic' | 'advanced' }) => {
                            const apiKey = serverEnv.TAVILY_API_KEY;
                            const tvly = tavily({ apiKey });
                            // Exa client is initialized outside POST

                            // Send initial plan status update (without steps count and extra details)
                            dataStream.writeMessageAnnotation({
                                type: 'research_update',
                                data: {
                                    id: 'research-plan-initial', // unique id for the initial state
                                    type: 'plan',
                                    status: 'running',
                                    title: 'Research Plan',
                                    message: 'Creating research plan...',
                                    timestamp: Date.now(),
                                    overwrite: true
                                }
                            });

                            // Now generate the research plan
                            const { object: researchPlan } = await generateObject({
                                model: openai("gpt-o4-mini"), // Ensure this model ID exists in neuman provider or use a valid one
                                temperature: 0,
                                schema: z.object({
                                    search_queries: z.array(z.object({
                                        query: z.string(),
                                        rationale: z.string(),
                                        source: z.enum(['web', 'academic', 'x', 'all']),
                                        priority: z.number().min(1).max(5)
                                    })).max(12),
                                    required_analyses: z.array(z.object({
                                        type: z.string(),
                                        description: z.string(),
                                        importance: z.number().min(1).max(5)
                                    })).max(8)
                                }),
                                prompt: `Create a focused research plan for the topic: "${topic}".
                                        Today's date and day of the week: ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}

                                        Keep the plan concise but comprehensive, with:
                                        - 4-12 targeted search queries (each can use web, academic, x (Twitter), or all sources)
                                        - 2-8 key analyses to perform
                                        - Prioritize the most important aspects to investigate

                                        Available sources:
                                        - "web": General web search
                                        - "academic": Academic papers and research
                                        - "x": X/Twitter posts and discussions
                                        - "all": Use all source types (web, academic, and X/Twitter)

                                        Do not use floating numbers, use whole numbers only in the priority field!!
                                        Do not keep the numbers too low or high, make them reasonable in between.
                                        Do not use 0 or 1 in the priority field, use numbers between 2 and 4.

                                        Consider different angles and potential controversies, but maintain focus on the core aspects.
                                        Ensure the total number of steps (searches + analyses) does not exceed 20.`
                            });

                            // Generate IDs for all steps based on the plan
                            const generateStepIds = (plan: typeof researchPlan) => {
                                // Generate an array of search steps.
                                const searchSteps = plan.search_queries.flatMap((query, index) => {
                                    if (query.source === 'all') {
                                        return [
                                            { id: `search-web-${index}`, type: 'web', query },
                                            { id: `search-academic-${index}`, type: 'academic', query },
                                            { id: `search-x-${index}`, type: 'x', query }
                                        ];
                                    }
                                    if (query.source === 'x') {
                                        return [{ id: `search-x-${index}`, type: 'x', query }];
                                    }
                                    const searchType = query.source === 'academic' ? 'academic' : 'web';
                                    return [{ id: `search-${searchType}-${index}`, type: searchType, query }];
                                });

                                // Generate an array of analysis steps.
                                const analysisSteps = plan.required_analyses.map((analysis, index) => ({
                                    id: `analysis-${index}`,
                                    type: 'analysis',
                                    analysis
                                }));

                                return {
                                    planId: 'research-plan',
                                    searchSteps,
                                    analysisSteps
                                };
                            };

                            const stepIds = generateStepIds(researchPlan);
                            let completedSteps = 0;
                            const totalSteps = stepIds.searchSteps.length + stepIds.analysisSteps.length;

                            // Complete plan status
                            dataStream.writeMessageAnnotation({
                                type: 'research_update',
                                data: {
                                    id: stepIds.planId,
                                    type: 'plan',
                                    status: 'completed',
                                    title: 'Research Plan',
                                    plan: researchPlan,
                                    totalSteps: totalSteps,
                                    message: 'Research plan created',
                                    timestamp: Date.now(),
                                    overwrite: true
                                }
                            });

                            // Execute searches
                            const searchResults: any[] = []; // Define explicitly
                            let searchIndex = 0; 

                            for (const step of stepIds.searchSteps) {
                                // Send running annotation for this search step
                                dataStream.writeMessageAnnotation({
                                    type: 'research_update',
                                    data: {
                                        id: step.id,
                                        type: step.type,
                                        status: 'running',
                                        title: step.type === 'web'
                                            ? `Searching the web for "${step.query.query}"`
                                            : step.type === 'academic'
                                                ? `Searching academic papers for "${step.query.query}"`
                                                : step.type === 'x'
                                                    ? `Searching X/Twitter for "${step.query.query}"`
                                                    : `Analyzing ${step.query.query}`,
                                        query: step.query.query,
                                        message: `Searching ${step.query.source} sources...`,
                                        timestamp: Date.now()
                                    }
                                });

                                if (step.type === 'web') {
                                    const webResults = await tvly.search(step.query.query, {
                                        searchDepth: depth,
                                        includeAnswer: true,
                                        maxResults: Math.min(6 - step.query.priority, 10)
                                    });

                                    searchResults.push({
                                        type: 'web',
                                        query: step.query,
                                        results: webResults.results.map(r => ({
                                            source: 'web',
                                            title: r.title,
                                            url: r.url,
                                            content: r.content
                                        }))
                                    });
                                    completedSteps++;
                                } else if (step.type === 'academic') {
                                    const academicResults = await exa.searchAndContents(step.query.query, {
                                        type: 'auto',
                                        numResults: Math.min(6 - step.query.priority, 5),
                                        category: 'research paper',
                                        summary: true
                                    });

                                    searchResults.push({
                                        type: 'academic',
                                        query: step.query,
                                        results: academicResults.results.map(r => ({
                                            source: 'academic',
                                            title: r.title || '',
                                            url: r.url || '',
                                            content: r.summary || ''
                                        }))
                                    });
                                    completedSteps++;
                                } else if (step.type === 'x') {
                                    // Extract tweet ID from URL
                                    const extractTweetId = (url: string): string | null => {
                                        const match = url.match(/(?:twitter\.com|x\.com)\/\w+\/status\/(\d+)/);
                                        return match ? match[1] : null;
                                    };

                                    const xResults = await exa.searchAndContents(step.query.query, {
                                        type: 'neural',
                                        useAutoprompt: true,
                                        numResults: step.query.priority, // Using priority for numResults here
                                        text: true,
                                        highlights: true,
                                        includeDomains: ['twitter.com', 'x.com']
                                    });

                                    // Process tweets to include tweet IDs
                                    const processedTweets = xResults.results.map(result => {
                                        const tweetId = extractTweetId(result.url);
                                        // Make sure to return null or filter later if tweetId is null
                                        if (!tweetId) return null; 
                                        return {
                                            source: 'x' as const,
                                            title: result.title || result.author || 'Tweet',
                                            url: result.url,
                                            content: result.text || '',
                                            tweetId: tweetId // tweetId is guaranteed string here if not null
                                        };
                                    }).filter(tweet => tweet !== null); // Filter out null entries

                                    searchResults.push({
                                        type: 'x',
                                        query: step.query,
                                        // Ensure the results pushed match the expected structure later if needed
                                        results: processedTweets as Array<{ source: 'x', title: string, url: string, content: string, tweetId: string }>
                                    });
                                    completedSteps++;
                                }

                                // Send completed annotation for the search step
                                const lastSearchResult = searchResults[searchResults.length - 1];
                                dataStream.writeMessageAnnotation({
                                    type: 'research_update',
                                    data: {
                                        id: step.id,
                                        type: step.type,
                                        status: 'completed',
                                        title: step.type === 'web'
                                            ? `Searched the web for "${step.query.query}"`
                                            : step.type === 'academic'
                                                ? `Searched academic papers for "${step.query.query}"`
                                                : step.type === 'x'
                                                    ? `Searched X/Twitter for "${step.query.query}"`
                                                    : `Analysis of ${step.query.query} complete`,
                                        query: step.query.query,
                                        results: lastSearchResult?.results.map((r: any) => ({ ...r })) || [], // Handle potential undefined lastSearchResult
                                        message: `Found ${lastSearchResult?.results.length ?? 0} results`,
                                        timestamp: Date.now(),
                                        overwrite: true
                                    }
                                });

                                searchIndex++; 
                            }

                            // Perform analyses
                            let analysisIndex = 0; 

                            for (const step of stepIds.analysisSteps) {
                                dataStream.writeMessageAnnotation({
                                    type: 'research_update',
                                    data: {
                                        id: step.id,
                                        type: 'analysis',
                                        status: 'running',
                                        title: `Analyzing ${step.analysis.type}`,
                                        analysisType: step.analysis.type,
                                        message: `Analyzing ${step.analysis.type}...`,
                                        timestamp: Date.now()
                                    }
                                });

                                const { object: analysisResult } = await generateObject({
                                    model: openai("gpt-o4-mini"), // Ensure this model ID exists in neuman provider
                                    temperature: 0.5,
                                    schema: z.object({
                                        findings: z.array(z.object({
                                            insight: z.string(),
                                            evidence: z.array(z.string()),
                                            confidence: z.number().min(0).max(1)
                                        })),
                                        implications: z.array(z.string()),
                                        limitations: z.array(z.string())
                                    }),
                                    prompt: `Perform a ${step.analysis.type} analysis on the search results. ${step.analysis.description}
                                            Consider all sources and their reliability.
                                            Search results: ${JSON.stringify(searchResults)}`
                                });

                                dataStream.writeMessageAnnotation({
                                    type: 'research_update',
                                    data: {
                                        id: step.id,
                                        type: 'analysis',
                                        status: 'completed',
                                        title: `Analysis of ${step.analysis.type} complete`,
                                        analysisType: step.analysis.type,
                                        findings: analysisResult.findings,
                                        message: `Analysis complete`,
                                        timestamp: Date.now(),
                                        overwrite: true
                                    }
                                });
                                completedSteps++; // Increment completed steps after analysis
                                analysisIndex++; 
                            }

                            // After all analyses are complete, send running state for gap analysis
                            dataStream.writeMessageAnnotation({
                                type: 'research_update',
                                data: {
                                    id: 'gap-analysis',
                                    type: 'analysis',
                                    status: 'running',
                                    title: 'Research Gaps and Limitations',
                                    analysisType: 'gaps',
                                    message: 'Analyzing research gaps and limitations...',
                                    timestamp: Date.now()
                                }
                            });

                            // After all analyses are complete, analyze limitations and gaps
                            const { object: gapAnalysis } = await generateObject({
                                model: openai("gpt-o4-mini"), // Ensure this model ID exists
                                temperature: 0,
                                schema: z.object({
                                    limitations: z.array(z.object({
                                        type: z.string(),
                                        description: z.string(),
                                        severity: z.number().min(2).max(10),
                                        potential_solutions: z.array(z.string())
                                    })),
                                    knowledge_gaps: z.array(z.object({
                                        topic: z.string(),
                                        reason: z.string(),
                                        additional_queries: z.array(z.string())
                                    })),
                                    recommended_followup: z.array(z.object({
                                        action: z.string(),
                                        rationale: z.string(),
                                        priority: z.number().min(2).max(10)
                                    }))
                                }),
                                prompt: `Analyze the research results and identify limitations, knowledge gaps, and recommended follow-up actions.
                                        Consider:
                                        - Quality and reliability of sources
                                        - Missing perspectives or data
                                        - Areas needing deeper investigation
                                        - Potential biases or conflicts
                                        - Severity should be between 2 and 10
                                        - Knowledge gaps should be between 2 and 10
                                        - Do not keep the numbers too low or high, make them reasonable in between

                                        When suggesting additional_queries for knowledge gaps, keep in mind these will be used to search:
                                        - Web sources
                                        - Academic papers
                                        - X/Twitter for social media perspectives and real-time information

                                        Design your additional_queries to work well across these different source types.

                                        Research results: ${JSON.stringify(searchResults)}
                                        Analysis findings: ${JSON.stringify(stepIds.analysisSteps.map(step => ({
                                            type: step.analysis.type,
                                            description: step.analysis.description,
                                            importance: step.analysis.importance
                                        })))}`
                            });

                            completedSteps++; // Increment after gap analysis generation

                            // Send gap analysis update
                            dataStream.writeMessageAnnotation({
                                type: 'research_update',
                                data: {
                                    id: 'gap-analysis',
                                    type: 'analysis',
                                    status: 'completed',
                                    title: 'Research Gaps and Limitations',
                                    analysisType: 'gaps',
                                    findings: gapAnalysis.limitations.map(l => ({
                                        insight: l.description,
                                        evidence: l.potential_solutions,
                                        confidence: (10 - l.severity) / 8 // Normalize severity to confidence (adjust scale if needed)
                                    })),
                                    gaps: gapAnalysis.knowledge_gaps,
                                    recommendations: gapAnalysis.recommended_followup,
                                    message: `Identified ${gapAnalysis.limitations.length} limitations and ${gapAnalysis.knowledge_gaps.length} knowledge gaps`,
                                    timestamp: Date.now(),
                                    overwrite: true,
                                    completedSteps: completedSteps, // Reflect current completed steps
                                    totalSteps: totalSteps + (depth === 'advanced' ? 2 : 1) // Adjust total steps dynamically
                                }
                            });

                            let synthesis;
                            let additionalQueriesCount = 0; // Keep track of added steps for follow-up

                            // If there are significant gaps and depth is 'advanced', perform additional research
                            if (depth === 'advanced' && gapAnalysis.knowledge_gaps.length > 0) {
                                // Calculate the number of actual search operations needed
                                additionalQueriesCount = gapAnalysis.knowledge_gaps.reduce((count, gap) => {
                                    return count + gap.additional_queries.reduce((subCount, _, idx) => {
                                        const sourceType = idx === 0 ? 'all' : ['web', 'academic', 'x'][idx % 3];
                                        return subCount + (sourceType === 'all' ? 3 : 1);
                                    }, 0);
                                }, 0);
                                const finalTotalSteps = totalSteps + 1 + additionalQueriesCount + 1; // Initial + Gap Analysis + Additional Searches + Final Synthesis

                                // Update the total steps in the gap analysis completion message
                                dataStream.writeMessageAnnotation({
                                    type: 'research_update',
                                    data: {
                                        id: 'gap-analysis', // Use same ID to overwrite
                                        type: 'analysis',
                                        status: 'completed',
                                        title: 'Research Gaps and Limitations',
                                        analysisType: 'gaps',
                                        findings: gapAnalysis.limitations.map(l => ({ /* ... findings */ })),
                                        gaps: gapAnalysis.knowledge_gaps,
                                        recommendations: gapAnalysis.recommended_followup,
                                        message: `Identified ${gapAnalysis.limitations.length} limitations and ${gapAnalysis.knowledge_gaps.length} knowledge gaps. Preparing follow-up searches...`,
                                        timestamp: Date.now(),
                                        overwrite: true,
                                        completedSteps: completedSteps,
                                        totalSteps: finalTotalSteps // Update total steps
                                    }
                                });


                                // Flatten the queries and determine source type
                                const additionalQueries = gapAnalysis.knowledge_gaps.flatMap(gap =>
                                    gap.additional_queries.map((query, idx) => {
                                        const sourceTypes = ['web', 'academic', 'x'] as const;
                                        let source: 'web' | 'academic' | 'x' | 'all';
                                        if (idx === 0) {
                                            source = 'all';
                                        } else {
                                            source = sourceTypes[idx % sourceTypes.length];
                                        }
                                        return {
                                            query,
                                            rationale: gap.reason,
                                            source,
                                            priority: 3 // Default priority for follow-up
                                        };
                                    })
                                );


                                // Execute additional searches for gaps
                                for (const query of additionalQueries) {
                                    const searchOperations: Array<{ type: 'web' | 'academic' | 'x', idSuffix: string }> = [];
                                    if (query.source === 'all' || query.source === 'web') searchOperations.push({ type: 'web', idSuffix: 'web' });
                                    if (query.source === 'all' || query.source === 'academic') searchOperations.push({ type: 'academic', idSuffix: 'academic' });
                                    if (query.source === 'all' || query.source === 'x') searchOperations.push({ type: 'x', idSuffix: 'x' });
                                    
                                    for (const op of searchOperations) {
                                        const gapSearchId = `gap-search-${op.idSuffix}-${searchIndex++}`;

                                        // Send running annotation
                                        dataStream.writeMessageAnnotation({
                                             type: 'research_update',
                                             data: {
                                                id: gapSearchId,
                                                type: op.type,
                                                status: 'running',
                                                title: `Follow-up ${op.type} search for "${query.query}"`,
                                                query: query.query,
                                                message: `Searching ${op.type} sources for gap: ${query.rationale}`,
                                                timestamp: Date.now()
                                            }
                                        });

                                        let gapResults: any[] = [];
                                        let resultCount = 0;

                                        try {
                                            if (op.type === 'web') {
                                                const webResults = await tvly.search(query.query, { searchDepth: 'basic', includeAnswer: false, maxResults: 3 });
                                                gapResults = webResults.results.map(r => ({ source: 'web', title: r.title, url: r.url, content: r.content }));
                                                resultCount = webResults.results.length;
                                            } else if (op.type === 'academic') {
                                                const academicResults = await exa.searchAndContents(query.query, { type: 'auto', numResults: 2, category: 'research paper', summary: true });
                                                gapResults = academicResults.results.map(r => ({ source: 'academic', title: r.title || '', url: r.url || '', content: r.summary || '' }));
                                                resultCount = academicResults.results.length;
                                            } else if (op.type === 'x') {
                                                const extractTweetId = (url: string): string | null => { /* ... */ return null; }; // Add implementation if needed
                                                const xResults = await exa.searchAndContents(query.query, { type: 'keyword', numResults: 3, text: true, highlights: true, includeDomains: ['twitter.com', 'x.com'] });
                                                gapResults = xResults.results.map(r => {
                                                    const tweetId = extractTweetId(r.url);
                                                    if (!tweetId) return null;
                                                    return { source: 'x', title: r.title || r.author || 'Tweet', url: r.url, content: r.text || '', tweetId };
                                                }).filter(t => t !== null);
                                                resultCount = gapResults.length;
                                            }
                                            
                                            // Add results to the main searchResults array
                                             searchResults.push({
                                                type: op.type,
                                                query: { query: query.query, rationale: query.rationale, source: op.type, priority: query.priority },
                                                results: gapResults
                                            });

                                        } catch (error) {
                                            console.error(`Error during follow-up ${op.type} search for "${query.query}":`, error);
                                            // Optionally add an error entry to searchResults
                                        } finally {
                                             completedSteps++; // Increment completed steps for this specific search operation
                                             // Send completed annotation
                                             dataStream.writeMessageAnnotation({
                                                 type: 'research_update',
                                                 data: {
                                                    id: gapSearchId,
                                                    type: op.type,
                                                    status: 'completed',
                                                    title: `Follow-up ${op.type} search for "${query.query}"`,
                                                    query: query.query,
                                                    results: gapResults,
                                                    message: `Found ${resultCount} results`,
                                                    timestamp: Date.now(),
                                                    overwrite: true,
                                                    completedSteps: completedSteps, // Pass current progress
                                                    totalSteps: finalTotalSteps // Pass updated total
                                                }
                                            });
                                        }
                                    }
                                }
                                
                                // Send running state for final synthesis (now including follow-up results)
                                dataStream.writeMessageAnnotation({
                                    type: 'research_update',
                                    data: {
                                        id: 'final-synthesis', // Re-use ID
                                        type: 'analysis',
                                        status: 'running',
                                        title: 'Final Research Synthesis (Post Follow-up)',
                                        analysisType: 'synthesis',
                                        message: 'Synthesizing all research findings including follow-up...',
                                        timestamp: Date.now(),
                                        completedSteps: completedSteps, // Pass current progress
                                        totalSteps: finalTotalSteps // Pass updated total
                                    }
                                });

                                // Perform final synthesis *again* with the additional results
                                const { object: finalSynthesis } = await generateObject({
                                    model: openai("gpt-o4-mini"), // Ensure model exists
                                    temperature: 0,
                                    schema: z.object({
                                        key_findings: z.array(z.object({
                                            finding: z.string(),
                                            confidence: z.number().min(0).max(1),
                                            supporting_evidence: z.array(z.string())
                                        })),
                                        remaining_uncertainties: z.array(z.string())
                                    }),
                                    prompt: `Synthesize all research findings, including the initial results, gap analysis, and the results from the follow-up searches addressing knowledge gaps.
                                            Highlight key conclusions and remaining uncertainties. Stick strictly to the requested schema.

                                            All Search Results (Initial + Follow-up): ${JSON.stringify(searchResults)}
                                            Gap Analysis: ${JSON.stringify(gapAnalysis)}`
                                });
                                synthesis = finalSynthesis;
                                completedSteps++; // Increment for final synthesis step

                                // Send final synthesis update (Post Follow-up)
                                dataStream.writeMessageAnnotation({
                                    type: 'research_update',
                                    data: {
                                        id: 'final-synthesis',
                                        type: 'analysis',
                                        status: 'completed',
                                        title: 'Final Research Synthesis (Post Follow-up)',
                                        analysisType: 'synthesis',
                                        findings: finalSynthesis.key_findings.map(f => ({
                                            insight: f.finding,
                                            evidence: f.supporting_evidence,
                                            confidence: f.confidence
                                        })),
                                        uncertainties: finalSynthesis.remaining_uncertainties,
                                        message: `Synthesized ${finalSynthesis.key_findings.length} key findings after follow-up`,
                                        timestamp: Date.now(),
                                        overwrite: true,
                                        completedSteps: completedSteps,
                                        totalSteps: finalTotalSteps
                                    }
                                });

                            } else {
                                // No follow-up searches, just perform initial synthesis
                                 const finalTotalSteps = totalSteps + 1 + 1; // Initial searches + Gap Analysis + Final Synthesis
                                 
                                 // Update total steps in the gap analysis completion message (since no follow-up)
                                 dataStream.writeMessageAnnotation({
                                     type: 'research_update',
                                     data: {
                                        id: 'gap-analysis', // Use same ID to overwrite
                                        type: 'analysis',
                                        status: 'completed',
                                        // ... other gap analysis fields
                                        message: `Identified ${gapAnalysis.limitations.length} limitations and ${gapAnalysis.knowledge_gaps.length} knowledge gaps. Proceeding to synthesis...`,
                                        timestamp: Date.now(),
                                        overwrite: true,
                                        completedSteps: completedSteps,
                                        totalSteps: finalTotalSteps // Update total steps
                                    }
                                });

                                 // Send running state for final synthesis
                                 dataStream.writeMessageAnnotation({
                                    type: 'research_update',
                                    data: {
                                        id: 'final-synthesis',
                                        type: 'analysis',
                                        status: 'running',
                                        title: 'Final Research Synthesis',
                                        analysisType: 'synthesis',
                                        message: 'Synthesizing research findings...',
                                        timestamp: Date.now(),
                                        completedSteps: completedSteps,
                                        totalSteps: finalTotalSteps
                                    }
                                });

                                const { object: finalSynthesis } = await generateObject({
                                    model: openai("gpt-o4-mini"), // Ensure model exists
                                    temperature: 0,
                                    schema: z.object({
                                        key_findings: z.array(z.object({ /* ... */ })),
                                        remaining_uncertainties: z.array(z.string())
                                    }),
                                    prompt: `Synthesize the initial research findings and the gap analysis.
                                             Highlight key conclusions and remaining uncertainties. Stick strictly to the requested schema.

                                             Initial Search Results: ${JSON.stringify(searchResults)}
                                             Gap Analysis: ${JSON.stringify(gapAnalysis)}`
                                });
                                synthesis = finalSynthesis;
                                completedSteps++; // Increment for final synthesis

                                // Send final synthesis completion update
                                dataStream.writeMessageAnnotation({
                                    type: 'research_update',
                                    data: {
                                        id: 'final-synthesis',
                                        type: 'analysis',
                                        status: 'completed',
                                        title: 'Final Research Synthesis',
                                        analysisType: 'synthesis',
                                        findings: finalSynthesis.key_findings.map(f => ({ /* ... */ })),
                                        uncertainties: finalSynthesis.remaining_uncertainties,
                                        message: `Synthesized ${finalSynthesis.key_findings.length} key findings`,
                                        timestamp: Date.now(),
                                        overwrite: true,
                                        completedSteps: completedSteps,
                                        totalSteps: finalTotalSteps
                                    }
                                });
                            }

                             // Final overall progress update
                             const finalTotalSteps = totalSteps + 1 + (depth === 'advanced' && gapAnalysis.knowledge_gaps.length > 0 ? additionalQueriesCount + 1 : 1);
                             const finalProgress = {
                                 id: 'research-progress',
                                 type: 'progress' as const,
                                 status: 'completed' as const,
                                 message: `Research complete`,
                                 completedSteps: completedSteps, // Use final count
                                 totalSteps: finalTotalSteps, // Use final calculated total
                                 isComplete: true,
                                 timestamp: Date.now()
                             };

                            dataStream.writeMessageAnnotation({
                                type: 'research_update',
                                data: {
                                    ...finalProgress,
                                    overwrite: true
                                }
                            });


                            return {
                                plan: researchPlan,
                                results: searchResults, // Contains initial and potentially follow-up results
                                synthesis: synthesis // Contains final synthesis
                            };
                        },
                    }),
                    // --- End Kept Tools ---
                    
                    // Removed other tools: stock_chart, currency_converter, text_translate, web_search, 
                    // movie_or_tv_search, trending_movies, trending_tv, Youtube, retrieve, 
                    // get_weather_data, code_interpreter, find_place, text_search, nearby_search, 
                    // track_flight, datetime, mcp_search, memory_manager
                },
                experimental_repairToolCall: async ({
                    toolCall,
                    tools, // This will now only contain the two academic tools
                    parameterSchema,
                    error,
                }: { // Added types for clarity
                    toolCall: any; 
                    tools: any; 
                    parameterSchema: (toolCall: any) => any; 
                    error: any; 
                }) => {
                    if (NoSuchToolError.isInstance(error)) {
                        return null; // do not attempt to fix invalid tool names
                    }

                    console.log("Fixing tool call================================");
                    console.log("toolCall", toolCall);
                    console.log("tools", tools);
                    console.log("parameterSchema", parameterSchema);
                    console.log("error", error);

                    const toolDefinition = tools[toolCall.toolName as keyof typeof tools];
                    if (!toolDefinition) {
                         console.error(`Tool "${toolCall.toolName}" not found for repair.`);
                         return null; // Tool definition not found in the reduced set
                    }


                    const { object: repairedArgs } = await generateObject({
                        model: neuman.languageModel("neuman-default"), // Ensure model exists
                        schema: toolDefinition.parameters, // Use the specific tool's parameters
                        prompt: [
                            `The model tried to call the tool "${toolCall.toolName}"` +
                            ` with the following arguments:`,
                            JSON.stringify(toolCall.args),
                            `The tool accepts the following schema:`,
                            JSON.stringify(parameterSchema(toolCall)), // Use the provided schema function
                            'Please fix the arguments.',
                            // Removed tool-specific instructions for stock chart and web search as they are removed
                            `Today's date is ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`
                        ].join('\n'),
                    });

                    console.log("repairedArgs", repairedArgs);

                    // Return the tool call with corrected arguments
                    // The original code returned { ...toolCall, args: JSON.stringify(repairedArgs) }; 
                    // Adjusting to match expected structure if needed, assuming this structure is correct:
                     return { toolCallId: toolCall.toolCallId, toolName: toolCall.toolName, args: repairedArgs };


                },
                onChunk(event) {
                    if (event.chunk.type === 'tool-call') {
                        console.log('Called Tool: ', event.chunk.toolName);
                    }
                },
                onStepFinish(event) {
                    if (event.warnings) {
                        console.log('Warnings: ', event.warnings);
                    }
                },
                onFinish(event) {
                    console.log('Fin reason: ', event.finishReason);
                    console.log('Reasoning: ', event.reasoning);
                    console.log('reasoning details: ', event.reasoningDetails);
                    console.log('Steps: ', event.steps);
                    console.log('Messages: ', event.response.messages);
                    console.log('Response: ', event.response);
                },
                onError(event) {
                    console.log('Error: ', event.error);
                },
            });

            result.mergeIntoDataStream(dataStream, {
                sendReasoning: true
            });
        }
    })
}