import JoiValidation from 'joi';

export const bodyValidationSchema = JoiValidation.object({
  userId: JoiValidation.forbidden().messages({ 'any.unknown': "Owner ID can't be changed" }),
  name: JoiValidation.string().min(3).max(20),
  phoneNumber: JoiValidation.string()
    .min(3)
    .max(20)
    .pattern(/^[\d\s()+-]+$/),
  email: JoiValidation.string().min(3).max(20).email(),
  isFavourite: JoiValidation.boolean(),
  contactType: JoiValidation.string().valid('work', 'home', 'personal'),
});