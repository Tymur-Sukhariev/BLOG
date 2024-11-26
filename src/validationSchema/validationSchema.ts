import * as Yup from 'yup'

const validatePasswordLength = (value:string) => {
    if (value.length < 8 || value.length > 20) {
      return false; 
    }
    return true; 
  };
  
  const validateUppercase = (value:string) => {
    return /[A-Z]/.test(value); 
  };
  
  const validateLowercase = (value:string) => {
    return /[a-z]/.test(value); 
  };
  
  const validateNumber = (value:string) => {
    return /\d/.test(value); 
  };
  
  const validatePasswordSymbol = (value:string) => {
    return /[!@#$&_]/.test(value); 
  };

  const validateNameLetter = (value:string|undefined)=>{
    if(!value) {return true};
    return /^[A-Za-z]+$/.test(value);
  }

  const validateUsername = (value:string)=>{
    if(value.length === 0) {return true};
    return /^[a-z0-9_.-]+$/.test(value)
  }
  



const validationSchema = Yup.object().shape({
    email: Yup.string()
    .email('Invalid email address.')
    .required('Email is required.'),

    firstName: Yup.string()
    .max(25, "Allowed max: 25 characters.") 
    .test('name', 'Allowed: A-Z, a-z.', validateNameLetter),
 

    lastName: Yup.string()
    .max(25, "Allowed max: 25 characters.")
    .test('letter', 'Allowed: A-Z, a-z.', validateNameLetter),


    userName: Yup.string()
    .required('Username is required!')
    .min(5, "Username should contain 5-15 characters!.") 
    .max(15, "Username should contain 5-15 characters!")
    .test('symbols', 'Allowed: a-z, numbers, symbols(_ - .)', validateUsername),

    password: Yup.string()
    .required('Password is required!')
    .test('length', 'Must contain 8-20 characters', validatePasswordLength)
    .test('uppercase', 'Must contain at least one uppercase letter', validateUppercase)
    .test('lowercase', 'Must contain at least one lowercase letter', validateLowercase)
    .test('number', 'Must contain at least one number', validateNumber)
    .test('symbol', 'Must contain at least one special character (@, #, $, &, _)', validatePasswordSymbol),

    repeatPassword: Yup.string()
    .required('Repeat password is required.')
    .oneOf([Yup.ref('password')], 'Passwords must match.'),
})

export default validationSchema;
