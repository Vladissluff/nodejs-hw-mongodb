import { Router } from 'express';
import {
  createContactController,
  deleteContactByIdController,
  getAllContactsController,
  getContactByIdController,
  updateContactByIdController,
} from '../controllers/contacts.js';
import { createContactBodyCheck, updateContactBodyCheck } from '../middlewares/validationBody.js';
import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';
<<<<<<< HEAD
import { upload } from '../middlewares/upload.js';
=======
>>>>>>> hw5-auth

const contactsEndpoints = Router();

contactsEndpoints.use(authenticate);

contactsEndpoints.get('/', getAllContactsController);
contactsEndpoints.get('/:contactId', isValidId, getContactByIdController);

<<<<<<< HEAD
contactsEndpoints.post('/', upload.single('photo'), createContactBodyCheck, createContactController);
contactsEndpoints.patch(
  '/:contactId',
  isValidId,
  upload.single('photo'),
  updateContactBodyCheck,
  updateContactByIdController
);
=======
contactsEndpoints.post('/', createContactBodyCheck, createContactController);
contactsEndpoints.patch('/:contactId', isValidId, updateContactBodyCheck, updateContactByIdController);
>>>>>>> hw5-auth
contactsEndpoints.delete('/:contactId', isValidId, deleteContactByIdController);

export default contactsEndpoints;