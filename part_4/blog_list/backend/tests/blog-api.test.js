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

test('successfully creates a new blog post', async () => {
  const initialBlogs = await Blog.find({});

  const payload = {
    title: 'New Blog Post',
    author: 'New Author',
    url: 'http://example.com/new',
    likes: 5,
  };

  await api
    .post('/api/blogs')
    .send(payload)
    .expect(201)
    .expect('Content-Type', /application\/json/);

  const updatedBlogs = await Blog.find({});
  assert.strictEqual(
    updatedBlogs.length,
    initialBlogs.length + 1,
    'The number of blogs should increase by one'
  );

  const newBlog = updatedBlogs.find((blog) => blog.title === newBlog.title);
  assert.ok(newBlog, 'The new blog post should be saved in the database');
  assert.strictEqual(newBlog.author, newBlog.author, 'The author should match');
  assert.strictEqual(newBlog.url, newBlog.url, 'The URL should match');
  assert.strictEqual(newBlog.likes, newBlog.likes, 'The likes should match');
});

after(async () => {
  await mongoose.connection.close();
});
