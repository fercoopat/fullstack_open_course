import { connect } from 'mongoose';
import { MONGO_URI, NODE_ENV, TEST_MONGO_URI } from './envs.js';

const uri = NODE_ENV === 'test' ? TEST_MONGO_URI : MONGO_URI;

export default async () => {
  try {
    await connect(uri);
    console.log('MongoDB connected!');
  } catch (error) {
    console.error('error connecting to MongoDB:', error.message);
  }
};
