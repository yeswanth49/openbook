'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Lightbulb, Loader2, X, Copy, Check } from 'lucide-react';
import { useChat } from '@ai-sdk/react';
import { Block, BlockType } from '@/lib/types';

interface AIAssistantProps {
    selectedBlocks: Block[];
    currentBlock?: Block;
    onBlockUpdate?: (blockId: string, content: string) => void;
    onCreateBlock?: (content: string, type?: BlockType) => void;
    onClose: () => void;
}

/**
 * Renders an AI-powered assistant modal for journal content, enabling users to request explanations for selected blocks or generate content suggestions for a current block.
 *
 * The assistant interacts with an AI chat API, handling both streaming and non-streaming responses, and provides UI controls for copying, applying, or creating content based on AI output. It supports robust error handling and displays user-friendly feedback for all operations.
 *
 * @param selectedBlocks - The journal blocks selected by the user for explanation or context.
 * @param currentBlock - The block currently being edited, used for content suggestions.
 * @param onBlockUpdate - Callback to update the content of an existing block with a suggestion.
 * @param onCreateBlock - Callback to create a new block with the suggested content.
 * @param onClose - Callback to close the assistant modal.
 *
 * @remark
 * The assistant processes multiple possible API response formats and gracefully falls back to non-streaming requests if streaming fails. In development mode, a debug feature is available for testing API connectivity and response parsing.
 */
