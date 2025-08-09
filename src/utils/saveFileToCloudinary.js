import { v2 as cloudinary } from 'cloudinary';
import { getEnvVar } from './getEnvVar.js';
import createHttpError from 'http-errors';
import fs from 'node:fs/promises';

export const saveFileToCloudinary = async (file) => {
  cloudinary.config({
    secure: true,
    cloud_name: getEnvVar('CLOUDINARY_CLOUD_NAME'),
    api_key: getEnvVar('CLOUDINARY_API_KEY'),
    api_secret: getEnvVar('CLOUDINARY_API_SECRET'),
  });

  
  const uploadResult = await cloudinary.uploader
    .upload(file.path, {
      asset_folder: 'contactsPhoto',
      unique_filename: false,
      use_filename: true,
      use_filename_as_display_name: true,
      resource_type: 'image',
    })
    .catch((error) => {
      console.error(error);
      throw createHttpError(500, "Images cloud don't response. try again later!");
    })
    .finally(() => {
      fs.unlink(file.path);
    });

  
  return uploadResult.secure_url;

  
};