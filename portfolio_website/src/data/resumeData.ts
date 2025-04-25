export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  briefSummary: string;
  logo?: string;
  website?: string;
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
  logo?: string;
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
      company: "Quara Holding",
      location: "Gurgaon, India",
      period: "08/2023 – 03/2025",
      logo: "/images/company_logos/Quara_holding.png",
      website: "https://www.quaraholding.com/",
      description: [
        "Spearheaded technical product management for a B2B PropTech insights platform, integrating AI-powered predictive models to estimate property values, rental trends, and market demand across the Gulf region, generating over $100,000 in ARR.",
        "Developed an LLM-powered natural language search feature, increasing search engagement by 35% and query-to-conversion rate by 22%.",
        "Created a lead qualification tool using classification modeling, improving conversion rates by 25%.",
        "Designed and launched an AI chatbot, increasing lead profile completion from 43% to 62% and boosting engagement by 18%.",
        "Refined AI solutions and GTM strategy based on industry trend analysis.",
        "Collaborated with engineering, design, and sales teams to deliver agile product development and roadmap execution."
      ],
      briefSummary: "Led technical product management for an AI-powered B2B PropTech platform in the Gulf region, developing predictive models, LLM search, lead qualification tools, and chatbots while collaborating with cross-functional teams for agile delivery."
    },
    {
      title: "Associate Product Manager",
      company: "foundit (Formerly Monster APAC & ME)",
      location: "Noida, India",
      period: "01/2022 – 08/2023",
      logo: "/images/company_logos/foundit.png",
      website: "https://www.foundit.in/",
      description: [
        "Defined and executed product vision for UX and onboarding across 9 markets, increasing profile completeness by 14% and engagement by 8%.",
        "Scaled an AI-enhanced Resume Builder to 100,000+ monthly creations using data insights and CRO techniques.",
        "Boosted email campaign CTR from 3% to 15% via A/B testing, AMP mailers, and personalized segmentation.",
        "Implemented an AI chatbot, improving CSAT, reducing support load, and enhancing engagement.",
        "Set up KPIs and performance tracking for continuous UX improvement.",
        "Conducted competitive research to improve features and GTM strategy."
      ],
      briefSummary: "Managed product vision for UX and onboarding across multiple markets, scaled an AI Resume Builder, optimized email campaigns, implemented an AI chatbot, and established performance tracking for continuous improvement."
    },
    {
      title: "Associate Product Manager",
      company: "Freecharge",
      location: "Gurgaon, India",
      period: "02/2021 – 01/2022",
      logo: "/images/company_logos/Freecharge_logo.png",
      website: "https://www.freecharge.in/",
      description: [
        "Owned roadmap for digital payments, wallet, and rent payments, generating ₹6L GMV/month.",
        "Designed \"Kids Wallet\" with Axis Bank, expanding into fintech with API integration and compliance.",
        "Automated merchant settlement with secure pipelines and error detection systems.",
        "Reduced transaction costs via MDR optimization through vendor negotiations.",
        "Conducted market research to optimize GTM strategy for digital payments."
      ],
      briefSummary: "Owned the product roadmap for digital payments and wallet features, launched a 'Kids Wallet' initiative with Axis Bank, automated merchant settlements, optimized transaction costs, and conducted market research for GTM strategies."
    },
    {
      title: "Management Trainee - Product",
      company: "People Group (Shaadi.com)",
      location: "Mumbai, India",
      period: "06/2020 – 02/2021",
      logo: "/images/company_logos/Shaadi.png",
      website: "https://www.shaadi.com/",
      description: [
        "Optimized matchmaking using behavioral insights, increasing matches by 20% and reducing churn by 15%.",
        "Improved premium engagement with personalized AI-driven VIP features.",
        "Built a predictive CRM model, reducing response time by 15% and improving efficiency."
      ],
      briefSummary: "Optimized matchmaking algorithms using behavioral insights, enhanced premium user engagement with personalized AI features, and developed a predictive CRM model to improve operational efficiency."
    },
    {
      title: "MBA Internship",
      company: "Lenskart",
      location: "Faridabad, India",
      period: "04/2019 – 05/2019",
      logo: "/images/company_logos/Lenskart-Logo.png",
      website: "https://www.lenskart.com/",
      description: [
        "Boosted John Jacobs sunglasses sales by 25% through market and inventory optimization.",
        "Defined KPIs for stores to align with GTM strategies."
      ],
      briefSummary: "Focused on optimizing sales for a specific product line through market analysis and inventory management, and defined key performance indicators for retail stores."
    },
    {
      title: "Software Engineering Intern",
      company: "Petrofac",
      location: "Gurgaon, India",
      period: "01/2017 – 07/2017",
      logo: "/images/company_logos/Petrofac.png",
      website: "https://www.petrofac.com/",
      description: [
        "Developed a remote monitoring system for real-time analytics."
      ],
      briefSummary: "Contributed to the development of a remote monitoring system designed for real-time data analytics in the energy sector."
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
  
  certifications: [
    { name: "Digital Product Management: Modern Fundamentals by University of Virginia", issuer: "Coursera", logo: "/images/certificate_issuer_logos/coursera.png" },
    { name: "Machine Learning A-Z: AI, Python & R", issuer: "Udemy", logo: "/images/certificate_issuer_logos/udemy.png" },
    { name: "Data Science Using Python", issuer: "DataCamp", logo: "/images/certificate_issuer_logos/datacamp.png" },
    { name: "SQL For Data Science", issuer: "DataCamp", logo: "/images/certificate_issuer_logos/datacamp.png" },
    { name: "Data Science Using R", issuer: "DataCamp", logo: "/images/certificate_issuer_logos/datacamp.png" },
    { name: "Marketing And Sales Foundation", issuer: "Kraftshala", logo: "/images/certificate_issuer_logos/kraftshala.png" },
    { name: "Java", issuer: "Ducat India", logo: "/images/certificate_issuer_logos/ducat.png" },
    { name: "C++", issuer: "Ducat India", logo: "/images/certificate_issuer_logos/ducat.png" },
    { name: "Adobe XD Essential Training: Design", issuer: "LinkedIn", logo: "/images/certificate_issuer_logos/linkedin.png" },
    { name: "Agile Foundations", issuer: "LinkedIn", logo: "/images/certificate_issuer_logos/linkedin.png" },
    { name: "UX Foundations: Prototyping", issuer: "LinkedIn", logo: "/images/certificate_issuer_logos/linkedin.png" },
    { name: "Technical Analysis Of Financial Markets", issuer: "The Money Roller", logo: "/images/certificate_issuer_logos/the_money_roller.png" },
  ]
}; 