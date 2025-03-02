import { ApiClient } from './api-cilent';

export const getPersons = async () => {
  const { data } = await ApiClient.get('/persons');

  return data;
};
