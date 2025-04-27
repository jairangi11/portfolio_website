***

# Credit Pesa Africa - 

**For M-Pesa, 2007 Vodafone**

*Excel File Link:* `Week 6 - CreditPesa` (Placeholder for Excel file)
*PDF Document Link:* `Case Study 5_ The Case for _Unsecured Credit_ in M-Pesa.pdf` (Placeholder for PDF file)

[Image: CREDIT PESA Logo - Stylized 'CP' initials within a circular, tech-like design with circuitry patterns.]

## 1. Introduction - Understanding the Problem

Africa's young population and rich resources promise a bright future, but hurdles like infrastructure gaps and a reliance on commodities remain. Despite these challenges, the continent is experiencing a financial inclusion revolution driven by mobile money. Services like M-pesa in Kenya have bypassed traditional banking limitations, reaching millions who were previously unbanked.

M-Pesa, launched in 2007 by Vodafone for Safaricom and Vodacom, has been a transformative force in the financial services landscape of Africa with its ability to provide accessible and affordable financial services to underserved populations, particularly in regions with limited banking infrastructure.

**Problem Statement**

While M-Pesa simplifies transactions, the absence of an embedded credit facility restricts its utility for users in need of instant financial assistance. The challenge lies in developing "Credit-Pesa," an innovative solution that provides short-term credit through M-Pesa, enhancing the system's functionality without compromising its simplicity and user experience.

### 1.2 Scope

*   African sub-continent only
*   M-Pesa user base

### 1.3 Objectives and Motivations

1.  **Seamless Integration:** Integration with existing M-Pesa interface.
2.  **Real-time Credit Assessment:** Implementation of risk assessment model a.k.a Credit model.
3.  **Regulatory Alignment:** Ensurance of full compliance with the norms set by financial authorities.
4.  **Flexible Repayment Options:** Offer user-friendly repayment schemes

### 1.4 Assumptions

*   The countries have the availability of Vodafone networks set up in their areas.
*   Users have already purchased M-Pesa SIM cards and configured M-Pesa in their mobiles.
*   Users have easy access to M-Pesa agents in their area.
*   The relevant data

## 2. Research: Decoding the Existing Ecosystem

### 2.1 About M-Pesa

