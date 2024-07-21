import * as yup from 'yup';
import {validateLen,validateEmailOrPhoneNumber} from './validationFun';

export const loginSchema = yup.object().shape({
    emailPnone: yup
    .string()
    .required('Email is email or phone is required')
    .test('emailphone',function(value){
        const result = validateEmailOrPhoneNumber(value??'');
            if (result === true) {
                return true;
            } else {
                return this.createError({ message: result });
            }
        }),
    password: yup
        .string()
        .required('Password is required')
        .test('len', 'Password must be at least 4 characters', validateLen),
});


export const registerSchema = yup.object().shape({
    email: yup
        .string()
        .email('Invalid email')
        .required('Email is required'),
    phone: yup
        .string()
        .matches(/^[0-9]+$/, 'Phone must be only digits')
        .length(10, 'Phone must be exactly 10 digits')
        .required('Phone is required'),
    username: yup
        .string()
        .required('Name is required'),
    password: yup
        .string()
        .required('Password is required')
        .test('len', 'Password must be at least 4 characters', validateLen),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), ''], 'Passwords must match')
        .required('Confirm Password is required'),
    });