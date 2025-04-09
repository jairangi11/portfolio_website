export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-10
  category: string;
  color: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export const resumeData = {
  name: "Jay Rangi",
  title: "Product Manager",
  email: "jairangi11101995@gmail.com",
  phone: "+91 7727051187",
  location: "Gurgaon, Haryana",
  linkedin: "https://www.linkedin.com/in/jayrangi/",
  
  summary: [
    "Data-driven Product Manager with expertise in AI-powered solutions, Machine Learning (ML), SaaS, and B2B PropTech. Specialized in data-driven decision-making, Go-to-Market (GTM) strategy, and building customer-centric products.",
    "Currently leading technical product management at Quara AI, developing LLM-based AI models and in-product instrumentation to drive KPIs and product metrics, delivering insights for the Gulf market.",
    "Demonstrated success in strategic planning, product vision, roadmap execution, and cross-functional collaboration across AI, HR-tech, fintech, and PropTech.",
    "Skilled in stakeholder alignment and agile methodologies to scale innovative solutions."
  ],
  
  experience: [
    {
      title: "Product Manager - AI",
      company: "Quara Holdings",
      location: "Gurgaon, India",
      period: "08/2023 – 03/2025",
      description: [
        "Spearheaded technical product management for a B2B PropTech insights platform, integrating AI-powered predictive models to estimate property values, rental trends, and market demand across the Gulf region, generating over $100,000 in ARR.",
        "Developed an LLM-powered natural language search feature, increasing search engagement by 35% and query-to-conversion rate by 22%.",
        "Created a lead qualification tool using classification modeling, improving conversion rates by 25%.",
        "Designed and launched an AI chatbot, increasing lead profile completion from 43% to 62% and boosting engagement by 18%.",
        "Refined AI solutions and GTM strategy based on industry trend analysis.",
        "Collaborated with engineering, design, and sales teams to deliver agile product development and roadmap execution."
      ]
    },
    {
      title: "Associate Product Manager",
      company: "foundit (Formerly Monster APAC & ME)",
      location: "Noida, India",
      period: "01/2022 – 08/2023",
      description: [
        "Defined and executed product vision for UX and onboarding across 9 markets, increasing profile completeness by 14% and engagement by 8%.",
        "Scaled an AI-enhanced Resume Builder to 100,000+ monthly creations using data insights and CRO techniques.",
        "Boosted email campaign CTR from 3% to 15% via A/B testing, AMP mailers, and personalized segmentation.",
        "Implemented an AI chatbot, improving CSAT, reducing support load, and enhancing engagement.",
        "Set up KPIs and performance tracking for continuous UX improvement.",
        "Conducted competitive research to improve features and GTM strategy."
      ]
    },
    {
      title: "Associate Product Manager",
      company: "Freecharge",
      location: "Gurgaon, India",
      period: "02/2021 – 01/2022",
      description: [
        "Owned roadmap for digital payments, wallet, and rent payments, generating ₹6L GMV/month.",
        "Designed \"Kids Wallet\" with Axis Bank, expanding into fintech with API integration and compliance.",
        "Automated merchant settlement with secure pipelines and error detection systems.",
        "Reduced transaction costs via MDR optimization through vendor negotiations.",
        "Conducted market research to optimize GTM strategy for digital payments."
      ]
    },
    {
      title: "Management Trainee - Product",
      company: "People Group (Shaadi.com)",
      location: "Mumbai, India",
      period: "06/2020 – 02/2021",
      description: [
        "Optimized matchmaking using behavioral insights, increasing matches by 20% and reducing churn by 15%.",
        "Improved premium engagement with personalized AI-driven VIP features.",
        "Built a predictive CRM model, reducing response time by 15% and improving efficiency."
      ]
    }
  ],
  
  education: [
    {
      degree: "MBA - Marketing/IT Analytics",
      institution: "IMT Ghaziabad",
      period: "2018 – 2020"
    },
    {
      degree: "B.Tech - Computer Science",
      institution: "Manipal University Jaipur",
      period: "2013 – 2017"
    }
  ],
  
  skills: [
    // Technical Skills
    { name: "Python", level: 8, category: "Technical", color: "#6366f1" },
    { name: "SQL", level: 9, category: "Technical", color: "#6366f1" },
    { name: "Power BI", level: 7, category: "Technical", color: "#6366f1" },
    { name: "Tableau", level: 8, category: "Technical", color: "#6366f1" },
    { name: "Mixpanel", level: 9, category: "Technical", color: "#6366f1" },
    { name: "CleverTap", level: 8, category: "Technical", color: "#6366f1" },
    { name: "Adobe Analytics", level: 7, category: "Technical", color: "#6366f1" },
    { name: "Figma", level: 6, category: "Technical", color: "#6366f1" },
    { name: "JIRA", level: 9, category: "Technical", color: "#6366f1" },
    { name: "API Integrations", level: 7, category: "Technical", color: "#6366f1" },
    
    // Product Management
    { name: "Product Strategy", level: 9, category: "Product", color: "#10b981" },
    { name: "Product Roadmap", level: 9, category: "Product", color: "#10b981" },
    { name: "Backlog Management", level: 8, category: "Product", color: "#10b981" },
    { name: "Agile", level: 9, category: "Product", color: "#10b981" },
    { name: "Go-to-Market", level: 8, category: "Product", color: "#10b981" },
    { name: "Stakeholder Management", level: 9, category: "Product", color: "#10b981" },
    { name: "Data-Driven Decisions", level: 10, category: "Product", color: "#10b981" },
    { name: "Growth Metrics", level: 8, category: "Product", color: "#10b981" },
    
    // AI & Data Science
    { name: "NLP", level: 7, category: "AI", color: "#ec4899" },
    { name: "Prediction", level: 8, category: "AI", color: "#ec4899" },
    { name: "Classification", level: 8, category: "AI", color: "#ec4899" },
    { name: "Forecasting", level: 7, category: "AI", color: "#ec4899" },
    { name: "Clustering", level: 6, category: "AI", color: "#ec4899" },
    { name: "Recommendation Systems", level: 7, category: "AI", color: "#ec4899" },
    { name: "Generative AI", level: 8, category: "AI", color: "#ec4899" },
    { name: "KPIs", level: 9, category: "AI", color: "#ec4899" },
    
    // Industry
    { name: "SaaS", level: 8, category: "Industry", color: "#0ea5e9" },
    { name: "Fintech", level: 7, category: "Industry", color: "#0ea5e9" },
    { name: "PropTech", level: 9, category: "Industry", color: "#0ea5e9" },
    { name: "E-commerce", level: 6, category: "Industry", color: "#0ea5e9" },
    { name: "Cloud", level: 7, category: "Industry", color: "#0ea5e9" }
  ],
  
  certifications: [] // To be populated
}; 