import { request, response } from 'express';

export const errorHandler = (error, req = request, res = response, next) => {
  console.error(error.message);

  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' });
  }

  next(error);
};
