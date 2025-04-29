# Whimsical Diagram Prompts for Optum Prior Authorization Optimization

## 1. High-Level System Architecture Concept

**Prompt:**
"Create a high-level system architecture diagram (C4 model Level 1/2 style) for the Optum 'Intelligent Authorization Hub'. Show key systems and their interactions.

*   **External Systems/Users:**
    *   `Provider User` (e.g., Authorization Coordinator)
    *   `Optum Clinical Reviewer`
    *   (Optional/Future) `Provider EHR System`
*   **Optum Systems:**
    *   `Provider Web Portal` (React/Angular Frontend) - User interface for providers.
    *   `API Gateway` - Entry point for requests.
    *   `Authentication Service` - Handles user login & permissions.
    *   `Prior Authorization Service` (Core Microservice) - Manages PA request state, orchestrates workflows.
    *   `AI Clinical Data Extractor` (New Microservice) - Performs OCR/NLP on documents.
    *   `Automated Validation Engine` (New Microservice/Module) - Runs rules & ML models for validation/auto-approval.
    *   `Internal Review System` (Existing/Enhanced) - UI and backend for Optum reviewers.
    *   `Notification Service` - Sends emails/portal alerts.
    *   `Member Eligibility/Plan Service` - Provides patient coverage details.
    *   `Clinical Guidelines Service/Database` - Stores PA rules and criteria.
*   **Databases:**
    *   `PA Request Database` (e.g., PostgreSQL) - Stores PA case data, statuses, submitted info.
    *   `Extracted Clinical Data Store` (e.g., NoSQL/DocumentDB) - Stores structured data from NLP.
    *   `Audit Log Database` - Tracks all actions.

*   **Interactions:**
    *   Provider User interacts with Provider Web Portal.
    *   Portal interacts with API Gateway.
    *   Gateway routes to Auth Service, PA Service, etc.
    *   PA Service interacts with Extractor, Validator, Guidelines, Eligibility services.
    *   Extractor processes documents (potentially stored temporarily or in blob storage).
    *   Validator interacts with Guidelines service and PA data.
    *   PA Service updates Internal Review System queue.
    *   Optum Reviewer interacts with Internal Review System.
    *   Internal Review System interacts with PA Service, Notification Service.
    *   (Future) Provider EHR interacts via API Gateway (e.g., using FHIR APIs).

Style: Use clear containers for systems and databases. Use labeled arrows for primary data flows (e.g., 'Submit Request', 'Get Status', 'Process Documents', 'Run Validation', 'Review Case', 'Send Notification')."

---

## 2. User Flow: Provider PA Submission (Happy Path - Auto-Approval)

**Prompt:**
"Create a flowchart visualizing the 'happy path' user flow for a Provider Staff member submitting a Prior Authorization request that gets auto-approved.

*   **Start:** Provider Logs into Optum Portal.
*   **Process:** Navigate to "Submit New PA Request".
*   **Process:** Enter Patient Info & Service Codes (CPT, ICD-10).
*   **Process:** System (Smart Intake) Displays Required Document Checklist.
*   **Process:** Provider Uploads Clinical Documents.
*   **Process:** System (Smart Intake) Validates Admin Fields.
*   **Decision:** Admin Fields Valid?
    *   **No:** Display Errors -> Loop back to correct fields.
    *   **Yes:** Proceed.
*   **Process:** Provider Confirms & Submits Request.
*   **Process:** System Displays Confirmation & Tracking ID.
*   **Process:** Backend: AI Extractor Processes Documents & Extracts Data.
*   **Process:** Backend: Validation Engine Compares Data to Rules/Guidelines.
*   **Decision:** Meets Auto-Approval Criteria?
    *   **Yes:** Proceed.
    *   **(No Path for this diagram)**
*   **Process:** System Updates PA Status to "Approved".
*   **Process:** System Sends "Approved" Notification to Provider.
*   **Process:** Provider Views "Approved" Status on Dashboard.
*   **End:** Auto-Approved PA Complete.

Style: Use standard flowchart shapes (ovals for start/end, rectangles for processes, diamonds for decisions). Clearly distinguish between Provider actions and System actions (perhaps using swimlanes or different color fills)."

---

## 3. User Flow: Manual Review Cycle (Requesting More Info)

**Prompt:**
"Create a flowchart visualizing the user flow involving manual review by Optum staff, where additional information is required from the provider.

*   **Start:** PA Request Status is "In Review" (Assigned to Optum Reviewer).
*   **Process:** Optum Reviewer Opens Case in Internal System.
*   **Process:** Reviewer Assesses Submitted Info, Extracted Data & Guidelines.
*   **Decision:** Sufficient Information for Decision?
    *   **Yes:** (Path to Approve/Deny - Not detailed in this flow).
    *   **No:** Proceed.
*   **Process:** Reviewer Composes "Additional Info Needed" Request (Specifying missing item).
*   **Process:** Reviewer Submits Request in Internal System.
*   **Process:** System Updates PA Status to "Additional Info Needed".
*   **Process:** System Sends Notification to Provider.
*   **Process:** Provider Receives Notification / Views Status on Portal Dashboard.
*   **Process:** Provider Reviews Optum's Request.
*   **Process:** Provider Gathers & Uploads Additional Document/Comment.
*   **Process:** Provider Submits Response via Portal.
*   **Process:** System Updates PA Status to "In Review".
*   **Process:** System Routes Case Back to Optum Reviewer Queue.
*   **End:** Request Ready for Re-Review.

Style: Use standard flowchart shapes. Consider using swimlanes to differentiate between Provider actions and Optum Reviewer/System actions."

---

## 4. Data Flow: AI Clinical Data Extraction

**Prompt:**
"Create a data flow diagram illustrating how clinical data is extracted and used.

*   **External Entity:** Provider System (via Portal Upload).
*   **Data Store:** Uploaded Document Storage (e.g., S3 Bucket).
*   **Process:** Document Upload (Trigger).
*   **Process:** `AI Clinical Data Extractor` Service.
    *   *Sub-Process:* OCR Processing (if needed).
    *   *Sub-Process:* NLP Extraction (Identify key concepts like diagnoses, symptoms, treatments based on rules/models).
*   **Data Store:** `Extracted Clinical Data Store` (Stores structured snippets with provenance).
*   **Process:** `Prior Authorization Service`.
*   **Process:** `Automated Validation Engine`.
*   **Process:** `Internal Review System`.

*   **Data Flows:**
    1.  Provider System -> Uploaded Document Storage: (Uploaded Clinical Document - PDF, DOCX etc.)
    2.  Uploaded Document Storage -> AI Extractor: (Document Content)
    3.  AI Extractor -> Extracted Clinical Data Store: (Structured Clinical Snippets, e.g., JSON with concept, value, source).
    4.  Extracted Clinical Data Store -> PA Service: (Provides extracted data for case context).
    5.  Extracted Clinical Data Store -> Validation Engine: (Provides structured data for rule checks).
    6.  Extracted Clinical Data Store -> Internal Review System: (Displays extracted/highlighted data to reviewers).

Style: Use standard data flow diagram notation (circles/rectangles for processes, parallel lines/cylinders for data stores, rectangles for external entities). Use labeled arrows to show data movement."

--- 