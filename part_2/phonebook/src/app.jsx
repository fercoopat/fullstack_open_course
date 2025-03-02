import { useEffect, useState } from 'react';
import { addPerson, getPersons } from './api/persons';
import Filter from './components/filter';
import PersonForm from './components/person-form';
import Persons from './components/persons';

export default function App() {
  const [search, setSearch] = useState('');
  const [persons, setPersons] = useState([]);

  const handleAddPerson = async (newPerson) => {
    const data = await addPerson(newPerson);
    setPersons((prev) => [...prev, data]);
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
