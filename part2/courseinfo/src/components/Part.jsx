const Part = ({ part }) =>{

  // eslint-disable-next-line react/prop-types
  const { name, exercises } = part;
  
  return (
      <div>
        <p>{name}, exercises: {exercises}.</p>
      </div>
    )
}

export default Part;
