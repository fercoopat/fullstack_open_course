import { useState } from 'react';
import Filter from './components/filter';
import PhonebookForm from './components/person-form';
import PersonForm from './components/person-form';
import Persons from './components/persons';

const DEFAULT_PERSONS = [
  { name: 'Arto Hellas', number: '040-123456', id: 1 },
  { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
];

export default function App() {
  const [search, setSearch] = useState('');
  const [persons, setPersons] = useState(DEFAULT_PERSONS);

  const handleAddPerson = (newPerson) => {
    setPersons((prev) => [...prev, newPerson]);
  };

  const handleSearch = (e) => {
    setSearch(e?.target?.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter search={search} onSearch={handleSearch} />
      <PersonForm persons={persons} onAddPerson={handleAddPerson} />
      <Persons
        persons={[...persons]?.filter((p) =>
          p?.name?.toLowerCase().includes(search?.toLowerCase())
        )}
      />
    </div>
  );
}
