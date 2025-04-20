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
import { FiMail, FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { Label } from "@/components/ui/label";

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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success
      setSubmitStatus('success');
      setSuccessMessage("Message successfully delivered. I'll be in touch!");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({}); // Clear errors on success
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setSuccessMessage("");
      }, 5000);
    } catch (error) {
      console.error("Submission failed:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    rest: { scale: 1 },
    focus: { scale: 1.02, transition: { duration: 0.2 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24 min-h-[calc(100vh-var(--header-height))] flex items-center justify-center">
        <motion.div 
          className="max-w-4xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a question or want to collaborate? Reach out below.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <motion.div variants={itemVariants} className="w-full">
              <Card className="w-full border border-border/40 shadow-lg bg-card/60 backdrop-blur-lg rounded-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-foreground">Send a Message</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Fill out the form and I'll get back to you.
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
                      <motion.div variants={itemVariants} className="space-y-1.5">
                        <Label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</Label>
                        <motion.div whileFocus="focus" initial="rest" variants={inputVariants}>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full ${errors.name ? 'border-red-500 focus-visible:ring-red-500/40' : 'border-border/30 focus-visible:ring-primary/40'} bg-background/80 focus-visible:ring-2 focus-visible:ring-offset-0`}
                            placeholder="Your Name"
                            disabled={isSubmitting}
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? "name-error" : undefined}
                          />
                        </motion.div>
                        {errors.name && (
                          <p id="name-error" className="text-xs text-red-500 pt-1">{errors.name}</p>
                        )}
                      </motion.div>
                      
                      <motion.div variants={itemVariants} className="space-y-1.5">
                        <Label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</Label>
                         <motion.div whileFocus="focus" initial="rest" variants={inputVariants}>
                          <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                             className={`w-full ${errors.email ? 'border-red-500 focus-visible:ring-red-500/40' : 'border-border/30 focus-visible:ring-primary/40'} bg-background/80 focus-visible:ring-2 focus-visible:ring-offset-0`}
                            placeholder="your.email@example.com"
                            disabled={isSubmitting}
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "email-error" : undefined}
                          />
                        </motion.div>
                        {errors.email && (
                          <p id="email-error" className="text-xs text-red-500 pt-1">{errors.email}</p>
                        )}
                      </motion.div>
                    </div>
                    
                    <motion.div variants={itemVariants} className="space-y-1.5">
                      <Label htmlFor="subject" className="text-sm font-medium text-muted-foreground">Subject</Label>
                       <motion.div whileFocus="focus" initial="rest" variants={inputVariants}>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                           className={`w-full ${errors.subject ? 'border-red-500 focus-visible:ring-red-500/40' : 'border-border/30 focus-visible:ring-primary/40'} bg-background/80 focus-visible:ring-2 focus-visible:ring-offset-0`}
                          placeholder="Regarding..."
                          disabled={isSubmitting}
                           aria-invalid={!!errors.subject}
                           aria-describedby={errors.subject ? "subject-error" : undefined}
                        />
                      </motion.div>
                      {errors.subject && (
                        <p id="subject-error" className="text-xs text-red-500 pt-1">{errors.subject}</p>
                      )}
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className="space-y-1.5">
                      <Label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</Label>
                       <motion.div whileFocus="focus" initial="rest" variants={inputVariants}>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                           className={`w-full ${errors.message ? 'border-red-500 focus-visible:ring-red-500/40' : 'border-border/30 focus-visible:ring-primary/40'} bg-background/80 focus-visible:ring-2 focus-visible:ring-offset-0`}
                          placeholder="Your message..."
                          disabled={isSubmitting}
                          aria-invalid={!!errors.message}
                          aria-describedby={errors.message ? "message-error" : undefined}
                        />
                      </motion.div>
                      {errors.message && (
                        <p id="message-error" className="text-xs text-red-500 pt-1">{errors.message}</p>
                      )}
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full group flex items-center justify-center gap-2 transition-all duration-300 ease-in-out hover:shadow-md active:scale-[0.98] bg-primary text-primary-foreground hover:bg-primary/90"
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
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants} className="w-full space-y-6 md:pt-10">
              <div className="space-y-5">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Contact Details</h3>
                <motion.div 
                  className="flex items-center gap-3 group"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <FiMail className="h-5 w-5 text-primary flex-shrink-0" />
                  <a 
                    href="mailto:jairangi11101995@gmail.com" 
                    className="text-muted-foreground group-hover:text-primary transition-colors duration-200 text-sm sm:text-base break-all"
                  >
                    jairangi11101995@gmail.com
                  </a>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 group"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <FiLinkedin className="h-5 w-5 text-primary flex-shrink-0" />
                  <a 
                    href="https://www.linkedin.com/in/jayrangi/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground group-hover:text-primary transition-colors duration-200 text-sm sm:text-base"
                  >
                    LinkedIn Profile
                  </a>
                </motion.div>
              </div>

              <hr className="border-border/30 my-6"/>

              <div className="text-sm text-muted-foreground">
                <p>I typically respond within 24-48 hours.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
} 