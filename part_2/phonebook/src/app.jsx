import { useEffect, useState } from 'react';
import {
  addPerson,
  deletePerson,
  getPersons,
  updatePerson,
} from './api/persons';
import Filter from './components/filter';
import PersonForm from './components/person-form';
import Persons from './components/persons';

export default function App() {
  const [search, setSearch] = useState('');
  const [persons, setPersons] = useState([]);

  const handleSubmit = async (payload) => {
    const person = persons?.find((person) => person?.name === payload?.name);

    if (!person) {
      const newPerson = await addPerson(payload);
      setPersons((prev) => [...prev, newPerson]);
    } else if (
      window.confirm(
        `${person?.name} is already added to phonebook, replace the old number with a new one?`
      )
    ) {
      const newPerson = await updatePerson(person.id, payload);
      setPersons(
        persons?.map((person) =>
          person.id === newPerson.id ? newPerson : person
        )
      );
    }
  };

  const handleSearch = (e) => {
    setSearch(e?.target?.value);
  };

  const handleDelete = (person) => async () => {
    if (window.confirm(`Delete ${person.name}?`)) {
      const data = await deletePerson(person.id);
      setPersons((prev) => prev?.filter((p) => p.id !== data.id));
    }
  };

  useEffect(() => {
    getPersons().then((data) => setPersons(data));
  }, []);

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter search={search} onSearch={handleSearch} />
      <PersonForm onSubmit={handleSubmit} />
      <Persons
        persons={[...persons]?.filter((p) =>
          p?.name?.toLowerCase().includes(search?.toLowerCase())
        )}
        onDelete={handleDelete}
      />
    </div>
  );
}
