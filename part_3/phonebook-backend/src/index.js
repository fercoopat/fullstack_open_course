import express, { request, response } from 'express';
import { PORT } from './constants/envs.mjs';

const app = express();

app.use(express.json());

const persons = [
  {
    id: '1',
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: '2',
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: '3',
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: '4',
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
  },
];

app.get('/info', (req = request, res = response) => {
  res.send(`
    <p>Phonebook has info for ${persons?.length} people</p>
    <p>${new Date().toString()}</p>
    `);
});

app.get('/api/persons', (req = request, res = response) => {
  res.json(persons);
});

app.post('/api/persons', (req = request, res = response) => {
  const payload = req.body;
  persons.push({
    ...payload,
    id: Math.ceil(Math.random() * 1000).toString(),
  });
  res.json(persons);
});

app.get('/api/persons/:id', (req = request, res = response) => {
  const id = req.params.id;
  const person = persons.find((p) => p.id === id);

  if (!person) {
    return res.status(404).send('Person not found');
  }

  res.json(person);
});

app.delete('/api/persons/:id', (req = request, res = response) => {
  const id = req.params.id;
  const personIndex = persons.findIndex((p) => p.id === id);

  if (!personIndex) {
    return res.status(404).send('Person not found');
  }

  persons?.splice(personIndex, 1);

  res.send('Person deleted');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
