"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface MessageLoadingProps {
  showThinking?: boolean;
  loadingText?: string;
}

export const MessageLoading: React.FC<MessageLoadingProps> = ({
  showThinking = false,
  loadingText = "Thinking...",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-5 mb-4 px-0 max-w-full"
    >
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
      
      <div className="mt-2 text-neutral-800 dark:text-neutral-200">
        {showThinking ? (
          <div className="flex items-center py-2">
            <span className="text-neutral-600 dark:text-neutral-400 mr-2 font-medium">{loadingText}</span>
            <div className="flex space-x-1">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0,
                }}
                className="h-2 w-2 rounded-full bg-neutral-400 dark:bg-neutral-500"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                className="h-2 w-2 rounded-full bg-neutral-400 dark:bg-neutral-500"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
                className="h-2 w-2 rounded-full bg-neutral-400 dark:bg-neutral-500"
              />
            </div>
          </div>
        ) : (
          <div className="space-y-3 max-w-full">
            {/* First paragraph - shorter */}
            <div className="space-y-2">
              <motion.div
                animate={{
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-[60%]"
              />
              <motion.div
                animate={{
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.1,
                }}
                className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-[85%]"
              />
              <motion.div
                animate={{
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-[70%]"
              />
            </div>
            
            {/* Second paragraph - longer */}
            <div className="pt-1 space-y-2">
              <motion.div
                animate={{
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-[90%]"
              />
              <motion.div
                animate={{
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
                className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-[95%]"
              />
              <motion.div
                animate={{
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-[40%]"
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

// A variation that shows a typing effect
export const TypingIndicator: React.FC<{ text?: string }> = ({ 
  text = "Neuman is typing" 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-neutral-800 shadow-md rounded-full border border-neutral-200 dark:border-neutral-700"
    >
      <div className="flex space-x-1 items-center">
        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0,
          }}
          className="h-2 w-2 rounded-full bg-primary"
        />
        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
          className="h-2 w-2 rounded-full bg-primary"
        />
        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
          className="h-2 w-2 rounded-full bg-primary"
        />
      </div>
      <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">{text}</span>
    </motion.div>
  );
};

// A component that shows progress for a streaming message
export const StreamingProgress: React.FC<{ progress?: number }> = ({ 
  progress = 0 
}) => {
  return (
    <div className="w-full max-w-md mx-auto mt-2">
      <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}; 