import { ApiClient } from './api-cilent';

class CountriesService extends ApiClient {
  async findAll() {
    return await this.get(`${this.path}/all`);
  }

  async findOne(name) {
    return await this.get(`${this.path}/name/${name}`);
  }
}

export default new CountriesService('/restcountries/api');
