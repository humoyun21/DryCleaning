import * as yup from 'yup';

export const userLoginValidate = yup.object().shape({
    email: yup.string().email("Emailni to'g'ri kiriting ! (gmail.com)").required('Emailni kiriting !'),
    password: yup.string().required('Parolni kiriting !'),
})

export const userRegisterValidate = yup.object().shape({
    full_name: yup.string().min(6, 'Ismingiz 6 harfdan kam bolmasligi kerak !').required("Iltimos soro'vni to'ldiring ! "),
    phone_number: yup.string().min(19, "Telefon raqam to'g'ri kiriting !").required("Iltimos so'rovni to'ldiring !"),
    email: yup.string().email("Iltimos emailni to'gri kiriting !").required("Iltimos so'rovni to'ldiring !"),
    password: yup.string().min(8, "Parolingiz 8 tadan kam bo'lmasin !").matches( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Parol kamida bitta katta harf, bitta kichik harf, bitta raqam va bitta maxsus belgidan iborat bo'lishi kerak").required("Iltimos so'rovni to'ldiring !"),
})


export const new_password = yup.object().shape({
    new_password: yup.string().min(8, "Parolingiz 8 tadan kam bo'lmasin !").matches( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Parol kamida bitta katta harf, bitta kichik harf, bitta raqam va bitta maxsus belgidan iborat bo'lishi kerak").required("Iltimos so'rovni to'ldiring !"),
})