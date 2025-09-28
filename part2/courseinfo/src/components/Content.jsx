/* eslint-disable react/prop-types */
import Part from './Part.jsx';


const Content = (props) => {
  const { parts } = props;

  return (
    <>
      { parts.map((part) => (
        <Part key={part.id} part={part}/>
      ))}
    </>
  )
};


export default Content;