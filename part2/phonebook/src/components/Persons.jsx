const Persons = ({ persons }) => {
  
  return (
    <>
    { 
      persons.map((person, index) =>
      <div key={index}>
        <p>{person.name}: {person.number}</p>
      </div>
    )}
    </>
  );
}

export default Persons;
