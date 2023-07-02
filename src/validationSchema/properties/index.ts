import * as yup from 'yup';

export const propertyValidationSchema = yup.object().shape({
  description: yup.string().required(),
  image: yup.string(),
  location: yup.string().required(),
  price: yup.number().integer().required(),
  bedrooms: yup.number().integer().required(),
  amenities: yup.string(),
  user_id: yup.string().nullable(),
});
