import mongoose from 'mongoose';
import assert from 'node:assert';
import { after, beforeEach, test } from 'node:test';
import supertest from 'supertest';
import app from '../app.js';
import { DUMMY_BLOGS } from '../constants/dummy.blogs.js';
import { Blog } from '../models/blog.model.js';

const api = supertest(app);

beforeEach(async () => {
  await Blog.deleteMany({});

  for (const blog of DUMMY_BLOGS) {
    const newBlog = new Blog(blog);
    await newBlog.save();
  }
});

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

test('blogs have an id property', async () => {
  const response = await api.get('/api/blogs');

  assert.ok(response.body[0].id, 'The blog post should have an `id` property');
});

after(async () => {
  await mongoose.connection.close();
});
