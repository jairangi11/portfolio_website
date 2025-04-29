# Whimsical Diagram Prompts for MagicBricks AI Recommendation Case Study

This file contains prompts intended for use with Whimsical AI (or a similar diagramming tool) to generate visualizations for the case study.

---

## Diagram 1: High-Level System Architecture

**Prompt:**
"Create a system architecture diagram for an AI Property Recommendation feature within a real estate portal like MagicBricks. Show the following components and their interactions:

*   **User Interface Layer:**
    *   Web Browser/Mobile App (User)
    *   Frontend Application (React/Next.js)
        *   Homepage Component (Shows 'Recommended For You')
        *   Search Results Component (Shows search results + potentially recommendations)
        *   Property Details Page (PDP) Component (Shows property details + 'Similar Properties')
*   **Backend Services Layer (Microservices Architecture):**
    *   API Gateway
    *   Main Application Service (Handles core portal logic, user auth, search)
    *   **User Behavior Tracking Service:** (Receives interaction events from Frontend)
    *   **Hybrid Recommendation Engine Service:** (Generates recommendations)
    *   **Contextual Data Service:** (Provides neighborhood/market/investment data)
*   **Data Layer:**
    *   User Profile Database
    *   Property Listings Database
    *   User Interaction/Events Database (Input for Rec Engine)
    *   Contextual Data Store (Input for Contextual Data Service)
    *   Recommendation Model Store

Show primary data flow: User interacts with Frontend -> Events sent to Behavior Tracking Service -> Rec Engine uses Interaction DB, Property DB, User Profile DB to generate recs -> Recs requested by Frontend via API Gateway/Main App -> Recs displayed on UI. Contextual Data Service provides enrichment data to Main App/Frontend."

---

## Diagram 2: User Flow - Discovering via 'For You' Feed

**Prompt:**
"Create a user flow diagram illustrating a user discovering properties through the 'Recommended For You' feed on a real estate portal.

*   Start Point: User lands on Homepage/Dashboard.
*   Step 1: User sees the 'Recommended For You' section displaying property cards.
*   Decision 1: User finds a recommendation interesting?
    *   Yes: User clicks the recommendation card.
        *   Action: Navigate to the Property Details Page (PDP) for that property.
        *   (System Action): Log click event to Behavior Tracking Service.
        *   End Flow Branch.
    *   No: User continues scrolling/browsing the feed.
*   Step 2: User encounters a recommendation they dislike or find irrelevant.
*   Decision 2: User provides feedback?
    *   Yes: User clicks 'Dismiss' or 'Not Relevant' icon on the recommendation card.
        *   (System Action): Log feedback event to Behavior Tracking Service.
        *   (System Action): Recommendation is hidden/removed from the current view.
        *   User continues scrolling/browsing.
    *   No: User ignores the recommendation and continues scrolling/browsing.
*   End Point: User navigates away from the feed or closes the session."

---

## Diagram 3: User Flow - Exploring Similar Properties

**Prompt:**
"Create a user flow diagram illustrating a user exploring properties similar to one they are currently viewing on a real estate portal.

*   Start Point: User is on a Property Details Page (PDP) for Property A (arrived via search, link, or prior recommendation).
*   Step 1: User scrolls down the PDP.
*   Step 2: User sees the 'Similar Properties' / 'Users Also Viewed' section displaying cards for Property B, Property C, etc.
*   Decision 1: User finds a similar property (e.g., Property B) interesting?
    *   Yes: User clicks the card for Property B.
        *   Action: Navigate to the PDP for Property B.
        *   (System Action): Log click event to Behavior Tracking Service.
        *   End Flow Branch (or loop back to Start Point with Property B as the new context).
    *   No: User ignores the similar properties section.
*   End Point: User continues interacting with PDP for Property A or navigates away."

---

## Diagram 4: Data Flow - Backend Recommendation Generation

**Prompt:**
"Create a data flow diagram illustrating the backend process for generating personalized property recommendations for a specific user.

*   Trigger: API Request received (from Frontend/Main App) for recommendations for UserID 'X'.
*   Component 1: **Recommendation Engine Service** receives the request.
*   Data Fetch 1: Engine queries **User Interaction Database** for User X's recent activity (views, clicks, saves, searches, feedback).
*   Data Fetch 2: Engine queries **User Profile Database** for User X's explicit preferences (if any).
*   Data Fetch 3: Engine queries **Property Listings Database** for active/available candidate properties (potentially pre-filtered based on broad criteria).
*   Processing Step 1: Engine applies **Content-Based Filtering Algorithm** (using property features and user profile/interactions).
*   Processing Step 2: Engine applies **Collaborative Filtering Algorithm** (using user-item interaction matrix).
*   Processing Step 3: Engine applies **Behavioral Rules/Analysis** (using recent activity, feedback).
*   Processing Step 4: Engine **Combines & Ranks** results from different algorithms/rules.
*   Processing Step 5: Engine **Filters** out properties User X recently viewed, dismissed, or saved.
*   Data Fetch 4 (Optional Enrichment): Engine requests relevant **Contextual Data** (trends, scores) for top N ranked properties from **Contextual Data Service**.
*   Output: Engine returns a ranked list of Top N Recommended Property IDs (potentially with contextual data snippets) via API Response."

--- 