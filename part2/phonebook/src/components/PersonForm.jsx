const PersonForm = ({ formData, handleInputChange, addPerson }) => {
  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input 
            name="name"
            value={formData.name} 
            onChange={handleInputChange}
          />
        </div>
        <div>
          number: 
          <input 
            name="number"
            type="text"
            maxLength="10"
            value={formData.number} 
            onChange={handleInputChange}
            placeholder="10 dígitos"
          />
        </div>
        <div>
          <button 
            type="submit" 
            disabled={formData.number.length !== 10}
          >
            add
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;