import mongoose from 'mongoose';
import { MONGO_URI } from './constants/envs.mjs';

const name = process.argv[2];
const number = process.argv[3];

mongoose.set('strictQuery', false);

mongoose.connect(MONGO_URI);

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model('Person', personSchema);

if (process.argv.length === 2) {
  Person.find({}).then((result) => {
    console.log('phonebook:');
    if (!result?.length) {
      console.log('No persons in phonebook');
    } else {
      result.forEach((person) =>
        console.log(`${person.name} ${person.number}`)
      );
    }
    mongoose.connection.close();
  });
} else {
  const person = new Person({
    name,
    number,
  });

  person.save().then((result) => {
    console.log(`added ${name} number ${number} to phonebook`);
    mongoose.connection.close();
  });
}
