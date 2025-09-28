const Filter = ({ filterTerm, handleFilterChange }) =>{


  return(
    <>
      <div>
        <p>Filter shown with: 
          <input 
            type="text" 
            value={filterTerm}
            onChange={handleFilterChange}
            placeholder="Search by name or number"
          />
        </p>
      </div>
      
    </>
  );
}

export default Filter;