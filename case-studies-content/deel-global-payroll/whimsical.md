# Whimsical Diagram Prompts for Deel Global Payroll Optimization

## 1. User Flow: Standard Payroll Cycle (Administrator)

**Prompt:**
"Create a detailed flowchart visualizing the end-to-end user flow for an administrator (Internal Payroll Specialist or Client Admin) running a standard payroll cycle on the optimized Deel platform. Use standard flowchart shapes (process, decision, start/end, data).

*   **Start:** User Logs In.
*   **Step 1:** View Dashboard (Shows upcoming cycle & alerts).
*   **Step 2:** Navigate to 'Payroll Runs' section.
*   **Step 3:** Process: Initiate New Payroll Run (Select Client/Entity, Pay Period).
*   **Step 4:** Process: System Fetches Employee & Default Data.
*   **Step 5:** Process: Admin Reviews/Uploads Variable Payroll Inputs (e.g., bonuses, commissions via UI or bulk upload).
*   **Step 6:** Process: System Performs Automated Data Validation.
*   **Step 7:** Decision: Validation Errors Found?
    *   **Yes:** Process: Admin Reviews Errors -> Process: Admin Corrects Errors -> Loop back to Step 6.
    *   **No:** Proceed to Step 8.
*   **Step 8:** Process: Admin Triggers Payroll Calculation.
*   **Step 9:** Process: System Calculates Gross-to-Net, Applies Compliance Rules.
*   **Step 10:** Process: Admin Reviews Calculation Results (e.g., Payroll Register, Variance Report).
*   **Step 11:** Process: Admin Reviews Compliance Alerts/Flags generated during calculation.
*   **Step 12:** Decision: Critical Compliance Issues Found?
    *   **Yes:** Process: Admin Investigates & Resolves Issues (May involve data correction, looping back) -> Return to Step 11 review.
    *   **No:** Proceed to Step 13.
*   **Step 13:** Decision: Approval Required?
    *   **Yes:** Process: Admin Submits Run for Approval -> Process: Approver Receives Notification -> Process: Approver Reviews Run -> Decision: Approved?
        *   **Yes (Approved):** Proceed to Step 14.
        *   **No (Rejected):** Process: Admin Receives Rejection Notification -> Loop back to Review/Correct steps (e.g., Step 10 or earlier based on reason).
    *   **No (Approval not required):** Proceed to Step 14.
*   **Step 14:** Process: Admin Finalizes Payroll Run.
*   **Step 15:** Process: System Generates Payment Files (e.g., bank files, GL files) & Final Reports (e.g., Payslips).
*   **End:** Payroll Cycle Complete for Period.

Ensure the flow clearly shows decision points, loops for corrections/rejections, and key system processing steps vs. admin actions."

---

## 2. User Flow: Compliance Alert Resolution

**Prompt:**
"Create a flowchart diagram illustrating the user flow for an Internal Payroll Specialist resolving a compliance alert flagged by the system.

*   **Start:** Specialist Logs In / Is viewing Dashboard.
*   **Step 1:** Data: Compliance Alert Notification Visible (e.g., on Dashboard or Compliance Center).
*   **Step 2:** Navigate to 'Compliance Center'.
*   **Step 3:** Process: Filter/Select Specific Compliance Alert.
*   **Step 4:** Process: View Alert Details (Employee affected, Compliance Rule violated, Context/Data causing flag, Suggested Action if available).
*   **Step 5:** Decision: Requires Data Correction?
    *   **Yes:** Process: Navigate to Relevant Section (e.g., Employee Profile Payroll View) -> Process: Update Incorrect Data -> Process: Save Changes -> Proceed to Step 6.
    *   **No (e.g., Requires override/acknowledgment):** Proceed to Step 6.
*   **Step 6:** Process: Return to Compliance Alert in Compliance Center.
*   **Step 7:** Process: Mark Alert as Resolved (Add optional comment/justification).
*   **Step 8:** Process: System Logs Resolution & Audit Trail.
*   **Step 9 (Optional):** Process: Trigger re-validation or re-calculation for the affected employee/run if necessary.
*   **End:** Compliance Alert Resolved."

---

## 3. High-Level System Architecture Concept

**Prompt:**
"Create a simple, high-level system architecture diagram (using C4 model Level 1/2 style components) for the Deel Global Payroll platform, highlighting the key components involved in the optimization. Show major systems and their interactions.

