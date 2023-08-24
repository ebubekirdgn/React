import { object, string } from 'yup';

const required_message = "Bu alan zorunludur"
const contactSchema = object({
    firstname: string().required(required_message),
    lastname: string().required(required_message),
    message: string().required(required_message).min(5),
    email: string().email("Geçerli bir e mail adresi giriniz").required(required_message),
  });
  export default contactSchema;