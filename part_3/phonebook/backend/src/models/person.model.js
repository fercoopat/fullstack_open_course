import { model, Schema } from 'mongoose';

const personSchema = new Schema({
  name: {
    type: String,
    minLength: 3,
    required: true,
    unique: true,
  },
  number: {
    type: String,
    minLength: 10,
    required: true,
  },
});

export const Person = model('Person', personSchema);
