import { useEffect, useState } from 'react';
import { getPersons } from './api/persons';
import Filter from './components/filter';
import PersonForm from './components/person-form';
import Persons from './components/persons';

export default function App() {
  const [search, setSearch] = useState('');
  const [persons, setPersons] = useState([]);

  const handleAddPerson = (newPerson) => {
    setPersons((prev) => [...prev, newPerson]);
  };

  const handleSearch = (e) => {
    setSearch(e?.target?.value);
  };

  useEffect(() => {
    getPersons().then((data) => setPersons(data));
  }, []);

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
