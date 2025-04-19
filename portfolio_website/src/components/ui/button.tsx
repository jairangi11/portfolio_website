import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"
  
  // Use a ref to access the wrapper div
  const buttonWrapperRef = React.useRef<HTMLDivElement>(null);
  
  // Add mouseenter and mouseleave event handlers
  React.useEffect(() => {
    const wrapper = buttonWrapperRef.current;
    if (!wrapper) return;
    
    const shineElement = wrapper.querySelector('.shine-effect') as HTMLElement;
    if (!shineElement) return;
    
    // Flag to track if animation is in progress
    let isAnimating = false;
    
    const handleMouseEnter = () => {
      // If already animating, return
      if (isAnimating) return;
      
      // Reset position before starting new animation
      shineElement.style.transition = 'none';
      shineElement.style.transform = 'translateX(-100%) skewX(-12deg)';
      shineElement.style.opacity = '1';
      
      // Force reflow to ensure the reset takes effect immediately
      void shineElement.offsetWidth;
      
      // Start animation
      isAnimating = true;
      shineElement.style.transition = 'transform 0.8s ease, opacity 0.1s ease 0.7s';
      shineElement.style.transform = 'translateX(250%) skewX(-12deg)';
      shineElement.style.opacity = '0';
      
      // Reset animation flag and position after animation completes
      setTimeout(() => {
        isAnimating = false;
        // Ensure the element is completely hidden
        shineElement.style.transition = 'none';
        shineElement.style.transform = 'translateX(-100%) skewX(-12deg)';
      }, 800);
    };
        
    wrapper.addEventListener('mouseenter', handleMouseEnter);
    // No need to add handleMouseLeave as it's empty
    
    return () => {
      wrapper.removeEventListener('mouseenter', handleMouseEnter);
      // No need to remove handleMouseLeave as it wasn't added
    };
  }, []);

  return (
    <div className="relative inline-block" ref={buttonWrapperRef}>
      <Comp
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {props.children}
      </Comp>
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-md">
        <div 
          className="shine-effect absolute top-0 h-full w-[60%] bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%]"
          style={{ opacity: 0 }}
        ></div>
      </div>
    </div>
  )
}

export { Button, buttonVariants }
