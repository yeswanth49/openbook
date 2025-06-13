import { generateObject } from 'ai';
import { openai } from '@ai-sdk/openai';
import { z } from 'zod';

export const runtime = 'edge';

const CompactResponseSchema = z.object({
    summary: z.string().describe('A concise summary of the conversation that preserves key context, decisions, and important information'),
    title: z.string().describe('A descriptive title for the new workspace based on the conversation topic'),
});

export async function POST(request: Request) {
    try {
        const { messages } = await request.json();

        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            return new Response('No messages provided', { status: 400 });
        }

        // Format messages for summarization
        const conversationText = messages
            .map((msg: any) => `${msg.role.toUpperCase()}: ${msg.content}`)
            .join('\n\n');

        const prompt = `Please analyze this conversation and provide a comprehensive summary that preserves the key context, decisions, learnings, and important details. The summary should be detailed enough to continue the conversation meaningfully in a new context.

Conversation:
${conversationText}

Please provide both a detailed summary and a descriptive title for continuing this discussion.`;

        const { object } = await generateObject({
            model: openai('gpt-4o-mini'),
            prompt,
            schema: CompactResponseSchema,
        });

        return Response.json(object);
    } catch (error) {
        console.error('Error compacting conversation:', error);
        return new Response('Failed to compact conversation', { status: 500 });
    }
} 