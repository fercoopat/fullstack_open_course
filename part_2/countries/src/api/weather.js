import { OPEN_WEATHER_KEY } from '../constants/envs';
import { ApiClient } from './api-cilent';

const RESOURCE = 'https://api.openweathermap.org/data/2.5';

class WeatherService extends ApiClient {
  async findOne(name) {
    return await this.get(
      `${this.path}/weather?q=${name}&appid=${OPEN_WEATHER_KEY}&units=metric`
    );
  }
}

export default new WeatherService(RESOURCE);
