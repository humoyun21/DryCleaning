import {Form, Formik, Field, ErrorMessage} from 'formik' 
import TextField from '@mui/material/TextField';
import {useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import authStore from '@servicesAuth';
import { ToastContainer, toast } from 'react-toastify';
import { AuthModal } from '@modals';
import {userRegisterValidate} from "@validation"
import {Register} from "@authInterface"
import { useMask } from '@react-input/mask';

function index() {
  const [isActive, setActive] = useState(false)
  const [ismodal, setModal] = useState(false)
  const [email, setemail] = useState("")

  const inputRef = useMask({
    mask: "+998 (__) ___-__-__",
    replacement: { _: /\d/ },
  });
  const initialvalue = {
    full_name: '',
    phone_number: '',
    email: '',
    password: '',
    verify: '',
  }

  const handleSubmit = async(value:Register) => {
      const phone = value.phone_number.replace(/\D/g, "");
      const newFormData = { ...value, phone_number: `+${phone}` };
      if(value.password == value.verify) {
        const user = {
          full_name: newFormData.full_name,
          phone_number: newFormData.phone_number,
          email: newFormData.email,
          password: newFormData.password
        }
        const response:any = await authStore.register(user)
        if(response.status == 200) {
          setModal(true)
          setemail(user.email)
        }
      }else{
        toast.error('Parol va parol tasdiqlari mos emas', {autoClose : 1200})
      }
  }

  return (  
    <>
    <ToastContainer/>
      <div className='w-[537px] mx-auto'>
        <Link to={'/'} className='absolute top-[100px] left-[145px] flex items-center'>
          <i className='bx bx-arrow-back text-[50px] '></i>
          <p className='text-[30px] font-semibold'>ortga</p>  
        </Link>
        <h1 className='text-center text-[56px] font-bold mt-[50px] mb-[80px]'>Ro‘yxatdan o‘tish</h1>
        <Formik initialValues={initialvalue} validationSchema={userRegisterValidate} onSubmit={handleSubmit}>
            <Form>
              <label className='block mb-[40px]'>
                <Field
                as={TextField}
                id="outlined-basic" 
                label="Ismingiz" 
                variant="filled"
                sx={{width: '100%'}}
                name="full_name"
                autoComplete="off"
                />
                <ErrorMessage name='full_name' component={'p'} className='text-[red]'/>
              </label>
              <label className='block mb-[40px]'>
                <Field
                as={TextField}
                id="outlined-basic" 
                label="Telefon raqamingiz" 
                variant="filled"
                sx={{width: '100%'}}
                name="phone_number"
                autoComplete="off"
                inputRef={inputRef}
                />
                <ErrorMessage name='phone_number' component={'p'} className='text-[red]'/>
              </label>
              <label className='block mb-[40px]'>
                <Field
                as={TextField}
                id="outlined-basic" 
                label="Email" 
                variant="filled"
                sx={{width: '100%'}}
                name="email"
                autoComplete="off"
                />
                <ErrorMessage name='email' component={'p'} className='text-[red]'/>
              </label>
              <label className='block mb-[40px] relative'>
                <Field
                as={TextField}
                id="outlined-basic" 
                label="Parol" 
                variant="filled"
                sx={{width: '100%'}}
                type={isActive ? 'text' : 'password'}
                name="password"
                autoComplete="off"
                />
                 <i onClick={()=> setActive(!isActive)} className={isActive ? 'bx bx-hide absolute text-[35px] right-4 cursor-pointer z-10 top-[10px]' : 'bx bx-show absolute text-[35px] right-4 cursor-pointer z-10 top-[10px]'}></i>
                <ErrorMessage name='password' component={'p'} className='text-[red]'/>
              </label>
              <label className='block mb-[40px]'>
                <Field
                as={TextField}
                id="outlined-basic" 
                label="Parolni tasdiqlash" 
                variant="filled"
                sx={{width: '100%'}}
                type={isActive ? 'text' : 'password'}
                name="verify"
                autoComplete="off"
                />
              </label>
              <Button variant="contained" type='submit' className='w-full block' sx={{mt: "3px", height: '58px', borderRadius: '12px', fontWeight: 700}} disableElevation>Ro'yhatdan o'tish</Button>
              <div className='flex justify-center gap-2 items-center mt-[32px]'>
                   <p className='text-[20px] '>Ro‘yxatdan o‘tganmisiz?</p>
                   <Link to={'/'} className=' text-[20px] font-normal text-[#2389DA]'>Tizimga kirish</Link>
              </div>
            </Form>
        </Formik>
      </div>
      {
        ismodal && <AuthModal isActive={isActive} setActive={setActive} email={email}/>
      }
    </>
  )
}

export default index