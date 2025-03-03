import { ApiClient } from './api-cilent';

const RESOURCE = 'https://studies.cs.helsinki.fi/restcountries/api';

class CountriesService extends ApiClient {
  async findAll() {
    return await this.get(`${this.path}/all`);
  }

  async findOne(name) {
    return await this.get(`${this.path}/name/${name}`);
  }
}

export default new CountriesService(RESOURCE);
