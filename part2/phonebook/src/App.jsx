import {
  useState,
  useEffect
} from 'react';
import Filter from './components/Filter';
import Notification from './components/Notification';
import PersonForm from './components/PersonForm'
import Persons from './components/Persons';
import phoneService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filterTerm, setFilterTerm] = useState('');
	const [formData, setFormData] = useState({
    name: '',
    number: ''
  });
	const [notification, setNotification] = useState(null);
	const [isError, setIsError] = useState(false);

  useEffect(()=>{
    phoneService.getAll().then((initialPhones)=> setPersons(initialPhones))
  },[])

	const addPerson = (event) => {
    event.preventDefault();

    // Validations
    if (formData.name === '') {
      setNotification('Please enter a name');
			setIsError(true);
			setTimeout(() => {
				setNotification(null);
				setIsError(false);
			}, 5000);
      return;
    }

    if (formData.name.length < 3) {
      setNotification('Name must be at least 3 characters long');
			setIsError(true);
			setTimeout(() => {
				setNotification(null);
				setIsError(false);
			}, 5000);
      return;
    }

    if (formData.number.length !== 10) {
      setNotification('Phone number must be exactly 10 digits');
			setIsError(true);
			setTimeout(() => {
				setNotification(null);
				setIsError(false);
			}, 5000);
      return;
    }

		const existingPerson = persons.find(p => p.name.toLowerCase() === formData.name.toLowerCase());

    if (existingPerson) {
      const confirmUpdate = window.confirm(
        `${existingPerson.name} is already added to phonebook, replace the old number with a new one?`
      );

      if (confirmUpdate) {
        const personToUpdate = { ...existingPerson, number: formData.number };

        phoneService
          .update(existingPerson.id, personToUpdate) 
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id !== existingPerson.id ? p : returnedPerson));
						setNotification(existingPerson.name + " has been updated");
						setIsError(false);
						setTimeout(() => {
							setNotification(null)
						}, 5000);
            setFormData({ name: '', number: '' });
          })
          .catch(error => {
						setNotification(`Information of ${existingPerson.name} has already been removed from server`);
						setIsError(true);
						setTimeout(() => {
							setNotification(null);
							setIsError(false);
						}, 5000);
						setPersons(persons.filter(n => n.id !== existingPerson.id));
          });
      }
      return; 
    }

    if (persons.some(person => person.number === formData.number)) {
      setNotification(`The number ${formData.number} is already assigned to another contact.`);
			setIsError(true);
			setTimeout(() => {
				setNotification(null);
				setIsError(false);
			}, 5000);
      return;
    }

    const personObject = {
      name: formData.name,
      number: formData.number,
    };

		phoneService.create(personObject).then(returnedPhone=>{
			setPersons(persons.concat(returnedPhone));
			setNotification(`Added ${personObject.name}`);
			setTimeout(() => {
				setNotification(null);
				setIsError(false);
			}, 5000);
			setFormData({
				name: '',
				number: ''
    	});
		});
  };

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

	const handleDelete = (id) =>{
		const person = persons.find(n => n.id === id)
		if (window.confirm(`Delete ${person.name}?`)) {
			phoneService
			.deletePhone(id)
			.then(() => {
				setPersons(persons.filter(n => n.id !== id));
			})
			.catch((error) => {
				setNotification(`Information of ${person.name} has already been removed from server`);
				setIsError(true);
				setTimeout(() => {
					setNotification(null);
					setIsError(false);
				}, 5000);
				setPersons(persons.filter(n => n.id !== id));
			});
    }
	}

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
			<Notification message={notification} status={isError}/>
      <Filter {...filterProps}/>

      <h3>Add a new</h3>
      <PersonForm {...formProps} />

      <h3>Numbers</h3>
      <Persons 
				persons = {filteredPersons}
				handleDelete={handleDelete}
			/>
    </div>
  );
};

export default App;