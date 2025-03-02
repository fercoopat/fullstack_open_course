import { CountriesService } from '../api';

export const getCountries = async () => {
  const { data } = await CountriesService.findAll();

  return data;
};

export const searchCountries = async (search = '') => {
  const { data } = await CountriesService.findAll();

  if (!search) {
    return [];
  }

  return data;
};

export const getOneCountry = async (name) => {
  const { data } = await CountriesService.getOneCountry(name);

  return data;
};
