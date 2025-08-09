import { contactsCollection } from '../db/models/contacts.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllContacts = async ({ page, perPage, sortBy, sortOrder, isFavourite, type }, ownerId) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const ownerContacts = contactsCollection.where('userId').equals(ownerId);

  if (isFavourite !== null) {
    ownerContacts.where('isFavourite').equals(isFavourite);
  }

  if (type !== null) {
    ownerContacts.where('contactType').equals(type);
  }

  const totalContacts = await contactsCollection.find().merge(ownerContacts).countDocuments();

  const contacts = await ownerContacts
    .skip(skip)
    .limit(limit)
    .sort({ [sortBy]: sortOrder })
    .exec();
<<<<<<< HEAD
=======

>>>>>>> hw5-auth
  const paginationData = calculatePaginationData(totalContacts, perPage, page);

  return {
    data: contacts,
    ...paginationData,
  };
};

export const getContactById = async (id, ownerId) => {
  const contact = await contactsCollection.findOne({ _id: id, userId: ownerId });
  return contact;
};

export const createContact = async (payload, ownerId) => {
<<<<<<< HEAD
  const newContact = await contactsCollection.create({ userId: ownerId, ...payload });
=======
  const newContact = await contactsCollection.create({
    ...payload,
    userId: ownerId,
  });
>>>>>>> hw5-auth
  return newContact;
};

export const updateContactById = async (id, payload, ownerId) => {
<<<<<<< HEAD
  const options = {
    new: true,
  };
  const updatedContact = await contactsCollection.findOneAndUpdate({ _id: id, userId: ownerId }, payload, options);
=======
  const options = { new: true };
  const updatedContact = await contactsCollection.findOneAndUpdate(
    { _id: id, userId: ownerId },
    payload,
    options
  );
>>>>>>> hw5-auth
  return updatedContact;
};

export const deleteContactById = async (id, ownerId) => {
<<<<<<< HEAD
  const updatedContact = await contactsCollection.findOneAndDelete({ _id: id, userId: ownerId });
  return updatedContact;
=======
  const deletedContact = await contactsCollection.findOneAndDelete({ _id: id, userId: ownerId });
  return deletedContact;
>>>>>>> hw5-auth
};