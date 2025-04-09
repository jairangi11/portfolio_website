import Link from "next/link";
import Image from "next/image";
import { FiLinkedin, FiGithub, FiMail, FiMapPin, FiArrowRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-background/95 border-t border-border/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center mb-4">
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
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/jayrangi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/jayrangi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="h-5 w-5" />
              </a>
              <a 
                href="mailto:jairangi11101995@gmail.com" 
                className="w-9 h-9 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label="Email"
              >
                <FiMail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick links column */}
          <div className="md:col-span-2">
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
          <div className="md:col-span-3">
            <h3 className="text-base font-medium mb-4 text-foreground">Contact</h3>
            <div className="space-y-3">
              <a 
                href="mailto:jairangi11101995@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center"
              >
                <FiMail className="mr-2 h-4 w-4 text-primary" />
                <span>jairangi11101995@gmail.com</span>
              </a>
              <div className="flex items-center text-muted-foreground">
                <FiMapPin className="mr-2 h-4 w-4 text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          {/* Newsletter column */}
          <div className="md:col-span-3">
            <h3 className="text-base font-medium mb-4 text-foreground">Get Updates</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Subscribe to receive updates on my latest projects and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button asChild variant="default">
                <Link href="/contact" className="flex items-center">
                  Contact Me
                  <FiArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} Jay Rangi. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 