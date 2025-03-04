import { PersonService } from '../services';

export const getAllPersons = async () => {
  const { data: persons } = await PersonService.findAllPersons();

  return persons;
};

export const getOnePerson = async (id) => {
  const { data: person } = await PersonService.findOnePerson(id);

  return person;
};

export const createPerson = async (payload) => {
  const { data: updatedPersons } = await PersonService.createPerson(payload);

  return updatedPersons;
};

export const updatePerson = async (id, payload) => {
  const { data } = await PersonService.updatePerson(id, payload);

  return data;
};

export const deletePerson = async (id) => {
  return await PersonService.deletePerson(id);
};
