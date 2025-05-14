"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MarkdownRenderer, preprocessLaTeX } from '@/components/markdown';
import Image from 'next/image';

interface TypewriterProps {
  content: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

export const TypewriterEffect: React.FC<TypewriterProps> = ({
  content,
  speed = 10, // Characters per frame, adjusted for rendering speed
  delay = 0,
  onComplete
}) => {
  const [displayedContent, setDisplayedContent] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    // Reset state when content changes
    setDisplayedContent('');
    setIsComplete(false);
    
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Initial delay before starting animation
    timeoutRef.current = setTimeout(() => {
      let currentPos = 0;
      
      const processNextChunk = () => {
        if (currentPos < content.length) {
          // Process next chunk of characters
          const chunkSize = Math.min(speed, content.length - currentPos);
          const nextChunk = content.substring(0, currentPos + chunkSize);
          setDisplayedContent(nextChunk);
          
          currentPos += chunkSize;
          timeoutRef.current = setTimeout(processNextChunk, 32); // ~30fps
        } else {
          // Animation complete
          setIsComplete(true);
          if (onComplete) onComplete();
        }
      };
      
      processNextChunk();
    }, delay);
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [content, speed, delay, onComplete]);
  
  return (
    <div className="transition-opacity duration-200">
      {displayedContent && (
        <MarkdownRenderer content={preprocessLaTeX(displayedContent)} />
      )}
      {!isComplete && (
        <motion.span
          className="inline-block w-2 h-4 ml-1 bg-primary rounded-sm align-middle"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}
    </div>
  );
};

// A component that renders an AI message with typing effect
export const TypingMessage: React.FC<{ 
  content: string;
  onComplete?: () => void;
  speed?: number;
}> = ({ content, onComplete, speed = 10 }) => {
  return (
    <div className="mt-5 mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Image 
            src="/openbook.png" 
            alt="Neuman" 
            className='size-6 invert dark:invert-0' 
            width={100} 
            height={100} 
            unoptimized 
            quality={100} 
          />
          <h2 className="text-lg font-semibold font-syne text-neutral-800 dark:text-neutral-200">
            Neuman
          </h2>
        </div>
      </div>
      
      <TypewriterEffect 
        content={content} 
        speed={speed}
        onComplete={onComplete}
      />
    </div>
  );
}; 