*   **External User:** Administrator (Internal or Client) interacts via Web Application.
*   **System:** Web Application (React/Next.js Frontend) - Handles UI, user interactions.
*   **System:** API Gateway - Routes requests.
*   **System:** Authentication Service - Manages logins, sessions, permissions (RBAC).
*   **System:** Core Payroll Service (Microservice) - *OPTIMIZED*
    *   Handles core gross-to-net calculation logic.
    *   Interacts with Compliance & Validation Services.
    *   Manages payroll run state.
*   **System:** Automated Compliance Service (Microservice) - *NEW/ENHANCED*
    *   Contains country-specific rule engine.
    *   Provides compliance checks/calculations to Core Payroll Service.
    *   Manages alert generation.
*   **System:** Data Validation Service (Microservice) - *ENHANCED*
    *   Performs input validation (format, logic).
    *   Used by Web App (on input) and Core Payroll Service (during processing).
*   **System:** Reporting & Analytics Service (Microservice) - *ENHANCED*
    *   Generates standard & custom reports.
    *   Handles data aggregation & consolidation.
    *   Serves data to Finance Dashboard.
*   **System:** Employee Data Service (Microservice) - Stores and serves employee profile & payroll data.
*   **System:** Client/Entity Data Service (Microservice) - Stores client configuration.
*   **Database:** Payroll Database(s) (e.g., PostgreSQL) - Stores transactional data, employee data, configuration, audit logs.
*   **Database:** Compliance Rule Database - Stores country-specific rules.

Show primary communication flows (e.g., Frontend talks to API Gateway, Gateway talks to Services, Services talk to Databases). Emphasize the optimized/enhanced services."

---

## 4. Reporting Flow: Generating Consolidated Report

**Prompt:**
"Create a sequence diagram showing the interactions involved when a Client Finance Director generates a consolidated multi-country labor cost report.

*   **Actor:** Finance Director
*   **Participant:** Web Application (Browser)
*   **Participant:** API Gateway
*   **Participant:** Reporting & Analytics Service
*   **Participant:** Employee Data Service
*   **Participant:** Payroll Database

*Sequence:*
1.  FinanceDirector -> WebApplication: Clicks 'Reporting'.
2.  FinanceDirector -> WebApplication: Selects 'Consolidated Reports'.
3.  FinanceDirector -> WebApplication: Configures report (Type=Labor Cost, Countries, Period, Base Currency).
4.  FinanceDirector -> WebApplication: Clicks 'Run Report'.
5.  WebApplication -> API Gateway: POST /reports/consolidated (Payload: report config).
6.  API Gateway -> Reporting & Analytics Service: generateConsolidatedReport(config).
7.  Reporting & Analytics Service -> Employee Data Service: getEmployeeData(countries, period).
8.  Employee Data Service -> Payroll Database: SELECT payroll_data WHERE ...
9.  Payroll Database --> Employee Data Service: Returns payroll records.
10. Employee Data Service --> Reporting & Analytics Service: Returns aggregated employee data.
11. Reporting & Analytics Service -> Reporting & Analytics Service: Performs consolidation, currency conversion.
12. Reporting & Analytics Service --> API Gateway: Returns report data/ID.
13. API Gateway --> WebApplication: Returns report data/ID.
14. WebApplication -> FinanceDirector: Displays report preview or download link."

---

## 5. User Flow: Bulk Data Update (e.g., Salary)

**Prompt:**
"Create a flowchart diagram illustrating the user flow for an Administrator performing a bulk salary update using a template upload.

*   **Start:** Admin Logs In.
*   **Step 1:** Navigate to 'Payroll' -> 'Data Input/Updates'.
*   **Step 2:** Process: Select Bulk Update Option (e.g., 'Salary Change').
*   **Step 3:** Process: Download Template (CSV/Excel file with required columns like Employee ID, New Salary, Effective Date).
*   **Step 4:** Process: Admin Populates Template Offline.
*   **Step 5:** Process: Admin Uploads Completed Template file.
*   **Step 6:** Process: System Parses and Validates Uploaded Data (Checks formats, logical rules, existence of Employee IDs).
*   **Step 7:** Data: System Displays Validation Results (Summary: X records valid, Y records invalid).
*   **Step 8:** Decision: Any Invalid Records?
    *   **Yes:** Process: Admin Reviews Validation Errors (Highlights specific errors per row/record) -> Process: Admin Corrects Template Offline -> Loop back to Step 5 (Upload Corrected Template).
    *   **No:** Proceed to Step 9.
*   **Step 9:** Process: Admin Confirms Valid Changes for processing.
*   **Step 10:** Process: System Applies Valid Changes to Employee Records (effective for the specified date/next relevant pay cycle).
*   **Step 11:** Data: Confirmation message displayed to Admin.
*   **End:** Bulk Salary Update Complete." 