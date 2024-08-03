import axios from 'axios';
import { OpenWeatherApi } from '../config/axios-instances';
import { OPEN_WEATHER_API_KEY } from '../config/envs';

const DATA_BASE_URL = '/data/2.5';

const IMG_BASE_URL = 'https://openweathermap.org/img';

export default {
  async getWeatherByCity(name, units = 'metric') {
    return await OpenWeatherApi.get(
      `${DATA_BASE_URL}/weather?q=${name}&appid=${OPEN_WEATHER_API_KEY}&units=${units}`
    );
  },
  async getImgByWeather(icon) {
    return await axios.get(`${IMG_BASE_URL}/wn/${icon}@2x.png`);
  },
};
