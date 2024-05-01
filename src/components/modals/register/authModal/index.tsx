import { verifyCode } from "@authInterface";
import { useState } from "react";
import authStore from "@servicesAuth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function index(props:verifyCode) {
  const navigate = useNavigate()
  const [cod, setCod] = useState('')
  async function verifyButton(){
    const payload = {
      email : props.email,
      code : cod
    }
    try{
      const response:any = await authStore.verify(payload)
      if(response.status == 201) {
        toast.success('Ro‘yxatdan muvaffaqiyatli otdingiz', {autoClose : 1200})
       setTimeout(() => {
          props.setActive(false);
          navigate('/')
       }, 1600)
      }
    }catch(err){
        toast.error("error")
    }
  }

  return (
    <>
    <ToastContainer />
      <div className='absolute top-0 left-0 w-full bg-white h-[100vh] z-20'>
      <div className='w-[500px] mx-auto shadow-xl border mt-[250px] p-[50px] rounded-xl'>
            <p className="text-[25px] font-bold text-[#2389DA]">Code has been sent to your email </p>
            <input onChange={(e) => setCod(e.target.value)} className="block w-full p-3 mt-4 rounded-xl outline-[#00000016] " type="text" placeholder="Kodni kiriting"/>
            <button onClick={verifyButton} className="block w-full bg-[#2389DA] text-white font-bold py-[10px] mt-[20px] rounded-xl">Confirmation</button>
      </div>
    </div>
    
    </>
  )
}

export default index