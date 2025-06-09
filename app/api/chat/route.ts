// @ts-nocheck
/**
 * Main AI Chat API Route
 * Handles streaming chat with academic search and reason search tools
 */

import { getGroupConfig } from '@/app/(config)/actions';
import {
    convertToCoreMessages,
    streamText,
    tool,
    createDataStreamResponse,
    generateObject,
    NoSuchToolError,
    extractReasoningMiddleware,
    DataStream,
} from 'ai';
import { z } from 'zod';

// Shared tools and services
import { academicSearchTool } from '../lib/ai/tools/academic-search';
import { executeReasonSearch } from '../lib/ai/tools/reason-search-advanced';
import { neuman, getProviderOptions, getTemperature, getMaxSteps } from '../lib/ai/providers';

const middleware = extractReasoningMiddleware({
    tagName: 'think',
});

export async function POST(req: Request) {
    const { messages, model, group, user_id, timezone } = await req.json();
    const { tools: activeTools, instructions } = await getGroupConfig(group);

    console.log('--------------------------------');
    console.log('Messages received:', JSON.stringify(messages, null, 2));
    console.log('Messages count:', messages.length);
    console.log('--------------------------------');
    console.log('Running with model: ', model.trim());
    console.log('Group: ', group);
    console.log('Timezone: ', timezone);

    return createDataStreamResponse({
        execute: async (dataStream: DataStream) => {
            const result = streamText({
                model: neuman.languageModel(model),
                messages: convertToCoreMessages(messages),
                temperature: getTemperature(model),
                maxSteps: getMaxSteps(),
                experimental_activeTools: [...activeTools],
                system: instructions,
                toolChoice: 'auto',
                providerOptions: getProviderOptions(model),
                tools: {
                    academic_search: academicSearchTool,
                    reason_search: tool({
                        description: 'Perform a reasoned web search with multiple steps and sources.',
                        parameters: z.object({
                            topic: z.string().describe('The main topic or question to research'),
                            depth: z.enum(['basic', 'advanced']).describe('Search depth level'),
                        }),
                        execute: async ({ topic, depth }: { topic: string; depth: 'basic' | 'advanced' }) => {
                            return await executeReasonSearch(topic, depth, dataStream);
                        },
                    }),
                    code_interpreter: tool({
                        description: 'Execute Python code for calculations, data analysis, and computations.',
                        parameters: z.object({
                            code: z.string().describe('The Python code to execute'),
                        }),
                        execute: async ({ code }: { code: string }) => {
                            // This is a placeholder - in production you'd want a proper sandboxed code execution environment
                            // For now, we'll return a descriptive message about what the code would do
                            return {
                                success: true,
                                message: `Code execution simulation: ${code.slice(0, 100)}${code.length > 100 ? '...' : ''}`,
                                note: 'Code interpreter simulation - actual execution requires proper sandboxing infrastructure'
                            };
                        },
                    }),
                    datetime: tool({
                        description: 'Get current date and time information with timezone support.',
                        parameters: z.object({
                            timezone: z.string().optional().describe('Timezone identifier (e.g., "America/New_York", "UTC")'),
                            format: z.string().optional().describe('Date format preference'),
                        }),
                        execute: async ({ timezone: tz, format }: { timezone?: string; format?: string }) => {
                            const now = new Date();
                            const userTimezone = tz || timezone || 'UTC';
                            
                            try {
                                const dateTimeFormat = new Intl.DateTimeFormat('en-US', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    second: '2-digit',
                                    timeZone: userTimezone,
                                    timeZoneName: 'short',
                                });
                                
                                const formatted = dateTimeFormat.format(now);
                                
                                return {
                                    datetime: formatted,
                                    timezone: userTimezone,
                                    iso: now.toISOString(),
                                    timestamp: now.getTime(),
                                };
                            } catch (error) {
                                // Fallback to UTC if timezone is invalid
                                const utcFormat = new Intl.DateTimeFormat('en-US', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    second: '2-digit',
                                    timeZone: 'UTC',
                                    timeZoneName: 'short',
                                });
                                
                                return {
                                    datetime: utcFormat.format(now),
                                    timezone: 'UTC',
                                    iso: now.toISOString(),
                                    timestamp: now.getTime(),
                                    note: `Invalid timezone '${userTimezone}', falling back to UTC`,
                                };
                            }
                        },
                    }),
                },
                // Tool repair system for handling malformed tool calls
                experimental_repairToolCall: async ({
                    toolCall,
                    tools,
                    parameterSchema,
                    error,
                }: {
                    toolCall: any;
                    tools: any;
                    parameterSchema: (toolCall: any) => any;
                    error: any;
                }) => {
                    if (NoSuchToolError.isInstance(error)) {
                        return null;
                    }

                    console.log('Fixing tool call================================');
                    console.log('toolCall', toolCall);
                    console.log('tools', tools);
                    console.log('parameterSchema', parameterSchema);
                    console.log('error', error);

                    const toolDefinition = tools[toolCall.toolName as keyof typeof tools];
                    if (!toolDefinition) {
                        console.error(`Tool "${toolCall.toolName}" not found for repair.`);
                        return null;
                    }

                    const { object: repairedArgs } = await generateObject({
                        model: neuman.languageModel('neuman-default'),
                        schema: toolDefinition.parameters,
                        prompt: [
                            `The model tried to call the tool "${toolCall.toolName}"` +
                                ` with the following arguments:`,
                            JSON.stringify(toolCall.args),
                            `The tool accepts the following schema:`,
                            JSON.stringify(parameterSchema(toolCall)),
                            'Please fix the arguments.',
                            `Today's date is ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`,
                        ].join('\n'),
                    });

                    console.log('repairedArgs', repairedArgs);

                    return {
                        toolCallId: toolCall.toolCallId,
                        toolName: toolCall.toolName,
                        args: repairedArgs,
                    };
                },
                // Event handlers for debugging and monitoring
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
                sendReasoning: true,
            });
        },
    });
}
