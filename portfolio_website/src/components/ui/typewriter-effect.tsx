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
      const currentWord = words[wordIndex].text;
      const currentWordLength = currentWord.length;
      const currentTextLength = text.length;

      if (isPaused) {
        // If paused, clear any pending timeout and do nothing
        clearCurrentTimeout();
        return;
      }

      if (isWaiting) {
        // Handle initial delay or delay between words
        const delay = text.length === 0 && wordIndex === 0 ? startDelay : delayBetweenWords;
        timeoutRef.current = setTimeout(() => {
          setIsWaiting(false);
        }, delay);
        return; // Wait for the delay to finish
      }

      if (isDeleting) {
        // Deleting logic
        if (currentTextLength > 0) {
          setText((prev) => prev.substring(0, prev.length - 1));
          timeoutRef.current = setTimeout(handleTyping, deleteSpeed);
        } else {
          // Finished deleting, move to the next word
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setIsWaiting(true); // Wait before typing the next word
          timeoutRef.current = setTimeout(handleTyping, 50); // Small delay before starting wait timer
        }
      } else {
        // Typing logic
        if (currentTextLength < currentWordLength) {
          setText((prev) => currentWord.substring(0, prev.length + 1));
          timeoutRef.current = setTimeout(handleTyping, typingSpeed);
        } else {
          // Finished typing, pause then start deleting
          setIsDeleting(true);
          setIsWaiting(true); // Use waiting state for pause after typing
          timeoutRef.current = setTimeout(handleTyping, delayBetweenWords);
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
    text,
    isDeleting,
    isWaiting,
    wordIndex,
    words,
    typingSpeed,
    deleteSpeed,
    delayBetweenWords,
    startDelay,
    isPaused // Re-run effect if pause state changes
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