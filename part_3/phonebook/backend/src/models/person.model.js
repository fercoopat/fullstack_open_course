import { model, Schema } from 'mongoose';

const personSchema = new Schema({
  name: String,
  number: String,
});

export const Person = model('Person', personSchema);
