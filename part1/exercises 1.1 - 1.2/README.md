# Application for Exercises 1.1 and 1.2 of Fullstack Open

## Purpose
This application has been developed to submit exercises 1.1 and 1.2 from the Fullstack Open platform.

### Exercise 1.1: Course Information, Step 1
The application we will start working on in this exercise will continue to evolve in some of the upcoming exercises. In this and other future exercise sets of this course, it is sufficient to submit only the final state of the application. If you wish, you can also create a commit for each exercise in the series, but this is entirely optional.

Currently, the entire application resides in a single component. Refactor the code to split it into three new components: `Header`, `Content`, and `Total`. All data will still reside in the `App` component, which will pass the necessary data to each component via props.

- **Header**: Displays the course name.  
- **Content**: Displays the parts and their number of exercises.  
- **Total**: Displays the total number of exercises.  

Define the new components in the `App.jsx` file.

---

### Exercise 1.2: Course Information, Step 2
Refactor the `Content` component so that it no longer directly displays the names of the parts or their number of exercises. Instead, it should render three `Part` components, each responsible for representing the name and number of exercises for a single part.

Our application currently passes data in a rather primitive way, relying on individual variables. This situation will improve soon in Part 2. However, before that, let's move to Part 1b to learn more about JavaScript.

