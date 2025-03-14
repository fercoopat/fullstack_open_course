import { useState } from 'react';
import Filter from './components/filter';
import Notification from './components/notification';
import PersonForm from './components/person-form';
import Persons from './components/persons';

import { useEffect } from 'react';
import './app.css';
import {
  createPerson,
  deletePerson,
  getAllPersons,
  updatePerson,
} from './helpers/person.helpers';

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
        const updatedPersons = await createPerson(payload);
        setPersons((prev) => prev.concat(updatedPersons));
        handleShowNotification('success', `Added ${payload.name}`);
      } catch (error) {
        const message =
          error?.response?.data?.error ||
          error?.message ||
          'Something goes wrong';
        handleShowNotification('error', message);
        setPersons(persons.filter((p) => p._id !== person._id));
      }
    } else if (
      window.confirm(
        `${person?.name} is already added to phonebook, replace the old number with a new one?`
      )
    ) {
      try {
        const newPerson = await updatePerson(person._id, payload);
        setPersons(
          persons?.map((person) =>
            person._id === newPerson._id ? newPerson : person
          )
        );
        handleShowNotification('success', `${newPerson.name} number updated`);
      } catch (error) {
        if (error) {
          handleShowNotification(
            'error',
            error?.message || 'Something goes wrong'
          );
          setPersons(persons.filter((p) => p._id !== person._id));
        }
      }
    }
  };

  const handleSearch = (e) => {
    setSearch(e?.target?.value);
  };

  const handleDelete = (person) => async () => {
    if (window.confirm(`Delete ${person.name}?`)) {
      await deletePerson(person._id);
      setPersons((prev) => prev?.filter((p) => p._id !== person._id));
    }
  };

  useEffect(() => {
    getAllPersons().then((data) => setPersons(data));
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
