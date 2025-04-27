# An Online Business Management Analytics Case Study

*(Image: Biz GENIE logo over a light blue grid background with stylized human figures, a gauge, and a genie lamp)*

---

## 1. Introduction

Shopify plays a pivotal role in helping merchants manage their online stores, track sales, and engage with customers. To further elevate the merchant experience and drive business growth, it is essential to provide advanced analytical tools. As a Product Manager, the objective is to develop two comprehensive dashboards:

a.  **Merchant Dashboard:** This dashboard will equip merchants with actionable insights, enabling them to make data-driven decisions, optimize store performance, and enhance customer engagement.
b.  **Platform Analytics Dashboard:** This dashboard will offer Shopify employees detailed analytics to better support merchants, thereby improving overall platform performance and merchant satisfaction.

### 1.1 About Shopify

Shopify is a leading global commerce company that provides essential internet infrastructure for businesses of all sizes. It offers a comprehensive platform to start, manage, and scale commerce activities, consolidating all operations into one admin interface.

As a subscription-based SaaS platform, Shopify supports a wide range of commerce integrations, including themes, apps, channels, and products, fostering extensive business growth opportunities.

**Headquarters:** Ottawa, Ontario, Canada;
[About Shopify](link_placeholder) *(Note: Actual link was not provided in OCR)*

---

## 2. Understanding the Problem

### 2.1 Overview

The aim is to empower merchants with comprehensive analytics and insights while enabling the platform to support them more effectively.

### 2.2 Pitfalls in the Existing Solutions

**From the merchant perspective:**

*   **Lack of Clarity and Guidance:** Overwhelming data and features.
*   **Complex Data Interpretation:** Difficulty in drawing actionable insights.
*   **Manual Effort in Monitoring:** High time consumption and error-prone.
*   **Delayed Response to Issues:** Late identification of performance issues.

**From Shopify's perspective:**

*   **Inability to Proactively Address Issues:** Mostly reactive support.
*   **Data Silos Between Teams:** Inefficient cross-team information sharing.
*   **Delayed Response Times:** Slow issue identification and resolution.
*   **Difficulty in Identifying Trends:** Manual data examination required.

---

## 3. Research: Decoding the Existing Ecosystem

### 3.1 Observations

*   High reliance on e-commerce platforms among Indian small businesses.
*   Opportunities for blending online and offline advantages.
*   Core advantages of online businesses include market reach and data insights, while offline businesses benefit from personal interaction and trust.

### 3.2 Primary Research

We conducted interviews to identify key pain points for merchants, emphasizing the need for actionable insights and comprehensive analytics:

|                        | User Interview 1                                                                                                                                                                                                                                                                                                                                                                                     | User Interview 2                                                                                                                                                                                                                                                                                              |
| :--------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **About the User**     | *   A retired person currently operating an offline reselling business and gained significant practical insights applicable to online retail as well.                                                                                                                                                                                                                                              | *   A middle aged person running a successful online reselling business with an annual turnover of over Rs 10 million                                                                                                                                                                                         |
| **Pain Points**        | *   Lack of Inventory space & Need for proper Inventory management
    *   Customer Access & Marketing - Unaware about social media and digital marketing tools available to increase sales
    *   Pricing & Competition - Challenge competing with online sellers on price
    *   Logistics & Shipping - Difficulty in finding a reliable logistics partner to reach wider audience | *   Difficult to identify percentage of Return to Origin orders(RTO) from actual order
    *   Not able to find insight regarding maximum number of orders from a particular region. This will help in creating targeted promotions and offers to increase sales                                                                                                                                                                      |
| **Our takeaways**      | While online reselling on Shopify or Shopify-like platforms can provide access to inventory space, logistics partners and online marketing etc. There is a need to ensure that these platforms provide the necessary reports and analytics and very important insights that can help them become more nimble and agile to the market trends, demands and grow their business. <br>**Summarizing:** <br> *   **Inventory Management:** Need for agile tracking to reduce deadstock. <br> *   **Marketing Reach:** Constraints due to limited knowledge of social media. <br> *   **Legal & Regulatory Complaints:** Challenges due to complexity and potential business disruption. <br> *   **Pricing & Competition:** Balancing competitive pricing while ensuring profitability. <br> *   **Logistics & Shipping:** Need for timely deliveries for credibility. | -                                                                                                                                                                                                                                                                                                 |

---

### 3.3 Secondary Research

#### 3.3.1 MSMEs in India

*   Micro, Small and Medium Enterprises are those manufacturing enterprises and enterprises rendering services.
*   These are categorized as Micro, small and medium enterprises on the basis of turnover and Investment

| CLASSIFICATION                                   | MICRO                                                                                             | SMALL                                                                                                | MEDIUM                                                                                                 |
| :----------------------------------------------- | :------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| Manufacturing Enterprises and Enterprises rendering Services | Investment in Plant and Machinery or Equipment: <br> Not more than Rs.1 crore and Annual Turnover; not more than Rs. 5 crore | Investment in Plant and Machinery or Equipment: <br> Not more than Rs. 10 crore and Annual Turnover; not more than Rs. 50 crore | Investment in Plant and Machinery or Equipment: <br> Not more than Rs.50 crore and Annual Turnover; not more than Rs. 250 crore |

*   Of the total number of MSME's registered, **97.7%** MSMEs are micro enterprises; **1.5%** are small enterprises; **0.8%** are medium enterprises.

