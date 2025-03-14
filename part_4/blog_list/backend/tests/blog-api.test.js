import mongoose from 'mongoose';
import assert from 'node:assert';
import { after, beforeEach, describe, test } from 'node:test';
import supertest from 'supertest';
import app from '../app.js';
import { DUMMY_BLOGS } from '../constants/dummy.blogs.js';
import { Blog } from '../models/blog.model.js';

const api = supertest(app);

let blogId = '';

beforeEach(async () => {
  await Blog.deleteMany({});

  for (const blog of DUMMY_BLOGS) {
    const newBlog = new Blog(blog);
    await newBlog.save();
  }

  const blog = await Blog.create({
    title: 'Test Blog',
    author: 'Test Author',
    url: 'http://example.com/test',
    likes: 10,
  });

  blogId = blog.id;
});

describe('when there are some blogs saved initially', () => {
  test('blogs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  test('blogs have an id property', async () => {
    const response = await api.get('/api/blogs');

    assert.ok(
      response.body[0].id,
      'The blog post should have an `id` property'
    );
  });
});

describe('addition of a new blog', () => {
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

    const newBlog = updatedBlogs.find((blog) => blog.title === payload.title);

    assert.ok(newBlog, 'The new blog post should be saved in the database');
    assert.strictEqual(
      newBlog.author,
      payload.author,
      'The author should match'
    );
    assert.strictEqual(newBlog.url, payload.url, 'The URL should match');
    assert.strictEqual(newBlog.likes, payload.likes, 'The likes should match');
  });

  test('new blog likes default is 0', async () => {
    const payload = {
      title: 'Blog with Missing Likes',
      author: 'Author',
      url: 'http://example.com/missing-likes',
    };

    const response = await api
      .post('/api/blogs')
      .send(payload)
      .expect(201)
      .expect('Content-Type', /application\/json/);

    assert.strictEqual(response.body.likes, 0, 'Likes should be 0 by default');
  });

  test('if title is missing responds with 400', async () => {
    const payload = {
      url: 'http://example.com/missing-likes',
      author: 'Author',
      likes: 5,
    };

    await api.post('/api/blogs').send(payload).expect(400);
  });

  test('if url is missing responds with 400', async () => {
    const payload = {
      title: 'Some title',
      author: 'Author',
      likes: 5,
    };

    await api.post('/api/blogs').send(payload).expect(400);
  });
});

describe('updating a blog likes', () => {
  test('a blog likes can be updated', async () => {
    const updatedLikes = 20;

    const response = await api
      .put(`/api/blogs/${blogId}`)
      .send({ likes: updatedLikes })
      .expect(200)
      .expect('Content-Type', /application\/json/);

    assert.strictEqual(
      response.body.likes,
      updatedLikes,
      'The likes should be updated'
    );
  });

  test('if blog not exists returns 404', async () => {
    const nonExistentId = new mongoose.Types.ObjectId().toString();
    const updatedLikes = 20;

    await api
      .put(`/api/blogs/${nonExistentId}`)
      .send({ likes: updatedLikes })
      .expect(404);
  });
});

describe('deletion of a blog', () => {
  test('a blog can be deleted by his id', async () => {
    await api.delete(`/api/blogs/${blogId}`).expect(204);

    const deletedBlog = await Blog.findById(blogId);
    assert.strictEqual(deletedBlog, null, 'The blog no longer exists');
  });
});

after(async () => {
  await mongoose.connection.close();
});