*   **What is M-PESA** - M-PESA is the world's leading mobile money service, with over 40 mn active users across 7 African markets - Kenya, Tanzania, Mozambique, DRC, Lesotho, Ghana, and Egypt allowing people without traditional bank accounts to access financial services using their mobile phones.
*   **Problem which M-PESA solved** - In the early 2000s, Kenya experienced a large rural to urban migration for better opportunities but this created a need to send money back to their families in rural areas.
*   **Solution** - M-PESA uses a person's phone number as their account number and their mobile phone as a mobile wallet. Users can transfer money, pay for goods and services, access credit and savings, and much more. M-PESA users can fund their accounts through authorized agents, banks, or by depositing cash. They can also withdraw cash through agents or ATMs.
*   **Impact** - M-PESA has had a remarkable impact in Kenya, reducing the percentage of Kenyans without access to financial services, increasing per capita consumption levels, and lifting many households out of poverty. Pay by M-Pesa is already accepted by over 200k African merchants, including leading online players such as DSTV, Uber, Kenya Airways, and Jumia, ‘the Amazon of Africa’
*   **How does it works:**

    [Diagram: Flowchart showing M-Pesa transactions including Person-to-Person transfer, Agent deposit/withdrawal, M-Shwari savings, Bill Payment (Electricity Co.), Airtime purchase, and Bank Account interaction.]

    *Source:* [https://www.researchgate.net/figure/Functions-of-m-pesa_fig16_298303783](https://www.researchgate.net/figure/Functions-of-m-pesa_fig16_298303783)
    *For more details on M-Pesa -* `M-Pesa` (Placeholder/Link)

### 2.2 Africa - Banking Solutions

*   We have compared below 5 countries where M-Pesa is present based on their current economic condition, banking services penetration and digital lending infrastructure
*   Kenya and South Africa are the front runners when it comes to adoption of digital lending
*   However, they are also prone to high default rates in repayment of loans, which can be corroborated by the fact that the licensing regulations are not stringent in these countries
*   Tanzania, which has strict regulations over digital lending licenses has a lower default rate

**Country Comparison Table**

| Factors/ Countries                      | Kenya                                                                                                                                                                                                                                                                                                                      | Tanzania                                                                                                                                                                                                                          | Ghana                                                                                                                                        | South Africa                                                                                                                                         | Lesotho                                                                                                                                                                                             |
| :-------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Banking system penetration**          | High Mobile Money Penetration, Growing FinTech                                                                                                                                                                                                                                                                               | Limited Financial Infrastructure, Mobile Money Gaining Traction                                                                                                                                                                   | Growing Mobile Money Presence, Limited Data on FinTech                                                                                       | More Developed Banking System, Established FinTech Presence                                                                                              | Established FinTech Presence                                                                                                                                                                        |
| **User segmentation based on income** | Refer docs                                                                                                                                                                                                                                                                                                                 | Refer docs                                                                                                                                                                                                                        | Refer docs                                                                                                                                   | Refer docs                                                                                                                                             | -                                                                                                                                                                                                   |
| **Network reach**                       | Kenya has overall 85% mobile network penetration, along with widespread 3G coverage and growing 4G coverage and 50% smartphone penetration.                                                                                                                                                                             | Tanzania has around 70% mobile network penetration and 3G coverage in majorly urban areas and 4G coverage in urban pockets. Smartphone penetration is 35%.                                                                       | Ghana has 80% mobile network penetration along with widespread 3G coverage and growing 4G coverage in urban centers. Smartphone penetration is at 40% and growing. | South Africa has widespread mobile network penetration with the majority of people owning many SIM cards. Smartphone penetration is over 70%. 3G coverage is extensive and 4G coverage is dominant. | Lesotho has 50% mobile network penetration with 25% smartphone penetration. 3G coverage is limited to urban areas and 4G is just emerging.                                                      |
| **Current credit setup**                | -unlicensed lenders allowed<br>-Commercial banks have adopted a TCC(total cost of credit pricing mechanism including all the charges to be borne by the borrower<br>-**Mobile Payments**<br>Total Active Agents - **332 Thousands**<br>-Total registered mobile money accounts - **77.44 million**<br>- 1 Agent per **233** active mobile money accounts | -unlicensed lenders allowed<br>-Microfinance regulations divide institutions in 4 tiers - banks, non-deposit microfinance providers<br>-The savings and credit co-operative societies<br>-community microfinance groups            | -Strict lending system<br>-Registered Agents - **608,000**<br>-Registered customer accounts - **65.6m**<br>-Policy interest rate - 27%<br>- 1 Agent per **108** active mobile money accounts | -National Credit Regulator (NCR) is responsible for regulating the online lending industry in South Africa.<br>-12.66 Mobile money agents per 1000 Sq Km                                       | -Mobile money accounts **1.280 million**<br>-Total Active Agents - **17,125**<br>- 1 Agent per **74** active mobile money accounts<br>- 39% have access to formal banking<br>- 46% have access to informal lending |
| **Credit system analytics (setup+ failures)** | - Credit reference bureaus approved by Kenyan central bank<br>- Score range from 200-900; 900 being the best<br>- Banks are devising their own credit rating models<br>- Credit starvation is being tackled by applying sanctions on financial institutions                                                              | -Two approved credit rating agencies serving 50+ commercial banks<br>-Multiple types of score cards - predictor, fraud - propensity, - collection scorecard                                                                 | -8.8mn people have credit data captured, almost 50% of the adults                                                                              | -Four major credit bureau<br>-Credit bureaus update credit reports every 45 days                                                                  | -MFIs withholding their identity documents as collateral. This lack of customer protection is still a cause of concern.                                                                              |
| **NPA handling - Default Rate**         | -50.9 % and 46.3 % of borrowers of loans through mobile banking and digital app loans reported to have defaulted repayment.                                                                                                                                                                                              | -NBFI Default rate -13.2%                                                                                                                                                                                                         | -NPA is in single digits (West african countries fare better like Ghana)                                                                       | -Composite default rate at 4.68%                                                                                                                       | -no details available                                                                                                                                                                               |
| **Current economic ecosystem**          | - Economy grew at 5.2%<br>-policy rate 12.5%<br>-GDP per capita - $1,980                                                                                                                                                                                                                                                 | -Economy grew at 5.2%<br>- Policy rate 6%<br>-GDP per capita - $1,220                                                                                                                                                           | -Economy decelerated by 2.3%<br>-GDP per capita -$2,230<br>-Policy interest rate -27%                                                              | -Economy grew at just 0.6%<br>Policy rate -8.25%<br>-GDP per Capita - $6,253.2                                                                          | -Economy grew at 2.4%<br>-policy rate 12.5%<br>-GDP per capita - $1,110                                                                                                                             |
| **Banking Rules and Regulations**       | **Central Bank of Kenya (CBK):** The Banking Act, CBK Prudential Guidelines, Microfinance Act, National Payment System Act, and Proceeds of Crime and Anti-Money Laundering Act govern banking operations and financial inclusion                                                                                         | **Bank of Tanzania (BoT):** The Banking and Financial Institutions Act, Foreign Exchange Act, Microfinance Act, and Anti-Money Laundering Act regulate banking activities and financial stability                                | **Bank of Ghana (BoG):** The Banks and Specialized Deposit-Taking Institutions Act, Payment Systems and Services Act, Non-Bank Financial Institutions Act, and Anti-Money Laundering Act ensure comprehensive banking supervision and financial integrity | **South African Reserve Bank (SARB):** The Banks Act, Financial Sector Regulation Act, National Payment System Act, and Financial Intelligence Centre Act provide a robust regulatory framework for banking operations and financial oversight | **Central Bank of Lesotho (CBL):** The Financial Institutions Act, Money Laundering and Proceeds of Crime Act, and Payments Systems Act oversee banking practices and promote financial inclusion             |
| **National identity**                   | **National ID Card:** National ID, biometric data, mobile number integration, 2FA, and PIN codes                                                                                                                                                                                                                          | **National Identification Card (NIDA):** National ID, biometric verification                                                                                                                                                    | **Ghana Card (NIA):** National ID, biometric data, and mobile phone integration                                                                | **Smart ID Card:** National ID, biometric data, mobile phone verification, and 2FA                                                                     | **National ID Card:** National ID, biometric verification                                                                                                                                           |
| **Mindset related to available solutions** | High trust in mobile money platforms like M-Pesa; acceptance of digital banking                                                                                                                                                                                                                                             | Trust in mobile and digital banking; traditional banking still preferred in rural areas.                                                                                                                                        | ongoing adaptation digital banking and fintech                                                                                                 | Reliable established banks. Acceptance to Digital banking and fintech services, but still data security concern.                                       | Shift towards digital banking. But traditional banking is still prevalent in rural areas.                                                                                                         |

---

**Detailed research docs for Kenya, Ghana, South Africa and Tanzania**
These docs addresses current economic trends, banking and credit ecosystem, user segmentation based on income
`Kenya Research`, `Ghana Research`, `Tanzania Research`, `South Africa Research` (Placeholders/Links)

#### 2.2.1 Insights from Research

*   **Mobile Money is King:** Across Kenya, Ghana, Tanzania, and South Africa, mobile money is a game-changer for financial inclusion, reaching the unbanked and underbanked. Kenya's M-Pesa is a prime example.
*   **Income Shapes Needs:** All four countries share similar income segments (low, middle, high). Low-income prioritize basic needs like savings and microloans, while middle-income seek credit for education and business. High-income seek investment options.
*   **Challenges Remain:** Limited financial infrastructure, particularly in rural areas, hinders inclusion. High-interest rates, especially in microfinance and informal sectors, burden borrowers. Financial illiteracy across income groups is a hurdle.
*   **FinTech Offers Promise:** Kenya and South Africa lead the way with FinTech innovation, offering new financial products and services. Supportive regulations are crucial for responsible FinTech growth.
*   **South Africa's Advantage (with a Caveat):** South Africa boasts a more developed banking system, but racial disparities restrict access for Black South Africans. Policies are needed to address this.

### 2.3 Available Solutions across the globe

#### 2.3.1 What is Microfinance

Microfinance bank is any company licensed by higher authority such as Central bank of Nigeria to carry on providing the financial services such as savings and deposits, loans, domestic funds transfer and non-financial services to microfinance clients e.g. the unbanked, low income earners and people that can't access the traditional banks. Synonyms include - microcredit and microloan.

#### 2.3.2 About Grameen Bank (Bangladesh)

*   Founded in Bangladesh, Grameen Bank provides small, collateral-free loans to the impoverished.
*   As of January 2022, it has nearly 9.5 million borrowers, with 96.81% being women.
*   The bank uses solidarity groups to manage loans, ensuring repayment and promoting accountability.
*   It supports social development goals, requiring borrowers to adhere to 16 key decisions.
*   The average loan size has increased to $220, and a micro enterprise loan category has been added.
*   The bank is owned by its borrowers, returning profits as dividends, and has a 98% repayment rate, inspiring similar initiatives in over 64 countries.

#### 2.3.3 Blockchain

*   Blockchain is a decentralized database with immutable data, making alterations like updates or deletions impossible.
*   This technology helps microfinance institutes prevent fraud by ensuring that false identities cannot be used to obtain loans.
*   Yunus Loop DeFi is a blockchain-based smart lending contract on the TRON/ETH network, facilitating risk-free cryptocurrency lending.
*   It aims to improve access to loans in developing countries and efficiently allocate funds across borders, addressing low returns in developed countries and lack of resources in underdeveloped ones.
*   **Pain Points:**
    *   **Solution Provider:** Requires high technical knowledge of blockchains and is challenging for young entrepreneurs with limited funds or partnerships.
    *   **End User:** Requires a smartphone, a crypto wallet, USDT, and postage.

### 2.4 Pitfalls

#### 2.4.1 Pain Points of solution providers

*   Loan Apps need license to operate in countries such as Nigeria and Kenya as per the new Google Play Store policy update starting February 2023.
*   Deal with a risky customer segment with low or zero credit history.
*   Unstructured lending products.
*   Non-regulated microfinance institutes cannot tap into the capital market and have limited fund sources increasing the cost of funds.
*   Risk of asset quality is higher e.g. a non-performing loan risk is 22% in Kenya
*   Microfinance institutes ASSUME that the borrowers take money to grow in their business or improve family's lifestyle but in fact, many borrow money just to meet with the basic needs of food and shelter hence are unavailable to pay back and get trapped in debt. In SA, 94% of loans are used only for basic needs which does not generate any new income for payback.
*   The loans lead to crowding of SMEs or MSMEs resulting in more loss than profit and hence making new business owners fall in the debt trap.
*   Socio Economic issues are not addressed by micro finance companies

#### 2.4.2 Pain Points of loan beneficiaries

*   Exorbitant interest rates e.g. 30% over a period of 6 months makes it difficult for poor people to pay back the loan amount making them easy defaulters without a choice.
*   Loan sharks threaten defaulters e.g. visits from loan officers threatening payments; 59% garnishee order were illegal in SA but are used to deduct the money from the defaulters salary in advance or the pressure to sell properties and household items
*   Network of predatory micro finance institutes under the disguise of helping people and funded by institutes such as World Bank and other government bodies who do not conduct any background check
*   Non-regulated microfinance institutes have their own rules which favor the institute more than the beneficiaries.
*   Traditional banks have very strict criteria for loan approval and makes it difficult for the people who do not have a bank account or any sort of credit history.

### 2.5 Primary Research

We conducted interviews to identify key pain points for merchants, emphasizing the need for actionable insights and comprehensive analytics:

**User Interview 1** (`Week 6 - CreditPesa` Link/Placeholder)

| Category         | Details                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **About the User** | 30 Year Old software engineer                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Pain Points**    | Fee - 27 shillings per 1000 shillings ~ 3% <br> Interest rate is very expensive (9% for 30 days) and same for everyone <br> Hidden system of evaluating credit worthiness <br> Mpesa does not ask for anything, it decides based on txn volume per day (Gap)                                                                                                                                                                 |
| **Key takeaways**  | A person is given a mobile phone becomes agent <br> Very large network of Kiosks. Kiosk agent will get a float from the bank and refill their agency with cash for facilitating withdrawals <br> Rural areas have nearby retail stores / shopping centers. MPesa agent is part of their shop. <br> MPesa Agent can deposit money to your wallet by giving the money <br> Money can be sent through sim card <br> Safaricom and Airtel inter transfer of money is possible using MPesa <br> Address proof - national id -> registered (secondary identifier) <br> 5% of smartphone application users <br> Mpesa agents can do international transactions <br> 80% of kenyan money goes through Mpesa <br> 500-1000$ loan limit 200$ ~20-30% of daily transaction <br> Kenyans are a very socialized society. Very similar to india <br> Mostly live in groups. If asked for help, people lend money via Mpesa directly <br> Moat - majority of population in rural areas. Airtel is present in urban areas. Very rare in rural areas and that is a challenge. |

### 2.5 Secondary Research

#### 2.5.1 Market of M-Pesa

**Market:**

Mpesa operates primarily in Kenya, where it was launched in 2007.

*   It has since expanded to other African countries like Tanzania, Mozambique, DRC, Lesotho, Ghana, Egypt, Afghanistan, South Africa and Ethiopia
*   However, its primary market and area of dominance remains Kenya.
*   M-Pesa has seen a steady increase in customer numbers from 2017 to 2023, eventually reaching over 56.7 million customers in the financial year ending 31 March 2023.

[Chart: Bar chart showing Number of M-Pesa customers from 2017 to 2023 (in millions), increasing from 29.5M in 2017 to 56.7M in 2023.]
*Source:* [https://www.statista.com/statistics/1139190/m-pesa-customer-numbers/](https://www.statista.com/statistics/1139190/m-pesa-customer-numbers/)

**Market Share:**

*   Below image shows the Market Share of M-Pesa by 2020. [Source](Placeholder/Link)

    [Image: Map of Africa showing M-Pesa presence and market share in various countries as of 2020. Key figures: 12.2bn transactions, €147bn value transacted, 41.5m customers, 432k agents. Market Shares shown: Egypt 50%, Ghana 10%, DRC 40%, Kenya 98%, Tanzania 40%, Lesotho 90%, Mozambique 90%.]

*   Mpesa enjoys a near-monopolistic position in Kenya.
*   As of June 2023, Safaricom's M-pesa held a staggering **96.5% market share** in Kenya's mobile money market.
*   Competitors like Airtel Money and Telkom Kenya's T-Kash hold a very small share, with Airtel Money at 3.4% and T-Kash at 0.1%.
*   Through the Central Bank of Kenya (CBK), the state has been trying to make the mobile money space fair for all mobile money services, but such activities have not favored small players. M-PESA is a dominant player in the payment services market in Kenya.
*   **Tanzania:** M-Pesa launched in 2008 but faces stiff competition from Tigo Pesa and Airtel Money. Penetration is significant, but not as dominant as Kenya [Around 30-50% penetration]
*   **South Africa:** Launched in 2021, M-Pesa faces a well-established mobile money ecosystem dominated by Vodacom's M-Pesa (a different service) and MTN Mobile Money. Gaining traction is slow [Below 10%]
*   **Mozambique & DRC:** Launched in 2013 and 2014 respectively, M-Pesa has a decent presence but faces competition from local players like eMochila and Airtel Money [Around 10-20%]
*   **Ethiopia:** M-PESA started to offer its services in Ethiopia on August 15, 2023, after Safaricom received the Payment Instrument Issuer License from the National Bank of Ethiopia (NBE). Since then, it has garnered 1.16 million individuals from a population of 119 million people and 12,400 business customers, which are supported by a network of 16,500 agents. To date, the platform has facilitated two million transactions in the Ethiopian market.
*   **Other Markets:** Limited presence in Lesotho, Ghana, Egypt, Afghanistan. Growth is slow due to established competitors and regulatory hurdles.[Below 5%]

### 2.6 Evaluating Digital Lending Landscape in Kenya

**Key Differentiators**

*   **Integration:** M-Shwari and Fuliza are directly integrated with M-Pesa, offering the most seamless experience. KCB M-Pesa also integrates well, but requires users to be signed up for both services. Tala and Branch require their own apps, adding an extra step.
*   **Loan Size & Terms:** M-Shwari offers the most traditional savings and loan experience with moderate loan sizes and fixed repayment periods. Fuliza is for very short-term needs. KCB M-Pesa offers the widest range of loan sizes and repayment terms. Tala and Branch cater to those needing smaller, short-term loans, but Branch allows for longer repayments.
*   **Interest Rates:** M-Shwari offers competitive interest rates, while Fuliza's charges can be high due to the daily fees. KCB M-Pesa and the micro-lending apps (Tala & Branch) have variable interest rates that can be higher than M-Shwari depending on your creditworthiness.

**Choosing the Right Option:**

The best option depends on your specific needs. Here's a quick guide:

*   **Small, immediate needs:** Fuliza (if you can repay quickly)
*   **Savings & moderate loan needs:** M-Shwari or KCB M-Pesa
*   **Short-term microloans:** Tala or Branch
*   **Flexible loan size & repayment:** KCB M-Pesa or Branch

**Digital Lending Product Comparison (Kenya)**

| Parameter            | M-Shwari (Safaricom & CBA) | Fuliza (KCB & M-Pesa)        | KCB M-Pesa (KCB & Safaricom) | Tala (Tala Mobile)        | Branch (Branch International) |
| :------------------- | :------------------------- | :--------------------------- | :------------------------- | :------------------------ | :---------------------------- |
| **Product Focus**    | Savings & Loans            | Overdraft facility           | Loans & Savings            | Short-term microloans     | Mobile Loans                  |
| **Access**           | M-Pesa Menu                | Within M-Pesa App            | Within M-Pesa App            | Own Mobile App            | Own Mobile App                |
| **Loan Size**        | Ksh 1,000 - Ksh 1 Million  | Ksh 0 - Up to Ksh credit limit | Ksh 100 - Ksh 1 Million    | Ksh 500 - Ksh 1 Million | Ksh 1,500 - Ksh 70,000      |
| **Repayment**        | 30 days (max 2 rollovers)  | Daily deductions until balance cleared | 1 - 6 Months               | 1 - 30 days               | 3 - 60 Months                 |
| **Interest Rates**   | 7.5% - 9%                  | Up to 1.5% per day on outstanding balance | Variable (avg 14% - 18%) | Variable (avg 20% - 30%)  | Variable (avg 18% - 28%)    |
| **Late Fees**        | Yes                        | Daily penalty charges        | Yes (varies by loan)       | Yes (varies by loan)      | Yes (varies by loan)        |
| **Minimum Time in Operation** | Over 10 years              | 2014                         | 2014                       | 2014                      | 2016                          |
| **Credit Reporting** | Reports to Credit Reference Bureaus (CRBs) | No impact on CRB           | Reports to CRBs            | Reports to CRBs           | Reports to CRBs               |
| **Additional Services** | Bill payments, Shopping payments, Savings & Insurance products | Linked to M-Pesa for payments | Bill payments, Shopping payments, Savings & Insurance products | -                         | -                             |
| **Credit Model**     | Traditional Banking Model (CBA) | Algorithmic model based on M-Pesa usage data | Algorithmic model (KCB data + M-Pesa usage) | Alternative data scoring (Phone use, app usage) | Alternative data scoring (Phone use, app usage, social media data) |
| **Reach**            | Leverages vast M-Pesa network & Safaricom's reach | Limited to M-Pesa users    | Leverages M-Pesa network & KCB's branch network | Operational in Kenya and other African countries | Operational in Kenya and other African countries |
| **Market Share**     | 34%                        | 25%                          | 15%                        | 13%                       | 9%                            |

## 3. Framing Hypothesis

### 3.1 Target User Personas

|                     | Persona 1                                                                                                                                                                                                                                                        | Persona 2                                                                                                                                        | Persona 3                                                                                                                                                                                                                                |
| :------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Name**            | Samuel                                                                                                                                                                                                                                                           | Julia                                                                                                                                            | Akeyo                                                                                                                                                                                                                                    |
| **Age**             | 29 years                                                                                                                                                                                                                                                         | 22 years                                                                                                                                         | 30 years                                                                                                                                                                                                                                 |
| **Location**        | Nairobi                                                                                                                                                                                                                                                          | Nairobi                                                                                                                                          | Nairobi                                                                                                                                                                                                                                  |
| **Occupation**      | Textile manufacturer                                                                                                                                                                                                                                             | University Student                                                                                                                               | MSME Retailer                                                                                                                                                                                                                            |
| **Who are they?**   | He started working at the manufacturer after finishing secondary school. He is paid directly into his bank account. He has a pension through the NSSF and medical insurance via NHIF. He tries to save some of his weekly wages in his bank account and also saves some money in his mobile money wallet. | She is currently trying to complete her university education.                                                                                    | She is the only person working in the shop. Her business is not registered and she only accepts cash as payment. She occasionally lets people she knows well take goods on credit. She does not keep records of her sales and tends to mix her household and business expenses. |
| **Goals**           | - Buy a house for his family.                                                                                                                                                                                                                                    | - Start her own business                                                                                                                         | - Children's education <br>- Purchase an additional fridge so that she can stock more fresh produce in her store                                                                                                                        |
| **Pain Points**     | - He sometimes struggles to meet - looking for products that will help him finance a house. <br>- get some advice on the best way to go about this and what options are available to him.                                                                           | - Although Julia has a part time job to help cover some of her expenses, the cash she receives is often not enough. <br>- Need products and services to assist her with liquidity management. <br>- She also requires products that will help her finance her goals, specifically products that focus on education and small business development. | - Occasionally she is unable to make ends meet. However, Akeyo doesn't see a reason to start accepting digital payments as her customers prefer cash. She is happy using informal services and her social network so formal Financial Service Providers (FSPs) will need to provide benefits that her informal services don't provide. |
| **Technological Comfort Level** | He has started using loans obtained via his mobile banking as well as small loans obtained via a mobile app that he sometimes uses to purchase airtime.                                                                                                 | When she experiences liquidity issues, her family sends money to her mobile money account, which she accesses from her smartphone.           | She has a mobile money account that she saves money in and she also contributes to a savings group.                                                                                                                                        |
| **Credit Score** (Calculated in section 4.2.3.2) | 69/100 points                                                                                                                                                                                                                          | 57/100 points                                                                                                                                    | 71/100 points                                                                                                                                                                                                                            |

### 3.2 Prioritised Pain Points - For targeted geography map with Features

From the overall primary & secondary research, our understanding of the personas, we feel that these pain points are to be prioritized:

1.  Credit scores that reward compliance on a faster basis i.e., credit scores that get updated every month rather than once in a quarter.
2.  Lack of education on topics like credit score, eligibility for credit, maintaining financial discipline over a longer period, managing multiple loans from different sources
3.  Managing increasing default rates, lack of coordination across different mobile money apps and loan providers so as to provide an accurate credit score for an individual.
4.  Lack of consideration from existing credit scoring methodologies to closely knit social communities & welfare groups which can support an individual in managing credit more creditably

## 4. Framing Solution [Credit-Pesa]

### 4.1 Solution Overview

**Credit-Pesa, a credit reference agency (CRA) will provide:**

*   **Information Gathering:** Credit-Pesa collects customer financial history from banks and local authorities.
*   **Credit Score Calculation:** Uses the gathered data to calculate a credit score, which indicates the borrower's creditworthiness.
*   **Informed Lending Decisions:** Lenders use the credit score to make informed decisions about loan applications.
*   **Educational Cohort:** Provides recorded lectures and live events to enhance financial knowledge and improve credit scores.
*   **Streamlined Loan Processing:** Simplifies loan processing for financial institutions by analyzing transaction history and behavior across platforms.
*   **Open Banking API Model:** Shares financial data and services with third parties through APIs, enabling them to provide technology, services, or apps to customers.
*   **Shared Financial Data:** Includes bank statements and transaction records, which are utilized by third parties to offer additional services.

**System Architecture:** Below is the high-level system architecture for Credit-Pesa and how it interacts with financial institutions. For more clarity, we have considered it is integrated with M-Pesa.

*For more Detailing please* [click here](Placeholder/Link)

[Diagram: System Architecture showing M-Pesa Interface interacting with M-Pesa Processing Engine (Microservices: User Auth, Loan Processing, Loan Repayment, Credit Score Retrieval, Fraud Detection). This engine interacts via an API Gateway (Proxy, Load Balancer) with the Credit-Pesa Credit Score Processing Engine (Microservices: Credit Scoring, Data Ingestion, Point Scoring, Loan Management, Elastic Connectivity, Education Courses, Fraud Detection). Both engines access their respective Database Layers (M-Pesa: Txn History, Users, Agents, Loan History; Credit-Pesa: Credit Scores, Users, Educational Data). The Credit-Pesa engine also connects to Elastic.]

### 4.2 Credit Model Solution Detailing

#### 4.2.1 Credit Scoring Model [Details](Placeholder/Link)

##### 4.2.3.1 How Creditworthiness is calculated

**Overview:**

Globally, credit score is calculated with reference to traditional Repayment History, Credit utilization (secured vs unsecured loans), Length of Credit history, New credit applications etc. as components of traditional data approach.

Given the challenges of limited traditional credit history data in our target, our model proposes a combination of traditional and alternative data sources for creditworthiness assessment.

**Data Points for Creditworthiness Assessment**

| Category                                                                | Metrics & Datapoints                                                                                                                                                                                                                             |
| :---------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **For an Individual:**                                                  |                                                                                                                                                                                                                                                  |
| M-Pesa Transaction Data                                                 | Transaction history (frequency, amount, sender/receiver, regularity) <br> Bill payments (utility, airtime, regularity) <br> Merchant payments                                                                                                         |
| Mobile Network Data                                                     | Call history (duration, frequency) <br> Top-up history (amount, frequency, source) <br> Data Consumption (trends, amount)                                                                                                                           |
| Alternative Data                                                        | Agent network interactions (cash in/out frequency) <br> Social network analysis (optional, privacy considerations) <br> Geolocation data (residential stability)                                                                                     |
| Loan Information                                                        | Previous Loan History <br> Ongoing Loans                                                                                                                                                                                                        |
| Guarantors                                                              | The model can incorporate guarantor information but with caution due to potential for collusion. <br> Guarantor's M-pesa data and creditworthiness can be factored in as a secondary measure.                                                 |
| Education                                                               | No. of classes attended <br> Score in the tests                                                                                                                                                                                                  |
| Community Service                                                       | Participation in Community Service                                                                                                                                                                                                               |
| No. of References                                                       | No. of people brought on M-pesa service (Virality factor)                                                                                                                                                                                       |
| **For a regular Credit Score supplied by Credit Scoring Agencies**      |                                                                                                                                                                                                                                                  |
| General Transaction Analysis                                            | Analyse transaction volume, consistency, and diversity. <br> Assess bill payment history for responsible financial behavior. <br> Evaluate merchant payment patterns to understand spending habits.                                                 |
| **For Small Business Owners**                                           |                                                                                                                                                                                                                                                  |
| Business Assessment                                                     | Inventory size <br> Customer footfall <br> Customer purchase power <br> Customer income bracket <br> No. of purchases in a day <br> Profit margin <br> Vendor Relationship <br> Vendor Refill rate <br> No. of similar competitors in the vicinity |

#### 4.2.2 Credit Score Calculation

1.  Develop a scoring system based on weighted factors from all data sources.
2.  Higher scores indicate greater creditworthiness and potential loan repayment ability.
3.  This score can be continuously updated based on new data every month.

### 4.3 Functional Features

#### 4.3.1 Credit-Pesa Platform

*   The credit Pesa app caters to both borrowers and agents.
*   The Agent screen has features for viewing current loan applications. The agent can approve or reject the loan applications based on the credit score and social score calculated by the credit model.
*   The user will be able to apply for loan and check their credit score and repayment schedules on both feature phones and on a smartphone via an app.
*   For detailed features and user stories, please refer to the below table:
    *   `Week 6 - CreditPesa` (Link/Placeholder for detailed features)

### 4.4 Non-Functional Requirements (Detailing in [Link](Placeholder/Link))

| Category                   | Requirements                                                                                                                                                           |
| :------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **API Design**             | 1. Performance - Response Time, Scalability <br> 2. Security- Authentication and Authorization, Data Encryption, Vulnerability Management <br> 3. Reliability- High Availability, Error Handling <br> 4. Maintainability- Clean Code and Documentation, Versioning <br> 5. Usability- Clear and Concise API Documentation, Intuitive Design, Monitoring and Logging, Compliance |
| **Scalability of Credit-Pesa** | User Growth, Data Growth, Horizontal Scaling                                                                                                                           |
| **Performance of Credit-Pesa** | Response Times, Concurrency, Load Balancing, Content Delivery Network (CDN)                                                                                            |
| **Security**               | Data Encryption, Secure Authentication, Anti-Fraud Measures, Device Binding, Transparency and User Education, Vulnerability Management, Incident Response Plan, Disaster Recovery |

### 4.5 Virality factor

#### 4.5.1 How will virality play out for Credit PESA in the long run?

**M-Pesa:**

*   **Network Effects:** Existing users create value for new users by expanding the mobile money network. The more people who use M-Pesa, the more convenient and useful it becomes.
*   **Low Barriers to Entry:** M-Pesa requires minimal infrastructure and a basic phone, making it accessible to a wider population.
*   **Agent Network:** A vast network of agents facilitates easy cash deposits, withdrawals, and other transactions, overcoming limitations of traditional banking infrastructure.
*   **Utility and Value:** M-Pesa offers a range of services beyond money transfer, such as bill payments and airtime purchases, increasing its overall usefulness.

**Other Financial Providers:**

*   **Brand Recognition and Reputation:** Established financial institutions with a strong brand reputation can leverage trust to attract users to new services like credit scoring or loan applications.
*   **Integration with Existing Services:** Financial providers can integrate Credit-Pesa with their existing mobile banking apps or online platforms for a seamless user experience.
*   **Incentives and Rewards:** Offering rewards or cashback for using Credit-Pesa services can incentivize adoption and encourage engagement.
*   **Targeted Marketing:** Financial providers can tailor their marketing messages to specific user segments based on income, credit needs, and financial literacy levels.

**End Users:**

*   **Improved Loan Access:** Credit-Pesa can empower users by providing them with a credit score, potentially leading to access to better loan terms and interest rates.
*   **Financial Literacy:** Educational resources offered by Credit-Pesa can improve users' financial knowledge, enabling them to make informed financial decisions.
*   **Convenience:** Streamlined loan processing through Credit-Pesa can simplify the loan application process for borrowers, saving them time and effort.
*   **Security and Transparency:** A secure and transparent credit scoring system can build trust with users and encourage them to actively manage their credit health.

#### 4.5.2 Virality Factor Calculation

**M-Pesa Virality Factor:** M-Pesa's virality is driven by its network effects. Here's how to calculate its approximate virality factor (k):

1.  **Active Users (AU):** Measure the average number of active M-Pesa users per month.
2.  **New Users per Active User (NU/AU):** Calculate the average number of new users acquired by each active user in a month. This can be estimated through surveys or referral program data.

**Virality Factor (k): k = NU/AU**

*Example:* If M-Pesa has 10 million active users (AU) and each active user acquires 1 new user per month (NU/AU), then:
k = 1 new user / 1 existing user = 1

**Other Financial Providers' Virality Factor:** Calculating the virality factor for individual financial providers within the Credit-Pesa ecosystem becomes more complex. Here are some metrics to consider:

*   **Conversion Rate (CR):** Percentage of existing users who adopt Credit-Pesa services offered by a specific financial provider. This can be measured by tracking users who sign up for credit score generation, loan applications, or other services.
*   **Number of Existing Users (NEU):** Total number of users within a specific financial provider's existing customer base.

**Estimated Virality Factor for Financial Providers (k_fp):**

**k_fp = CR x (Average Credit-Pesa Users per Existing User)**

*Challenges:*
*   Accurately measuring the "Average Credit-Pesa Users per Existing User" is difficult as users may access Credit-Pesa services from multiple providers.
*   This is an estimated virality factor, and external factors like marketing campaigns and user incentives will also influence adoption.

**End User Virality Factor:** End user virality is less about user acquisition and more about user engagement. We can consider:

*   **Referral Rate (RR):** Percentage of users who recommend Credit-Pesa to their network through word-of-mouth or referral programs.
*   **Active Users per Month (AU/Month):** Number of end users actively using Credit-Pesa services (e.g., checking credit score, attending educational sessions) within a month.

**End User Virality Factor (k_eu):**

**k_eu = RR x (Active Users / Existing Users) x Months of Usage**

*Challenges:*
*   Measuring referral rates accurately can be difficult.
*   User churn (inactive users) needs to be factored in for a more accurate picture.

**Overall Virality:** Credit-Pesa's overall virality will be a combination of these individual factors. By tracking and optimizing these metrics, Credit-Pesa can create a self-reinforcing growth loop, attracting users from M-Pesa's network, encouraging adoption by financial institutions, and driving user engagement for improved financial health.

### 4.6 Activation Point calculation

From M-Pesa's perspective, integrating with Credit-Pesa presents an opportunity to increase user engagement and potentially attract new users. Here's how activation points can play a role:

**Activation Points for M-Pesa Users:**

1.  **Linking M-Pesa Account to Credit-Pesa:** This initial connection signifies user interest in exploring Credit-Pesa's services and potentially improving their financial well-being. M-Pesa can incentivize this action through targeted promotions or gamification elements.
2.  **Accessing Credit Score through M-Pesa App:** Integrating credit score access directly within the M-Pesa app lowers the barrier to entry and encourages users to understand their creditworthiness. M-Pesa can highlight the benefits of a good credit score for loan applications, attracting users who may not have considered credit history before.
3.  **Initiating a Loan Application within M-Pesa:** A seamless loan application process through M-Pesa, leveraging Credit-Pesa's pre-populated data, simplifies access to credit for users. M-Pesa can showcase success stories of users who obtained loans through Credit-Pesa, promoting user trust and encouraging loan applications.

**Measuring Activation Rates and Benefits for M-Pesa:**

*   Track the percentage of M-Pesa users who link their accounts to Credit-Pesa and the frequency of credit score checks within the M-Pesa app.
*   Monitor the number of loan applications initiated through the integrated platform.
*   By increasing user engagement with Credit-Pesa features, M-Pesa can potentially:
    *   **Boost User Retention:** Satisfied users who benefit from Credit-Pesa services are more likely to remain active M-Pesa users.
    *   **Attract New Users:** Word-of-mouth recommendations from existing users who successfully access credit can attract new users to M-Pesa.
    *   **Generate Additional Revenue Streams:** M-Pesa could explore revenue-sharing models with financial providers offering loans through the Credit-Pesa integration.

### 4.7 Design Framing

#### 4.7.1 Information Architecture

*   [Credit Pesa Website](Placeholder/Link) | [M Pesa Agent](Placeholder/Link) | [M Pesa End User Product](Placeholder/Link) | [M Pesa Backend](Placeholder/Link)

#### 4.7.2 Mockups & Prototype

*   [https://www.figma.com/design/KIZTufL6zVJqi7ceSKS0I0/CreditPesa-Week-6?node-id=0-1&t=wiulCvM2b3pNM118-0](https://www.figma.com/design/KIZTufL6zVJqi7ceSKS0I0/CreditPesa-Week-6?node-id=0-1&t=wiulCvM2b3pNM118-0)

### 4.8 User Flow -

*   Detailed user Flows: `Week 6 - CreditPesa` (Link/Placeholder)
*   User Flows: [Week 5 | Team 5 | CreditPay – FigJam (figma.com)](Placeholder/Link)

### 4.9 User Stories

#### 4.8.1 Narrative

Sarah, a new merchant, experiences a smooth onboarding process and finds the dashboard intuitive. She accesses key metrics, sets up alerts, and generates custom reports to optimize her store's performance.

#### 4.8.2 User Stories for Different Personas

*   (Referenced in `Week 6 - CreditPesa` Link/Placeholder)

# 5. GTM Plan

(Referenced in `Week 6 - CreditPesa` Link/Placeholder)

| Phase                       | Duration | Activities                                                                                                    | Outputs                                                              | Team Involved                                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| :-------------------------- | :------- | :------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------- | :----------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Market Research and Analysis | 10 days  | - Conduct competitive analysis <br>- Identify market opportunities <br>- Define target audience                 | - Market research report <br>- Competitor analysis <br>- User personas | Market Research Analysts, Product Managers                   | Conduct a SWOT analysis of competitors like - Survey potential users to understand their borrowing core needs and pain points - Analyze market trends to identify gaps and opportunities                                                                                                                                                                                                                                                                 |
| Brand Development           | 10 days  | - Develop brand identity <br>- Create branding guidelines                                                      | - Brand name, logo, and tagline <br>- Branding guidelines document | Marketing Team, Branding Specialists                           | Create a brand name and logo that reflects trust and innovation - Develop a tagline such as "Empowering Your Financial Future" - Design a brand style guide covering colors, fonts, and imagery                                                                                                                                                                                                                                                      |
| Marketing Strategy Development | 10 days  | - Define marketing objectives and goals <br>- Develop key messages and value proposition                      | - Marketing strategy document <br>- Key messages and value proposition | Marketing Team, Product Managers                             | Set objectives like acquiring 10,000 users in the first three months - Craft key messages such as "Instant credit at your fingertips" - Define the unique value proposition: "Seamless integration with M-Pesa for quick and easy loans"                                                                                                                                                                                                                          |
| Campaign Planning           | 5 days   | - Plan marketing campaigns (digital, social media, PR) <br>- Identify key marketing channels                    | - Campaign calendar <br>- Channel strategy                           | Marketing Team, PR Specialists                                 | Plan a digital marketing campaign on Facebook and Instagram - Schedule PR releases to major financial news outlets - Identify key influencers in the fintech space for partnerships and endorsements                                                                                                                                                                                                                                                        |
| Partnership Development   | 5 days   | - Identify potential partners <br>- Negotiate partnership agreements                                              | - Partnership agreements                                             | Business Development Managers, Legal Team                      | Reach out to mobile network operators for co-marketing opportunities - Partner with local banks for fund disbursement and credit scoring - Collaborate with fintech bloggers and reviewers to create buzz                                                                                                                                                                                                                                                     |
| User Onboarding Strategy    | 5 days   | - Develop onboarding process <br>- Create user guides and support materials                                   | - Onboarding strategy document <br>- User guides and FAQs         | Customer Success Team, Product Managers                          | Develop a step-by-step onboarding tutorial within the app - Create an FAQ section addressing common questions about credit scoring and repayment - Offer initial onboarding incentives such as a first loan with no interest                                                                                                                                                                                                                                    |
| Launch Preparation          | 5 days   | - Prepare for product launch <br>- Coordinate with all teams                                                 | - Launch checklist <br>- Finalized launch plan                      | Project Managers, All Teams                                  | Coordinate a launch event with key stakeholders, including partners and media - Finalize all promotional materials and ensure consistent messaging across channels - Conduct a final review of the app to ensure all features are working smoothly                                                                                                                                                                                                           |
| Launch Execution            | 5 days   | - Execute launch activities <br>- Monitor launch performance                                                   | - Launch event <br>- Initial performance metrics                       | Marketing Team, Sales Team, Customer Success Team              | Host a virtual launch event with live demos and user testimonials - Run targeted ads on social media and search engines to drive app downloads - Monitor user sign-ups and app performance closely, addressing any issues promptly                                                                                                                                                                                                                            |
| Post-Launch Review and Optimization | Ongoing  | - Monitor performance metrics <br>- Gather user feedback <br>- Optimize marketing efforts                     | - Performance reports <br>- User feedback reports <br>- Marketing optimizations | Data Analysts, Marketing Team, Product Managers              | Track KPIs such as user acquisition, loan disbursement, and repayment rates - Collect user feedback through surveys and app reviews - Regularly update the marketing strategy based on performance data and user insights to improve engagement and retention efforts.                                                                                                                                                                                               |

The **Go-To-Market (GTM)** plan outlines the strategy and actions required to successfully launch and drive the adoption of Credit-Pesa and its services. This plan addresses market research, marketing strategy, sales enablement, customer onboarding, and support.

# 6. Rollout Plan -

Our objectives is to

*   Ensure a smooth transition for existing users and a seamless experience for new users.
*   Monitor and manage any issues that arise during the rollout.
*   Gather early feedback to make iterative improvements.

| Phase & Duration                          | Activities                                                                                                                                                                                                                                                          |
| :---------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Phase 1: Pre Launch Communication (1 Week)** | - **Communication:** Notify users about the upcoming app through emails, SMS, in-app notifications, and social media. Highlight the benefits and new features of the app. <br> - **Content:** Create tutorials, FAQs, and help guides. Organize webinars or live demos to demonstrate the app's features |
| **Phase 2: Soft Launch (2-3 Weeks)**      | - **Limited Release:** Roll out the App to a limited audience (e.g., 10-20% of users) to monitor real-world usage. <br> - **Feedback Collection:** Actively gather feedback from the limited release users. <br> - **Performance Monitoring:** Track server load, response times, error rates; implement fixes as necessary. |
| **Phase 3: Full Launch (3-4 Weeks)**      | - **Wide Release:** Deploy the app to all users; update the app and web platforms with new features. <br> - **Marketing and PR:** Issue press releases, run social media campaigns, send out email newsletters. <br> - **Support Enhancement:** Hire additional support agents, extend support hours, and enhance self-service support options. |
| **Phase 4: Post-Launch Support and Engagement (Ongoing)** | - **Continuous Support:** Regular check-ins, user groups, and advanced training sessions. <br> - **Iterative Improvements:** Implement updates and new features, fix bugs, and optimize performance. <br> - **Feedback Loop:** Maintain an open feedback loop with users to continuously collect insights. <br> - **Performance and Usage Monitoring:** Continuously monitor performance and usage metrics. <br> - **Incentive:** Offer incentives such as discounts, rewards, or exclusive features for users who adopt the app early. |

# 7. Business Model

### 7.1 Objectives

*   Ensure pricing is competitive and attractive for a diverse range of merchants.
*   Align pricing with the value provided by the dashboards.
*   Encourage adoption through flexible and scalable pricing tiers.
*   Maximize revenue while balancing affordability for small and medium-sized enterprises.

### 7.2 Pricing Plan Details

| Plan Type               | Features                                                                                          | Price Range                   | Use Case                                                                 |
| :---------------------- | :------------------------------------------------------------------------------------------------ | :---------------------------- | :----------------------------------------------------------------------- |
| **Free-Per-API**        | Limited number of API calls(100), basic credit data                                               | KSH 0                         | Testing, small-scale projects                                            |
| **Pay-per-API-as-You-Go** | Charges based on the number of credit checks or API calls after 100 API Calls                       | KSH 0.50 - KSH 5 per API      | Variable usage, low to moderate volume                                   |
| **Enterprise Pay as you go** | Custom limits(All API call for first 10 user per day Free), dedicated support, compliance features | KSH 10 per User               | Large enterprises, high transaction volumes                              |
| **Basic Plan**          | Unlimited API calls, email support, basic analytics                                               | KSH 100,000/month             | Small to medium businesses, predictable usage                            |
| **Standard Plan**       | Unlimited API call, 24/7 support, advanced analytics                                              | KSH 500,000/month             | Growing businesses, higher volume usage                                  |
| **Education Tier**      | Financial literacy courses, Financial planning consulting(Ancillary Service)                      | All resources are free (only Consulting charges for Financial Planner KSH 100/hr) | User can consult financial planner and seek help to restructure debt |

# 8 Success Metrics -

### 8.1 Industry Recognition

Measure of Impact vs measure of money earned

**Success Metrics Table**

| Feature                     | Success Metric                                                                                                                                                           | Tracking Method                                                                                                                                                                                                                                              | Time Frame   |
| :-------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------- |
| **Baseline**                | Borrower Activation Rate <br> No. of Loan applications <br> Default Rate                                                                                                    | Percentage completing onboarding <br> Adoption metrics of advanced analytics. <br> Overall sales performance                                                                                                                                                  | Monthly      |
| **MPesa**                   | M-Pesa agent review                                                                                                                                                      | Efficiency in addressing merchant issues. <br> Effectiveness in resolving support tickets                                                                                                                                                                        | Monthly      |
| **Socio & Economic Development** | Education Programme Enrollment <br> Rate of education programme completion <br> Community programme enrollment <br> Change in the community health index and lifestyle index | Count(User Logins) / Time Period <br> Sum(Session Durations) / Time Period <br> Sum(Feature Interactions) / Session <br> Count(Actions Taken) / Session <br> Overall satisfaction with platform support                                                        | Monthly      |
| **Predictive Analytics**    | Prediction Accuracy (PA) <br> User Engagement with Predictive Features (UEPF) <br> Market Trend Prediction Accuracy (WIPA)                                                   | (Number of accurate predictions / Total number of predictions) \* 100 <br> Count of interactions with predictive features / Total sessions <br> (Number of accurate market trend predictions / Total number of market trend predictions) \* 100                   | Quarterly    |
| **Rollout**                 | Adoption Rate <br> User Satisfaction <br> Engagement Metrics <br> Support Metrics <br> Performance Metrics <br> Feedback Quality                                              | Percentage of merchants actively using the new dashboards. <br> CSAT scores and feedback from user surveys. <br> Usage frequency, time spent on dashboards, and feature utilization rates. <br> Number of support tickets, response and resolution times. <br> Dashboard load times, error rates, and system uptime. <br> Volume and quality of feedback received. | Monthly      |
| **GTM**                     | Awareness <br> Adoption <br> Engagement <br> Customer Satisfaction <br> Revenue Impact                                                                                      | Increase in website traffic and social media engagement. <br> Number of new merchants onboarding and actively using the dashboards. <br> Usage metrics such as time spent on dashboards, the frequency of report generation, and alert setups. <br> CSAT scores and feedback from user surveys. <br> Increase in GMV per merchant and overall platform revenue. | Monthly      |

# 9. Risk and Mitigation Strategies -

Launching a new product that works at an intersection of different complex systems, while handling financial assets, money, entails various risks that could impact their success. Identifying these risks and developing robust mitigation strategies is crucial to ensure a smooth rollout and ongoing success. Following are the different risks, categorized under different categories and appropriate mitigation strategies.

| Risk Category                   | Risk Description                     | Mitigation Strategies                                                                                                                                                                                                                                                            |
| :------------------------------ | :----------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Technical Risks**             | Integration Challenges             | - Standardized API development and testing across platforms. <br> - Partnering with mobile money providers and network operators for technical support.                                                                                                                                  |
|                                 | System Security                      | - Implementing robust encryption protocols for data transmission and storage. <br> - Regular security audits and penetration testing. <br> - User authentication with multi-factor verification.                                                                                         |
|                                 | Data Management                      | - Establishing clear data governance policies. <br> - Data standardization and normalization procedures. <br> - Utilizing data cleansing tools and processes.                                                                                                                         |
|                                 | System Downtime                      | - Invest in scalable infrastructure. <br> - Conduct regular backups, and <br> - Implement disaster recovery plans                                                                                                                                                                  |
| **Performance & Scalability Risks** | System Performance                 | - Design systems with scalability in mind, perform load testing. <br> - Load balancing and server optimization techniques. <br> - Utilizing cloud-based infrastructure for scalability. <br> - Performance monitoring and proactive maintenance.                                    |
|                                 | Scalability                          | - Building the platform with a modular architecture for easy scaling. <br> - Utilizing auto-scaling features in cloud environments. <br> - Capacity planning based on projected growth.                                                                                             |
|                                 | Downtime                             | - Redundant system architecture with failover mechanisms. <br> - Disaster recovery plan and regular backups. <br> - Proactive infrastructure monitoring and maintenance.                                                                                                              |
| **Competitive Risks**           | Established Players                | - Focusing on niche markets underserved by existing lenders. <br> - Offering competitive interest rates and loan terms. <br> - Building strong partnerships with mobile money providers for wider reach.                                                                                  |
|                                 | New Entrants                         | - Continuously innovating features and functionalities. <br> - Providing excellent customer service and user experience. <br> - Building a strong brand reputation and user trust.                                                                                                     |
|                                 | Differentiation                      | - Offering unique loan products tailored to specific African markets. <br> - Utilizing data analytics to personalize loan offerings. <br> - Integrating value-added services like financial literacy education.                                                                        |
| **User Experience Risks**       | Usability Across Devices             | - Developing a responsive and intuitive user interface that adapts to different devices. <br> - Rigorous testing across various mobile money apps and operating systems. <br> - Providing clear and concise user instructions, user guides within the platform. <br> - Conduct user experience testing and gather feedback to continuously improve the UI/UX |
|                                 | Limited Internet Connectivity        | - Offering SMS-based functionalities for loan applications and repayments. <br> - Developing offline features for limited functionality without internet access. <br> - Partnering with mobile network operators for wider internet coverage (if feasible).                               |
|                                 | Financial Literacy Gaps              | - Integrating financial literacy modules within the platform. <br> - Partnering with NGOs or financial institutions to offer educational resources. <br> - Implementing responsible lending practices with clear loan terms and repayment schedules.                                |
| **Regulatory & Compliance Risks** | Evolving Regulations               | - Regularly monitoring regulatory changes across African countries. <br> - Establishing a legal team or partnering with legal advisors with expertise in African finance regulations.                                                                                                 |
|                                 | AML/KYC                              | - Implementing KYC procedures to verify user identities and prevent fraud. <br> - Utilizing transaction monitoring tools and risk-scoring models to identify suspicious activity.                                                                                                   |
|                                 | Data Privacy                         | - Complying with data privacy regulations like GDPR and similar African frameworks. <br> - Implementing user consent management for data collection and usage. <br> - Providing clear data privacy policies and secure user data storage practices.                                     |
| **Other Risks**                 | Political & Economic Instability     | - Diversifying operations across different African countries to mitigate regional risks. <br> - Utilizing local partnerships for market expertise and risk assessment.                                                                                                              |
|                                 | Currency Fluctuations                | - Offering loan products with flexible repayment options or currency hedging mechanisms (if feasible). <br> - Monitoring currency fluctuations and adjusting loan terms or interest rates as needed.                                                                                    |
|                                 | Credit Risk Assessment               | - Utilizing alternative data sources for creditworthiness assessment (e.g., mobile money transaction history). <br> - Developing machine learning models for more accurate credit scoring. <br> - Offering smaller loan amounts initially with potential for higher limits based on repayment history. |

# References

*   `Week 6 - CreditPesa` (Link/Placeholder)

***