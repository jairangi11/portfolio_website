"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type NavItem = {
  title: string;
  href: string;
};

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Resume", href: "/resume" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Jay Rangi
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href}
                className="relative group"
              >
                <span className="hover:text-accent transition-colors duration-300">
                  {item.title}
                </span>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-accent-main"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col space-y-1.5 p-2 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-background border-b"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-lg hover:text-accent-main transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </nav>
  );
} 