export default function AIAssistant({
    selectedBlocks,
    currentBlock,
    onBlockUpdate,
    onCreateBlock,
    onClose,
}: AIAssistantProps) {
    const [activeFeature, setActiveFeature] = useState<'explain' | 'suggest' | 'ask-space' | null>(null);
    const [explanation, setExplanation] = useState<string>('');
    const [suggestion, setSuggestion] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const [copied, setCopied] = useState(false);

    const {
        messages,
        input,
        handleInputChange,
        handleSubmit,
        isLoading: chatLoading,
    } = useChat({
        api: '/api/chat',
        body: {
            model: 'neuman-google',
            group: 'chat',
        },
    });

    const handleExplainBlocks = async () => {
        if (selectedBlocks.length === 0) return;

        setActiveFeature('explain');
        setIsLoading(true);

        try {
            const context = selectedBlocks.map((block) => block.content).join('\n\n');
            console.log('Sending explanation request with context:', context);

            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [
                        {
                            role: 'user',
                            content: `Please explain the following content from my journal in a clear and helpful way:\n\n${context}`,
                        },
                    ],
                    model: 'neuman-google',
                    group: 'chat',
                }),
            });

            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers);

            if (!response.ok) {
                const errorText = await response.text();
                console.error('API Error:', errorText);
                throw new Error(`Failed to get explanation: ${response.status}`);
            }

            const reader = response.body?.getReader();
            if (!reader) throw new Error('No response body');

            let explanationText = '';
            let hasReceivedData = false;

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = new TextDecoder().decode(value);
                console.log('Received chunk:', chunk);

                const lines = chunk.split('\n');

                for (const line of lines) {
                    if (line.trim() === '') continue;

                    // Check if this is a direct text chunk like 0:"Hello there"
                    if (line.startsWith('0:"')) {
                        try {
                            // Extract the text between quotes
                            const text = line.slice(2).trim();
                            if (text.startsWith('"') && text.endsWith('"')) {
                                const extractedText = JSON.parse(text); // Parse the JSON string
                                explanationText += extractedText;
                                setExplanation(explanationText);
                                hasReceivedData = true;
                                console.log('Added direct text chunk:', extractedText);
                            }
                        } catch (textError) {
                            console.error('Failed to parse direct text chunk:', textError);
                        }
                        continue; // Skip to next line after handling direct text chunk
                    }

                    // Skip metadata lines
                    if (line.startsWith('f:') || line.startsWith('e:') || line.startsWith('d:')) {
                        continue;
                    }

                    try {
                        // Try parsing different JSON response formats
                        let data;
                        if (line.startsWith('0:')) {
                            data = JSON.parse(line.slice(2));
                        } else if (line.startsWith('data: ')) {
                            data = JSON.parse(line.slice(6));
                        } else {
                            data = JSON.parse(line);
                        }

                        console.log('Parsed data:', data);

                        // Handle different response formats
                        if (data.type === 'text-delta' && data.textDelta) {
                            explanationText += data.textDelta;
                            setExplanation(explanationText);
                            hasReceivedData = true;
                        } else if (data.type === 'text' && data.text) {
                            explanationText += data.text;
                            setExplanation(explanationText);
                            hasReceivedData = true;
                        } else if (data.delta && data.delta.content) {
                            explanationText += data.delta.content;
                            setExplanation(explanationText);
                            hasReceivedData = true;
                        } else if (data.content) {
                            // Handle both string content and array content
                            if (typeof data.content === 'string') {
                                explanationText += data.content;
                                setExplanation(explanationText);
                                hasReceivedData = true;
                            } else if (Array.isArray(data.content)) {
                                // Handle content array (like from AI SDK responses)
                                for (const contentItem of data.content) {
                                    if (contentItem.text) {
                                        explanationText += contentItem.text;
                                        setExplanation(explanationText);
                                        hasReceivedData = true;
                                    }
                                }
                            }
                        } else if (data.messages && Array.isArray(data.messages)) {
                            // Handle full response with messages array
                            for (const message of data.messages) {
                                if (message.role === 'assistant' && message.content) {
                                    if (typeof message.content === 'string') {
                                        explanationText += message.content;
                                        setExplanation(explanationText);
                                        hasReceivedData = true;
                                    } else if (Array.isArray(message.content)) {
                                        for (const contentItem of message.content) {
                                            if (contentItem.text) {
                                                explanationText += contentItem.text;
                                                setExplanation(explanationText);
                                                hasReceivedData = true;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } catch (e) {
                        console.log('Failed to parse as JSON, treating as text:', line);
                        // If it's not JSON, treat as plain text
                        if (line.trim() && !line.includes(':') && !line.startsWith('[') && !line.startsWith('{')) {
                            explanationText += line;
                            setExplanation(explanationText);
                            hasReceivedData = true;
                        }
                    }
                }
            }

            // If no data was received through streaming, try a fallback approach
            if (!hasReceivedData) {
                console.log('No streaming data received, trying fallback...');
                const fallbackResponse = await fetch('/api/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        messages: [
                            {
                                role: 'user',
                                content: `Please explain the following content from my journal in a clear and helpful way:\n\n${context}`,
                            },
                        ],
                        model: 'neuman-google',
                        group: 'chat',
                        stream: false, // Try without streaming
                    }),
                });

                if (fallbackResponse.ok) {
                    const fallbackData = await fallbackResponse.json();
                    console.log('Fallback response:', fallbackData);

                    // Try to extract content from various response formats
                    let extractedContent = '';

                    if (fallbackData.content) {
                        if (typeof fallbackData.content === 'string') {
                            extractedContent = fallbackData.content;
                        } else if (Array.isArray(fallbackData.content)) {
                            extractedContent = fallbackData.content.map((item: any) => item.text || '').join('');
                        }
                    } else if (fallbackData.message) {
                        extractedContent = fallbackData.message;
                    } else if (fallbackData.messages && Array.isArray(fallbackData.messages)) {
                        for (const message of fallbackData.messages) {
                            if (message.role === 'assistant' && message.content) {
                                if (typeof message.content === 'string') {
                                    extractedContent += message.content;
                                } else if (Array.isArray(message.content)) {
                                    extractedContent += message.content.map((item: any) => item.text || '').join('');
                                }
                            }
                        }
                    }

                    if (extractedContent) {
                        setExplanation(extractedContent);
                        hasReceivedData = true;
                    }
                }
            }

            if (!hasReceivedData) {
                setExplanation(
                    'I was able to process your request, but encountered an issue displaying the response. Please try again.',
                );
            }
        } catch (error) {
            console.error('Error explaining blocks:', error);
            setExplanation(
                'Sorry, I encountered an error while explaining the content. Please check your connection and try again.',
            );
        } finally {
            setIsLoading(false);
        }
    };

    const handleSuggestContent = async () => {
        if (!currentBlock) return;

        setActiveFeature('suggest');
        setIsLoading(true);

        try {
            const context =
                selectedBlocks.length > 0
                    ? selectedBlocks.map((block) => block.content).join('\n\n')
                    : 'No additional context provided';

            const prompt = `Based on the following context from my journal, suggest content for a ${currentBlock.type} block. The suggestion should be relevant, helpful, and fit naturally with the existing content.

Context:
${context}

Current block type: ${currentBlock.type}
Current block content: ${currentBlock.content || '(empty)'}

Please provide a thoughtful suggestion that would enhance this journal entry:`;

            console.log('Sending suggestion request with prompt:', prompt);

            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [{ role: 'user', content: prompt }],
                    model: 'neuman-google',
                    group: 'chat',
                }),
            });

            console.log('Suggestion response status:', response.status);

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Suggestion API Error:', errorText);
                throw new Error(`Failed to get suggestion: ${response.status}`);
            }

            const reader = response.body?.getReader();
            if (!reader) throw new Error('No response body');

            let suggestionText = '';
            let hasReceivedData = false;

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = new TextDecoder().decode(value);
                console.log('Suggestion chunk:', chunk);

                const lines = chunk.split('\n');

                for (const line of lines) {
                    if (line.trim() === '') continue;

                    // Check if this is a direct text chunk like 0:"Hello there"
                    if (line.startsWith('0:"')) {
                        try {
                            // Extract the text between quotes
                            const text = line.slice(2).trim();
                            if (text.startsWith('"') && text.endsWith('"')) {
                                const extractedText = JSON.parse(text); // Parse the JSON string
                                suggestionText += extractedText;
                                setSuggestion(suggestionText);
                                hasReceivedData = true;
                                console.log('Added direct suggestion text chunk:', extractedText);
                            }
                        } catch (textError) {
                            console.error('Failed to parse direct suggestion text chunk:', textError);
                        }
                        continue; // Skip to next line after handling direct text chunk
                    }

                    // Skip metadata lines
                    if (line.startsWith('f:') || line.startsWith('e:') || line.startsWith('d:')) {
                        continue;
                    }

                    try {
                        // Try parsing different JSON response formats
                        let data;
                        if (line.startsWith('0:')) {
                            data = JSON.parse(line.slice(2));
                        } else if (line.startsWith('data: ')) {
                            data = JSON.parse(line.slice(6));
                        } else {
                            data = JSON.parse(line);
                        }

                        console.log('Suggestion parsed data:', data);

                        // Handle different response formats
                        if (data.type === 'text-delta' && data.textDelta) {
                            suggestionText += data.textDelta;
                            setSuggestion(suggestionText);
                            hasReceivedData = true;
                        } else if (data.type === 'text' && data.text) {
                            suggestionText += data.text;
                            setSuggestion(suggestionText);
                            hasReceivedData = true;
                        } else if (data.delta && data.delta.content) {
                            suggestionText += data.delta.content;
                            setSuggestion(suggestionText);
                            hasReceivedData = true;
                        } else if (data.content) {
                            // Handle both string content and array content
                            if (typeof data.content === 'string') {
                                suggestionText += data.content;
                                setSuggestion(suggestionText);
                                hasReceivedData = true;
                            } else if (Array.isArray(data.content)) {
                                // Handle content array (like from AI SDK responses)
                                for (const contentItem of data.content) {
                                    if (contentItem.text) {
                                        suggestionText += contentItem.text;
                                        setSuggestion(suggestionText);
                                        hasReceivedData = true;
                                    }
                                }
                            }
                        } else if (data.messages && Array.isArray(data.messages)) {
                            // Handle full response with messages array
                            for (const message of data.messages) {
                                if (message.role === 'assistant' && message.content) {
                                    if (typeof message.content === 'string') {
                                        suggestionText += message.content;
                                        setSuggestion(suggestionText);
                                        hasReceivedData = true;
                                    } else if (Array.isArray(message.content)) {
                                        for (const contentItem of message.content) {
                                            if (contentItem.text) {
                                                suggestionText += contentItem.text;
                                                setSuggestion(suggestionText);
                                                hasReceivedData = true;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } catch (e) {
                        console.log('Failed to parse suggestion as JSON, treating as text:', line);
                        // If it's not JSON, treat as plain text
                        if (line.trim() && !line.includes(':') && !line.startsWith('[') && !line.startsWith('{')) {
                            suggestionText += line;
                            setSuggestion(suggestionText);
                            hasReceivedData = true;
                        }
                    }
                }
            }

            // If no data was received through streaming, try a fallback approach
            if (!hasReceivedData) {
                console.log('No suggestion streaming data received, trying fallback...');
                const fallbackResponse = await fetch('/api/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        messages: [{ role: 'user', content: prompt }],
                        model: 'neuman-google',
                        group: 'chat',
                        stream: false, // Try without streaming
                    }),
                });

                if (fallbackResponse.ok) {
                    const fallbackData = await fallbackResponse.json();
                    console.log('Suggestion fallback response:', fallbackData);

                    // Try to extract content from various response formats
                    let extractedContent = '';

                    if (fallbackData.content) {
                        if (typeof fallbackData.content === 'string') {
                            extractedContent = fallbackData.content;
                        } else if (Array.isArray(fallbackData.content)) {
                            extractedContent = fallbackData.content.map((item: any) => item.text || '').join('');
                        }
                    } else if (fallbackData.message) {
                        extractedContent = fallbackData.message;
                    } else if (fallbackData.messages && Array.isArray(fallbackData.messages)) {
                        for (const message of fallbackData.messages) {
                            if (message.role === 'assistant' && message.content) {
                                if (typeof message.content === 'string') {
                                    extractedContent += message.content;
                                } else if (Array.isArray(message.content)) {
                                    extractedContent += message.content.map((item: any) => item.text || '').join('');
                                }
                            }
                        }
                    }

                    if (extractedContent) {
                        setSuggestion(extractedContent);
                        hasReceivedData = true;
                    }
                }
            }

            if (!hasReceivedData) {
                setSuggestion(
                    'I was able to process your request, but encountered an issue displaying the response. Please try again.',
                );
            }
        } catch (error) {
            console.error('Error getting suggestion:', error);
            setSuggestion(
                'Sorry, I encountered an error while generating a suggestion. Please check your connection and try again.',
            );
        } finally {
            setIsLoading(false);
        }
    };

    const handleApplySuggestion = () => {
        if (currentBlock && suggestion && onBlockUpdate) {
            onBlockUpdate(currentBlock.id, suggestion);
            onClose();
        }
    };

    const handleCopyExplanation = async () => {
        if (explanation) {
            await navigator.clipboard.writeText(explanation);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleCreateNewBlock = () => {
        if (suggestion && onCreateBlock) {
            onCreateBlock(suggestion);
            onClose();
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={onClose}
        >
            <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                className="bg-white dark:bg-neutral-900 rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-800">
                    <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">AI Assistant</h2>
                    <button onClick={onClose} className="p-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800">
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="p-4">
                    {!activeFeature && (
                        <div className="space-y-3">
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                                {selectedBlocks.length > 0
                                    ? `${selectedBlocks.length} block(s) selected`
                                    : 'No blocks selected'}
                            </p>

                            <div className="grid gap-3">
                                {selectedBlocks.length > 0 && (
                                    <>
                                        <button
                                            onClick={handleExplainBlocks}
                                            className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                                        >
                                            <Lightbulb className="h-5 w-5 text-blue-500" />
                                            <div className="text-left">
                                                <div className="font-medium">Explain Selected Blocks</div>
                                                <div className="text-sm text-neutral-500">
                                                    Get AI explanation of your content
                                                </div>
                                            </div>
                                        </button>
                                    </>
                                )}

                                {currentBlock && (
                                    <button
                                        onClick={handleSuggestContent}
                                        className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                                    >
                                        <Cpu className="h-5 w-5 text-purple-500" />
                                        <div className="text-left">
                                            <div className="font-medium">Suggest Content</div>
                                            <div className="text-sm text-neutral-500">
                                                Get AI suggestions for this block
                                            </div>
                                        </div>
                                    </button>
                                )}

                                {/* Debug button for testing API */}
                                {process.env.NODE_ENV === 'development' && (
                                    <button
                                        onClick={async () => {
                                            console.log('Testing API connection with detailed response parsing...');
                                            try {
                                                const response = await fetch('/api/chat', {
                                                    method: 'POST',
                                                    headers: { 'Content-Type': 'application/json' },
                                                    body: JSON.stringify({
                                                        messages: [{ role: 'user', content: 'Test message' }],
                                                        model: 'neuman-google',
                                                        group: 'chat',
                                                    }),
                                                });
                                                console.log('API test response:', response.status);

                                                if (!response.ok) {
                                                    console.error('API error:', response.status, response.statusText);
                                                    return;
                                                }

                                                // Test streaming response parsing
                                                const reader = response.body?.getReader();
                                                if (!reader) {
                                                    console.error('No response body');
                                                    return;
                                                }

                                                let fullText = '';
                                                let formattedText = 'Parsed content:\n';

                                                while (true) {
                                                    const { done, value } = await reader.read();
                                                    if (done) break;

                                                    const chunk = new TextDecoder().decode(value);
                                                    console.log('Raw chunk:', JSON.stringify(chunk));
                                                    fullText += chunk;

                                                    const lines = chunk.split('\n');

                                                    for (const line of lines) {
                                                        if (line.trim() === '') continue;

                                                        console.log('Processing line:', JSON.stringify(line));

                                                        // Check if it's a direct text chunk
                                                        if (line.startsWith('0:"')) {
                                                            try {
                                                                const text = line.slice(2).trim();
                                                                if (text.startsWith('"') && text.endsWith('"')) {
                                                                    const extractedText = JSON.parse(text);
                                                                    formattedText += `[Direct text]: ${extractedText}\n`;
                                                                    console.log(
                                                                        'Extracted direct text:',
                                                                        extractedText,
                                                                    );
                                                                }
                                                            } catch (e) {
                                                                console.error('Failed to parse direct text:', e);
                                                            }
                                                        }
                                                        // Skip metadata lines
                                                        else if (
                                                            line.startsWith('f:') ||
                                                            line.startsWith('e:') ||
                                                            line.startsWith('d:')
                                                        ) {
                                                            console.log('Skipping metadata:', line);
                                                        }
                                                        // Try JSON parsing
                                                        else {
                                                            try {
                                                                let data;
                                                                if (line.startsWith('0:')) {
                                                                    data = JSON.parse(line.slice(2));
                                                                } else if (line.startsWith('data: ')) {
                                                                    data = JSON.parse(line.slice(6));
                                                                } else {
                                                                    data = JSON.parse(line);
                                                                }

                                                                console.log('Parsed JSON data:', data);
                                                                formattedText += `[JSON]: ${JSON.stringify(data)}\n`;
                                                            } catch (e) {
                                                                console.log('Not valid JSON:', line);
                                                            }
                                                        }
                                                    }
                                                }

                                                console.log('Full response text:', fullText);
                                                console.log(formattedText);

                                                // Show results in UI
                                                setActiveFeature('explain');
                                                setExplanation(`DEBUG API TEST RESULTS:\n\n${formattedText}`);
                                            } catch (e: any) {
                                                console.error('API test failed:', e);
                                                setActiveFeature('explain');
                                                setExplanation(`API TEST ERROR: ${e.message || String(e)}`);
                                            }
                                        }}
                                        className="flex items-center gap-3 p-3 rounded-lg border border-orange-200 dark:border-orange-700 hover:bg-orange-50 dark:hover:bg-orange-800 transition-colors"
                                    >
                                        <div className="text-left">
                                            <div className="font-medium text-orange-600">Debug API</div>
                                            <div className="text-sm text-orange-500">
                                                Test API with detailed parsing
                                            </div>
                                        </div>
                                    </button>
                                )}
                            </div>
                        </div>
                    )}

                    {activeFeature === 'explain' && (
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="font-medium">Explanation</h3>
                                <div className="flex gap-2">
                                    <button
                                        onClick={handleCopyExplanation}
                                        className="flex items-center gap-1 px-2 py-1 text-sm rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                    >
                                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                        {copied ? 'Copied' : 'Copy'}
                                    </button>
                                    <button
                                        onClick={() => setActiveFeature(null)}
                                        className="px-2 py-1 text-sm rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                    >
                                        Back
                                    </button>
                                </div>
                            </div>

                            <div className="max-h-96 overflow-y-auto">
                                {isLoading ? (
                                    <div className="flex items-center gap-2 text-neutral-500">
                                        <div className="h-2 w-2 bg-neutral-400 rounded-full animate-pulse"></div>
                                        Generating explanation...
                                    </div>
                                ) : (
                                    <div className="prose prose-sm dark:prose-invert max-w-none">
                                        {explanation || 'No explanation generated yet.'}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {activeFeature === 'suggest' && (
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="font-medium">Content Suggestion</h3>
                                <button
                                    onClick={() => setActiveFeature(null)}
                                    className="px-2 py-1 text-sm rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                >
                                    Back
                                </button>
                            </div>

                            <div className="max-h-96 overflow-y-auto">
                                {isLoading ? (
                                    <div className="flex items-center gap-2 text-neutral-500">
                                        <div className="h-2 w-2 bg-neutral-400 rounded-full animate-pulse"></div>
                                        Generating suggestion...
                                    </div>
                                ) : (
                                    <div className="space-y-3">
                                        <div className="prose prose-sm dark:prose-invert max-w-none p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                                            {suggestion || 'No suggestion generated yet.'}
                                        </div>

                                        {suggestion && (
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={handleApplySuggestion}
                                                    className="px-3 py-1.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm"
                                                >
                                                    Apply to Current Block
                                                </button>
                                                <button
                                                    onClick={handleCreateNewBlock}
                                                    className="px-3 py-1.5 border border-neutral-300 dark:border-neutral-600 rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-800 text-sm"
                                                >
                                                    Create New Block
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}
