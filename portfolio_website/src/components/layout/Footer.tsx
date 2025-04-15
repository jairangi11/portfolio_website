import Link from "next/link";
import Image from "next/image";
import { FiLinkedin, FiGithub, FiMail, FiArrowRight } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-background/95 border-t border-border/20 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Brand column */}
          <div className="md:col-span-5">
            <div className="mb-6 ml-[-4px]">
              <div className="relative w-24 h-10">
                <Image 
                  src="/images/jay_rangi_logo.png" 
                  alt="Jay Rangi" 
                  width={96} 
                  height={40} 
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-muted-foreground max-w-xs">
              Product Manager specializing in AI-powered solutions, Machine Learning, SaaS, and B2B PropTech.
            </p>
          </div>
          
          {/* Quick links column */}
          <div className="md:col-span-3">
            <h3 className="text-base font-medium mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors flex items-center group">
                  <FiArrowRight className="mr-2 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-muted-foreground hover:text-primary transition-colors flex items-center group">
                  <FiArrowRight className="mr-2 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-muted-foreground hover:text-primary transition-colors flex items-center group">
                  <FiArrowRight className="mr-2 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors flex items-center group">
                  <FiArrowRight className="mr-2 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors flex items-center group">
                  <FiArrowRight className="mr-2 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact column */}
          <div className="md:col-span-4">
            <h3 className="text-base font-medium mb-4 text-foreground">Contact</h3>
            <div className="space-y-3">
              <a 
                href="https://www.linkedin.com/in/jayrangi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center"
              >
                <FiLinkedin className="mr-2 h-4 w-4 text-primary" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/jayrangi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center"
              >
                <FiGithub className="mr-2 h-4 w-4 text-primary" />
                <span>GitHub</span>
              </a>
              <a 
                href="mailto:jairangi11101995@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center"
              >
                <FiMail className="mr-2 h-4 w-4 text-primary" />
                <span>jairangi11101995@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} Jay Rangi. All rights reserved.</p>
          <p className="flex items-center mt-4 md:mt-0 text-sm">
            Made with <FaHeart className="mx-1.5 text-red-500" /> using Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
} 