const Filter = ({ filterCountrie, handleFilterChange }) =>{


  return(
    <>
      <div>
        <p>Filter shown with: 
          <input 
            type="text" 
            value={filterCountrie}
            onChange={handleFilterChange}
            placeholder="Search by name or number"
          />
        </p>
      </div>
      
    </>
  );
}

export default Filter;