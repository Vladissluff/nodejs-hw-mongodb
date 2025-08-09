import { initMongoDB } from './db/initMongoConnection.js';
import { setupServer } from './server.js';

<<<<<<< HEAD
const bootstrap = async () => {
  await initMongoDB();
  setupServer();
};

void bootstrap();
=======
initMongoDB().then(() => setupServer());
>>>>>>> hw5-auth
