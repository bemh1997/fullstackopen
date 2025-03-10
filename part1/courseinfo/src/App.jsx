import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

Header.propTypes = {
  course: PropTypes.string.isRequired,
};
const Content = (props) => {
  return (
    <>
      <h2>Content:</h2>
      <ul>
      <li>
          <Part number='1' part={props.part1} exercises={props.exercises1}/> 
      </li>
      <li>
          <Part number='2' part={props.part2} exercises={props.exercises2}/> 
      </li>
      <li>
          <Part number='3' part={props.part3} exercises={props.exercises3}/> 
      </li>   
      </ul> 
    </>
  )
};

Content.propTypes = {
  part1: PropTypes.string.isRequired,
  part2: PropTypes.string.isRequired,
  part3: PropTypes.string.isRequired,
  exercises1: PropTypes.number.isRequired,
  exercises2: PropTypes.number.isRequired,
  exercises3: PropTypes.number.isRequired,
};

const Part = (props) =>{
  return (
      <>
        <p>Part {props.number}: {props.part}, exercises: {props.exercises}.</p>
      </>
    )
}

Part.propTypes = {
  number: PropTypes.string.isRequired,
  part: PropTypes.string.isRequired,
  exercises: PropTypes.number.isRequired,
};

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}.</p>
    </>
  )
};
Total.propTypes = {
  exercises1: PropTypes.number.isRequired,
  exercises2: PropTypes.number.isRequired,
  exercises3: PropTypes.number.isRequired,
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name:'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course.name} />
      <Content 
        part1={course.parts[0].name} 
        exercises1={course.parts[0].exercises} 
        part2={course.parts[1].name} 
        exercises2={course.parts[1].exercises} 
        part3={course.parts[2].name} 
        exercises3={course.parts[2].exercises} />
      <Total 
        exercises1={course.parts[0].exercises} 
        exercises2={course.parts[1].exercises} 
        exercises3={course.parts[2].exercises} />
    </>
  )
};

export default App