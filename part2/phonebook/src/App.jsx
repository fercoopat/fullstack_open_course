import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import Notification from './components/Notification';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';
import { showConfirmMessage } from './helpers/common.helpers';
import { saveOrUpdatePersons, updatePersons } from './helpers/person.helpers';
import personService from './services/person.service';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [notification, setNotification] = useState({ message: null, type: '' });

  const filteredPersons = [...persons]?.filter((person) =>
    person.name.toLowerCase().includes(filter)
  );

  const handleChangeName = (e) => setNewName(e.target.value);
  const handleChangeNumber = (e) => setNewNumber(e.target.value);
  const handleChangeFilter = (e) =>
    setFilter(e.target.value.trim().toLowerCase());

  const showErrorMessage = (message) => {
    setNotification({ message, type: 'error' });
    setTimeout(() => {
      setNotification(null);
    }, 2500);
  };

  const showSuccessMessage = (message) => {
    setNotification({ message, type: 'success' });
    setTimeout(() => {
      setNotification(null);
    }, 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newName) return;
    const payload = { name: newName, number: newNumber };
    saveOrUpdatePersons(payload, persons)
      .then((newPerson) => {
        setPersons(updatePersons(persons, newPerson));
        showSuccessMessage(`${payload.name} added successfully!`);
      })
      .catch(() => {
        showErrorMessage("Can't perform this action!");
      });
    setNewName('');
    setNewNumber('');
  };

  const handleDelete = (id) => () => {
    if (showConfirmMessage(`Delete the person whit id: ${id}?`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons((prev) => prev.filter((person) => person.id !== id));
          showSuccessMessage('Person removed successfully!');
        })
        .catch(() => {
          showErrorMessage(`Can't remove person with id: ${id}`);
        });
    }
  };

  useEffect(() => {
    personService.getAll().then((persons) => setPersons(persons));
  }, []);

  return (
    <div>
      <h1>Phonebook</h1>
      {!!notification && (
        <Notification message={notification.message} type={notification.type} />
      )}
      <Filter filter={filter} onChange={handleChangeFilter} />
      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        onChangeName={handleChangeName}
        onChangeNumber={handleChangeNumber}
        onSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <PersonList persons={filteredPersons} onDelete={handleDelete} />
    </div>
  );
};

export default App;
