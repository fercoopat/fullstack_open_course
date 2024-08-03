import { CountriesApi } from '../config/axios-instances';

const ALL_COUNTRIES = '/all';
const COUNTRY_BY_NAME = '/name';

export default {
  getAll: async () => {
    const { data } = await CountriesApi.get(ALL_COUNTRIES);
    return data;
  },
  getOneByName: async (name) => {
    const { data } = await CountriesApi.get(`${COUNTRY_BY_NAME}/${name}`);
    return data;
  },
};
