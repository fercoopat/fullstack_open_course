import axios from 'axios';

export const CountriesApi = axios.create({
  baseURL: 'https://studies.cs.helsinki.fi/restcountries/api',
});

export const OpenWeatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org',
});
