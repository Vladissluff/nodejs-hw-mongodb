import dotenv from 'dotenv';
dotenv.config({ path: '.env' });
import { initMongoDB } from './db/initMongoConnection.js';
import { setupServer } from './server.js';

initMongoDB().then(() => setupServer());