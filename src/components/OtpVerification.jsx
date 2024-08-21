import React,{useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setToken } from '../redux/slices/SigninSlice'
const OtpVerification = () => {
  // const [otp, setOtp] = useState(new Array(6).fill(''));
    const dispatch=useDispatch()
    const location=useLocation()
    const [otp,setOtp]=useState("")
    const [seconds,setSeconds]=useState(0);
    const navigate=useNavigate()
    // const handleInputChange = (e, index) => {
    //   const { value } = e.target;
    //   const newOtp = [...otp];
    //   newOtp[index] = value;
    //   setOtp(newOtp);
    // };
async function handleOtpVerification(e)
{
    e.preventDefault();
    const email=location.state.email;
    const res=await axios.post(`${import.meta.env.VITE_BACKENDURL}api/verifyOTP`,{email,otp})
    if(res.data.success)
    {
        const response=await axios.post(`${import.meta.env.VITE_BACKENDURL}api/user/register`,{
            "name": location.state.name,
            "email": email,
            "password": location.state.password,
          })
          if (!response) {
            toast.error("Some error occured",{
              duration:4000
            });
          } 
          else if(response.data.success)
          {
            toast.success(response.data.message,{
              duration:2000
            })
            await dispatch(setToken(response.data.token));
            localStorage.setItem("token", response.data.token);
            navigate("/")
          }
         else{
            toast.error(response.data.message)
         }      
    
}
    else{
        toast.error(res.data.message);
    }
}
  return (
    <div>
        <div className='loginBg text-black text-lg flex flex-col items-center'>
        <p className="text-3xl text-center">Email Verification</p>

        <form onSubmit={handleOtpVerification} className='text-black flex flex-col gap-3 justify-center items-center sm:w-[400px]  rounded-lg h-[400px] border-2 border-brand-light  p-4 bg-[#90EE90] '>
            <p className='text-center'>Enter Otp sent to {location.state?.email}</p>
          <div className='flex gap-3 '>
              {/* {otp.map((digit, index) => ( */}
        <input
          // key={index}
          type="text"
          className='p-1 outline-none text-center'
          // maxLength={1}
          placeholder='0  0  0  0  0  0'
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      </div>
            {/* <p className='resendFgtOtp' disabled={seconds !== 0 ? true : false} onClick={() => { dispatch(ResendOtpAction(email), setSeconds(59)) }}>Resend Otp</p>
            <span id="timer">00:{seconds}</span> */}
            <button className='mt-3 px-2  bg-[#ddeae0] items-center' >Continue</button>
            </form>
        </div>
    </div>
  )
}

export default OtpVerification