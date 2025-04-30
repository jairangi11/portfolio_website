# Whimsical Diagram Prompts for Google Pay Merchant Onboarding Redesign

## 1. Flowchart: Happy Path User Flow (Fully Automated)

**Prompt:**
"Create a flowchart diagram visualizing the 'happy path' for the redesigned Google Pay merchant onboarding process where all verification steps are automated successfully.

Nodes should represent user actions or system processes. Edges should show the flow direction.

Steps:
1.  **Start:** User initiates onboarding.
2.  **Action:** User enters Business Information (Name, Address, Type, etc.).
3.  **System Process:** Attempt real-time KYB verification via API.
4.  **Decision:** KYB Verified?
    *   **Yes:** Proceed to next step.
    *   **No:** (Out of scope for this specific happy path diagram, but normally triggers alternative flow).
5.  **Action:** User enters Owner/Representative Details (Name, DOB, Address, ID info).
6.  **System Process:** Attempt real-time KYC verification via API.
7.  **Decision:** KYC Verified?
    *   **Yes:** Proceed to next step.
    *   **No:** (Out of scope).
8.  **Action:** User chooses automated bank linking method (e.g., Plaid).
9.  **System Process:** User securely connects bank account via integrated service.
10. **Decision:** Bank Account Linked & Verified?
    *   **Yes:** Proceed to next step.
    *   **No:** (Out of scope).
11. **System Process:** Perform automated risk assessment based on collected data.
12. **Decision:** Risk Assessment Passed?
    *   **Yes:** Proceed to next step.
    *   **No:** (Out of scope, likely triggers manual review).
13. **Action:** User reviews summary of provided information.
14. **Action:** User agrees to Terms & Conditions and submits application.
15. **System Process:** Finalize account setup.
16. **UI Display:** Show 'Verification Complete / Account Activated' confirmation screen.
17. **End:** Onboarding successfully completed."

---

## 2. Flowchart: User Flow with Manual Document Upload

**Prompt:**
"Create a flowchart diagram visualizing the user flow for Google Pay merchant onboarding when automated KYC verification fails and requires manual document upload.

Nodes should represent user actions or system processes. Edges should show the flow direction.

Steps:
1.  **Start:** User initiates onboarding.
2.  **Action:** User enters Business Information.
3.  **System Process:** Attempt KYB check (Assume Success for this flow).
4.  **Action:** User enters Owner Details.
5.  **System Process:** Attempt real-time KYC verification via API.
6.  **Decision:** KYC Verified?
    *   **Yes:** (Out of scope for this diagram).
    *   **No:** Proceed to document upload prompt.
7.  **UI Display:** Prompt user to upload required identity document (e.g., Driver's License, Passport).
8.  **Action:** User selects and uploads the document file.
9.  **System Process:** Perform OCR on the uploaded document to extract key data.
10. **UI Display:** Show extracted data to the user for review.
11. **Action:** User reviews and confirms the extracted OCR data (or corrects if necessary - keep simple for diagram).
12. **System Process:** Store document and extracted data for review.
13. **Action:** User proceeds to Bank Account Connection step (Assume success via Plaid/automated method for this flow).
14. **System Process:** Perform risk assessment (Assume Pass).
15. **Action:** User reviews summary.
16. **Action:** User submits application.
17. **UI Display:** Show 'Verification Pending Document Review' status screen with estimated timeline.
18. **System Process (Backend):** Manual review of the uploaded document occurs.
19. **Notification:** User is notified (e.g., email, in-app) upon review completion (Assume Success).
20. **End:** Onboarding completed after manual review."

---

## 3. Flowchart: User Flow with Manual Bank Verification

**Prompt:**
"Create a flowchart diagram visualizing the user flow for Google Pay merchant onboarding when automated bank linking (e.g., via Plaid) fails or is not used, requiring manual verification via micro-deposits.

Nodes should represent user actions or system processes. Edges should show the flow direction.

Steps:
1.  **Start:** User initiates onboarding.
2.  **Action:** User enters Business Information (Assume KYB Success).
3.  **Action:** User enters Owner Details (Assume KYC Success).
4.  **Action:** User reaches Bank Account Connection step.
5.  **Decision:** Use automated linking (Plaid)?
    *   **Yes:** Attempt automated linking.
        *   **Decision:** Automated Link Successful?
            *   **Yes:** (Out of scope for this diagram).
            *   **No:** Offer manual verification option.
    *   **No:** User chooses manual verification directly.
6.  **Action:** User enters bank account number and routing number.
7.  **System Process:** Validate account/routing number format.
8.  **System Process:** Initiate micro-deposit process (send two small amounts).
9.  **UI Display:** Inform user about micro-deposits, expected timeframe (1-3 days), and the need to return to verify.
10. **Wait State:** User waits for deposits to appear in their bank account.
11. **Action:** User returns to the onboarding flow/dashboard.
12. **Action:** User navigates to 'Verify Bank Account' section.
13. **Action:** User enters the two micro-deposit amounts.
14. **System Process:** Compare entered amounts with sent amounts.
15. **Decision:** Amounts Match?
    *   **Yes:** Bank account verified.
    *   **No:** Allow retry (limited attempts), provide error message.
16. **System Process:** Perform risk assessment (Assume Pass).
17. **Action:** User reviews summary.
18. **Action:** User submits application.
19. **UI Display:** Show 'Verification Complete / Account Activated' confirmation screen.
20. **End:** Onboarding successfully completed."

---

## 4. Flowchart: High-Level System Architecture/IA

**Prompt:**
"Create a flowchart or simple architecture diagram illustrating the high-level Information Architecture and system components for the redesigned Google Pay merchant onboarding flow.

Use distinct shapes for UI components, backend services, and external dependencies.

Components:
*   **UI Layer:**
    *   Onboarding Web/App Interface
        *   Progress Stepper
        *   Form Input Area (for current step)
        *   Status Dashboard Widget
        *   Document Upload Component
        *   Contextual Help Component
*   **Backend Services Layer:**
    *   Onboarding Orchestration Service (Manages flow logic)
    *   Merchant Data Service (Stores profile, status, docs)
    *   Risk Assessment Engine
    *   OCR Service
    *   Notification Service
*   **External Dependencies/APIs:**
    *   KYC Verification API (e.g., IdentityMind, Jumio)
    *   KYB Verification API (e.g., Business Registries, OpenCorporates)
    *   Bank Linking/Verification API (e.g., Plaid)
    *   Internal Google Services (e.g., Auth, User Profile)

Flows to indicate:
1.  User interacts with the UI Layer.
2.  UI Layer communicates with the Onboarding Orchestration Service.
3.  Orchestration Service calls other Backend Services (Merchant Data, Risk, OCR, Notifications) as needed.
4.  Orchestration Service calls External APIs for verifications.
5.  Data flows back through the Orchestration Service to update the UI (e.g., status changes, feedback).

Keep connections high-level, showing primary interactions rather than every single data point transfer."

--- 