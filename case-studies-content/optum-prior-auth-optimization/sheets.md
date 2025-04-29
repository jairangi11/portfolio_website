# Data Sheets for Optum Prior Authorization Optimization Case Study

## Market Research & Trends Summary Table

| Area                        | Key Trend/Observation                                                                      |
| :-------------------------- | :----------------------------------------------------------------------------------------- |
| **Provider Burden**         | Extremely high administrative workload (avg. 13 hrs/wk/MD), major cause of burnout.         |
| **Patient Impact**          | Frequent care delays, treatment abandonment, negative outcomes, sometimes serious adverse events. |
| **Process Volume**          | Increasing number of services requiring PA and rising denial rates reported.                |
| **Regulatory Action**       | Strong push from CMS/ONC for electronic PA (ePA), faster decisions, interoperability (FHIR APIs). |
| **Technology: Automation**  | Focus on AI/ML for data extraction (OCR/NLP), rules automation, workflow optimization.       |
| **Technology: ePA**         | Adoption growing but significant portion remains manual/partially electronic; EHR integration key. |
| **Technology: AI Concerns** | Physician concerns about AI increasing denials without oversight; need for trust & transparency. |
| **Industry Goal**           | Move towards "intelligent" PA - automated, transparent, integrated, reducing manual work (50-75%). |
| **Payer vs. Provider View** | Disconnect between payer announcements of PA reduction and provider-reported burden relief.     |

---

## Personas Summary Table

| Attribute         | Authorization Coordinator Annie                    | Busy Physician Dr. Ben Carter                      | Optum Review Nurse Rachel                          |
| :---------------- | :------------------------------------------------- | :------------------------------------------------- | :--------------------------------------------------- |
| **Role**          | Office Mgr/Auth Specialist @ Multi-Specialty Clinic| Cardiologist @ Hospital-Affiliated Practice        | Clinical Review Nurse @ Optum                      |
| **Goals**         | Fast/easy approvals, Avoid denials, Keep informed  | Timely patient care, Minimize workflow disruption  | Accurate reviews, Meet SLAs, Efficient processing    |
| **Tech Savvy**    | Moderate-High (Time constrained)                   | Low-Moderate (Delegates admin tasks)             | Moderate (Uses internal Optum systems)             |
| **Key Pain Points** | Time sink, Portal inconsistency, Status ambiguity, Requirement uncertainty, Admin denials | Care delays, Peer-to-peer burden, Opaque denials   | Manual data hunting in notes, Incomplete submissions, Volume pressure |

---

## Competitor Comparison Summary Table

