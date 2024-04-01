import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Iulia Salau', number: '0766821323' }]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newPerson = { name: newName, number: newNumber };
    setPersons([...persons, newPerson]);
    setNewName('');
    setNewNumber('');
  };

  return (
    <div className="container">
      <h2>My Phonebook</h2>
      <p>Welcome in my agenda!</p>
      <p1>Write a name and a number then add it to the list</p1>
      <form onSubmit={handleSubmit}>
        <div>

          Name: <input
            value={newName} onChange={handleNameChange}
            type="text"
            placeholder="write here"
          />
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNumberChange}
          type="text"
          placeholder="write here" />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>My Phone Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>
            {person.name} - {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
