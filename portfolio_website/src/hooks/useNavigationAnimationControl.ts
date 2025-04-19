"use client";

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Custom hook to detect client-side navigation starts and provide a boolean flag.
 * Resets the flag when the pathname changes (indicating navigation completed).
 * 
 * @returns {boolean} isNavigating - True if navigation is likely in progress, false otherwise.
 */
export function useNavigationAnimationControl(): boolean {
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();

  // Effect to reset the flag when the route actually changes
  useEffect(() => {
    setIsNavigating(false);
  }, [pathname]);

  // Effect to detect navigation *start*
  useEffect(() => {
    // Handler to set the flag when a potential navigation click occurs
    const handleNavigationStart = (event: Event) => {
      // Check if the clicked element is an anchor opening in a new tab
      const targetElement = event.target as HTMLElement;
      const anchorElement = targetElement.closest('a');
      if (anchorElement && anchorElement.target === '_blank') {
        // Don't set navigating flag if opening in a new tab
        return;
      }
      // Check if it's a link to the same page (e.g., hash link)
      if (anchorElement && anchorElement.pathname === window.location.pathname && anchorElement.hash) {
        // Don't set flag for same-page hash links
        return;
      }
       // Check for modifier keys (Ctrl/Cmd/Shift for new tab/window)
       if (event instanceof MouseEvent && (event.ctrlKey || event.metaKey || event.shiftKey)) {
        return;
      }
      
      // Otherwise, assume same-tab navigation might start and set the flag
      // The flag will be reset by the pathname change effect if navigation succeeds
      setIsNavigating(true);
    };

    // Function to add listeners to relevant elements
    const addNavigationListeners = () => {
      // Query for standard links and elements likely triggering navigation
      // Note: This might need adjustment based on specific component libraries or routing methods
      document.querySelectorAll('a[href]').forEach(element => {
        // Avoid adding multiple listeners
        if (!(element as any).__hasNavigationListener) {
          element.addEventListener('click', handleNavigationStart);
          (element as any).__hasNavigationListener = true;
        }
      });
    };

    // Use a MutationObserver to detect dynamically added elements (like in SPAs)
    const observer = new MutationObserver((mutationsList) => {
        for(const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                // Check added nodes for relevant elements
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                       const element = node as Element;
                       if (element.matches('a[href]')) {
                           if (!(element as any).__hasNavigationListener) {
                                element.addEventListener('click', handleNavigationStart);
                                (element as any).__hasNavigationListener = true;
                            }
                       }
                       element.querySelectorAll('a[href]').forEach(link => {
                           if (!(link as any).__hasNavigationListener) {
                                link.addEventListener('click', handleNavigationStart);
                                (link as any).__hasNavigationListener = true;
                            }
                       });
                    }
                });
            }
        }
    });

    // Initial addition of listeners
    addNavigationListeners();

    // Observe the body for added nodes
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });

    // Cleanup function
    return () => {
      observer.disconnect();
      // Clean up listeners added by this effect
      document.querySelectorAll('a[href]').forEach(element => {
        if ((element as any).__hasNavigationListener) {
          element.removeEventListener('click', handleNavigationStart);
          delete (element as any).__hasNavigationListener;
        }
      });
    };
  }, []); // Empty dependency array: setup listeners once on mount

  return isNavigating;
} 