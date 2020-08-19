import * as yup from 'yup'

const formSchema = yup.object().shape({
    email: yup
      .string()
      .email("Must be a valid email address.")
      .required("Must include email address."),
    first_name: yup
      .string()
      .min(3, "First name must be at least 3 characters long.")
      .required("First name is Required"),
      last_name: yup
      .string()
      .min(3, "Last name must be at least 3 characters long.")
      .required("Last name is Required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters long.")
      .required("Password is Required"),
      avatar: yup
      .string()
      
  });

  export default formSchema