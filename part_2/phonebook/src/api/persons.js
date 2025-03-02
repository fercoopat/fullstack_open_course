import { ApiClient } from './api-cilent';

const RESOURCE = '/persons';

export const getPersons = async () => {
  const { data } = await ApiClient.get(RESOURCE);

  return data;
};

export const addPerson = async (payload) => {
  const { data } = await ApiClient.post(RESOURCE, payload);

  return data;
};

export const updatePerson = async (personIdd, payload) => {
  const { data } = await ApiClient.put(`${RESOURCE}/${personIdd}`, payload);

  return data;
};

export const deletePerson = async (personId) => {
  const { data } = await ApiClient.delete(`${RESOURCE}/${personId}`);

  return data;
};
