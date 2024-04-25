import * as Yup from 'yup';
export const authSchema = Yup.object().shape({
    login: Yup.string().required('Login is required'),
    pwd: Yup.string().trim().required('Password is required'),
});