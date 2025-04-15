"use client";

import { useScroll, motion, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-1 bg-primary/30 z-[9999]"
      style={{ scaleX, transformOrigin: "0%" }}
    />
  );
} 