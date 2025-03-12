import cors from 'cors';
import express, { json } from 'express';
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

app.get('/api/blogs', async (request, response) => {
  const blogs = await Blog.find({});

  response.json(blogs);
});

app.post('/api/blogs', async (request, response) => {
  const blog = new Blog(request.body);

  const result = await blog.save();

  response.status(201).json(result);
});

app.use(unknownEndpoint);

app.use(errorHandler);

export default app;
