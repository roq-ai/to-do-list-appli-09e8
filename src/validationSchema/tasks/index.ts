import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string(),
  status: yup.string().required(),
  assigned_to: yup.string().nullable(),
  company_id: yup.string().nullable(),
});
