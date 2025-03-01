import { useState } from 'react';

export default function App() {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const handleChangeName = (e) => {
    setNewName(e?.target?.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = newName?.trim();
    if (persons?.some((person) => person?.name === name)) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      setPersons((prev) => [...prev, { name }]);
    }
    setNewName('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:{' '}
          <input type='text' value={newName} onChange={handleChangeName} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons?.map((person, index) => (
        <p key={index}>{person?.name}</p>
      ))}
    </div>
  );
}
