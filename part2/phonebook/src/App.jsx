import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(()=> {
    axios.get('http://localhost:3001/persons').
    then(response=> {
      setPersons(response.data)
    })

  }, [])
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const available = persons.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleSearching = (event) => {
    setSearch(event.target.value);
  };
  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    const check = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase(),
    );
    //console.log(check)
    if (check === true) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Filter search={search} handleSearching={handleSearching} />
      </div>
      <h3>add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>
      <Persons available={available} />
    </div>
  );
};

export default App;
