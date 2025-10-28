const Total = ({ parts }) => {
  const sum = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <>
      <p><strong>Total of exercises {sum}.</strong></p>
    </>
  )
};

export default Total;