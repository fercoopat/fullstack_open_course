import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || '';
const TEST_MONGO_URI = process.env.TEST_MONGO_URI || '';

const PORT = Number(process.env.PORT) || 3000;

const NODE_ENV = process.env.NODE_ENV || '';

export { MONGO_URI, NODE_ENV, PORT, TEST_MONGO_URI };
