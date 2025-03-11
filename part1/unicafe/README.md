# Unicafe - Feedback Application

## Description
This application is designed to collect customer feedback for Unicafe. Users can provide feedback in three categories: **Good**, **Neutral**, and **Bad**. The application displays statistics about the received feedback.

## Features
- Collect user feedback with three options: Good, Neutral, and Bad.
- Display the number of votes for each category.
- Calculate and show the total number of feedback submissions.
- Compute and display the average score (Good: +1, Neutral: 0, Bad: -1).
- Show the percentage of positive feedback.
- Conditionally render statistics only when feedback has been collected.
- Use a table to present the statistics in a structured format.
- Component-based architecture for better maintainability.

## Implementation Steps

### **1.6: Unicafe - Step 1**
- Implement buttons to allow users to submit feedback.
- Track the feedback counts using the React `useState` hook.

### **1.7: Unicafe - Step 2**
- Display additional statistics:
  - Total feedback received.
  - Average score.
  - Percentage of positive feedback.

### **1.8: Unicafe - Step 3**
- Refactor the statistics display into a separate `Statistics` component.
- Ensure that the state remains in the main `App` component.

### **1.9: Unicafe - Step 4**
- Modify the application to display statistics only when feedback has been received.
- Before any feedback, display a message indicating no feedback has been given yet.

### **1.10: Unicafe - Step 5**
- Further refactor the application by extracting:
  - A `Button` component for handling feedback input.
  - A `StatisticLine` component to display individual statistics.

### **1.11*: Unicafe - Step 6**
- Use an HTML `<table>` to display statistics in a more structured format.
- Ensure there are no console warnings or errors during execution.
- Debug potential `Unchecked runtime.lastError` messages by checking browser extensions.

## Project Structure
```
unicafe/
│── src/
│   │── components/
│   │   │── Button.jsx
│   │   │── StatisticLine.jsx
│   │   │── Statistics.jsx
│   │── App.jsx
│   │── main.jsx
│── index.html
│── package.json
│── README.md
```

## Running the Project
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```

## Notes
- This project is built using **React** and **Vite**.
- The application does not persist feedback data; all inputs reset when the page reloads.
- Ensure all required dependencies are installed to avoid missing module errors.

---
This README provides a structured and professional overview of the Unicafe project, ensuring clarity and ease of use.

