import { contactsCollection } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  const result = await contactsCollection.find();
  return result;
};
export const getContactById = async (id) => {
  const result = await contactsCollection.findById(id);
  return result;
};