import * as Yup from 'yup';
import { removeNonDigits } from '../utils/misc';

export const contactFormSchema = Yup.object().shape({
  name: Yup.string().required('Your name is required'),
  email: Yup.string()
    .email('A valid email is required')
    .required('Your email is required'),
  phone: Yup.string()
    .transform(value => {
      return removeNonDigits(value);
    })
    .matches(new RegExp(/^\d{10}$/), 'Must be a valid 10 digit number'),
  message: Yup.string().required('A message is required'),
});
