import { useEffect, useState } from 'react';
import {
  addPerson,
  deletePerson,
  getPersons,
  updatePerson,
} from './api/persons';
import Filter from './components/filter';
import Notification from './components/notification';
import PersonForm from './components/person-form';
import Persons from './components/persons';

import './app.css';

const DEFAULT_NOTIFICATION = {
  type: 'error',
  message: '',
};

export default function App() {
  const [search, setSearch] = useState('');
  const [persons, setPersons] = useState([]);
  const [notification, setNotification] = useState(DEFAULT_NOTIFICATION);

  const filteredPersons = [...persons]?.filter((p) =>
    p?.name?.toLowerCase().includes(search?.toLowerCase())
  );

  const handleShowNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification(DEFAULT_NOTIFICATION);
    }, 3000);
  };

  const handleSubmit = async (payload) => {
    const person = persons?.find((person) => person?.name === payload?.name);

    if (!person) {
      try {
        const newPerson = await addPerson(payload);
        setPersons((prev) => [...prev, newPerson]);
        handleShowNotification('success', `Added ${newPerson.name}`);
      } catch (error) {
        if (error) {
          handleShowNotification(
            'error',
            `Information of '${person.name}' has already been removed from server`
          );
          setPersons(persons.filter((p) => p.id !== person.id));
        }
      }
    } else if (
      window.confirm(
        `${person?.name} is already added to phonebook, replace the old number with a new one?`
      )
    ) {
      try {
        const newPerson = await updatePerson(person.id, payload);
        setPersons(
          persons?.map((person) =>
            person.id === newPerson.id ? newPerson : person
          )
        );
        handleShowNotification('success', `${newPerson.name} number updated`);
      } catch (error) {
        if (error) {
          handleShowNotification(
            'error',
            `Information of '${person.name}' has already been removed from server`
          );
          setPersons(persons.filter((p) => p.id !== person.id));
        }
      }
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
      <Notification notification={notification} />
      <Filter search={search} onSearch={handleSearch} />
      <PersonForm onSubmit={handleSubmit} />
      <Persons persons={filteredPersons} onDelete={handleDelete} />
    </div>
  );
}
