import { connect } from 'mongoose';
import { MONGO_URI } from './envs.js';

export default async () => {
  try {
    await connect(MONGO_URI);
    console.log('MongoDB connected!');
  } catch (error) {
    console.error('error connecting to MongoDB:', error.message);
  }
};
