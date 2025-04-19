# Redundant Code Analysis

This file lists potentially redundant code (unused imports, variables, functions) found within individual files in the `src` directory.

## `portfolio_website/src/hooks/useNavigationAnimationControl.ts`

- Line 3: Unused import `useCallback` from 'react'.
- Line 47: Unused function `addNavigationListeners`.

## `portfolio_website/src/components/landing/hero-section.tsx`

- Line 27: Unused state variable `isAnimating`.

## `portfolio_website/src/components/ui/infinite-carousel.tsx`

- Line 28: Unused variable `animationControls`.

## `portfolio_website/src/components/ui/profile-card.tsx`

- Line 39: Unused function `createAccomplishmentSummary`.

## `portfolio_website/src/components/ui/button.tsx`

- Line 94: Unused function `handleMouseLeave`.

## `portfolio_website/src/app/page.tsx`

- Line 2: Unused import `motion` from 'framer-motion'.
- Line 3: Unused import `Image` from 'next/image'.
- Line 6: Unused import `React`.

## `portfolio_website/src/app/resume/page.tsx`

- Line 3: Unused import `useState` from 'react'.
- Line 3: Unused import `useEffect` from 'react'.
- Line 5: Unused import `Education` from '@/data/resumeData'.
- Line 5: Unused import `Certification` from '@/data/resumeData'.
- Line 7: Unused import `CardDescription` from '@/components/ui/card'.
- Line 7: Unused import `CardFooter` from '@/components/ui/card'.
- Line 9: Unused import `FiAward` from 'react-icons/fi'.
- Line 9: Unused import `FiMapPin` from 'react-icons/fi'.
- Line 42: Unused variable `TimelineItem`.
- Line 80: Unused variable `SkillsSection`.
- Line 170: Unused variable `CertificationsSection`.
- Line 280: Unused variable `fadeInUp`.

## `portfolio_website/src/app/contact/page.tsx`

- Line 13: Unused import `Badge` from '@/components/ui/badge'.
- Line 15: Unused import `FiGithub` from 'react-icons/fi'.

## `portfolio_website/src/app/blog/page.tsx`

- Line 6: Unused import `BlogPost` from '@/data/blogData'.
- Line 191: Unused variable `BlogPostCard`.

## `portfolio_website/src/app/case-studies/page.tsx`

- Line 3: Unused import `React`.

## `portfolio_website/src/app/case-studies/[id]/page.tsx`

- Line 3: Unused import `React`.

## `portfolio_website/src/data/resumeData.ts`

- Line 1: Unused interface `Experience` (defined but not used locally).
- Line 16: Unused interface `Skill` (defined but not used locally).
- Line 21: Unused interface `Certification` (defined but not used locally).

## `portfolio_website/src/data/caseStudiesData.ts`

- Line 1: Unused interface `CaseStudy` (defined but not used locally). 