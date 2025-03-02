import axios from 'axios';

const Instance = new axios.create({
  baseURL: 'http://localhost:3000',
});

export class ApiClient {
  constructor(path) {
    this.path = path;
  }

  async findAll() {
    return await Instance.get(this.path);
  }

  async findOne(id) {
    return await Instance.get(`${this.path}/${id}`);
  }

  async create(payload) {
    return await Instance.post(this.path, payload);
  }

  async update(id, payload) {
    return await Instance.patch(`${this.path}/${id}`, payload);
  }

  async delete(id) {
    return await Instance.delete(`${this.path}/${id}`);
  }
}
