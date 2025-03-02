import axios from 'axios';

export const ApiClient = new axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
});
