import express, { request, response } from 'express';
import { PORT } from './config/envs.mjs';
import { logger, unknownEndpoint } from './middlewares/common.middlewares.mjs';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import db from './config/db.js';
import { Person } from './models/person.model.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(logger);
app.use(cors());

app.use(express.static(path.join(__dirname, '../dist')));

await db();

app.get('/info', async (req = request, res = response) => {
  Person.find({}).then((persons) => {
    res.send(`
      <p>Phonebook has info for ${persons?.length} people</p>
      <p>${new Date().toString()}</p>
      `);
  });
});

app.get('/api/persons', (req = request, res = response) => {
  Person.find({}).then((persons) => {
    res.json(persons);
  });
});

app.post('/api/persons', (req = request, res = response) => {
  const payload = req.body;

  if (!payload?.name || !payload?.number) {
    return res.status(400).json({ error: 'name or number is missing' });
  }

  const newPerson = new Person({
    ...payload,
  });

  newPerson.save().then((person) => {
    res.json(person);
  });
});

app.get('/api/persons/:id', (req = request, res = response) => {
  const id = req.params.id;

  Person.findById(id).then((person) => {
    if (!person) {
      res.status(404).send('Person not found');
    } else {
      res.json(person);
    }
  });
});

app.patch('/api/persons/:id', (req = request, res = response) => {
  const id = req.params.id;
  const payload = req.body;

  Person.findByIdAndUpdate(id, payload, { new: true }).then((person) => {
    if (!person) {
      res.status(404).send('Person not found');
    } else {
      res.json(person);
    }
  });
});

app.delete('/api/persons/:id', (req = request, res = response) => {
  const id = req.params.id;

  Person.findByIdAndDelete(id)
    .then(() => {
      res.send('Person deleted');
    })
    .catch(() => {
      res.status(404).send('Person not found');
    });
});

app.use(unknownEndpoint);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
