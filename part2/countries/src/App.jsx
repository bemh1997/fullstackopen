import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Countrie from "./components/Countrie";
import axios from "axios";
import ListCountrie from "./components/ListCountrie";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterCountrie, setfilterCountrie] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    if (filterCountrie) {
      axios
        .get(`https://restcountries.com/v3.1/name/${filterCountrie}`)
        .then(response => {
          setCountries(response.data);
        })
        .catch(() => setCountries([]));
    }
  }, [filterCountrie]);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setfilterCountrie(value);
    // 2. Al escribir, limpiamos la selección para volver a ver la lista
    setSelectedCountry(null); 
    if (!value) setCountries([]);
  };

  const filteredCountrie = countries.filter(countrie => {
    const termLower = filterCountrie.toLowerCase();
    return countrie.name?.common?.toLowerCase().includes(termLower);
  });

	let content = null;

  // 2. Usamos una estructura if/else clara y excluyente
  if (selectedCountry) {
    content = <Countrie countrie={selectedCountry} />;
  } else if (filteredCountrie.length > 10) {
    content = <p>Too many matches, specify another filter</p>;
  } else if (filteredCountrie.length > 1) {
    content = filteredCountrie.map(countrie => (
      <ListCountrie
        key={countrie.cca3 || countrie.name.common}
        countrie={countrie}
        onClick={() => setSelectedCountry(countrie)}
      />
    ));
  } else if (filteredCountrie.length === 1) {
    content = <Countrie countrie={filteredCountrie[0]} />;
  }

  return (
    <>
      <h2>Countries</h2>
      <Filter filterCountrie={filterCountrie} handleFilterChange={handleFilterChange} />

			{ content }
      {/* {selectedCountry ? (
        <Countrie countrie={selectedCountry} />
      ) : filteredCountrie.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : filteredCountrie.length > 1 ? (
        filteredCountrie.map((countrie) => (
          <ListCountrie 
            key={countrie.cca3} 
            countrie={countrie} 
            // 4. El botón ahora guarda el objeto del país, no cambia el texto del filtro
            onClick={() => setSelectedCountry(countrie)} 
          />
        ))
      ) : filteredCountrie.length === 1 ? (
        <Countrie countrie={filteredCountrie[0]} />
      ) : null} */}
    </>
  );
};

export default App;