| Competitor/Type                       | Key Offering/Focus                                       | Strengths (Relative to Optum's Assumed Baseline)                    | Weaknesses/Challenges (Relative to Optum)                                          |
| :------------------------------------ | :------------------------------------------------------- | :------------------------------------------------------------------ | :--------------------------------------------------------------------------------- |
| **Other Large Payers (UHC, Aetna...)**| Manage own PA (variable approaches)                      | Scale, Existing provider relationships                              | Often high perceived burden (per surveys), Legacy systems, Inconsistent tech use     |
| **Specialized UM (eviCore, Carelon)** | Manage PA for specific high-cost services (payer contract) | Deep clinical guideline integration (specific domains)              | Provider friction (rigidity), Fragmented experience for providers across payers    |
| **Cohere Health**                     | AI-driven "Intelligent PA" (End-to-End)                | Strong AI/ML focus, Claims high automation/efficiency gains       | Requires payer/provider adoption, Newer entrant vs. established players          |
| **RCM Vendors (Waystar, Experian...)**| PA Automation within broader RCM suite                   | Integration with other RCM functions, RPA capabilities            | May lack deep clinical AI focus compared to specialists                             |
| **Connectivity (Availity, Rhyme)**    | Multi-payer portals, Direct provider-payer links (APIs)  | Wide network reach, Provider workflow integration (Availity)      | Less focus on payer internal decision automation                                 |
| **Change Healthcare (Optum Internal)**| Broad RCM/PA tools, Connectivity                         | Internal Optum asset, Existing tech/network                       | Integration complexity post-acquisition, May have legacy components              |
| **Other Vendors (Voluware, Olive...)**| Mix of workflow automation, AI, specific features        | Niche strengths (e.g., specific AI, form libraries)               | May be less comprehensive than larger suites or specialized AI platforms             |

---

*(Add other tables for Metrics, Rollout, Risks as they are developed)* 

## Optum: Prior Authorization Optimization Metrics

| Metric Category        | Metric Name                      | Definition                                                                                                  | Measurement Method                                     | Target                                            |
|------------------------|----------------------------------|-------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|---------------------------------------------------|
| **Primary KPIs**       | Avg Provider Submission Time     | Time from PA request initiation to successful submission in portal.                                       | System logs (start/end timestamps)                     | Reduce by 30% (6 mos)                             |
|                        | End-to-End Turnaround Time (TAT) | Time from complete submission to final decision communication.                                            | System logs (submission/decision timestamps)           | Reduce by 40% (9 mos)                             |
|                        | Provider Satisfaction (CSAT/NPS) | Provider perception of ease, transparency, speed.                                                         | In-portal surveys, periodic surveys (CSAT/NPS)         | Increase CSAT by 20% / NPS by 20 pts (12 mos)     |
|                        | Administrative Denial Rate       | % denials due to admin errors (not clinical).                                                             | Analysis of denial reason codes                        | Reduce by 15% (6 mos)                             |
| **Secondary KPIs**     | Auto-Approval Rate               | % requests approved automatically by rules engine (no manual review).                                       | System tracking (bypass manual review queue)           | Increase by 25% (relative) from baseline (12 mos) |
|                        | First-Pass Submission Rate       | % submissions processed without needing additional info requests.                                         | System tracking ('Addtl Info Needed' flags)            | Increase by 20% (9 mos)                             |
|                        | Optum Reviewer Handle Time       | Avg time reviewer actively works on a manual review case.                                                 | Internal review system time tracking                   | Reduce by 25% (12 mos)                            |
|                        | Feature Adoption Rate            | % active providers using new dashboard, checklist, notifications.                                           | Portal user interaction analytics                      | >70% adoption (6 mos)                             |
| **Guardrail Metrics**  | Clinical Denial Rate             | % denials due to clinical criteria/medical necessity.                                                       | Analysis of denial reason codes                        | No significant increase vs. baseline              |
|                        | System Uptime/Availability       | % time portal & backend services are operational.                                                           | Infrastructure monitoring                                | > 99.9%                                           |
|                        | AI Data Extraction Accuracy      | Accuracy of AI identifying/extracting key data points from docs.                                            | Regular audits (AI output vs. manual review sample) | > 95% accuracy (critical fields)                 |

---

## Optum: Prior Authorization Optimization Rollout Plan Summary

| Phase                       | Duration     | Target Users                                                                 | Key Goals                                                                                                  | Success Criteria Example                                                                            |
|-----------------------------|--------------|------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| **1. Internal Alpha**       | 4 Weeks      | Internal Optum Teams (Reviewers, QA, Product)                                | Validate core functions, internal workflows, AI accuracy, identify major bugs.                               | >95% test pass rate, >90% AI accuracy, critical bugs resolved, positive internal reviewer feedback.     |
| **2. Provider Pilot (Beta)**| 8 Weeks      | 10-15 diverse Provider Groups                                                | Gather real-world feedback, test usability, measure initial KPI impact (Submission Time, CSAT), find edge cases. | >70% pilot CSAT, >15% submission time reduction (pilot), critical pilot bugs resolved, positive feedback. |
| **3. Phased GA**            | 12-16 Weeks  | Expanding segments (Region, Specialty, etc.)                                 | Monitor stability/performance at scale, track KPIs broadly, manage support load, gather wider feedback.    | >99.9% uptime, continued KPI improvement trends, manageable support volume, >50% segment adoption.    |
| **4. Full GA & Optimization**| Ongoing      | All Optum Portal PA Submitters                                               | Achieve target KPIs, maximize adoption, transition fully, optimize, plan future enhancements.                | Sustained KPI target achievement, >70% overall adoption, high CSAT, stable system.                  |

---

## Optum: Prior Authorization Optimization Risk Register Summary

| Risk ID | Category                 | Risk Description                                          | Likelihood | Impact   | Mitigation Strategy Summary                                                                      |
| :------ | :----------------------- | :-------------------------------------------------------- | :--------- | :------- | :----------------------------------------------------------------------------------------------- |
| R01     | Technical / AI           | AI Data Extraction Inaccuracy                           | Medium     | High     | Diverse training data, confidence scoring, audits, feedback loop, human oversight                |
| R02     | Technical / Rules        | Validation Engine Errors (Logic/Rules)                  | Medium     | High     | Rigorous testing, SME validation, version control, anomaly detection, audit trails               |
| R03     | Adoption                 | Provider Resistance / Low Usage of New System           | Medium     | Medium   | Pilot feedback, comprehensive training/support, clear value communication, monitor & iterate     |
| R04     | Compliance / Security    | HIPAA Violation / PHI Data Breach                       | Low        | Critical | Strict HIPAA adherence, encryption, RBAC, audits, BAAs, security training                        |
| R05     | Compliance / Regulatory  | Failure to Meet PA Turnaround Time (TAT) Mandates       | Low        | High     | TAT-aware design, monitoring & escalation, bottleneck analysis, performance optimization         |
| R06     | AI / Bias                | Bias in AI Models Affecting Fairness/Equity             | Low-Medium | High     | Data auditing, fairness testing, model explainability focus, strong human oversight, transparency |
| R07     | Technical                | System Performance/Scalability Issues Under Load        | Medium     | Medium   | Load testing, monitoring, phased rollout, scalable architecture                                  |
| R08     | Project Management       | Significant Scope Creep                                   | Medium     | Medium   | Clear scope definition, change control process, objective alignment                              |
| R09     | Project Management       | Major Timeline Delays                                     | Medium     | Medium   | Buffer time, dependency tracking, proactive resource management, early communication             | 