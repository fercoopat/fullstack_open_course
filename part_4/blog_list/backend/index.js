import cors from 'cors';
import express, { json } from 'express';
import db from './config/db.js';
import { PORT } from './config/envs.js';
import { logger, unknownEndpoint } from './middlewares/common.middlewares.mjs';
import { errorHandler } from './middlewares/errors.middlewares.mjs';
import { Blog } from './models/blog.model.js';

const app = express();

await db();

app.use(cors());
app.use(json());
app.use(logger);

app.get('/api/blogs', (request, response, next) => {
  Blog.find({})
    .then((blogs) => {
      response.json(blogs);
    })
    .catch(next);
});

app.post('/api/blogs', (request, response, next) => {
  const blog = new Blog(request.body);

  blog
    .save()
    .then((result) => {
      response.status(201).json(result);
    })
    .catch(next);
});

app.use(unknownEndpoint);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
