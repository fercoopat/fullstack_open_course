import { ApiClient } from '../api/api-cilent';

class PersonService extends ApiClient {
  async findAllPersons() {
    return await this.get();
  }

  async findOnePerson(id) {
    return await this.get(`${this.path}/${id}`);
  }

  async createPerson(payload) {
    return await this.post(this.path, payload);
  }

  async updatePerson(id, payload) {
    return await this.patch(`${this.path}/${id}`, payload);
  }

  async deletePerson(id) {
    return await this.delete(`${this.path}/${id}`);
  }
}

export default new PersonService('/api/persons');
