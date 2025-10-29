import axios from 'axios';
import { 
  useState,
  useEffect
} from 'react';
import PersonForm from './components/PersonForm'
import Persons from './components/Persons';
import Filter from './components/Filter';

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(()=>{
    console.log('Effect :>> ');
    axios
      .get('http://localhost:3001/persons')
      .then(response =>{
        setPersons(response.data)
      })
  },[])
  
  // Combined state in a single object
  const [formData, setFormData] = useState({
    name: '',
    number: ''
  });

  // State for the filter
  const [filterTerm, setFilterTerm] = useState('');

  // Generic change handler for all fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    
    // If it's the number field, validate digits only
    if (name === 'number' && value !== '') {
      const numericValue = value.replace(/\D/g, '');
      // Limit to 10 digits
      const limitedValue = numericValue.slice(0, 10);
      setFormData({
        ...formData,
        [name]: limitedValue
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  }

  // Handler for filter input
  const handleFilterChange = (event) => { 
    setFilterTerm(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault();
    
    // Validations
    if (formData.name === '') {
      alert('Please enter a name');
      return;
    }
    
    if (formData.name.length < 3) {
      alert('Name must be at least 3 characters long');
      return;
    }
    
    if (formData.number.length !== 10) {
      alert('Phone number must be exactly 10 digits');
      return;
    }
    
    if (persons.some(person => person.name.toLowerCase() === formData.name.toLowerCase())) {
      alert(`${formData.name} is already in the phonebook`);
      return;
    }
    
    if (persons.some(person => person.number === formData.number)) {
      alert(`The number ${formData.number} is already assigned to another contact.`);
      return;
    }

    const personObject = {
      name: formData.name,
      number: formData.number,
      id: persons.length + 1
    };
    
    setPersons(persons.concat(personObject));
    
    // Clear the form
    setFormData({
      name: '',
      number: ''
    });
  };

  // Filter persons based on filter term
  const filteredPersons = persons.filter(person => {
    const termLower = filterTerm.toLowerCase();
    return (
      person.name.toLowerCase().includes(termLower) || 
      person.number.includes(filterTerm)
    );
  });

  // Single prop with all functionalities
  const formProps = {
    formData,
    handleInputChange,
    addPerson
  };

  const filterProps = {
    filterTerm,
    handleFilterChange
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter {...filterProps}/>
      
      <h3>Add a new</h3>
      <PersonForm {...formProps} />
      
      <h3>Numbers</h3>
      <Persons persons={filteredPersons} />
    </div>
  );
};

export default App;