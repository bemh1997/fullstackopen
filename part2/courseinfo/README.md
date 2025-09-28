# Fullstack Open - Course Information Application

## 📌 Overview
This project is part of the **Fullstack Open** course and covers exercises **1.1 to 1.5**. The goal is to incrementally build a React application while learning key concepts like component structure, props, and data handling.

---

## 🏗️ Exercises Breakdown

### **1.1: Course Information, Step 1**
- Refactor the application to include three components: `Header`, `Content`, and `Total`.
- All data remains in `App.jsx` and is passed to components via props.
- **Components:**
  - `Header`: Displays the course name.
  - `Content`: Displays course parts and exercises.
  - `Total`: Displays total exercises.

---

### **1.2: Course Information, Step 2**
- Introduce a new `Part` component.
- The `Content` component now renders three `Part` components instead of displaying data directly.
- This improves component reusability and modularity.

---

### **1.3: Course Information, Step 3**
- Store course parts as objects instead of separate variables.
- Update the application structure to support this new format.

#### **Code Update:**
```jsx
const App = () => {
  const course = 'Half Stack application development';
  const part1 = { name: 'Fundamentals of React', exercises: 10 };
  const part2 = { name: 'Using props to pass data', exercises: 7 };
  const part3 = { name: 'State of a component', exercises: 14 };

  return (
    <div>
      ...
    </div>
  );
};
```

---

### **1.4: Course Information, Step 4**
- Convert the course parts into an array.
- Modify the `Content` and `Total` components to accept an array instead of individual props.
- Ensure the application remains functional with this new data structure.

#### **Code Update:**
```jsx
const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 }
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};
```

---

### **1.5: Course Information, Step 5**
- Further refactor the structure by encapsulating the course details into a single object.
- Update the components to work with this unified object structure.

#### **Code Update:**
```jsx
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 }
    ]
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};
```

---

## 🚀 Getting Started
### **Prerequisites**
Make sure you have the following installed:
- **Node.js** (Latest LTS recommended)
- **npm** or **yarn**

### **Installation & Running the App**
```sh
# Clone the repository
git clone https://github.com/your-username/fullstack-open-course-info.git
cd fullstack-open-course-info

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 📜 License
This project follows the **Fullstack Open** curriculum by the University of Helsinki and is for educational purposes only.

