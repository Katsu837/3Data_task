import * as Yup from 'yup';
export const authSchema = Yup.object().shape({
    login: Yup.string().trim().required('Поле обязательно'),
    pwd: Yup.string().trim().required('Поле обязательно'),
});

export const meFormSchema = Yup.object().shape({
    fio: Yup.string(),
    position: Yup.string(),
    email: Yup.string().email('Неверный формат'),
    phone: Yup.string()
});