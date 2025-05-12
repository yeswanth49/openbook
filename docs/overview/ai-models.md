# AI Models Integration

## Overview

OpenBook integrates multiple AI models from different providers to offer a diverse range of capabilities. This document details the integration of these models, their capabilities, and how to use them within the application.

## Supported AI Providers

OpenBook currently supports the following AI providers:

1. **OpenAI**
   - GPT-4o
   - o4-mini
   - Other OpenAI models

2. **Google AI**
   - Gemini models

3. **Anthropic**
   - Claude models

4. **Groq**
   - Llama models with optimized inference

5. **XAI**
   - Grok models

## Integration Architecture

The AI models are integrated using a provider-based architecture:

```
/lib
  /providers
    /openai.ts     # OpenAI-specific implementation
    /google.ts     # Google AI implementation
    /anthropic.ts  # Anthropic implementation
    /groq.ts       # Groq implementation
    /xai.ts        # XAI implementation
```

Each provider implementation follows a common interface pattern to ensure consistent behavior across different AI models.

## Model Selection

The ModelSwitcher component allows users to select which AI model to use for their queries:

```typescript
// Example model selection implementation
const [selectedModel, setSelectedModel] = useState('gpt-4o');

// When selecting a model
function handleModelChange(model: string) {
  setSelectedModel(model);
}
```

## Model Capabilities

Different models support different capabilities:

| Capability | Description | Supported Models |
|------------|-------------|-----------------|
| Text Generation | Standard text response | All models |
| Vision | Process and understand images | GPT-4o, Gemini, Claude 3 |
| Code | Code generation and explanation | All models (varying quality) |
| Academic Research | Advanced research capabilities | GPT-4o, Claude 3 |

## Using AI Models in API Routes

The search API route handles interactions with the selected AI model:

```typescript
// Simplified example from app/api/search/route.ts
export async function POST(req: Request) {
  const { query, model, attachments } = await req.json();
  
  // Select appropriate provider based on model
  const response = await callModelProvider(model, query, attachments);
  
  return new Response(response);
}

async function callModelProvider(model, query, attachments) {
  if (model.startsWith('gpt-')) {
    return callOpenAI(query, model, attachments);
  } else if (model.startsWith('claude-')) {
    return callAnthropic(query, model, attachments);
  } else if (model.startsWith('gemini-')) {
    return callGoogleAI(query, model, attachments);
  } // ... and so on
}
```

## AI SDK Integration

The project uses AI SDK to standardize interactions with different model providers:

```typescript
// Example of using AI SDK for OpenAI
import { OpenAI } from '@ai-sdk/openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function callOpenAI(prompt, model, attachments) {
  const completion = await openai.chat.completions.create({
    model: model,
    messages: [
      { role: 'user', content: prompt },
      // Handle attachments if any
    ]
  });
  
  return completion.choices[0].message.content;
}
```

## Environment Variables

The following environment variables need to be configured for AI model integration:

```
# .env.local
OPENAI_API_KEY=your_openai_api_key
ANTHROPIC_API_KEY=your_anthropic_api_key
GOOGLE_AI_API_KEY=your_google_ai_api_key
GROQ_API_KEY=your_groq_api_key
XAI_API_KEY=your_xai_api_key
```

## Adding a New AI Provider

To add a new AI provider:

1. Create a new provider file in `/lib/providers/`
2. Implement the standard provider interface
3. Add the model options to the ModelSwitcher component
4. Update the model capability detection system
5. Add routing in the API to handle the new provider

## Best Practices

1. **Error Handling**: Implement robust error handling for API failures
2. **Fallbacks**: Configure fallback models in case of unavailability
3. **Rate Limiting**: Implement appropriate rate limiting strategies
4. **Cost Management**: Monitor and manage API usage costs
5. **Capabilities**: Clearly communicate to users what each model can and cannot do

## Related Components

- [ModelSwitcher](./ui-components.md#model-switcher) - UI for selecting AI models
- [Search API](./api-routes.md#search-api) - API route that interacts with AI models 