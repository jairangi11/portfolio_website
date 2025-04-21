"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypewriterEffectProps {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
  typingSpeed?: number; // Milliseconds per character
  deleteSpeed?: number; // Milliseconds per character
  delayBetweenWords?: number; // Milliseconds pause after typing a word
  startDelay?: number; // Milliseconds delay before starting
  isPaused?: boolean; // Prop to pause the animation externally
}

export function TypewriterEffect({
  words,
  className,
  cursorClassName,
  typingSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 1500,
  startDelay = 500,
  isPaused = false,
}: TypewriterEffectProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(true); // Start in waiting state
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const clearCurrentTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    const handleTyping = () => {
      clearCurrentTimeout(); // Ensure only one timer runs at a time

      const currentWord = words[wordIndex].text;
      const currentWordLength = currentWord.length;
      const currentTextLength = text.length;

      if (isPaused) {
        // If paused, clear any pending timeout and do nothing
        return; // Timeout already cleared at the start
      }

      if (isWaiting) {
        // Handle initial delay or delay between words
        const delay = (text.length === 0 && wordIndex === 0) ? startDelay : delayBetweenWords;
        timeoutRef.current = setTimeout(() => {
          setIsWaiting(false); // End waiting state after delay
        }, delay);
        return; // Wait for the delay to finish
      }

      if (isDeleting) {
        // Deleting logic
        if (currentTextLength > 0) {
          // Schedule next deletion step
          timeoutRef.current = setTimeout(() => {
            setText((prev) => prev.substring(0, prev.length - 1)); // Update text, triggering useEffect
          }, deleteSpeed);
        } else {
          // Finished deleting, move to the next word and start waiting
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setIsWaiting(true); // Trigger useEffect to handle the wait state
          // No timeout needed here, the state change handles it
        }
      } else {
        // Typing logic
        if (currentTextLength < currentWordLength) {
          // Schedule next typing step
          timeoutRef.current = setTimeout(() => {
            setText((prev) => currentWord.substring(0, prev.length + 1)); // Update text, triggering useEffect
          }, typingSpeed);
        } else {
          // Finished typing, pause then start deleting
          // Schedule state change to deleting after a pause
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true); // Trigger useEffect to handle deleting state after pause
          }, delayBetweenWords);
        }
      }
    };

    // Start the effect
    handleTyping();

    // Cleanup function
    return () => {
      clearCurrentTimeout();
    };
  }, [
    // Rerun useEffect whenever relevant state changes
    text,
    isDeleting,
    isWaiting,
    wordIndex,
    words,
    typingSpeed,
    deleteSpeed,
    delayBetweenWords,
    startDelay,
    isPaused
  ]);

  // Reset if words array changes
  useEffect(() => {
    setText("");
    setWordIndex(0);
    setIsDeleting(false);
    setIsWaiting(true);
  }, [words]);

  return (
    <div className={cn("inline-block", className)}>
      <span className={cn(words[wordIndex]?.className)}>
        {text}
      </span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-[1.2em] translate-y-1 ml-1 bg-foreground",
          cursorClassName,
          // Hide cursor when paused and not waiting (i.e., mid-animation)
          isPaused && !isWaiting ? "opacity-0" : "" 
        )}
      />
    </div>
  );
} 