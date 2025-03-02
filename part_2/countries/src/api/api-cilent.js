import axios from 'axios';

const Instance = new axios.create({
  baseURL: 'https://studies.cs.helsinki.fi',
});

export class ApiClient {
  constructor(path) {
    this.path = path;
  }

  async get(path = this.path) {
    return await Instance.get(path);
  }

  async post(path = this.path, payload) {
    return await Instance.post(path, payload);
  }

  async put(path = this.path, payload) {
    return await Instance.put(path, payload);
  }

  async patch(path = this.path, payload) {
    return await Instance.patch(path, payload);
  }

  async delete(path) {
    return await Instance.delete(path);
  }
}
