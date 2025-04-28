import { DeelCaseStudyDetails } from "./deel-global-payroll-data";
import { FlipkartCaseStudyDetails } from './flipkart-logistics-optimization-data';
import { AwsLambdaCaseStudyDetails, awsLambdaCaseStudyDetails } from './aws-lambda-developer-ux-data';

export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  summary: string;
  tags: string[];
  coverImage: string;
  thumbnailImage: string;
  // Links
  wireframeLink?: string;
  whimsicalLink?: string;
  sheetsLink?: string;

  // Field for detailed content, specific to Deel for now
  detailedData?: DeelCaseStudyDetails | FlipkartCaseStudyDetails | AwsLambdaCaseStudyDetails;
}

// Import the detailed data
import { deelCaseStudyDetails } from './deel-global-payroll-data';
import { flipkartCaseStudyDetails } from './flipkart-logistics-optimization-data';

export const caseStudies: CaseStudy[] = [
  {
    id: "deel-global-payroll",
    title: "Deel Global Payroll Optimization",
    company: "Deel",
    summary: "Streamlined Deel's global payroll processing platform, enhancing accuracy and reducing processing time by 30% for international clients.",
    tags: ["Fintech", "HR Tech", "Platform Development", "UX Improvement"],
    coverImage: "/images/case-studies/deel.png",
    thumbnailImage: "/images/case-studies/deel.png",
    wireframeLink: "https://jairangi11.github.io/portfolio_website/case-studies-content/deel-global-payroll/wireframes/admin_dashboard.html",
    whimsicalLink: "https://whimsical.com/portfolio-case-study-SWF4dwiPDQzafhAw97XLgD",
    sheetsLink: "https://docs.google.com/spreadsheets/d/1WwY5lK0BaQEwVbHv1odjje0XRviAKpJrSjKrxPARh_U/edit?usp=sharing",
    detailedData: deelCaseStudyDetails // Assign the detailed data object
  },
  {
    id: "flipkart-logistics-optimization",
    title: "Flipkart Supply Chain Visibility",
    company: "Flipkart",
    summary: "Developed a real-time logistics tracking system for Flipkart, improving delivery time prediction accuracy by 40% and reducing support inquiries.",
    tags: ["E-commerce", "Logistics", "Supply Chain", "Data Analytics"],
    coverImage: "/images/case-studies/Flipkart.png",
    thumbnailImage: "/images/case-studies/Flipkart.png",
    wireframeLink: "https://jairangi11.github.io/portfolio_website/case-studies-content/flipkart-logistics-optimization/wireframes/ops_dashboard_main.html",
    whimsicalLink: "https://whimsical.com/portfolio-case-study-SWF4dwiPDQzafhAw97XLgD",
    sheetsLink: "https://docs.google.com/spreadsheets/d/1pli44sSrRLfDCu_2Sks2tl1pgQ0yUk9TMGRU3N6WwMU/edit?usp=sharing",
    detailedData: flipkartCaseStudyDetails // Assign the detailed Flipkart data object
  },
  {
    id: "google-pay-merchant-onboarding",
    title: "Google Pay Merchant Onboarding Flow",
    company: "Google Pay",
    summary: "Redesigned the Google Pay merchant onboarding process, resulting in a 50% reduction in onboarding time and a 35% increase in successful merchant activations.",
    tags: ["Fintech", "Payments", "UX Design", "Mobile App"],
    coverImage: "/images/case-studies/google_pay.png",
    thumbnailImage: "/images/case-studies/google_pay.png",
    wireframeLink: "https://www.google.com",
    whimsicalLink: "https://www.google.com",
    sheetsLink: "https://www.google.com"
  },
  {
    id: "magicbricks-property-recommendation",
    title: "MagicBricks AI Property Recommendation",
    company: "MagicBricks",
    summary: "Implemented an AI-powered property recommendation engine for MagicBricks, increasing user engagement with listings by 40% and lead generation by 25%.",
    tags: ["Real Estate Tech", "AI/ML", "Recommendation Systems", "Data Science"],
    coverImage: "/images/case-studies/magicbricks.png",
    thumbnailImage: "/images/case-studies/magicbricks.png",
    wireframeLink: "https://www.google.com",
    whimsicalLink: "https://www.google.com",
    sheetsLink: "https://www.google.com"
  },
  {
    id: "aws-lambda-developer-ux",
    title: "AWS Lambda Developer Experience Enhancement",
    company: "AWS",
    summary: "Improved the AWS Lambda developer experience by redesigning the console interface for function creation and monitoring, reducing configuration errors by 20%.",
    tags: ["Cloud Computing", "Developer Tools", "B2B SaaS", "UX Improvement", "Serverless"],
    coverImage: "/images/case-studies/aws.png",
    thumbnailImage: "/images/case-studies/aws.png",
    wireframeLink: "https://jairangi11.github.io/portfolio_website/case-studies-content/aws-lambda-developer-ux/wireframes/1_observability_default.html",
    whimsicalLink: "https://whimsical.com/portfolio-case-study-SWF4dwiPDQzafhAw97XLgD@8ADn3nfZACayAssTti3ccZQkS6vN1iYZsH7h",
    sheetsLink: "https://docs.google.com/spreadsheets/d/1dvkhd_cTUowoIkTEK_Y-sWOoyN6zIDNAmgq2wTSjC-Y/edit?usp=sharing",
    detailedData: awsLambdaCaseStudyDetails // Assign the AWS detailed data
  },
  {
    id: "spotify-podcast-discovery",
    title: "Spotify Podcast Discovery & Personalization",
    company: "Spotify",
    summary: "Enhanced Spotify's podcast discovery features using ML personalization, leading to a 25% increase in podcast listening hours among targeted user segments.",
    tags: ["Streaming", "Social Media", "AI/ML", "Recommendation Systems", "Mobile App"],
    coverImage: "/images/case-studies/spotify.png",
    thumbnailImage: "/images/case-studies/spotify.png",
    wireframeLink: "https://www.google.com",
    whimsicalLink: "https://www.google.com",
    sheetsLink: "https://www.google.com"
  },
  {
    id: "optum-prior-auth-optimization",
    title: "Optum Prior Authorization Workflow Optimization",
    company: "Optum",
    summary: "Developed and launched an AI-assisted prior authorization platform for Optum, streamlining the review process for providers and reducing turnaround time by 35% while ensuring strict HIPAA compliance.",
    tags: ["Health Tech", "Enterprise Software", "AI/ML", "Workflow Automation", "HIPAA Compliance", "Payer Solutions"],
    coverImage: "/images/case-studies/optum.png",
    thumbnailImage: "/images/case-studies/optum.png",
    wireframeLink: "https://www.google.com",
    whimsicalLink: "https://www.google.com",
    sheetsLink: "https://www.google.com"
  }
]; 