#### Online v/s Offline

*   More MSMEs are going online, with increasing benefits. Currently, 70% of the 85 million MSME sellers are connected to the internet, and this is expected to rise to 80% by 2027. About 60% of them use e-payments, projected to reach 70%.
*   However, only 2-3% of the MSME sellers, that is, 1.5-2.5 million MSMEs sell products online today. This is set to double to 5.5-6 million by 2027.
*   The ~4 Mn additional MSMEs selling online are projected to create over 35 million jobs.
*   Growth in online sales driven by internet adoption and mobile usage.
*   Ecommerce market is expected to double its MSME online sales by 2027.
*   Significant advantages of Shopify over competitors due to ease of use, comprehensive features, scalability, and robust support.

#### 3.3.2 Insights from Research

Based on both primary and secondary research:

*   Over 62% of Indian small businesses use e-commerce platforms.
*   65% of these businesses make up to 50% of their revenue online.
*   Disadvantages of online businesses (like lack of personal touch) are advantages of offline businesses and vice versa.

#### 3.3.3 Why do people use Shopify over others?

| Factors                  | Description                                                                                                                                                                                                   |
| :----------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Ease of Use**          | Shopify is designed to be user-friendly, even for those without technical skills. Setting up an online store, managing products, and processing orders can be done with minimal technical knowledge.          |
| **Comprehensive Features** | Shopify offers a wide range of features out-of-the-box, including secure payment processing, inventory management, shipping solutions, and more. This makes it a one-stop solution for many e-commerce needs. |
| **Customizability**      | With a plethora of themes and apps, merchants can customize their stores to reflect their brand and meet their specific needs. This includes everything from the store's appearance to its functionality.       |
| **Scalability**          | Shopify caters to businesses of all sizes, from small startups to large enterprises. It can scale with the business, offering advanced features and integrations as the business grows.                       |
| **Security and Reliability** | Shopify handles security, compliance, and server maintenance, ensuring that merchants can focus on their business without worrying about technical issues. The platform is known for its reliability and uptime. |
| **Support and Resources**  | Shopify provides robust customer support, including 24/7 assistance via chat, email, and phone. Additionally, there is a wealth of resources available, such as documentation, community forums, and educational content. |
| **SEO and Marketing Tools** | Shopify includes built-in SEO features and marketing tools to help merchants attract and retain customers. This includes everything from customizable meta tags to integration with social media and email marketing platforms. |
| **Mobile Optimization**  | With a growing number of consumers shopping on mobile devices, Shopify ensures that stores are mobile-friendly and provides mobile apps for merchants to manage their stores on the go                      |
| **Third-Party Integrations**| Shopify integrates with numerous third-party services and tools, including accounting software, email marketing services, and social media platforms, allowing merchants to streamline their operations and marketing efforts. |
| **Global Reach**         | Shopify supports multiple languages and currencies, enabling merchants to sell internationally with ease. This global reach is a significant advantage for businesses looking to expand beyond their local markets. |

These factors combined make platforms like Shopify attractive for merchants looking to establish and grow their online presence efficiently and effectively.

### 3.4 Competitor Analysis

**`Grp5 W4 - PRD Supplementary Data`**

*   **Shopify:** Globally popular, with comprehensive features and scalability.
*   **WooCommerce:** Good for customization but requires technical know-how.
*   **Wix and Squarespace:** User-friendly but lack some advanced ecommerce features.

---

## 4. Framing Hypothesis

### 4.1 Objectives and Motivations

To create dashboards that provide actionable insights for merchants and support mechanisms for the platform team, driving engagement, satisfaction, and growth.

### 4.2 Assumptions

*   **Activated Merchants:** Merchants are assumed to be in various stages of store setup.
*   **Ready Ecosystem:** Assume existing networks of suppliers and logistics providers.

### 4.3 Why Shopify?

Despite global success, Shopify's lower usage in India is identified, possibly due to lack of localized analytics and support systems.

### 4.4 Reasons merchants choose Shopify

*   **User-Friendly Interface:** Easy for beginners to manage.
*   **Comprehensive Features:** Wide range of tools available out-of-the-box.
*   **Scalability:** Suitable for small startups to large enterprises.
*   **Support and Resources:** Robust 24/7 assistance.
*   **SEO and Marketing Tools:** Built-in features for customer acquisition and retention.
*   **Third-Party Integrations:** Seamless linking with numerous tools and services.

### 4.5 Target User Personas

**`Week 4 - Shopify`**

*   **New Merchant**, who is beyond the activation point and has started using the platform with a subscription plan but has been using Shopify between 1-3 months and lies in the bottom 10% range.
*   **Experienced Merchant**, who is a well established merchant, in the top 10-20% range, and has also been a merchant on the shopify platform for over 5 years.
*   **Customer Success Manager**, who has the primary responsibility to ensure that the merchant health is improved.

