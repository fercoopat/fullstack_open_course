import axios from 'axios';

export class ApiClient {
  constructor(path) {
    this.path = path;
  }

  async get(path = this.path) {
    return await axios.get(path);
  }

  async post(path = this.path, payload) {
    return await axios.post(path, payload);
  }

  async put(path = this.path, payload) {
    return await axios.put(path, payload);
  }

  async patch(path = this.path, payload) {
    return await axios.patch(path, payload);
  }

  async delete(path = this.path) {
    return await axios.delete(path);
  }
}
