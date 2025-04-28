# Whimsical Diagram Prompts for AWS Lambda DX Enhancement

## 1. User Flow: Debugging a Failed Invocation

*   **Diagram Type:** Flowchart
*   **Prompt:** Create a flowchart diagram illustrating the user flow for debugging a failed AWS Lambda invocation using the proposed enhanced console.
    *   Start node: "User navigates to specific Lambda function".
    *   Step 1: "User clicks the 'Observability' tab".
    *   Step 2: "Console displays integrated view: Recent Metrics (showing error spike), Log Stream, Trace Summaries".
    *   Step 3: "User examines Log Stream within the tab".
    *   Decision 1: "Error found in logs?".
    *   Step 4 (Yes from Decision 1): "User identifies error message/stack trace". Connect to End node: "Initial Diagnosis Complete".
    *   Step 5 (No from Decision 1): "User examines Trace Summaries within the tab".
    *   Step 6: "User clicks link to full Trace in AWS X-Ray console". Connect to End node: "Deeper Analysis via X-Ray".

## 2. User Flow: Adding an SQS Trigger with Guided Permissions

*   **Diagram Type:** Flowchart
*   **Prompt:** Create a flowchart diagram showing the user flow for adding an SQS trigger to a Lambda function, including the guided permission steps.
    *   Start node: "User on Lambda Function's 'Configuration' tab".
    *   Step 1: "User clicks 'Triggers' sub-section".
    *   Step 2: "User clicks 'Add trigger'".
    *   Step 3: "User selects 'SQS' and enters Queue ARN in Streamlined UI".
    *   Step 4: "UI displays validation warning: 'Execution role needs SQS permissions' with 'Configure Permissions' button".
    *   Step 5: "User clicks 'Configure Permissions'".
    *   Step 6: "User navigates to 'Permissions' sub-section; IAM Helper is highlighted".
    *   Step 7: "IAM Helper displays current role and suggests 'AWSLambdaSQSQueueExecutionRole' policy".
    *   Step 8: "User reviews suggestion and clicks 'Add Suggested Policy'".
    *   Step 9: "IAM Role update process initiated".
    *   Step 10: "User navigates back to 'Triggers'".
    *   Step 11: "User clicks 'Save' for the SQS trigger".
    *   End node: "SQS Trigger Added Successfully with Correct Permissions".

## 3. Information Architecture: Enhanced Lambda Console Tabs

*   **Diagram Type:** Mind Map (or simple hierarchical flowchart)
*   **Prompt:** Create a mind map illustrating the proposed high-level Information Architecture for the enhanced AWS Lambda function console view.
    *   Central Topic: "Lambda Function Console View".
    *   Main Branch 1: "Code Tab" (Existing functionality).
    *   Main Branch 2: "**Observability Tab (NEW)**".
        *   Sub-branch 2a: "Log Stream (Filterable)".
        *   Sub-branch 2b: "Key Metrics Charts".
        *   Sub-branch 2c: "Trace Summaries/Links".
    *   Main Branch 3: "**Test Tab (Enhanced)**".
        *   Sub-branch 3a: "Test Event Management (Save/Load/Share)".
        *   Sub-branch 3b: "Trigger-based Templates".
        *   Sub-branch 3c: "Inline Results/Logs Excerpt".
    *   Main Branch 4: "**Configuration Tab**".
        *   Sub-branch 4a: "General Settings".
        *   Sub-branch 4b: "**Triggers (Streamlined UI)**".
        *   Sub-branch 4c: "**Permissions (with IAM Helper)**".
        *   Sub-branch 4d: "Environment Variables".
        *   Sub-branch 4e: "Other settings (VPC, Layers, etc.)".
    *   Main Branch 5: "Aliases Tab" (Existing).
    *   Main Branch 6: "Versions Tab" (Existing).
    *   Note/Annotation: "Contextual Help & Validation System integrated across relevant configuration/monitoring areas". 