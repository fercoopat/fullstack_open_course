import cors from 'cors';
import express, { json, request, response } from 'express';
import 'express-async-errors';
import db from './config/db.js';
import { logger, unknownEndpoint } from './middlewares/common.middlewares.mjs';
import { errorHandler } from './middlewares/errors.middlewares.mjs';
import { Blog } from './models/blog.model.js';

const app = express();

await db();

app.use(cors());
app.use(json());
app.use(logger);

app.get('/api/blogs', async (req = request, res = response) => {
  const blogs = await Blog.find({});

  res.json(blogs);
});

app.post('/api/blogs', async (req = request, res = response) => {
  const blog = new Blog(req.body);

  const result = await blog.save();

  res.status(201).json(result);
});

app.delete('/api/blogs/:id', async (req = request, res = response) => {
  const id = req.params.id;

  await Blog.findByIdAndDelete(id);

  res.status(204).end();
});

app.use(unknownEndpoint);

app.use(errorHandler);

export default app;
