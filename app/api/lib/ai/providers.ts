// AI Model Providers Configuration
// Extracted from app/api/chat/route.ts

import { customProvider, wrapLanguageModel, extractReasoningMiddleware } from 'ai';
import { xai } from '@ai-sdk/xai';
import { groq } from '@ai-sdk/groq';
import { google } from '@ai-sdk/google';
import { openai } from '@ai-sdk/openai';
import { anthropic } from '@ai-sdk/anthropic';

// Middleware for reasoning extraction
const middleware = extractReasoningMiddleware({
  tagName: 'think',
});

// Custom provider with multiple AI models
export const neuman = customProvider({
  languageModels: {
    'neuman-default': openai('o4-mini-2025-04-16'),
    'neuman-grok-3': xai('grok-3-fast-beta'),
    'neuman-vision': xai('grok-2-vision-1212'),
    'neuman-4o': openai('gpt-4o', {
      structuredOutputs: true,
    }),
    'neuman-4.1-nano': openai('gpt-4.1-nano', {}),
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
  },
});

/**
 * Returns provider-specific configuration options for a given model.
 *
 * The returned object contains configuration overrides for each provider, such as reasoning effort levels or thinking budgets, based on the specified model name.
 *
 * @param model - The model name for which to retrieve provider options.
 * @returns An object mapping provider names to their configuration options for the given model.
 */
export function getProviderOptions(model: string) {
  return {
    neuman: {
      ...(model === 'neuman-default'
        ? {
            reasoningEffort: 'high',
          }
        : {}),
      ...(model === 'neuman-o4-mini'
        ? {
            reasoningEffort: 'medium',
          }
        : {}),
      ...(model === 'neuman-google'
        ? {
            thinkingConfig: {
              thinkingBudget: 5000,
            },
          }
        : {}),
    },
    google: {
      thinkingConfig: {
        thinkingBudget: 5000,
      },
    },
    openai: {
      ...(model === 'neuman-o4-mini'
        ? {
            reasoningEffort: 'medium',
          }
        : {}),
    },
    xai: {
      ...(model === 'neuman-default'
        ? {
            reasoningEffort: 'high',
          }
        : {}),
    },
    anthropic: {
      thinking: { type: 'enabled', budgetTokens: 12000 },
    },
  };
}

/**
 * Returns the temperature setting for the specified model.
 *
 * For all models except 'neuman-o4-mini', returns 0. Returns undefined for 'neuman-o4-mini'.
 *
 * @param model - The model name.
 * @returns The temperature value for the model, or undefined if not set.
 */
export function getTemperature(model: string): number | undefined {
  return model !== 'neuman-o4-mini' ? 0 : undefined;
}

/**
 * Returns the maximum number of steps allowed for tool usage.
 *
 * @returns The fixed maximum number of tool usage steps.
 */
export function getMaxSteps(): number {
  return 5;
}

/**
 * Available model names
 */
export const AVAILABLE_MODELS = [
  'neuman-default',
  'neuman-grok-3',
  'neuman-vision',
  'neuman-4o',
  'neuman-4.1-nano',
  'neuman-o4-mini',
  'neuman-qwq',
  'neuman-google',
  'neuman-gemini',
  'neuman-anthropic',
] as const;

export type AvailableModel = (typeof AVAILABLE_MODELS)[number];

/**
 * Determines whether the given model name is one of the supported models.
 *
 * @param model - The model name to validate.
 * @returns True if {@link model} is a valid available model; otherwise, false.
 */
export function isValidModel(model: string): model is AvailableModel {
  return AVAILABLE_MODELS.includes(model as AvailableModel);
} 