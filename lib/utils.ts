// lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Globe, Book, YoutubeIcon, TelescopeIcon } from 'lucide-react'
import { ChatsCircle, Code, Memory, XLogo } from '@phosphor-icons/react' // Error consistently points near here

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).substring(2, 15)}`;
}

export function getUserId(): string {
  if (typeof window === 'undefined') return ''; // Good guard for localStorage
  
  let userId = localStorage.getItem('mem0_user_id');
  if (!userId) {
    userId = generateId('user');
    localStorage.setItem('mem0_user_id', userId);
  }
  return userId;
}

export type SearchGroupId = 'chat' | 'extreme';

export const searchGroups = [
  {
    id: 'chat' as const,
    name: 'Chat',
    description: 'Talk to the model directly.',
    icon: ChatsCircle, // <--- Icon from @phosphor-icons/react used directly
    show: true,
  },
  {
    id: 'extreme' as const,
    name: 'Extreme',
    description: 'Deep research with multiple sources and analysis',
    icon: TelescopeIcon, // <--- Icon from lucide-react used directly
    show: false,
  },
] as const;

export type SearchGroup = typeof searchGroups[number];