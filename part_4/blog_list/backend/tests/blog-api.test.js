import mongoose from 'mongoose';
import { after, beforeEach, test } from 'node:test';
import supertest from 'supertest';
import app from '../app.js';
import { Blog } from '../models/blog.model.js';
import { DUMMY_BLOGS } from '../constants/dummy.blogs.js';

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

after(async () => {
  await mongoose.connection.close();
});
