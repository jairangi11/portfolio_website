"use client";

import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  FiMail,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiCopy
} from "react-icons/fi";
import { SiLinkedin } from "react-icons/si";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [successMessage, setSuccessMessage] = useState("");

  const [emailCopied, setEmailCopied] = useState(false);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Optionally add focus to the first error field
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        const element = document.getElementById(firstErrorField);
        element?.focus();
      }
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle'); // Reset status on new submission
    
    try {
      // Replace the simulation with a fetch call to the API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if the request was successful
      if (response.ok) {
        // Success
        setSubmitStatus('success');
        setSuccessMessage("Message successfully sent!"); // Updated success message
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({}); // Clear errors on success
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
          setSuccessMessage("");
        }, 5000);
      } else {
        // Handle server errors (e.g., validation errors, Resend failure)
        const errorData = await response.json();
        console.error("Submission failed:", errorData);
        setSubmitStatus('error');
         // Optionally, display a more specific error message from errorData.error or errorData.details if available
      }
    } catch (error) {
      // Handle network errors or unexpected issues
      console.error("Submission failed:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to copy email to clipboard
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("jairangi11101995@gmail.com")
      .then(() => {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000); // Reset after 2 seconds
      })
      .catch(err => {
        console.error("Failed to copy email: ", err);
        // Optionally show an error message to the user
      });
  };

  const inputVariants = {
    rest: { scale: 1 },
    focus: { scale: 1.02, transition: { duration: 0.2 } },
  };

  const iconHoverAnim = {
    hover: { scale: 1.2, rotate: 5 },
    tap: { scale: 0.9 }
  };

  return (
    <Layout>
      <motion.div 
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div 
          className=""
        >
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a question or want to collaborate? Reach out below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-start">
            <div className="w-full md:col-span-3">
              <Card className={cn(
                "w-full border border-border/40 shadow-lg bg-card hover:bg-muted/50 rounded-lg transition-colors duration-200",
              )}>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-foreground">Send a Message</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Fill out the form and I&apos;ll get back to you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <AnimatePresence>
                    {submitStatus === 'success' && (
                      <motion.div 
                        className="mb-4 p-3 bg-green-500/10 border border-green-500/30 text-green-700 dark:text-green-400 rounded-md flex items-center gap-3 text-sm"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FiCheckCircle className="h-5 w-5 flex-shrink-0" />
                        <span>{successMessage}</span>
                      </motion.div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <motion.div 
                        className="mb-4 p-3 bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-400 rounded-md flex items-center gap-3 text-sm"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FiAlertCircle className="h-5 w-5 flex-shrink-0" />
                        <span>Something went wrong. Please try again later.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</Label>
                        <motion.div whileFocus="focus" initial="rest" variants={inputVariants}>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full ${errors.name ? 'border-red-500 focus-visible:ring-red-500/40' : 'border-border/30 focus-visible:ring-primary/40'} bg-background/80 focus-visible:ring-2 focus-visible:ring-offset-0 transition-colors duration-200`}
                            placeholder="Your Name"
                            disabled={isSubmitting}
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? "name-error" : undefined}
                          />
                        </motion.div>
                        {errors.name && (
                          <p id="name-error" className="text-xs text-red-500 pt-1">{errors.name}</p>
                        )}
                      </div>
                      
                      <div className="space-y-1.5">
                        <Label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</Label>
                         <motion.div whileFocus="focus" initial="rest" variants={inputVariants}>
                          <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                             className={`w-full ${errors.email ? 'border-red-500 focus-visible:ring-red-500/40' : 'border-border/30 focus-visible:ring-primary/40'} bg-background/80 focus-visible:ring-2 focus-visible:ring-offset-0 transition-colors duration-200`}
                            placeholder="your.email@example.com"
                            disabled={isSubmitting}
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "email-error" : undefined}
                          />
                        </motion.div>
                        {errors.email && (
                          <p id="email-error" className="text-xs text-red-500 pt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-1.5">
                      <Label htmlFor="subject" className="text-sm font-medium text-muted-foreground">Subject</Label>
                       <motion.div whileFocus="focus" initial="rest" variants={inputVariants}>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                           className={`w-full ${errors.subject ? 'border-red-500 focus-visible:ring-red-500/40' : 'border-border/30 focus-visible:ring-primary/40'} bg-background/80 focus-visible:ring-2 focus-visible:ring-offset-0 transition-colors duration-200`}
                          placeholder="Regarding..."
                          disabled={isSubmitting}
                           aria-invalid={!!errors.subject}
                           aria-describedby={errors.subject ? "subject-error" : undefined}
                        />
                      </motion.div>
                      {errors.subject && (
                        <p id="subject-error" className="text-xs text-red-500 pt-1">{errors.subject}</p>
                      )}
                    </div>
                    
                    <div className="space-y-1.5">
                      <Label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</Label>
                       <motion.div whileFocus="focus" initial="rest" variants={inputVariants}>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                           className={`w-full ${errors.message ? 'border-red-500 focus-visible:ring-red-500/40' : 'border-border/30 focus-visible:ring-primary/40'} bg-background/80 focus-visible:ring-2 focus-visible:ring-offset-0 transition-colors duration-200`}
                          placeholder="Your message..."
                          disabled={isSubmitting}
                          aria-invalid={!!errors.message}
                          aria-describedby={errors.message ? "message-error" : undefined}
                        />
                      </motion.div>
                      {errors.message && (
                        <p id="message-error" className="text-xs text-red-500 pt-1">{errors.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full group relative overflow-hidden flex items-center justify-center gap-2 transition-all duration-300 ease-in-out hover:shadow-lg active:scale-[0.98] bg-primary text-primary-foreground hover:bg-primary/90 rounded-md py-2.5 px-4 font-semibold"
                        aria-live="polite"
                      >
                         {isSubmitting ? (
                          <>
                            <motion.svg 
                              className="animate-spin h-5 w-5 text-current" 
                              xmlns="http://www.w3.org/2000/svg" 
                              fill="none" 
                              viewBox="0 0 24 24"
                              initial={{ rotate: 0 }}
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            >
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </motion.svg>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <FiSend className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="w-full md:col-span-2">
              <Card className={cn(
                "w-full border border-border/40 shadow-lg bg-card hover:bg-muted/50 rounded-lg p-6 transition-colors duration-200",
              )}>
                 <CardHeader className="p-0 mb-5">
                   <CardTitle className="text-2xl text-foreground">Contact Details</CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-5">
                  <motion.div 
                    className="flex items-center justify-between gap-3 group relative"
                    whileHover="hover"
                    initial="rest"
                  >
                    <div 
                      className="flex items-center gap-3 cursor-pointer" 
                      onClick={copyEmailToClipboard}
                      title="Copy email address"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') copyEmailToClipboard(); }}
                    >
                      <FiMail className="h-5 w-5 text-primary flex-shrink-0" />
                      <span
                        className="text-muted-foreground group-hover:text-primary transition-colors duration-200 text-sm sm:text-base break-all"
                      >
                        jairangi11101995@gmail.com
                      </span>
                    </div>
                    <motion.button 
                      onClick={(e) => { 
                        e.stopPropagation();
                        copyEmailToClipboard(); 
                      }}
                      variants={iconHoverAnim}
                      whileTap="tap"
                      className="p-1 text-muted-foreground hover:text-primary transition-colors absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 focus:opacity-100"
                      aria-label={emailCopied ? "Email copied" : "Copy email"}
                      title={emailCopied ? "Email copied" : "Copy email"}
                    >
                       <AnimatePresence mode="wait">
                         {emailCopied ? (
                           <motion.div
                             key="check"
                             initial={{ scale: 0.5, opacity: 0 }}
                             animate={{ scale: 1, opacity: 1 }}
                             exit={{ scale: 0.5, opacity: 0 }}
                             transition={{ duration: 0.2 }}
                           >
                             <FiCheckCircle className="h-4 w-4 text-green-500" />
                           </motion.div>
                         ) : (
                           <motion.div
                             key="copy"
                             initial={{ scale: 0.5, opacity: 0 }}
                             animate={{ scale: 1, opacity: 1 }}
                             exit={{ scale: 0.5, opacity: 0 }}
                             transition={{ duration: 0.2 }}
                           >
                             <FiCopy className="h-4 w-4" />
                           </motion.div>
                         )}
                       </AnimatePresence>
                    </motion.button>
                  </motion.div>

                  <motion.div 
                    className="flex items-center justify-between gap-3 group relative"
                    whileHover="hover"
                    initial="rest"
                  >
                     <div className="flex items-center gap-3">
                       <a
                         href="https://www.linkedin.com/in/jayrangi/"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors duration-200 text-sm sm:text-base"
                       >
                         <SiLinkedin className="h-5 w-5 text-primary flex-shrink-0" />
                         <span>LinkedIn Profile</span>
                       </a>
                     </div>
                  </motion.div>

                  <hr className="border-border/30 my-6"/>

                  <div className="text-sm text-muted-foreground">
                    <p>I typically respond within 24-48 hours.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
} 