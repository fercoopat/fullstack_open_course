import { axiosInstance } from '../config/axios-instance';

const PERSON_ENDPOINT = '/persons';

export default {
  getAll: async () => {
    const { data } = await axiosInstance.get(PERSON_ENDPOINT);
    return data;
  },
  create: async (payload) => {
    const { data } = await axiosInstance.post(PERSON_ENDPOINT, payload);
    return data;
  },
  update: async (id, payload) => {
    const { data } = await axiosInstance.patch(
      `${PERSON_ENDPOINT}/${id}`,
      payload
    );
    return data;
  },
  remove: async (id) => {
    await axiosInstance.delete(`${PERSON_ENDPOINT}/${id}`);
  },
};
