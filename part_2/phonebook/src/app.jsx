import { useState } from 'react';

const DEFAULT_PERSONS = [
  { name: 'Arto Hellas', number: '040-123456', id: 1 },
  { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
];

export default function App() {
  const [search, setSearch] = useState('');
  const [persons, setPersons] = useState(DEFAULT_PERSONS);

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

  const handleSearch = (e) => {
    setSearch(e?.target?.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <p>
        <label htmlFor='search'>Filter shown with: </label>
        <input
          type='search'
          name='search'
          value={search}
          onChange={handleSearch}
        />
      </p>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend style={{ fontWeight: 600 }}>Add a new</legend>
          <p>
            <label htmlFor='name'>Name: </label>
            <input required type='text' name='name' />
          </p>
          <p>
            <label htmlFor='number'>Number: </label>
            <input required type='tel' name='number' pattern='[0-9]{10}' />
          </p>
          <div>
            <button type='submit'>+ Add</button>
          </div>
        </fieldset>
      </form>
      <h2>Numbers</h2>
      {[...persons]
        ?.filter((p) => p?.name?.toLowerCase().includes(search?.toLowerCase()))
        ?.map((person, index) => (
          <p key={index}>
            {person?.name} {person?.number}
          </p>
        ))}
    </div>
  );
}
