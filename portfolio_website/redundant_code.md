# Redundant Code Analysis Report

This document outlines potential areas of code redundancy and opportunities for refactoring identified during the review of the codebase, primarily focusing on `src/app/page.tsx`.

## High Priority Refactoring Opportunities

### 1. Component Extraction (`src/app/page.tsx`)

The main landing page component (`src/app/page.tsx`) is very large (1100+ lines) and contains complex JSX structures repeated for multiple items. Extracting these into dedicated components is highly recommended for improved readability, maintainability, and reusability.

*   **`CompanyCard` Component:** - **Done**
    *   **Location:** Lines ~741-841 within the Company Logos carousel section.
    *   **Description:** The detailed card structure, styling (Tailwind), and hover/animation effects (Framer Motion) for displaying individual company logos, details, and links were repeated for each company.
    *   **Update:** Extracted to `src/components/landing/company-card.tsx`. `page.tsx` now imports and uses this component within the `displayedCompanies.map()` loop.

*   **`ExpertiseCard` Component:** - **Done**
    *   **Location:** Lines ~931-1000+ within the Expertise section grid.
    *   **Description:** Similar to the company card, the structure, styling, and complex hover/animation effects for displaying specialization areas (icon, title, description) were repeated.
    *   **Update:** Extracted to `src/components/landing/expertise-card.tsx`. `page.tsx` now imports and uses this component within the `expertiseItems.map()` loop. Unused `Card` and `CardContent` imports removed from `page.tsx`.

## Medium Priority Refactoring Opportunities

### 2. Hook Extraction (`src/app/page.tsx`)

Complex state management and animation logic specific to certain features could be extracted into custom hooks if the functionality is likely to be reused.

*   **Infinite Carousel Logic:** - **Done**
    *   **Location:** Spread across `useEffect`, `useAnimationFrame`, `useMotionValue`, state variables (`baseX`, `carouselWidth`, etc.), drag handlers, and hover handlers related to the company logo carousel in `page.tsx`.
    *   **Description:** The logic implementing the draggable, infinite scrolling effect was intricate and defined inline.
    *   **Update:** Extracted the logic and structure into a reusable `InfiniteCarousel` component (`src/components/ui/infinite-carousel.tsx`). `page.tsx` now imports this component and passes the `CompanyCard` components as children. Removed the corresponding state, refs, effects, and handlers from `page.tsx`.

*   **Navigation Animation Handling:** - **Done**
    *   **Location:** State (`isNavigating`), `useEffect` setting up listeners (lines ~122-169), and helper functions (`handleNavigationStart`, `stopAllAnimations`, `handleLinkClick`) in `page.tsx`.
    *   **Description:** Logic to detect navigation events and prevent/stop animations during page transitions was defined inline and coupled with specific animation stopping logic.
    *   **Update:** Extracted the navigation detection logic (state, effect, listeners) into a reusable hook `useNavigationAnimationControl` in `src/hooks/`. `page.tsx` now uses this hook to get the `isNavigating` state. A separate `useEffect` was added in `page.tsx` to specifically watch this state and stop the skill timer animation (`progressControls.stop()` and `clearInterval`). The general `stopAllAnimations` function and related listeners were removed from the skill timer effect.

### 3. Section Components (`src/app/page.tsx`) - Done

*   **Description:** The main `page.tsx` renders multiple distinct sections (Hero, Companies, Expertise, CTA).
*   **Update:** Extracted each major section into its own component (`HeroSection`, `CompaniesSection`, `ExpertiseSection`, `CtaSection`) within `src/components/landing/`. `page.tsx` now imports and renders these components, passing necessary data and state (like `isNavigating`, `resumeData`, `companies`, `expertiseItems`, `variants`) as props. Section-specific logic (like skill rotation, scroll indicator) was moved into the respective section components.

## Lower Priority Refactoring Opportunities

### 4. Data Handling (`src/app/page.tsx`)

*   **`getExpertiseAreas` Function:**
    *   **Location:** Lines ~26-110.
    *   **Description:** Processes `resumeData` specifically for the Expertise section.
    *   **Suggestion:** If this data processing logic is needed on other pages (e.g., a dedicated Skills page), move the function to a utility file like `src/lib/resumeUtils.ts`.

### 5. Styling/Animation Patterns

*   **Consistent Framer Motion Variants:** Review the use of inline animation props (`initial`, `animate`) versus defined `variants` (like `containerVariants`, `itemVariants`) for consistency, especially where staggering or complex sequences are involved.
*   **Tailwind Abstraction:** Identify highly repetitive, complex Tailwind class combinations. Consider using `@apply` in `globals.css` for common patterns or ensuring they are encapsulated within the base styles of extracted components. 