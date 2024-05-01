export interface Register {
    full_name: string;
    email: string;
    phone_number: string;
    password: string;
    verify: string;
}

export interface Login {
    email: string;
    password: string;
}

export interface Signin {
    full_name: string;
    email: string;
    phone_number: string;
    password: string;
}

export interface forgotPassword{
    email:string;
}

export interface refreshToken{
    token:string;
}

export interface updatePassword{
    email:string;
    password:string;
}

export interface verify{
    code:string;
    email:string;
}

export interface verifyForgotPassword{
    code: string;
    email: string;
    new_password:string;
}


export interface verifyCode {
    email:string;
    isActive: boolean;
    setActive: (isActive:boolean) => any;
}


export interface setsendCode{
    setsendCode: (sendCode: boolean) => any;
}

export interface Request{
    login: (data: Login) => any; 
    register: (data: Signin) => any;
    forgotPassword: (data: forgotPassword) => any;
    refreshToken: (data: refreshToken) => any;
    verifyForgotPassword: (data: verifyForgotPassword) => any;
    updatePassword: (data: updatePassword) => any;
    verify: (data: verify) => any;
}

export interface modalUpdatePassword{
    email:string;
    setupdate: (isUpdate:boolean) => any;
    setsendCode: (sendCode: boolean) => any;
}