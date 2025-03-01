import { useState } from 'react';

export default function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '39-44-5323523' },
  ]);

  const handleSubmit = (e) => {
    e?.preventDefault();
    const formData = Object.fromEntries(new FormData(e?.target));

    if (persons?.some((person) => person?.name === formData?.name)) {
      window.alert(`${formData?.name} is already added to phonebook`);
    } else if (persons?.some((person) => person?.number === formData?.number)) {
      window.alert(`${formData?.number} is already added to phonebook`);
    } else {
      setPersons((prev) => [...prev, formData]);
    }

    e?.target?.reset();
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add persons to phonebook</legend>
          <p>
            <label htmlFor='name'>Name: </label>
            <input required type='text' name='name' />
          </p>
          <p>
            <label htmlFor='number'>Number: </label>
            <input
              required
              type='tel'
              name='number'
              pattern='[0-9]{2}-[0-9]{2}-[0-9]{7}'
            />
          </p>
          <p>
            <button type='submit'>add</button>
          </p>
        </fieldset>
      </form>
      <h2>Numbers</h2>
      {persons?.map((person, index) => (
        <p key={index}>
          {person?.name} {person?.number}
        </p>
      ))}
    </div>
  );
}
