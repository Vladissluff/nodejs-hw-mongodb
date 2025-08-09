import express from 'express';
import pinoLogger from 'pino-http';
import corse from 'cors';
<<<<<<< HEAD
=======
import { getEnvVar } from './utils/getEnvVar.js';
>>>>>>> hw5-auth
import router from './routers/index.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import cookieParser from 'cookie-parser';
<<<<<<< HEAD
import { HTTP_PORT } from './constants/index.js';

export const setupServer = () => {
  const httpServer = express();
  const PORT = HTTP_PORT;
=======

export const setupServer = () => {
  const httpServer = express();
  const PORT = getEnvVar('port', 3000);
>>>>>>> hw5-auth
  httpServer.set('json spaces', 2); 

  httpServer.use(corse());
  httpServer.use(cookieParser());

  httpServer.use(pinoLogger({ transport: { target: 'pino-pretty' } }));

  httpServer.use(express.json()); 
<<<<<<< HEAD
  
=======
  httpServer.use(express.urlencoded({ extended: true })); 

  httpServer.get('/', (request, response) => {
    response.send('Welcome to "Contacts book". Please pass to /contacts');
  });

>>>>>>> hw5-auth
  httpServer.use(router);

  httpServer.use(notFoundHandler);
  httpServer.use(errorHandler);

  httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};