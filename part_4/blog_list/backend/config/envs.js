import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || '';
const PORT = Number(process.env.PORT) || 3000;

export { MONGO_URI, PORT };
