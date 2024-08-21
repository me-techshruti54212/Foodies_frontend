import React, { useState } from 'react'
import axios from "axios"
import toast from 'react-hot-toast';
import OtpVerification from './OtpVerification';
import { useLocation, useNavigate } from 'react-router-dom';

const Verifymail = () => {
    const [email,setEmail]=useState("")
    const location=useLocation()
    const navigate=useNavigate()
  async function mailverify(e)
  {
        e.preventDefault();
        const response=await axios.post(`${import.meta.env.VITE_BACKENDURL}api/sendOTP`,{email}); 
        if(response.data.success)
        {
            navigate("/otp-verification",{state:{email,password:location.state.password,name:location.state.name}});
            toast.success(response.data.message)
        }
        else{
      toast.error(response.data.message)

        }
  }
  return (
    <form onSubmit={mailverify} className='text-black '>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        <button>Continue</button>
    </form>
  )
}

export default Verifymail