import mongoose from 'mongoose';
import { MONGO_URI } from './envs.mjs';

mongoose.set('strictQuery', false);

export default async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected!');
  } catch (error) {
    console.log('error connecting to MongoDB:', error.message);
  }
};
