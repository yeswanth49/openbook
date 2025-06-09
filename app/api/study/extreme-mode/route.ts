import { NextRequest, NextResponse } from 'next/server';
import { getStudyFrameworkPrompt } from '@/lib/study-prompts';
import { StudyFramework } from '@/lib/types';

/**
 * Handles POST requests for the Extreme Mode study framework API endpoint.
 *
 * Prepends the Extreme Mode system prompt to the provided chat messages and forwards the request to the internal chat API. Streams the chat API's response back to the client.
 *
 * @returns A streaming response from the internal chat API, or a JSON error response with status 500 if processing fails.
 */
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { messages, model = 'neuman-google' } = body;

        // Get the Extreme Mode system prompt
        const systemPrompt = getStudyFrameworkPrompt(StudyFramework.ExtremeMode);

        // Modify the messages to include the study framework system prompt
        const modifiedMessages = [{ role: 'system', content: systemPrompt }, ...messages];

        // Forward to the main chat API with the modified system prompt
        const chatResponse = await fetch(`${request.nextUrl.origin}/api/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...body,
                messages: modifiedMessages,
                model,
            }),
        });

        if (!chatResponse.ok) {
            throw new Error(`Chat API responded with status: ${chatResponse.status}`);
        }

        // Return the streaming response
        return new NextResponse(chatResponse.body, {
            status: chatResponse.status,
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
                'Transfer-Encoding': 'chunked',
            },
        });
    } catch (error) {
        console.error('Extreme Mode API error:', error);
        return NextResponse.json({ error: 'Failed to process Extreme Mode request' }, { status: 500 });
    }
}
