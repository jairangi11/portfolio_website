export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  period: string;
  summary: string;
  tags: string[];
  coverImage: string;
  thumbnailImage: string;
  challenge: string;
  solution: string;
  approach: string;
  results: string;
  learnings: string;
  testimonial?: {
    quote: string;
    name: string;
    title: string;
    avatar?: string;
  };
  figmaLink?: string;
  whimsicalLink?: string;
  sheetsLink?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "deel-global-payroll",
    title: "Deel Global Payroll Optimization",
    company: "Deel",
    period: "May 2023 - Aug 2023",
    summary: "Streamlined Deel's global payroll processing platform, enhancing accuracy and reducing processing time by 30% for international clients.",
    tags: ["Fintech", "HR Tech", "Platform Development", "UX Improvement"],
    coverImage: "/images/case-studies/deel.png",
    thumbnailImage: "/images/case-studies/deel.png",
    challenge: "Deel's rapid growth led to complexities in managing payroll across diverse international regulations. Clients faced occasional delays and inaccuracies, impacting user satisfaction and operational scalability.",
    solution: "I led the redesign of the core payroll processing engine, incorporating automated compliance checks and improving the user interface for payroll administrators. This involved integrating new validation rules and enhancing data visualization for clearer reporting.",
    approach: "The project started with in-depth interviews with internal payroll specialists and key clients to identify critical pain points. We adopted an agile methodology, delivering incremental improvements and gathering feedback continuously. Key focus areas included API optimization and database query refinement.",
    results: "The optimized platform reduced average payroll processing time by 30%, decreased error rates by 25%, and significantly improved client satisfaction scores related to payroll services. The changes also allowed Deel to onboard larger clients more efficiently.",
    learnings: "This project underscored the criticality of regulatory understanding in Fintech product development. It also highlighted the importance of internal user feedback (payroll specialists) in refining complex B2B platform functionalities.",
    testimonial: {
      quote: "The improvements to the payroll system have been a game-changer for our operations, allowing us to scale efficiently while maintaining accuracy.",
      name: "Alex Chen",
      title: "VP of Operations, Deel",
      avatar: "/images/testimonials/placeholder-avatar.png" // Placeholder
    },
    figmaLink: "https://www.google.com",
    whimsicalLink: "https://www.google.com",
    sheetsLink: "https://www.google.com"
  },
  {
    id: "flipkart-logistics-optimization",
    title: "Flipkart Supply Chain Visibility",
    company: "Flipkart",
    period: "Jan 2023 - Apr 2023",
    summary: "Developed a real-time logistics tracking system for Flipkart, improving delivery time prediction accuracy by 40% and reducing support inquiries.",
    tags: ["E-commerce", "Logistics", "Supply Chain", "Data Analytics"],
    coverImage: "/images/case-studies/Flipkart.png",
    thumbnailImage: "/images/case-studies/Flipkart.png",
    challenge: "Flipkart's vast logistics network faced challenges in providing accurate, real-time delivery updates to customers, leading to high volumes of customer support inquiries and decreased customer trust.",
    solution: "I designed and implemented a centralized tracking platform that aggregated data from various logistics partners, using machine learning models to predict delivery times more accurately and provide proactive updates to customers.",
    approach: "We collaborated closely with logistics partners to establish reliable data pipelines. The development process involved building robust APIs, designing an intuitive customer-facing tracking interface, and training ML models on historical delivery data.",
    results: "The new system improved the accuracy of estimated delivery times by 40%, reduced 'Where Is My Order?' (WISMO) customer support calls by 22%, and led to a 15% increase in positive customer feedback regarding deliveries.",
    learnings: "The project demonstrated the power of data aggregation and machine learning in solving complex logistical challenges. Effective collaboration with external partners was key to accessing and utilizing diverse data sources.",
    figmaLink: "https://www.google.com",
    whimsicalLink: "https://www.google.com",
    sheetsLink: "https://www.google.com"
  },
  {
    id: "google-pay-merchant-onboarding",
    title: "Google Pay Merchant Onboarding Flow",
    company: "Google Pay",
    period: "Sep 2022 - Dec 2022",
    summary: "Redesigned the Google Pay merchant onboarding process, resulting in a 50% reduction in onboarding time and a 35% increase in successful merchant activations.",
    tags: ["Fintech", "Payments", "UX Design", "Mobile App"],
    coverImage: "/images/case-studies/google_pay.png",
    thumbnailImage: "/images/case-studies/google_pay.png",
    challenge: "The existing merchant onboarding flow for Google Pay was perceived as lengthy and complex, leading to high drop-off rates before merchants could successfully activate their accounts and start accepting payments.",
    solution: "I redesigned the onboarding experience, simplifying forms, providing clearer instructions, and integrating instant verification methods. The focus was on a mobile-first, intuitive flow that minimized friction for new merchants.",
    approach: "User research, including usability testing of the existing flow and competitive analysis, informed the redesign. Iterative prototyping and A/B testing were used to validate design decisions and optimize the conversion funnel.",
    results: "The new onboarding flow reduced the average time to complete merchant setup by 50%. More significantly, the rate of successful merchant activations increased by 35%, expanding Google Pay's merchant network.",
    learnings: "This project emphasized the impact of streamlined UX on conversion rates, especially in onboarding processes. Simplifying complex requirements into user-friendly steps is crucial for adoption.",
    testimonial: {
        quote: "Simplifying the merchant onboarding has directly contributed to faster growth of our payment ecosystem. The user-centric approach made a tangible difference.",
        name: "Priya Sharma",
        title: "Product Lead, Google Pay",
        avatar: "/images/testimonials/placeholder-avatar.png" // Placeholder
      },
    figmaLink: "https://www.google.com",
    whimsicalLink: "https://www.google.com",
    sheetsLink: "https://www.google.com"
  },
  {
    id: "magicbricks-property-recommendation",
    title: "MagicBricks AI Property Recommendation",
    company: "MagicBricks",
    period: "May 2022 - Aug 2022",
    summary: "Implemented an AI-powered property recommendation engine for MagicBricks, increasing user engagement with listings by 40% and lead generation by 25%.",
    tags: ["Real Estate Tech", "AI/ML", "Recommendation Systems", "Data Science"],
    coverImage: "/images/case-studies/magicbricks.png",
    thumbnailImage: "/images/case-studies/magicbricks.png",
    challenge: "MagicBricks users often struggled to find relevant properties among the vast number of listings, leading to user fatigue and missed opportunities for property discovery.",
    solution: "I developed and integrated a recommendation system that analyzed user behavior, preferences, and property attributes to suggest highly relevant listings, improving the property discovery experience.",
    approach: "The project involved collecting and processing large datasets of user interactions and property information. Collaborative filtering and content-based filtering techniques were combined to build the recommendation model. Extensive A/B testing was conducted to fine-tune the algorithm.",
    results: "The AI recommendation engine led to a 40% increase in user clicks on recommended properties and a 25% uplift in qualified leads generated for agents and developers. User session duration also increased by 18%.",
    learnings: "The project highlighted the effectiveness of personalized recommendations in enhancing user engagement on content-heavy platforms. Balancing exploration (showing new types of properties) and exploitation (showing similar properties) was a key learning.",
    figmaLink: "https://www.google.com",
    whimsicalLink: "https://www.google.com",
    sheetsLink: "https://www.google.com"
  },
  {
    id: "shl-assessment-platform",
    title: "SHL Next-Gen Assessment Platform",
    company: "SHL",
    period: "Jan 2022 - Apr 2022",
    summary: "Led the product strategy for SHL's next-generation talent assessment platform, focusing on improved candidate experience and richer analytics for employers.",
    tags: ["HR Tech", "Talent Assessment", "SaaS", "Product Strategy"],
    coverImage: "/images/case-studies/shl.png",
    thumbnailImage: "/images/case-studies/shl.png",
    challenge: "SHL's existing assessment platform needed modernization to meet evolving candidate expectations and provide deeper, more actionable insights to employers in a competitive HR tech landscape.",
    solution: "I defined the product vision and roadmap for a new platform featuring interactive assessment formats, enhanced mobile compatibility, and advanced psychometric analytics dashboards for employers.",
    approach: "Extensive market research, competitor analysis, and workshops with clients and psychometricians guided the product strategy. The approach prioritized a modular architecture to allow for flexible integration of new assessment types.",
    results: "The new platform strategy positioned SHL for future growth, leading to the successful launch of pilot modules that received positive feedback for candidate experience and data richness. (Note: Specific metrics relate to post-launch phases beyond this strategic period).",
    learnings: "Developing products in the psychometric assessment space requires a deep integration of technology, user experience, and scientific rigor. Balancing innovation with established assessment validity is crucial.",
    testimonial: {
        quote: "The strategic vision for the new platform set a clear direction, enabling us to innovate while staying true to our core strengths in assessment science.",
        name: "David Woodward",
        title: "Chief Product Officer, SHL",
        avatar: "/images/testimonials/placeholder-avatar.png" // Placeholder
      },
    figmaLink: "https://www.google.com",
    whimsicalLink: "https://www.google.com",
    sheetsLink: "https://www.google.com"
  },
  {
    id: "tickit-rewards-engagement",
    title: "Tickit Rewards Program Gamification",
    company: "Tickit",
    period: "Aug 2021 - Dec 2021",
    summary: "Introduced gamification elements into the Tickit rewards app, boosting daily active users by 30% and increasing reward redemption rates by 20%.",
    tags: ["Loyalty Programs", "Gamification", "Mobile App", "User Engagement"],
    coverImage: "/images/case-studies/tickit.png",
    thumbnailImage: "/images/case-studies/tickit.png",
    challenge: "The Tickit rewards program faced declining user engagement, with users infrequently opening the app and low redemption rates for earned points.",
    solution: "I designed and implemented gamification features such as points tracking, badges, leaderboards, and limited-time challenges within the Tickit mobile app to encourage more frequent interaction and reward redemption.",
    approach: "The design process focused on understanding user motivations and applying game mechanics relevant to a rewards context. We prototyped and tested various gamification concepts before rolling out features iteratively.",
    results: "The introduction of gamification led to a 30% increase in daily active users and a 20% rise in the redemption rate of loyalty points. User feedback indicated a more enjoyable and engaging app experience.",
    learnings: "Effective gamification requires more than just adding points and badges; it needs to align with user goals and the core purpose of the application. Thoughtful design is key to avoiding gimmickry.",
    figmaLink: "https://www.google.com",
    whimsicalLink: "https://www.google.com",
    sheetsLink: "https://www.google.com"
  }
]; 