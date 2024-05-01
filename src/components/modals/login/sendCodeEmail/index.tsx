import { useState } from "react"
import { Link } from "react-router-dom"
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { setsendCode } from "@authInterface";
import authStore from "@servicesAuth";
import UpdatePassword from "../updatePasword"

function index(props:setsendCode) {
  const [isUptdate, setUpdate] = useState(false)
  const schema = yup.object().shape({
    email: yup.string().email("Please! Enter the correct email").required()
  });
  const [cod, setCod] = useState("")

  async function verifyButton(){
   const email = {
      email : cod
   }
   try {
    await schema.validate(email);
    const response:any = await authStore.forgotPassword(email)
    if(response.status === 200){
      setUpdate(true)
    }
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      toast.error("Please! Enter the correct email", {autoClose: 1200});
    }
  }
   
  }
  return (
    <>
      <ToastContainer/>
      <div className='absolute top-0 left-0 w-full bg-white h-[100vh] z-10'>
      <Link to={'/'} className='absolute top-[100px] left-[145px] flex items-center'>
          <i className='bx bx-arrow-back text-[50px] '></i>
          <p className='text-[20px] font-semibold'>Back to registration</p>           
      </Link>
      <div className='w-[1200px] mx-auto mt-[200px] rounded-xl'>
            <p className="text-[40px] font-bold text-[#682cff] text-center mb-[14px]">Password recovery</p>
            <p className="text-[30px] font-semibold text-[#181717] mb-[62px] text-center">Enter your eamil</p>
           <div className="w-[537px] mx-auto">
           <TextField autoComplete="off" className="block w-[537px]" sx={{margin: "0 auto"}} label="Emailni kiriting" variant="filled" onChange={(e) => setCod(e.target.value)}/>
           </div>
           <button onClick={verifyButton} className=" block w-[537px] mx-auto bg-[#2389DA] text-white font-bold  py-[24px] mt-[30px] rounded-xl">Send code</button>
      </div>
    </div>
    {
      isUptdate && <UpdatePassword email={cod} setupdate={setUpdate} setsendCode={props.setsendCode} />
    }
    </>
  )
}

export default index