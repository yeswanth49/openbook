# Search Functionality

## Overview

OpenBook provides a sophisticated search system with different modes and specialized behavior. This document details the implementation and features of the search functionality, including the various search modes and the API routes that support them.

## Search Modes

OpenBook offers different search modes with specialized behavior:

### 1. Chat Mode

The standard conversation mode without specialized tools. This mode:
- Provides direct AI model interaction
- Focuses on conversation flow
- Offers simplicity for basic queries

### 2. Extreme Mode (Academic Research)

An advanced mode for academic research with specialized tools:
- Academic paper search and retrieval
- Citation formatting and validation
- Structured content presentation
- LaTeX support for mathematical notation

## Search API Implementation

The search functionality is primarily implemented in the Search API route:

```typescript
// app/api/search/route.ts
export async function POST(req: Request) {
  const { query, model, mode, attachments } = await req.json();
  
  // Select appropriate search handler based on mode
  if (mode === 'chat') {
    return handleChatMode(query, model, attachments);
  } else if (mode === 'extreme') {
    return handleExtremeMode(query, model, attachments);
  }
  
  // Default fallback
  return new Response(JSON.stringify({ error: 'Invalid search mode' }), {
    status: 400,
    headers: { 'Content-Type': 'application/json' }
  });
}
```

### Chat Mode Implementation

```typescript
async function handleChatMode(query, model, attachments) {
  // Process attachments if any
  const processedAttachments = attachments ? 
    await processAttachments(attachments) : 
    [];
    
  // Call the appropriate AI model
  const response = await callModelProvider(model, query, processedAttachments);
  
  // Create a streamable response
  return createStreamableResponse(response);
}
```

### Extreme Mode Implementation

```typescript
async function handleExtremeMode(query, model, attachments) {
  // Initialize the research process
  const research = await initializeResearch(query);
  
  // Create a stream to send updates to the client
  const stream = new TransformStream();
  const writer = stream.writable.getWriter();
  
  // Start multi-step research process
  (async () => {
    try {
      // Step 1: Create research plan
      await writer.write(encodeMessage({ type: 'update', content: 'Creating research plan...' }));
      const plan = await createResearchPlan(query, model);
      await writer.write(encodeMessage({ type: 'plan', content: plan }));
      
      // Step 2: Execute searches
      await writer.write(encodeMessage({ type: 'update', content: 'Executing searches...' }));
      const searches = await executeSearches(plan, model);
      await writer.write(encodeMessage({ type: 'searches', content: searches }));
      
      // Step 3: Analyze results
      await writer.write(encodeMessage({ type: 'update', content: 'Analyzing results...' }));
      const analysis = await analyzeResults(searches, model);
      await writer.write(encodeMessage({ type: 'analysis', content: analysis }));
      
      // Step 4: Identify knowledge gaps
      await writer.write(encodeMessage({ type: 'update', content: 'Identifying knowledge gaps...' }));
      const gaps = await identifyKnowledgeGaps(analysis, model);
      await writer.write(encodeMessage({ type: 'gaps', content: gaps }));
      
      // Step 5: Perform follow-up searches
      await writer.write(encodeMessage({ type: 'update', content: 'Performing follow-up searches...' }));
      const followUpSearches = await executeFollowUpSearches(gaps, model);
      await writer.write(encodeMessage({ type: 'followUpSearches', content: followUpSearches }));
      
      // Step 6: Synthesize findings
      await writer.write(encodeMessage({ type: 'update', content: 'Synthesizing findings...' }));
      const synthesis = await synthesizeFindings(analysis, followUpSearches, model);
      await writer.write(encodeMessage({ type: 'synthesis', content: synthesis }));
      
      // Complete
      await writer.write(encodeMessage({ type: 'complete' }));
    } catch (error) {
      await writer.write(encodeMessage({ type: 'error', content: error.message }));
    } finally {
      await writer.close();
    }
  })();
  
  return new Response(stream.readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}
```

## External Search Providers

OpenBook integrates with external search providers for various types of information:

### Tavily Web Search