|                                             | Persona 3                      | Persona 2                        | Persona 1                         |
| :------------------------------------------ | :----------------------------- | :------------------------------- | :-------------------------------- |
| **Name**                                    | Rohit Yadav                    | Gurunath Reddy                   | Srinivas Ranjan                   |
| **Age**                                     | 32-40                          | 22-30                            | 30-40                             |
| **Location**                                | Bengaluru                      | Chennai                          | Hyderabad                         |
| **Occupation**                              | Customer Success Manager       | Software Engineer                | MSME Retailer                     |
| **Business Channels**                       | NA                             | Online                           | Offline + Online                  |
| **Inventory model**                         | NA                             | Zero-inventory model             | Inventory available to serve offline & online demand |
| **Business Experience**                     | NA                             | New user                         | 5+ years                          |
| **Goals (Specific to Online Channel)**    | * Improve merchant feedback <br> * Help Sales team with top features to resolve merchant pain points <br> * Set up a User friendly customer support <br> * Improve Retention rate <br> * Improve the onboarding experience of the merchants. <br> * Understand what merchants would want to see on their analytics dashboard. | * Create a dropshipping business <br> * Manageable with minimal time commitment: <br> * Increase Overall Sales: <br> * Identify sales trends for faster product turnover <br> * Marketing tools to run targeted discounts and promotions <br> * Find reliable dropshipping suppliers <br> * Seamless supplier-customer delivery | * Increase Overall Sales of business beyond his city <br> * Encourage repeat purchases <br> * Increase Sales per category <br> * Expand Product Portfolio <br> * Utilize online analytics tools to understand customer behavior and buying trends. |
| **Pain Points**                             | * Low merchant retention rate <br> * Unable to merchant pain points through Feedback <br> * Increase Overall Sales: Rohith has a responsibility on how to improve merchant revenue and then improve Shopify's revenue. <br> * Gaps with the marketing, sales and product management team: Communicate with the teams on actual merchant pain points and help them be in sync. <br> * High support requests calls | * Affordable Platform: <br> * Knowhow of marketing & Promotions. <br> * Reliable Customer Service <br> * New Terminology can be overwhelming to understand | * Setting Up & Managing Online Store <br> * Inventory Management <br> * Creating and managing Marketing & Promotions. <br> * Local Language Support efficient customer service <br> * Integration with Existing Systems <br> * Affordable Platform Pricing <br> * Logistics Management is a Challenge |
| **Technological Comfort Level (Low, Medium, High)** | High                           | High                             | Low                               |

### 4.6 Prioritised Pain Points

#### 4.6.1 Merchant

*   Merchants having low technological comfort feel overwhelmed with new statistical terminologies
*   Difficult to understand marketing terminologies and what those metrics mean
*   Difficult to track deliveries and take stock of remaining inventories

#### 4.6.2 Platform

*   Challenge in retaining customers and identifying insights on merchant drop off rates
*   Difficulty in tracking usage of shopify products by the merchants
*   Challenge in providing a smooth customer support experience for new merchants on the platform

*[Chart Description: A bar chart titled "Pain Point Category Rating" shows ratings for various categories. Categories like "Marketing and Cust...", "Merchant Retention...", "Order Fulfillment an..." and "Supplier and Invent..." appear to have high ratings (pain points), while "Data and Analytics", "Scalability and App..." show lower ratings.]*
**`Week 4 - Shopify - Pain Points`**

---

## 5. Framing Solution

### 5.1 Ecosystem

Integrating merchants, suppliers, and logistics providers into a seamless support network.

### 5.2 Solution Overview

#### Key Features

*   **Onboarding Flow:** Guided tours and tutorials for new merchants.
*   **Main Dashboard:** Essential performance metrics.
*   **Detailed Reports:** Advanced reporting and alert systems.
*   **Platform Analytics Dashboard:** Monitoring tools for proactive support.
*   **Chatbot:** LLM Integrated chatbot will answer merchant queries on business insights

#### 5.2.1 Available Metrics on Shopify

**`Available Metrics Week 4 - Shopify`**

*   Currently metrics shown by Shopify help merchants look at the health of various aspects of their business to make informed decisions and improve overall performance.

#### 5.2.2 Activation Point for Shopify - Assumption

**Shopify Has An Average Returning Customer Rate of 27%**
We have assumed that a merchant setting up his website with payment channel established is called an active merchant (activation point for shopify)

#### 5.2.3 Hypothesis

*   Our New analytics platform will help merchants in getting superior insights for their online store, in turn growing their overall sales, and improved business metrics.
*   Further, the AI Capabilities will help non-tech merchants get insights in a conversational manner against graphs and numbers.

### 5.3 Functional Requirements

#### 5.3.1 Merchant Features

