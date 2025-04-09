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
  type: string;
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
    { name: "Python", type: "frontend" },
    { name: "SQL", type: "database" },
    { name: "Power BI", type: "tools" },
    { name: "Tableau", type: "tools" },
    { name: "Mixpanel", type: "tools" },
    { name: "CleverTap", type: "tools" },
    { name: "Adobe Analytics", type: "tools" },
    { name: "Figma", type: "design" },
    { name: "JIRA", type: "tools" },
    { name: "API Integrations", type: "backend" },
    
    // Product Management
    { name: "Product Strategy", type: "product" },
    { name: "Product Roadmap", type: "product" },
    { name: "Backlog Management", type: "product" },
    { name: "Agile", type: "devops" },
    { name: "Go-to-Market", type: "product" },
    { name: "Stakeholder Management", type: "product" },
    { name: "Data-Driven Decisions", type: "product" },
    { name: "Growth Metrics", type: "product" },
    
    // AI & Data Science
    { name: "NLP", type: "ai" },
    { name: "Prediction", type: "ai" },
    { name: "Classification", type: "ai" },
    { name: "Forecasting", type: "ai" },
    { name: "Clustering", type: "ai" },
    { name: "Recommendation Systems", type: "ai" },
    { name: "Generative AI", type: "ai" },
    { name: "KPIs", type: "product" },
    
    // Industry
    { name: "SaaS", type: "industry" },
    { name: "Fintech", type: "industry" },
    { name: "PropTech", type: "industry" },
    { name: "E-commerce", type: "industry" },
    { name: "Cloud", type: "industry" }
  ],
  
  certifications: [] // To be populated
}; 