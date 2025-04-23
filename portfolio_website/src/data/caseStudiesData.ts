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
    id: "e-commerce-platform",
    title: "E-commerce Platform Redesign",
    company: "RetailTech Inc.",
    period: "Jan 2023 - Apr 2023",
    summary: "Complete redesign and redevelopment of an e-commerce platform resulting in 45% increase in conversion rate and 60% improvement in page load speed.",
    tags: ["UX Design", "Frontend Development", "Performance Optimization"],
    coverImage: "/images/case-studies/ecommerce-cover.jpg",
    thumbnailImage: "/images/case-studies/ecommerce-thumb.jpg",
    challenge: "RetailTech Inc. was facing significant challenges with their outdated e-commerce platform. Page load times exceeded 5 seconds, the mobile experience was poorly optimized, and the checkout process had a high abandonment rate of 76%. These issues were directly impacting their bottom line, with conversion rates well below industry standards.",
    solution: "I designed and developed a completely new e-commerce experience, focusing on performance, usability, and conversion optimization. The solution included a responsive design system, optimized product discovery, streamlined checkout flow, and implementation of modern frontend technologies like React and Next.js.",
    approach: "The project followed a user-centered design approach. I began with extensive user research, including interviews with existing customers and analysis of user behavior data. This informed the creation of detailed user personas and journey maps. The design process involved multiple iterations, with wireframes and prototypes tested with real users. The development phase used a component-based architecture for maintainability and performance, with continuous integration and automated testing to ensure quality.",
    results: "The redesigned platform launched on schedule and immediately showed impressive results. Page load time decreased from 5.2s to 1.8s, mobile traffic increased by 37%, and most importantly, the conversion rate improved by 45%. The checkout abandonment rate dropped from 76% to 32%, directly contributing to a 28% increase in monthly revenue.",
    learnings: "This project reinforced the importance of performance optimization in e-commerce platforms and the direct correlation between page speed and conversion rates. I also learned valuable lessons about balancing business requirements with user needs, and the importance of data-driven decision-making throughout the design and development process.",
    testimonial: {
      quote: "The redesigned platform has transformed our business. Not only did it significantly increase our conversion rates, but it also provided us with a scalable foundation for future growth.",
      name: "Sarah Johnson",
      title: "E-commerce Director",
      avatar: "/images/testimonials/sarah-johnson.jpg"
    },
    figmaLink: "https://www.google.com",
    whimsicalLink: "https://www.google.com",
    sheetsLink: "https://www.google.com"
  },
  {
    id: "financial-dashboard",
    title: "Financial Analytics Dashboard",
    company: "GlobalFinance",
    period: "May 2022 - Dec 2022",
    summary: "Design and development of an intuitive financial analytics dashboard that reduced report generation time by 80% and improved decision-making processes.",
    tags: ["Data Visualization", "UX/UI Design", "React", "TypeScript"],
    coverImage: "/images/case-studies/finance-cover.jpg",
    thumbnailImage: "/images/case-studies/finance-thumb.jpg",
    challenge: "GlobalFinance's analysts were spending excessive time generating reports from multiple data sources, with the process taking up to 3 days for comprehensive reports. The existing tools lacked proper visualization capabilities and had significant usability issues, resulting in delayed decision-making and inefficient resource allocation.",
    solution: "I designed and developed a centralized financial analytics dashboard that integrated all data sources, provided real-time insights, and featured intuitive data visualization tools. The solution included customizable report templates, automated data processing, and collaboration features to streamline the entire reporting workflow.",
    approach: "The project began with a deep dive into the analysts' workflow, identifying pain points and opportunities for improvement. I worked closely with a cross-functional team of financial analysts, data engineers, and stakeholders to ensure the solution addressed all requirements. The implementation used React with TypeScript for the frontend, D3.js for custom data visualizations, and integrated with the company's existing data warehouse through a custom API layer.",
    results: "The dashboard reduced report generation time from 3 days to just 4 hours – an 80% improvement. Analysts reported significantly improved decision-making capabilities due to real-time data access and better visualization tools. The platform's adoption rate reached 94% within two months of launch, and the company estimated annual cost savings of $420,000 from improved operational efficiency.",
    learnings: "This project taught me the importance of deep domain knowledge when designing specialized tools. Understanding the financial analysts' specific needs was crucial for creating effective visualizations. I also gained valuable experience in designing interfaces that can present complex data in accessible ways without oversimplifying important nuances.",
    testimonial: {
      quote: "This dashboard has revolutionized how we analyze financial data. What used to take days now takes hours, allowing us to make faster, more informed decisions. It's become an indispensable tool for our team.",
      name: "Michael Chen",
      title: "Head of Financial Analysis",
      avatar: "/images/testimonials/michael-chen.jpg"
    },
    figmaLink: "https://www.google.com",
    whimsicalLink: "https://www.google.com",
    sheetsLink: "https://www.google.com"
  },
  {
    id: "healthcare-app",
    title: "Patient Care Mobile Application",
    company: "HealthFirst Medical Group",
    period: "Aug 2021 - Apr 2022",
    summary: "Development of a HIPAA-compliant mobile application that improved patient engagement by 62% and streamlined healthcare provider workflows.",
    tags: ["Mobile Development", "Healthcare", "UI/UX", "React Native"],
    coverImage: "/images/case-studies/healthcare-cover.jpg",
    thumbnailImage: "/images/case-studies/healthcare-thumb.jpg",
    challenge: "HealthFirst Medical Group was struggling with patient engagement and communication issues. Appointment no-show rates were at 28%, medication adherence was poor, and patients reported frustration with the difficulty of accessing their health information and communicating with providers.",
    solution: "I developed a comprehensive patient care mobile application that provided secure access to health records, appointment scheduling and reminders, secure messaging with providers, medication tracking, and educational resources. The app was designed to be accessible to users of all ages and technical abilities, with particular attention to accessibility features.",
    approach: "Given the sensitive nature of healthcare data, security and compliance were top priorities throughout the development process. I implemented a rigorous HIPAA-compliant architecture and followed a thorough security review process. The app was built using React Native for cross-platform functionality, with native modules for specific features requiring deeper integration. User testing was conducted with diverse patient groups, including elderly users and those with various accessibility needs.",
    results: "Within six months of launch, patient engagement metrics showed remarkable improvement. Appointment no-show rates decreased from 28% to 11%, medication adherence improved by 43%, and patient satisfaction scores increased by 58%. Healthcare providers reported saving an average of 7.5 hours per week on administrative tasks, allowing more time for direct patient care.",
    learnings: "This project highlighted the complex balance between security, compliance, and usability in healthcare applications. I learned valuable lessons about designing for diverse user groups with varying technical proficiency and accessibility needs. The project also emphasized the importance of thorough testing and validation in applications where reliability is critical.",
    testimonial: {
      quote: "This app has transformed our relationship with patients. Communication is smoother, no-shows have plummeted, and both patients and our staff love using it. It's rare to find a technical solution that satisfies both sides of the healthcare equation so effectively.",
      name: "Dr. Lisa Patel",
      title: "Chief Medical Officer",
      avatar: "/images/testimonials/lisa-patel.jpg"
    },
    figmaLink: "https://www.google.com",
    whimsicalLink: "https://www.google.com",
    sheetsLink: "https://www.google.com"
  }
]; 