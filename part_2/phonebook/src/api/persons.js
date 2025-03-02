import { ApiClient } from './api-cilent';

export const getPersons = async () => {
  const { data } = await ApiClient.get('/persons');

  return data;
};

export const addPerson = async (newPerson) => {
  const { data } = await ApiClient.post('/persons', newPerson);

  return data;
};