| Feature           | Description                                                                                                                                                                                                     |
| :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Onboarding Flow** | A guided onboarding process for new merchants to understand dashboard features. <br> **Steps:** <br> *   Welcome message & account setup. <br> *   Interactive walkthroughs of key dashboard features. <br> *   Setup of initial preferences and notification settings. |
| **Main Dashboard**  | Displays key metrics such as sales trends, customer acquisition costs, average order value, and conversion rates. <br> **Features:** <br> *   Customizable widgets for different metrics. <br> *   Interactive charts and graphs. <br> *   Option to navigate to detailed reports such as customer journey, order tracking, inventory management etc. through the main dashboard |
| **Detailed Reports**| Allows merchants to create customizable reports along with the availability of OOTB reports with advanced filters. <br> **Features:** <br> *   OOTB reports available around categories such as visitor origin, customer journey, order tracking, inventory management, financial statistics etc. <br> *   Date range selection, metric filters, and data export options. <br> *   Interactive report building tools and templates. |
| **Insights**        | At the top of each detailed report dashboard, there's an AI-generated insights section that offers proactive and personalized insights to the merchant for a specific time period <br> E.g. 'Your customers are completing the order life cycle, cart abandonment rate has decreased by 0.5% from last week' |
| **Conversational AI - Shopy** | It is a bot designed for merchants & is localized to support multiple Indian languages: <br> *   Merchants can ask any questions related to their business operations, sales, customer behavior, etc. <br> *   It can understand and respond to queries in natural language, providing valuable insights/ guidance based on the data and correlations it analyzes. <br> *   This flexibility allows merchants to get tailored information and support for optimizing their business strategies & decision-making processes. <br> *   It is connected to the charts on the dashboard and remembers details/ context about those charts. Merchants can ask any questions directly to Shopy right there. <br> *   Continuous improvement: Feedback loop for enhancing chatbot algorithms and performance over time. <br> *   If merchants seek recommendations, the bot directs them to consider purchasing the premium version for further guidance. |
| **Action Items**    | Linked to dashboard charts, purchasing the premium version unlocks personalized actionable insights and recommendations for merchants' next steps.                                                              |
| **Alert System**    | Notifies merchants of significant changes in their performance metrics. <br> **Features:** <br> *   Email/SMS notifications. <br> *   Customizable alert criteria (e.g., drop in sales, inventory threshold). |

#### 5.3.2 Platform Features

| Feature             | Description                                                                                                         |
| :------------------ | :------------------------------------------------------------------------------------------------------------------ |
| **Activity Monitoring** | Overview of merchant activity, including login frequency and feature usage. <br> **Features:** <br> *   User activity logs. <br> *   Heat maps showing peak usage times. |
| **Trend Visualization** | Graphs and charts to quickly identify trends and anomalies. <br> **Features:** <br> *   Line charts for activity trends. <br> *   Bar graphs and pie charts for feature usage distribution. |
| **Insights**          | At the top of the dashboard, there's an AI-generated insights section that offers proactive and personalized insights to the merchant for a specific time period |
| **Support Integration** | Automation of alerts and integration with customer support tools. <br> **Features:** <br> *   Real-time alerts for declining merchant activity. <br> *   Integration with CRM and help desk tools for seamless support. |

### 5.4 Non-Functional Requirements

*   **Security:** Secure data storage and take robust measures to protect merchant data.
*   **Scalability:** The application should be scalable to accommodate the needs of growing merchants and their user base.
*   **Performance:** Efficient data processing and quick load times.
*   **Usability:** Intuitive and user-friendly interface for efficient merchant engagement.
*   **Accessibility:** Compliant with accessibility standards for users with disabilities.

### 5.5 Technical Considerations

*   **3rd Party Integration:** Define protocols for data exchange with 3rd party apps and platform compatibility.
*   **Data security and compliance measures:** Utilize a robust data pipeline to handle large volumes of merchant and user activity data efficiently.
*   **Real-time data processing and visualization tools:** Utilize live data optimized search queries to cache large data to load faster.
*   **AI and Machine Learning:** Leverage machine learning algorithms for predictive market trends and search intelligence.
*   **API Design:** Define APIs for seamless integration with public transport systems and third-party applications.

### 5.6 Design Framing

#### 5.6.1 Concept Designs

Visual representations of key dashboard elements:

*   **Merchant dashboard** - Will display the key metrics related to the merchant for them to track performance
    *   Overview Section will have various buckets for metrics such as by product, by customers etc
    *   Merchant can customize
*   **Platform dashboard**- will enable the customer Success manager to see metrics related to the merchant health

*[Description: Two rough sketches show conceptual layouts. Merchant Dashboard: Profile, Menu, Reports (day-to-day), Data Insights, Sales, Revenue (ETB/NTB), Avg Order, Customers, Onboarding/Inv. Platform Dashboard: Profile, Menu, Merchants (Active/Churn), Sales, Revenue, Data Insights, Marketing.]*

    *   The overview section will have bucket based metrics. On clicking a particular bucket, all the metrics will appear such as merchant engagement

#### 5.6.2 Mockups & Prototype

