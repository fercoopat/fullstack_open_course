import personService from '../services/person.service';
import { showConfirmMessage } from './common.helpers';

export async function saveOrUpdatePersons(payload, persons) {
  const person = persons.find((person) => person?.name === payload?.name);
  if (!person) {
    return personService.create(payload);
  }
  if (
    showConfirmMessage(`${payload.name} is in phonebook, update the number?`)
  ) {
    return personService.update(person?.id, payload);
  }
}

export function updatePersons(personArray, newPerson) {
  const filteredArray = [...personArray]?.filter(
    (person) => person.id !== newPerson.id
  );

  return [...filteredArray, newPerson];
}
