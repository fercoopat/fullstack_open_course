import cors from 'cors';
import express, { json } from 'express';
import { Schema, connect, model } from 'mongoose';
import { MONGO_URI, PORT } from './config/envs.js';
import { logger, unknownEndpoint } from './middlewares/common.middlewares.mjs';
import { errorHandler } from './middlewares/errors.middlewares.mjs';

const app = express();

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
  },
});

const Blog = model('Blog', blogSchema);

await connect(MONGO_URI).then(() => {
  console.log('MongoDB connected');
});

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
