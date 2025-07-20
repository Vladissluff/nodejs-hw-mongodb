import { Router } from 'express';
import {
  createContactController,
  deleteContactByIdController,
  getAllContactsController,
  getContactByIdController,
  updateContactByIdController,
} from '../controllers/contacts.js';

const endpoints = Router();

endpoints.get('/', (request, response) => {
  response.send('Welcome to "Contacts book". Please pass to /contacts');
});
endpoints.get('/', getAllContactsController);
endpoints.get('/:contactId', getContactByIdController);

endpoints.post('/', createContactController);
endpoints.patch('/:contactId', updateContactByIdController);
endpoints.delete('/:contactId', deleteContactByIdController);

export default endpoints;