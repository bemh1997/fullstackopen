const Persons = ({ persons, handleDelete }) => {
  
  return (
    <>
    { 
      persons.map((person, index) =>
      <div key={index}>
        <p>{person.name}: {person.number}</p>
				<button onClick={() => handleDelete(person.id)}> Delete</button>
      </div>
    )}
    </>
  );
}

export default Persons;