```typescript
// Integration with Tavily for web search
import { Tavily } from '@tavily/core';

const tavily = new Tavily({
  apiKey: process.env.TAVILY_API_KEY,
});

async function searchWeb(query) {
  const results = await tavily.search({
    query,
    searchDepth: 'advanced',
    includeImages: true,
    includeNavigationalLinks: true,
  });
  
  return results;
}
```

### Exa Academic Search

```typescript
// Integration with Exa for academic papers
import { Exa } from 'exa-js';

const exa = new Exa(process.env.EXA_API_KEY);

async function searchAcademicPapers(query) {
  const results = await exa.search({
    query,
    numResults: 10,
    useAuthorBoost: true,
    useRelevanceBoost: true,
    types: ['paper'],
  });
  
  return results;
}
```

## Streaming Response Implementation

The search API implements streaming responses for long-running operations:

```typescript
function createStreamableResponse(generator) {
  const stream = new TransformStream();
  const writer = stream.writable.getWriter();
  
  (async () => {
    try {
      for await (const chunk of generator) {
        await writer.write(encoder.encode(chunk));
      }
    } catch (error) {
      console.error('Stream error:', error);
    } finally {
      await writer.close();
    }
  })();
  
  return new Response(stream.readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}
```

## Group Selector Component

The GroupSelector component allows users to switch between different search modes:

```tsx
// Simplified GroupSelector implementation
export function GroupSelector({ selectedGroup, onGroupChange }) {
  const groups = [
    { id: 'chat', name: 'Chat', icon: ChatIcon },
    { id: 'extreme', name: 'Research', icon: ResearchIcon },
  ];
  
  return (
    <div className="flex space-x-2">
      {groups.map((group) => (
        <button
          key={group.id}
          className={`flex items-center px-3 py-2 rounded-md ${
            selectedGroup === group.id ? 'bg-blue-100 text-blue-700' : 'bg-gray-100'
          }`}
          onClick={() => onGroupChange(group.id)}
        >
          <group.icon className="w-4 h-4 mr-2" />
          {group.name}
        </button>
      ))}
    </div>
  );
}
```

## Search Results Presentation

The search results are presented differently based on the mode:

### Chat Mode

Simple conversation interface with messages displayed sequentially.

### Extreme Mode

Structured display with multiple sections:
- Research plan
- Search results
- Analysis
- Knowledge gaps
- Follow-up searches
- Synthesis of findings

```tsx
// Example of extreme mode results display
function ExtremeSearchResults({ results }) {
  return (
    <div className="space-y-6">
      {results.plan && (
        <ResearchPlan plan={results.plan} />
      )}
      
      {results.searches && (
        <SearchResults searches={results.searches} />
      )}
      
      {results.analysis && (
        <Analysis analysis={results.analysis} />
      )}
      
      {results.gaps && (
        <KnowledgeGaps gaps={results.gaps} />
      )}
      
      {results.followUpSearches && (
        <FollowUpSearches searches={results.followUpSearches} />
      )}
      
      {results.synthesis && (
        <Synthesis synthesis={results.synthesis} />
      )}
    </div>
  );
}
```

## User Interface Integration

The search functionality is integrated into the UI through:

1. The FormComponent for query input
2. The GroupSelector for mode selection
3. The ModelSwitcher for AI model selection
4. The results display components tailored to each mode

## Error Handling

The search system implements robust error handling:

```typescript
try {
  // Search operations
} catch (error) {
  console.error('Search error:', error);
  
  // Determine appropriate error message
  let errorMessage = 'An error occurred during search';
  
  if (error.message.includes('Rate limit')) {
    errorMessage = 'Rate limit exceeded. Please try again later.';
  } else if (error.message.includes('Authentication')) {
    errorMessage = 'Authentication error with search provider';
  }
  
  // Return error response
  return new Response(JSON.stringify({ error: errorMessage }), {
    status: 500,
    headers: { 'Content-Type': 'application/json' }
  });
}
```

## Related Components

- [Form Component](./form-component.md) - Used for query input
- [GroupSelector](./ui-components.md#group-selector) - For selecting search modes
- [ModelSwitcher](./ui-components.md#model-switcher) - For selecting AI models
- [Academic Research Tools](./academic-research.md) - Tools for academic search
- [Reason Search Tool](./reason-search.md) - Implementation of the multi-step research process 