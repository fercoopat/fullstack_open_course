import { ApiClient } from './api-cilent';

const RESOURCE = '/persons';

export const getPersons = async () => {
  const { data } = await ApiClient.get(RESOURCE);

  return data;
};

export const addPerson = async (newPerson) => {
  const { data } = await ApiClient.post(RESOURCE, newPerson);

  return data;
};
