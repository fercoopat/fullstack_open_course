import { request, response } from 'express';

export const unknownEndpoint = (req = request, res = response) => {
  res.status(404).send({ error: 'unknown endpoint' });
};
