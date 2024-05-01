import { useState } from "react";
import authStore from "@servicesAuth";
import { ToastContainer, toast } from "react-toastify";
import { modalUpdatePassword } from "@authInterface";
import { new_password } from "@validation";
import * as yup from 'yup';

function index(props:modalUpdatePassword) {
  const [verifyCode, setverifyCode] = useState('')
  const [newpassword, setnewpassword] = useState('')
  
  async function verifyButton(){
      const payload = {
        email: props.email,
        code: verifyCode,
        new_password: newpassword
      }    
        try{
          await new_password.validate(payload)
          const response = await authStore.verifyForgotPassword(payload)
          if(response.status == 201){
            toast.success("Parol muvaffaqiyatli o'zgartirildi !", {autoClose: 1200})
            setTimeout(() => {
              props.setsendCode(false)
              props.setupdate(false)
            }, 1600);
          }
        }catch(error){
          if (error instanceof yup.ValidationError) {
            toast.error(error.message, {autoClose: 1600});
          }
        }
  }

  return (
    <>
    <ToastContainer />
      <div className='absolute top-0 left-0 w-full bg-white h-[100vh] z-30'>
      <div className='w-[500px] mx-auto shadow-xl border mt-[250px] p-[50px] rounded-xl'>
            <p className="text-[25px] font-bold text-[#2389DA]">Code has been sent to your email 😊 </p>
            <input onChange={(e)=> setverifyCode(e.target.value)} className="block w-full p-3 mt-4 rounded-xl outline-[#00000016] " type="text" placeholder="Kodni kiriting"/>
            <input onChange={(e) => setnewpassword(e.target.value)} className="block w-full p-3 mt-4 rounded-xl outline-[#00000016] " type="password" placeholder="Yangi parolni kiriting" name="new_password"/>
            <button onClick={verifyButton} className="block w-full bg-[#2389DA] text-white font-bold py-[10px] mt-[20px] rounded-xl">Conifromation</button>
      </div>
    </div>
    
    </>
  )
}

export default index