"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FiMenu, FiX, FiExternalLink, FiArrowRight } from "react-icons/fi";

type NavItem = {
  title: string;
  href: string;
  isExternal?: boolean;
};

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Resume", href: "/resume" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    // Close mobile menu when window is resized to desktop size
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/75 backdrop-blur-md border-b border-border/20 py-3 shadow-sm" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50 relative">
            <div className="relative w-24 h-10 -mt-12">
              <Image 
                src="/images/jay_rangi_logo.png" 
                alt="Jay Rangi" 
                width={96}
                height={40}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href} className="relative">
                  <Link href={item.href} target={item.isExternal ? "_blank" : undefined}>
                    <Button
                      variant="ghost"
                      className="px-4 py-2 relative hover:bg-primary/5 group"
                    >
                      <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                        {item.isExternal && <FiExternalLink className="ml-1 h-3 w-3 inline-block" />}
                      </span>
                      <span className="absolute bottom-1.5 left-1/2 w-0 h-0.5 bg-primary transform -translate-x-1/2 transition-all duration-300 group-hover:w-4/5 opacity-0 group-hover:opacity-100" />
                      <motion.div 
                        className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        style={{
                          background: 'radial-gradient(circle at center, rgba(var(--primary-rgb), 0.08) 0%, rgba(var(--primary-rgb), 0) 70%)',
                        }}
                      />
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            <Button
              asChild
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 group"
            >
              <Link href="/contact" className="flex items-center">
                Get in Touch
                <FiArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 backdrop-blur-sm">
              {isOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </div>
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 bg-background/95 backdrop-blur-lg md:hidden z-40 flex flex-col"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex-1 flex flex-col items-center justify-center px-4">
                  <nav className="w-full max-w-sm mx-auto">
                    <ul className="space-y-6 text-center">
                      {navItems.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="text-2xl font-medium text-foreground hover:text-primary transition-colors duration-300 block"
                            onClick={() => setIsOpen(false)}
                            target={item.isExternal ? "_blank" : undefined}
                          >
                            {item.title}
                            {item.isExternal && <FiExternalLink className="ml-1 h-4 w-4 inline-block" />}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
                <div className="p-6 w-full border-t border-border/10">
                  <Button
                    asChild
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group"
                  >
                    <Link href="/contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center">
                      Get in Touch
                      <FiArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
} 