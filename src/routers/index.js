import { Router } from 'express';
import contactsRouter from './contacts.js';
import authRouter from './auth.js';
import { swaggerDocs } from '../middlewares/swaggerDocs .js';

const endpoints = Router();
endpoints.use('/api-docs', swaggerDocs());
endpoints.use('/auth', authRouter);
endpoints.use('/contacts', contactsRouter);

export default endpoints;