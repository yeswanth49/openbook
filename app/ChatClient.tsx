/* eslint-disable @next/next/no-img-element */
"use client";
import 'katex/dist/katex.min.css';

import { AnimatePresence, motion } from 'framer-motion';
import { useChat, UseChatOptions } from '@ai-sdk/react';
import { CalendarBlank, Clock as PhosphorClock, Info } from '@phosphor-icons/react';
import { Switch } from "@/components/ui/switch"
import { parseAsString, useQueryState } from 'nuqs';
import { useTheme } from 'next-themes';
import { toast } from 'sonner';
import {
    Moon,
    Plus,
    Sun,
    Search,
    ChevronDown,
    Settings,
    MessageSquare,
    Flag,
    HelpCircle,
    LogOut,
    Menu,
    X
} from 'lucide-react';
import Link from 'next/link';
import React, {
    memo,
    Suspense,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState
} from 'react';

import { Button } from '@/components/ui/button';
import { InstallPrompt } from '@/components/InstallPrompt';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { cn, getUserId, SearchGroupId } from '@/lib/utils';
import { suggestQuestions } from './actions';
import Messages from '@/components/messages';
import { Input } from "@/components/ui/input";
import Sidebar from '@/components/sidebar';
import { useSpaces } from '@/contexts/SpacesContext';
import { TerminalInput } from '@/components/terminal/terminal-input';
import { useStudyMode } from '@/contexts/StudyModeContext';
import { StudyModeBadge } from '@/components/study/study-mode-badge';
import { StudyFramework } from '@/lib/types';

interface Attachment {
    name: string;
    contentType: string;
    url: string;
    size: number;
}

const VercelIcon = ({ size = 16 }: { size: number }) => {
    return (
        <svg
            height={size}
            strokeLinejoin="round"
            viewBox="0 0 16 16"
            width={size}
            style={{ color: "currentcolor" }}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 1L16 15H0L8 1Z"
                fill="currentColor"
            ></path>
        </svg>
    );
};

const SIDEBAR_WIDTH = 256; // 64 * 4 = 256px