*   **Figma File:** [https://www.figma.com/design/Y9PFsNcfmAapu3Po5tpZmC/Biz-Genie?node-id=69-5382&t=RafBXVfLi69cynxv-1](https://www.figma.com/design/Y9PFsNcfmAapu3Po5tpZmC/Biz-Genie?node-id=69-5382&t=RafBXVfLi69cynxv-1)
*   **Platform Prototype:** [https://www.figma.com/proto/Y9PFsNcfmAapu3Po5tpZmC/Biz-Genie?node-id=69-6466&t=zGBHZvJZA9UIWJjr-1&scaling=scale-down&content-scaling=fixed&page-id=69%3A5382&starting-point-node-id=69%3A6466](https://www.figma.com/proto/Y9PFsNcfmAapu3Po5tpZmC/Biz-Genie?node-id=69-6466&t=zGBHZvJZA9UIWJjr-1&scaling=scale-down&content-scaling=fixed&page-id=69%3A5382&starting-point-node-id=69%3A6466)
*   **Merchant Prototype:** [https://www.figma.com/proto/Y9PFsNcfmAapu3Po5tpZmC/Biz-Genie?node-id=39-9993&t=jpLy2MYk8GX8nvUT-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=39%3A9993](https://www.figma.com/proto/Y9PFsNcfmAapu3Po5tpZmC/Biz-Genie?node-id=39-9993&t=jpLy2MYk8GX8nvUT-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=39%3A9993)

### 5.7. User Flow

#### 5.7.1 Diagram

**`Dashboard Userflow`**

| Stage               | Actions                                                                                                                                                                           |
| :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Onboarding**        | - User receives an invitation to the new dashboard.<br>- User completes a guided tour that highlights key features.<br>- User sets up their initial preferences and receives a welcome email with additional resources. |
| **Dashboard Engagement** | - User logs in and views the main dashboard displaying key metrics.<br>- User customizes the dashboard layout to prioritize relevant metrics.<br>- User explores different sections such as sales trends, customer acquisition costs, average order value, and conversion rates. |
| **Advanced Features** | - User generates custom reports with advanced filters.<br>- User sets up alerts for significant changes in their performance metrics.                                             |
| **Continued usage**   | - User regularly logs in to check alerts and update reports.<br>- User interacts with support features, such as accessing the knowledge base or contacting customer support for assistance. |

### 5.8 User Stories

#### 5.8.1 Narrative

Sarah, a new merchant, experiences a smooth onboarding process and finds the dashboard intuitive. She accesses key metrics, sets up alerts, and generates custom reports to optimize her store's performance.

#### 5.8.2 User Stories for Different Personas

|                     | Rohit Yadav (Founder, Age 25-35)                                                                                                | Gurunath Reddy (Software Engineer, Age 22-30)                                                                 | Srinivas Ranjan (MSME Retailer, Age 30-40)                                                                                                      |
| :------------------ | :------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Goal**            | Maximize online sales, manage inventory, optimize pricing, and assess market trends.                                            | Establish a dropshipping business with minimal time commitment, leveraging data for quick insights.           | Integrate online and offline sales, grow customer base, and efficiently manage inventory and promotions.                                     |
| **User Story**      | As a founder, I want detailed sales analytics and inventory management features so that I can optimize pricing and reduce stockouts. | As a dropshipping business owner, I want quick insights into trends and supplier performance so that I can make informed decisions with minimal effort. | As an MSME retailer, I want to integrate my online and offline sales data so that I can manage inventory efficiently and run effective promotions. |
| **User Flow**       | **Onboarding:** Completes walkthrough focused on sales and inventory features. <br> **Dashboard Customization:** Customizes dashboard to show sales trends and inventory levels. <br> **Advanced Features:** Uses reporting tools to analyze pricing strategies. <br> **Continuous Engagement:** Sets up alerts for low inventory and significant sales drops. | **Onboarding:** General walkthrough with emphasis on supplier performance metrics. <br> **Dashboard Customization:** Configures dashboard to prioritize supplier data and trend analysis. <br> **Advanced Features:** Quickly generates reports on top-sell items and supplier efficiency. <br> **Continuous Engagement:** Sets up alerts for supplier delays and trending products. | **Onboarding:** Completes walkthrough focusing on integration features. <br> **Dashboard Customization:** Configures dashboard to show both online and offline sales data. <br> **Advanced Features:** Generates reports combining online and offline sales performance. <br> **Continuous Engagement:** Sets up alerts for inventory levels and promotional success metrics. |

---

## 6. Metrics for Dashboard

Detailed explanation of feature to metrics mapping is available here: **`Week 4 - Shopify`**

### 6.1 Key Metrics (Merchant Dashboard):

| Metrics                                      | Insights we get?                                                  | Detailed Formula                                                                                                    | Metric Type |
| :------------------------------------------- | :---------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------ | :---------- |
| Search Demographics <br> Search Keywords    | AI-based recommendations to improve product discoverability         | Bounce Rate = # of Single Page Visit/# of Page Visits <br> Avg Session Duration = Total time spend/ total Visit <br> Unique Views | Leading     |
| Conversion Rates <br> # Add to Cart <br> Cart abandonment rate | Identify reasons for cart abandonment, like payment or amount issues. | Conversion Rate = Visited user / # of transacted user <br> Cart Abandonment rate=(Carts created - Carts completed) / Carts created * 100 | Lagging     |
| Return/Refund Rate                           | Merchants gauge return ease and speed to improve experience.        | Return/Refund Rate = (Number of returns or refunds / Number of orders) * 100                                          | Lagging     |
| Customer Lifetime Value <br> Marketing ROI by campaign <br> Churn Rate <br> Repeat Customers <br> Customer Retention Rate <br> Average Order Value | Merchant can find which channel is contributing the most sales and has the highest Return on Ad Spend (ROAS) | LTV = ARPU * Average Customer Time <br> Marketing ROI = (Revenue from campaign - Cost of campaign) / Cost of campaign * 100 <br> Churn rate =(Customers at start of period - Customers at end of period) / Customers at start of period * 100 <br> Customer Retention Rate = (Customers at end of period - New customers acquired during period) / Merchants at start of period * 100 <br> Repeat Customer Rate = (no. of repeat customers in a defined time period)/ total number of unique customers | Lagging     |
| Profit Margin Analysis                       | Analyze profit margins for strategic decision-making.             | Profit Margin Analysis = (Total revenue - Total costs) / Total revenue * 100                                          | Lagging     |
| Total Sales <br> Average Order Value <br> Top Selling Product | Merchants on free plan gauge product performance & customer acquisition cost. | Average order value(AOV) = Total Cart Value/Total Items                                                             | Lagging     |

### 6.2 Key Metrics (Platform Dashboard)

| Top Metrics                                                            | Insights we get?                                                            | Detailed Formula                                                                                                                                                                                                                                                                              | Metric Type |
| :--------------------------------------------------------------------- | :-------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------- |
| Merchant Engagement Score <br> Churn Rate <br> Retention Rate          | Insights into customer satisfaction, loyalty, product quality and Business Health | Churn rate =(Merchants at start of period - Merchants at end of period) / Merchants at start of period * 100 <br> Retention Rate = (Merchants at end of period - New merchants acquired during period) / Merchants at start of period * 100                                                    | Lagging     |
| Customer Acquisition Cost <br> Customer Lifetime Value <br> Marketing ROI <br> Churn Rate | Evaluating product-market fit through the LTV/CAC ratio                 | CAC= (Cost of Marketing)/(# of Paid Customer added) <br> LTV = ARPU * Average Customer Time                                                                                                                                                                                                  | Lagging     |
| Conversion Rates                                                       | It will show how efficiently the Merchant is moving through the funnel      | Conversion Rate = Total Paid Subscription Merchants/Number of Leads                                                                                                                                                                                                                         | Leading     |
| Product adoption Rates <br> Product Heatmap                           | Insight into how quickly and effectively a product is being accepted by prospective customers | Adoption Metric(Time to First Key Action) for e.g. First Click, First Purchase                                                                                                                                                                                                      | Leading     |
| Merchant GMV <br> Average Revenue per merchant by subscription fee tier <br> Average Transaction Value | GMV can help identify seasonal trends for a merchant / An increasing GMV over a period of time will | GMV = Sales Price of Goods x Number of Goods Sold <br> Average Revenue per Merchant = Total Revenue from tier/ Number of merchants in a tier                                                                                                                              | Lagging     |
| Merchant Engagement Score <br> Churn Rate <br> Retention Rate          | Insights into customer satisfaction, loyalty, product quality and Business Health | Churn rate =(Merchants at start of period - Merchants at end of period) / Merchants at start of period * 100 <br> Retention Rate = (Merchants at end of period - New merchants acquired during period) / Merchants at start of period * 100                                                    | Lagging     |
| Catalog Loading Failures <br> Redirect Failures <br> Purchase Transaction Failures etc. | Identification of recurring issues or patterns that may indicate underlying systemic problems. | Catalog Loading Failures = Count of failed requests/ total catalog page requests. <br> Redirect Failures = Count of failed redirects/ total redirect attempts. <br> Purchase Transaction Failures = Count of failed transactions/total transactions attempted. | Lagging     |

---

## 7. GTM Plan

The Go-To-Market (GTM) plan outlines the strategy and actions required to successfully launch and drive the adoption of the new Merchant and Platform Analytics Dashboards. This plan addresses market research, marketing strategy, sales enablement, customer onboarding, and support.

### Offline Activities

| Channel & Channel Enabler       | Activity                                                                                                                                                                                                                                                                                                                                                                                    |
| :------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Sales Enablement**            | - **Training Programs:** Develop comprehensive training modules for the sales team to effectively communicate the value of the dashboards. <br> - **Sales Collateral:** Create brochures, one-pagers, and demo videos to assist sales in pitching the product. <br> - **Pilot Programs:** Run pilot programs with key merchants to generate case studies and success stories.                      |
| **Channel Partner, Partner Manager** | - Build relationships and network with potential industrial partners at events and industry forums <br> - Provide demos of the app to showcase features and benefits <br> - Establish an advocacy group among partners to promote and support the app within their networks <br> - Create a partner program with incentives for successful referrals and sales <br> - Develop co-branding opportunities and joint marketing campaigns with partners <br> - Offer training sessions to partners to ensure they fully understand the app and can effectively promote it. |

### Online Activities

| Channel & Channel Enabler             | Activity                                                                                                                                                                                                                                                                                                                                                      |
| :------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Content Marketing, Content Manager**  | - Develop and distribute high-quality content such as blog posts, case studies, and whitepapers highlighting the app's benefits <br> - Utilize SEO strategies to increase visibility of the content <br> - Share relevant content through social media channels and industry forums. <br> - Engage with the audience through regular updates and informative posts. |
| **Social Media, Social Media Manager**| - Create and manage social media profiles on platforms like LinkedIn, Twitter, and Facebook <br> - Post regular updates, success stories, and customer testimonials <br> - Conduct social media campaigns to drive awareness and engagement. <br> - Utilize paid advertising to reach a broader audience. <br> - Monitor and respond to comments and messages to engage with the community. <br> - **Official Announcement:** Launch press releases, blog posts, and social media announcements. |
| **Email Marketing, Email Marketing Specialist** | - Build and maintain an email list of potential leads and existing customers <br> - Send out regular newsletters, product updates, and promotional offers <br> - Personalize email content based on the recipient's interests and engagement history <br> - Track email campaign performance and optimize content for better engagement.                      |
| **Webinars and Online Demos, Product Manager** | - Host regular webinars and online demos to showcase the app's features and benefits <br> - Invite industry experts to speak at webinars to attract a larger audience <br> - Use Q&A sessions to address participants' questions and concerns <br> - Follow up with attendees to nurture leads and gather feedback.                                           |

---

## 8. Rollout Plan

Our objectives is to

*   Ensure a smooth transition for existing users and a seamless experience for new users.
*   Monitor and manage any issues that arise during the rollout.
*   Gather early feedback to make iterative improvements.

| Phase & Duration                    | Activities                                                                                                                                                                                                                                                              |
| :---------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Phase 1: Pilot Program (4-6 Weeks)** | **Internal Training:** Train internal teams including support, sales, and customer success on the new dashboards. <br> **System Setup:** Set up servers, databases, and data pipelines; configure security protocols; test integrations. <br> **Content Creation:** Develop user manuals, FAQs, training videos, and other onboarding resources. <br> **Pilot Testing:** Conduct tests for performance, usability, and functionality; gather feedback and make necessary adjustments. |
| **Phase 2: Soft Launch (2-3 Weeks)**  | **Limited Release:** Roll out the dashboards to a limited audience (e.g., 10-20% of users) to monitor real-world usage. <br> **Feedback Collection:** Actively gather feedback from the limited release users. <br> **Performance Monitoring:** Track server load, response times, error rates; implement fixes as necessary.                                |
| **Phase 3: Full Launch (3-4 Weeks)**  | **Wide Release:** Notify all merchants about the new dashboards; update the app and web platforms with new features. <br> **Marketing and PR:** Issue press releases, run social media campaigns, send out email newsletters. <br> **Onboarding Programs:** Support new and existing users through comprehensive onboarding programs. <br> **Support Enhancement:** Hire additional support agents, extend support hours, and enhance self-service support options. |
| **Phase 4: Post-Launch (Ongoing)**  | **Continuous Support:** Regular check-ins, user groups, and advanced training sessions. <br> **Iterative Improvements:** Implement updates and new features, fix bugs, and optimize performance. <br> **Feedback Loop:** Maintain an open feedback loop with users to continuously collect insights. <br> **Performance and Usage Monitoring:** Continuously monitor performance and usage metrics. |

---

## 9. Pricing Plan

### 9.1 Objectives

*   Ensure pricing is competitive and attractive for a diverse range of merchants.
*   Align pricing with the value provided by the dashboards.
*   Encourage adoption through flexible and scalable pricing tiers.
*   Maximize revenue while balancing affordability for small and medium-sized enterprises.

### 9.1 Pricing Plan Details (Note: Should likely be 9.2)

| Plan           | Ideal For                                          | Features Included                                                                                                                                                                                           | Price (INR)      |
| :------------- | :------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------- |
| **Basic Plan**   | Small businesses and new merchants.                | Access to essential analytics (e.g., sales trends, basic customer insights). <br> Basic reporting and alert system. <br> Standard support (email support with 24-hour response time).                             | ₹1,000/month     |
| **Standard Plan**| Growing businesses with higher data needs.         | All features in Basic Plan. <br> Advanced analytics (e.g., customer acquisition costs, average order value). <br> Customizable reports and advanced filtering options. <br> Enhanced support (priority email and chat support). | ₹3,500/month     |
| **Premium Plan** | Established businesses and enterprises.            | All features in Standard Plan. <br> Comprehensive analytics suite including conversion rates and detailed customer segmentation. <br> Real-time alerts and automated recommendations. <br> Dedicated account manager and 24/7 phone support. <br> Integration with other business tools (e.g., CRM, ERP). | ₹9,000/month     |
| **Pay-as-you-use**| Businesses preferring flexibility                  | Suitable for seasonal businesses or those with fluctuating data needs. <br> Includes all Standard Plan features with usage-based billing.                                                                       | ₹500 /active user per month |
| **Customized**   | Enterprises                                        | All features in Premium Plan. <br> Custom integrations and tailored analytics. <br> On-site training and consulting services. <br> Price: Negotiable based on requirements.                                        | Negotiable / contract based |

### 9.2 Bundled Pricing Model (Note: Should likely be 9.3)

| Type                       | Description                                                                                                                                                                                                                                                                                            |
| :------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Free Trials**            | Offer a 30-day free trial on all subscription tiers. Enable merchants to explore the full capabilities of the dashboards without commitment. Collect usage data and feedback to convert trial users into paying customers.                                                                               |
| **Intro Discounts**        | Provide introductory discounts (e.g., 20% off for the first 3 months) to incentivize sign-ups. Seasonal promotions and discounts during industry events or Shopify business anniversaries.                                                                                                                  |
| **Training & Support Packages** | **Basic Training Package:** Access to online tutorials and webinars. Price: ₹5,000 one-time fee. <br> **Advanced Training Package:** Personalized training sessions and workshops. Price: ₹25,000 one-time fee.                                                                                           |
| **Consultation Services**  | Offer consultation services to help merchants optimize their use of the dashboards and improve their business performance. <br> **Hourly Rate:** ₹8,000/hour. <br> **Consultation Packages:** Discounts available for bulk consultation hours.                                                                 |

Revenue Forecasts - **`Week 4 - Shopify`**

---

## 10 Success Metrics

### 10.1 Industry Recognition

Seek endorsements and quotes from industry experts to build credibility.

### Success Metrics Table

| Feature                           | Success Metric                                                         | Tracking Method                                                                                                                               | Time Frame |
| :-------------------------------- | :--------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- | :--------- |
| **Baseline**                      | Merchant Activation Rate <br> Engagement with Advanced Features <br> GMV per Merchant | Percentage completing onboarding <br> Adoption metrics of advanced analytics. <br> Overall sales performance                                     | Monthly    |
| **Customer Support**              | Support Response Time <br> Issue Resolution Rate                       | Efficiency in addressing merchant issues. <br> Effectiveness in resolving support tickets                                                          | Monthly    |
| **Merchant & Platform Dashboard** | Frequency of Use (FoU) <br> Duration of Use (DoU) <br> Feature Interaction Count (FIC) <br> Number of Actions Taken (NoAT) <br> Merchant Satisfaction Score (MSS) | Count(User Logins) / Time Period <br> Sum(Session Durations) / Time Period <br> Sum(Feature Interactions) / Session <br> Count(Actions Taken) / Session <br> Overall satisfaction with platform support | Monthly    |
| **Predictive Analytics**          | Prediction Accuracy (PA) <br> User Engagement with Predictive Features (UEPF) <br> Market Trend Prediction Accuracy (WIPA) | (Number of accurate predictions / Total number of predictions) * 100 <br> Count of interactions with predictive features / Total sessions <br> (Number of accurate market trend predictions / Total number of market trend predictions) * 100 | Quarterly  |
| **GTM**                           | Awareness <br> Adoption <br> Engagement <br> Customer Satisfaction <br> Revenue Impact | Increase in website traffic and social media engagement. <br> Number of new merchants onboarding and actively using the dashboards. <br> Usage metrics such as time spent on dashboards, the frequency of report generation, and alert setups. <br> CSAT scores and feedback from user surveys. <br> Increase in GMV per merchant and overall platform revenue. | Monthly    |
| **Rollout**                       | Adoption Rate <br> User Satisfaction <br> Engagement Metrics <br> Support Metrics <br> Performance Metrics <br> Feedback Quality | Percentage of merchants actively using the new dashboards. <br> CSAT scores and feedback from user surveys. <br> Usage frequency, time spent on dashboards, and feature utilization rates. <br> Number of support tickets, response and resolution times. <br> Dashboard load times, error rates, and system uptime. <br> Volume and quality of feedback received. | -          |

---

## 11. Risk and Mitigation Strategies

Launching new dashboards entails various risks that could impact their success. Identifying these risks and developing robust mitigation strategies is crucial to ensure a smooth rollout and ongoing success.

| Risk Type                          | Types of Risks                                                                                                                   | Mitigation Strategies                                                                                                                                                                                                                                                                                                                                                                                     |
| :--------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Technical Risks**                | **System Downtime:** Risk of the platform experiencing downtime or performance issues during or after launch. <br> **Integration Issues:** Challenges in integrating the new dashboards with existing systems and data sources. | **Robust Infrastructure:** Invest in scalable and resilient infrastructure to handle increased load and ensure uptime. <br> **Thorough Testing:** Rigorous pre-launch testing to identify and resolve integration issues and performance bottlenecks. <br> **Disaster Recovery Plan:** Develop a comprehensive disaster recovery plan to ensure business continuity in case of system failures.                 |
| **Performance and Scalability Risks** | **Performance Degradation:** The dashboards might slow down with increased user traffic. <br> **Scalability Constraints:** Inability to scale the infrastructure to accommodate growing user numbers.          | **Scalable Architecture:** Design the dashboards with scalability in mind, ensuring they can accommodate growth without performance degradation. <br> **Performance Monitoring:** Implement real-time performance monitoring tools to detect and address issues proactively. <br> **Load Testing:** Conduct load testing to understand how the system behaves under different usage loads and optimize accordingly. |
| **Competitive Risks**              | **Market Competition:** Competitors might launch similar or superior products. <br> **Feature Parity:** New dashboards may lack critical features offered by competitors.                                  | **Continuous Innovation:** Keep a close eye on market trends and continuously innovate to stay ahead of competitors. <br> **Feature Parity Analysis:** Regularly analyze competitor features and update the dashboards to ensure feature parity or superiority. <br> **Customer Feedback Loop:** Establish a strong feedback loop with customers to quickly identify and act on requested features.       |
| **User Experience Risks**          | **Complexity:** The dashboards might be perceived as too complex or unintuitive by users. <br> **Lack of Training:** Insufficient training materials and support could hinder effective usage.                | **User-Centric Design:** Employ user-centric design principles to ensure the dashboards are intuitive and easy to use. (Consumers first Principal) <br> **Comprehensive Support:** Offer 24/7 support through various channels (chat, email, phone) to assist users when needed. <br> **Iterative Design Improvements:** Use feedback and data analytics to iteratively improve the user experience.         |
| **Regulatory and Compliance Risks**| **Regulatory Changes:** Changes in data protection regulations could impact platform operations. <br> **Non-Compliance:** Risks associated with not meeting regulatory requirements.                       | **Compliance Monitoring:** Stay updated with regulatory changes and ensure timely compliance with new requirements. <br> **Legal Consultation:** Regularly consult with legal experts to ensure all platform operations are compliant with relevant laws and regulations.                                                                                                                            |

Risk Management Plan **`Week 4 - Shopify`**

---

## References

*   E-commerce vs. Offline Retail Business: Pros and Cons
*   Over 60% of Indian small businesses use website, e-store or e-commerce to grow; above global average
*   D2C companies: Offline stores are trending
*   Shopify Market Share Analysis
*   Shopify Market Share & Statistics
*   The Ultimate Guide to Ecommerce Metrics