import { CountriesService, WeatherService } from '../api';

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
  if (!name) {
    return;
  }

  const { data } = await CountriesService.findOne(name);

  return data;
};

export const getCityWeather = async (city) => {
  if (!city) {
    return;
  }

  const { data } = await WeatherService.findOne(city);

  return data;
};

export const getWeatherIcon = (icon) =>
  `https://openweathermap.org/img/wn/${icon}@2x.png`;