const HomeContent = () => {
    const [query] = useQueryState('query', parseAsString.withDefault(''))
    const [q] = useQueryState('q', parseAsString.withDefault(''))

    // Conversation spaces context
    const { currentSpace, currentSpaceId, switchSpace, addMessage } = useSpaces();
    // Study mode context
    const { getStudyModeForSpace, setStudyMode } = useStudyMode();
    // Set Google Gemini 2.5 Flash as the default model
    const [selectedModel, setSelectedModel] = useLocalStorage('neuman-selected-model', 'neuman-google');

    const initialState = useMemo(() => ({
        query: query || q,
    }), [query, q]);

    const lastSubmittedQueryRef = useRef(initialState.query);
    const bottomRef = useRef<HTMLDivElement>(null);
    const [suggestedQuestions, setSuggestedQuestions] = useState<string[]>([]);
    const [isEditingMessage, setIsEditingMessage] = useState(false);
    const [editingMessageIndex, setEditingMessageIndex] = useState(-1);
    const [attachments, setAttachments] = useState<Attachment[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const initializedRef = useRef(false);
    const [selectedGroup, setSelectedGroup] = useState<SearchGroupId>('chat');
    const [hasSubmitted, setHasSubmitted] = React.useState(false);
    const [hasManuallyScrolled, setHasManuallyScrolled] = useState(false);
    const isAutoScrollingRef = useRef(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);

    // Get stored user ID
    const userId = useMemo(() => getUserId(), []);

    // Get current study mode for the active space
    const currentStudyMode = useMemo(() => {
        return currentSpaceId ? getStudyModeForSpace(currentSpaceId) : null;
    }, [currentSpaceId, getStudyModeForSpace]);

    // Handle framework selection
    const handleFrameworkSelect = useCallback((frameworkString: string) => {
        if (!currentSpaceId) return;
        
        const framework = frameworkString as StudyFramework;
        setStudyMode(framework, currentSpaceId);
        
        // Dispatch space change event for StudyModeContext
        window.dispatchEvent(new CustomEvent('spaceChanged', { 
            detail: { spaceId: currentSpaceId } 
        }));
    }, [currentSpaceId, setStudyMode]);

    // Handle study mode badge click (to change or disable mode)
    const handleStudyModeBadgeClick = useCallback(() => {
        if (!currentSpaceId) return;
        
        // For now, just clear the study mode. Later we can show a selector.
        setStudyMode(null, currentSpaceId);
        toast.info('Study mode disabled');
    }, [currentSpaceId, setStudyMode]);

    const chatOptions: UseChatOptions = useMemo(() => {
        // Determine API endpoint based on study mode
        const apiEndpoint = currentStudyMode?.framework 
            ? `/api/study/${currentStudyMode.framework}`
            : '/api/search';

        return {
            api: apiEndpoint,
            experimental_throttle: 500,
            maxSteps: 5,
            body: {
                model: selectedModel,
                group: selectedGroup,
                user_id: userId,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            },
        onFinish: async (message: any, { finishReason }: { finishReason: string }) => {
            if (message.content && (finishReason === 'stop' || finishReason === 'length')) {
                // Persist assistant message to current space
                addMessage({ role: 'assistant', content: message.content });
                const newHistory = [
                    { role: 'user', content: lastSubmittedQueryRef.current },
                    { role: 'assistant', content: message.content },
                ];
                const { questions } = await suggestQuestions(newHistory);
                setSuggestedQuestions(questions);
            }
        },
            onError: (error) => {
                console.error("Chat error:", error.cause, error.message);
                toast.error("An error occurred.", {
                    description: `Oops! An error occurred while processing your request. ${error.message}`,
                });
            },
        };
    }, [selectedModel, selectedGroup, userId, addMessage, currentStudyMode]);

    const {
        input,
        messages,
        setInput,
        append,
        handleSubmit,
        setMessages,
        reload,
        stop,
        status,
        error,
    } = useChat(chatOptions);

    // Wrap append to persist user messages to current space
    const appendWithPersist = useCallback(async (message: any, options: any = {}): Promise<any> => {
        // Persist user messages to the current space BEFORE sending to AI
        // This ensures the user message timestamp is earlier than the AI response timestamp.
        if (message.role === 'user') {
            addMessage({ role: message.role, content: message.content });
        }
        // Then append to internal chat state and send to AI service
        const result = await append(message, options);
        return result;
    }, [append, addMessage]);

    // Sync chat internal messages when switching spaces (only on space change, not on every message addition)
    useEffect(() => {
        if (currentSpace?.messages) {
            // Sort messages by timestamp to ensure correct order on refresh
            const sortedMessages = [...currentSpace.messages].sort((a, b) => a.timestamp - b.timestamp);
            setMessages(sortedMessages);
        }
        // Reset initialization flag when switching spaces to allow new queries
        initializedRef.current = false;
        // Only run this effect when the space ID changes
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSpaceId]);

    useEffect(() => {
        if (!initializedRef.current && initialState.query) {
            // Check if this query is already the last message in the space
            const lastMessage = messages[messages.length - 1];
            const isQueryAlreadyProcessed = lastMessage && 
                lastMessage.role === 'user' && 
                lastMessage.content === initialState.query;
            
            if (!isQueryAlreadyProcessed) {
                initializedRef.current = true;
                console.log("[initial query]:", initialState.query);
                setHasSubmitted(true);
                appendWithPersist({
                    content: initialState.query,
                    role: 'user'
                });
            }
        }
    }, [initialState.query, appendWithPersist, setInput, messages]);

    // Wrap setMessages to satisfy MessagesProps (only array setter)
    const updateMessages = useCallback((msgs: any[]) => {
        setMessages(msgs);
    }, [setMessages]);

    const ThemeToggle: React.FC = () => {
        const { resolvedTheme, setTheme } = useTheme();

        return (
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        );
    };

    const lastUserMessageIndex = useMemo(() => {
        for (let i = messages.length - 1; i >= 0; i--) {
            if (messages[i].role === 'user') {
                return i;
            }
        }
        return -1;
    }, [messages]);

    useEffect(() => {
        // Reset manual scroll when streaming starts
        if (status === 'streaming') {
            setHasManuallyScrolled(false);
            // Initial scroll to bottom when streaming starts
            if (bottomRef.current) {
                isAutoScrollingRef.current = true;
                bottomRef.current.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [status]);

    useEffect(() => {
        let scrollTimeout: NodeJS.Timeout;

        const handleScroll = () => {
            // Clear any pending timeout
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }

            // If we're not auto-scrolling and we're streaming, it must be a user scroll
            if (!isAutoScrollingRef.current && status === 'streaming') {
                const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
                if (!isAtBottom) {
                    setHasManuallyScrolled(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Auto-scroll on new content if we haven't manually scrolled
        if (status === 'streaming' && !hasManuallyScrolled && bottomRef.current) {
            scrollTimeout = setTimeout(() => {
                isAutoScrollingRef.current = true;
                bottomRef.current?.scrollIntoView({ behavior: "smooth" });
                // Reset auto-scroll flag after animation
                setTimeout(() => {
                    isAutoScrollingRef.current = false;
                }, 100);
            }, 100);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
        };
    }, [messages, suggestedQuestions, status, hasManuallyScrolled]);


    const AboutButton = () => {
        return (
            <Link href="https://x.com/GoOpenBook">
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full w-8 h-8 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
                >
                    <Info className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                </Button>
            </Link>
        );
    };

    interface NavbarProps { }

    const Navbar: React.FC<NavbarProps> = () => {
        return (
            <div className={cn(
                "fixed top-0 left-0 right-0 z-60 flex justify-between items-center p-4",
                // No background, no shadow
                "bg-transparent"
            )}>
                <div className="flex items-center gap-4">
                    <Link href="/new">
                        {/* <Button
                            type="button"
                            variant={'secondary'}
                            className="rounded-full bg-accent hover:bg-accent/80 backdrop-blur-xs group transition-all hover:scale-105 pointer-events-auto"
                        >
                            <Plus size={18} className="group-hover:rotate-90 transition-all" />
                            <span className="text-sm ml-2 group-hover:block hidden animate-in fade-in duration-300">
                                New
                            </span>
                        </Button> */}
                    </Link>
                </div>
                <div className='flex items-center space-x-4'>
                    {currentStudyMode?.framework && (
                        <StudyModeBadge 
                            framework={currentStudyMode.framework as StudyFramework}
                            onClick={handleStudyModeBadgeClick}
                        />
                    )}
                    <ThemeToggle />
                </div>
            </div>
        );
    };

    // Define the model change handler
    const handleModelChange = useCallback((model: string) => {
        setSelectedModel(model);
    }, [setSelectedModel]);

    const resetSuggestedQuestions = useCallback(() => {
        setSuggestedQuestions([]);
    }, []);

    // Helper function to determine if content is being processed/loaded
    const isProcessing = useMemo(() => {
        return status !== 'ready';
    }, [status]);


    const WidgetSection = memo(() => {
        const [currentTime, setCurrentTime] = useState(new Date());
        const timerRef = useRef<NodeJS.Timeout>();

        useEffect(() => {
            // Sync with the nearest second
            const now = new Date();
            const delay = 1000 - now.getMilliseconds();

            // Initial sync
            const timeout = setTimeout(() => {
                setCurrentTime(new Date());

                // Then start the interval
                timerRef.current = setInterval(() => {
                    setCurrentTime(new Date());
                }, 1000);
            }, delay);

            return () => {
                clearTimeout(timeout);
                if (timerRef.current) {
                    clearInterval(timerRef.current);
                }
            };
        }, []);

        // Get user's timezone
        const timezone = new Intl.DateTimeFormat().resolvedOptions().timeZone;

        // Format date and time with timezone
        const dateFormatter = new Intl.DateTimeFormat('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            timeZone: timezone
        });

        const timeFormatter = new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            timeZone: timezone
        });

        const formattedDate = dateFormatter.format(currentTime);
        const formattedTime = timeFormatter.format(currentTime);

        const handleDateTimeClick = useCallback(() => {
            if (status !== 'ready') return;

            appendWithPersist({
                content: `What's the current date and time?`,
                role: 'user'
            });

            lastSubmittedQueryRef.current = `What's the current date and time?`;
            setHasSubmitted(true);
        }, []);

        return (
            <div className="mt-8 w-full">
                <div className="flex flex-wrap gap-3 justify-center">
                    {/* Time Widget */}
                    <Button
                        variant="outline"
                        className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:shadow-xs transition-all h-auto"
                        onClick={handleDateTimeClick}
                    >
                        <PhosphorClock weight="duotone" className="h-5 w-5 text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                        <span className="text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                            {formattedTime}
                        </span>
                    </Button>

                    {/* Date Widget */}
                    <Button
                        variant="outline"
                        className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:shadow-xs transition-all h-auto"
                        onClick={handleDateTimeClick}
                    >
                        <CalendarBlank weight="duotone" className="h-5 w-5 text-emerald-500 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
                        <span className="text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                            {formattedDate}
                        </span>
                    </Button>
                </div>
            </div>
        );
    });

    WidgetSection.displayName = 'WidgetSection';

    return (
        <div className="flex font-sans! min-h-screen bg-background text-foreground transition-all duration-500">
            <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
            <div
                className={"flex-1 min-h-screen transition-all duration-300 flex flex-col items-center"}
                style={{ marginLeft: sidebarOpen ? SIDEBAR_WIDTH : 0 }}
            >
                <Navbar />
                <div className={`flex flex-col items-center w-full p-2 sm:p-4 transition-all duration-300 ${status === 'ready' && messages.length === 0
                    ? 'min-h-screen! flex! flex-col! items-center! justify-center!' // Center everything when no messages
                    : ''}`}>
                    <div className={`w-full max-w-[26rem] sm:max-w-2xl space-y-6 p-0 mx-auto transition-all duration-300`}>
                        {status === 'ready' && messages.length === 0 && (
                            <div className="text-center">
                                <h1 className="text-2xl sm:text-4xl mb-4 sm:mb-6 text-neutral-800 dark:text-neutral-100 font-syne!">
                                    {currentSpace?.name && currentSpace.name !== 'General' 
                                        ? `Continue your conversation in ${currentSpace.name}`
                                        : 'What do you want to learn about?'
                                    }
                                </h1>
                                {currentSpace?.name && currentSpace.name !== 'General' && (
                                    <div>
                                        {currentSpace.name.includes('Journal Discussion') && isProcessing ? (
                                            <div className="flex items-center gap-2 mb-4">
                                                <div className="animate-spin h-4 w-4 border-2 border-green-500 rounded-full border-t-transparent"></div>
                                                <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                                                    Analyzing your journal content...
                                                </p>
                                            </div>
                                        ) : (
                                            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                                                {currentSpace.name.includes('Journal Discussion') 
                                                    ? "Your journal content has been analyzed. Feel free to ask follow-up questions." 
                                                    : "This is your dedicated space for focused discussions"}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                        <AnimatePresence>
                            {messages.length === 0 && !hasSubmitted && (
                                <motion.div
                                    initial={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5 }}
                                    className={cn('mt-4! bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm rounded-md p-1')}
                                >
                                    <TerminalInput
                                        value={input}
                                        onChange={setInput}
                                        onSubmit={() => {
                                            lastSubmittedQueryRef.current = input;
                                            handleSubmit();
                                            setHasManuallyScrolled(false);
                                            bottomRef.current?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                        selectedModel={selectedModel}
                                        setSelectedModel={setSelectedModel}
                                        fileInputRef={fileInputRef}
                                        attachments={attachments}
                                        setAttachments={setAttachments}
                                        onStop={stop}
                                        status={status}
                                        onFrameworkSelect={handleFrameworkSelect}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Add the widget section below form when no messages */}
                        {messages.length === 0 && (
                            <div>
                                <WidgetSection />
                            </div>
                        )}

                        {/* Use the Messages component */}
                        {messages.length > 0 && (
                            <Messages
                                messages={messages}
                                lastUserMessageIndex={lastUserMessageIndex}
                                isEditingMessage={isEditingMessage}
                                editingMessageIndex={editingMessageIndex}
                                input={input}
                                setInput={setInput}
                                setIsEditingMessage={setIsEditingMessage}
                                setEditingMessageIndex={setEditingMessageIndex}
                                setMessages={updateMessages}
                                append={appendWithPersist}
                                reload={reload}
                                suggestedQuestions={suggestedQuestions}
                                setSuggestedQuestions={setSuggestedQuestions}
                                status={status}
                                error={error}
                            />
                        )}
                        
                        <div ref={bottomRef} />
                    </div>

                    <AnimatePresence>
                        {(messages.length > 0 || hasSubmitted) && (
                            <div 
                                className="fixed bottom-0 left-0 right-0 pb-4 z-40 pointer-events-none"
                                style={{ 
                                    paddingLeft: sidebarOpen ? SIDEBAR_WIDTH : 0,
                                    transition: 'padding-left 0.3s ease'
                                }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5 }}
                                    className="max-w-[26rem] sm:max-w-2xl mx-auto px-4 pointer-events-auto"
                                >
                                    <div className="bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm rounded-md p-1">
                                        <TerminalInput
                                            value={input}
                                            onChange={setInput}
                                            onSubmit={() => {
                                                lastSubmittedQueryRef.current = input;
                                                handleSubmit();
                                            }}
                                            selectedModel={selectedModel}
                                            setSelectedModel={setSelectedModel}
                                            fileInputRef={fileInputRef}
                                            attachments={attachments}
                                            setAttachments={setAttachments}
                                            onStop={stop}
                                            status={status}
                                            onFrameworkSelect={handleFrameworkSelect}
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

const ChatClient = () => {
    return (
        <Suspense>
            <HomeContent />
            <InstallPrompt />
        </Suspense>
    );
};

export default ChatClient;