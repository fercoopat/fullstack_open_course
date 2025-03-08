import 'dotenv/config';

export const PORT = Number(process.env.PORT) || 3000;

export const MONGO_URI = process.env.MONGO_URI || '';
