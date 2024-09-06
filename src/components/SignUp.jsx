import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import eye from "../assets/eyeicon.png"
import Button from './Button'
import eyeslash from "../assets/invisible_pwd.png";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
const SignUp = () => {
    const navigate=useNavigate()
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [checkName, setCheckName] = useState(false);
    const [checkPass, setCheckPass] = useState(false)
    const [showErr, setShowErr] = useState(false)
  const [type,setType]=useState("password");
  const [checkEmail,setCheckEmail]=useState(false)
  const rightname = /^[a-z,.'-]+$/i;
  useEffect(() => {
    if (rightname.test(name)) {
      document.getElementById('signNameWrong').style.display = "none";
      setCheckName(true)
    }
    else if (name) {
      document.getElementById('signNameWrong').style.display = "block";
      setCheckName(false)
    }
    else{
      document.getElementById('signNameWrong').style.display = "none";
      setCheckName(false)

    }
  }, [name])

  const rightpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/;
  
  useEffect(() => {
    if (rightpass.test(password)) {
      document.getElementById("signInvalidPwdWrong").style.display = "none";
      setCheckPass(true)

    } else if (password) {
      document.getElementById("signInvalidPwdWrong").style.display = "block";
      setCheckPass(false)
    }    
      else{
      document.getElementById("signInvalidPwdWrong").style.display = "none";
setCheckPass(false)
    }
  }, [password]);

  const rightemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  useEffect(() => {
    if (rightemail.test(email)) {
      document.getElementById("emailId").style.display = "none";
      setCheckEmail(true)

    } else if (email) {
      document.getElementById("emailId").style.display = "block";
      setCheckEmail(false)
    }
    else{
      document.getElementById("emailId").style.display = "none";
setCheckEmail(false)
    }
  }, [email]);
  useEffect(()=>{
    if(checkEmail && checkName && checkPass)
    {
      setShowErr(false)
    }
    else{
      setShowErr(true)
    }
  },[checkEmail,checkName,checkPass])

    const handleEventSignUp=async(e)=>{
      e.preventDefault()
if(showErr) {toast.error("Please enter valid details");return false;}
      const res=await axios.post(`${import.meta.env.VITE_BACKENDURL}api/sendOTP`,{email});
      if(res.data.success)
      {
        toast.success(res.data.message);
        navigate("/otp-verification",{state:{email,name,password}});
      }
    }
  return (
    <>
    <div className="fixed top-0 w-full h-full flex items-center justify-center bg-[#00000090] transition-[1s] ">

      <form
        className="flex flex-col flex-wrap p-4 gap-4 border rounded-[25px] bg-[#7edd7e] md:w-[36%] sm:w-1/2 w-[75%]"
        onSubmit={handleEventSignUp}
      >
        <div className="flex items-center justify-between">
          <h3>SignUp</h3>
          <AiOutlineClose
            className="cursor-pointer"
            onClick={() => {
            //   dispatch(openLogin(false));
            //   setStatus("SignIn");
              setName("");
              setEmail("");
              setPassword("");
              navigate("/")
            }}
          />
        </div>
      
          <input
            type="text"
            placeholder="Enter your name"
            required
            name="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="p-2 rounded-[10px] text-black outline-none"
          />
          <p  id="signNameWrong" className='``'>**Name should only consists of alphabet without any whitespaces</p>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={email}
          required
          onChange={(e)=>setEmail(e.target.value)}
          className="p-2 text-black  rounded-[10px] outline-none" 
        />
          <p id="emailId">**Invalid Email Address</p>

        <div className="flex relative items-center">
        <input
          type={type}
          placeholder="Enter your password"
          value={password}
          required
          
          name="password"
          onChange={(e)=>setPassword(e.target.value)}
          className="p-2 rounded-[10px] text-black w-full  outline-none"
        />
         
        <img src={`${type==="text"? eyeslash : eye}`} className="w-[30px] absolute right-[5px] cursor-pointer " onClick={()=>setType((type)=>{
          if(type==="password")
          setType("text")
          else
          setType("password")
        })} />
         

        </div>    
        <p id='signInvalidPwdWrong' className=''>**Password must be 1 uppercase 1 lowercase 1 number 1 special digit character and 8 or more characters</p>
        <p>
          <input type="checkbox" required />
          By continuing, I agree by the terms of use and privacy policy.
        </p>
        <Button property={`bg-black  p-2 font-semibold rounded-[10px] opacity-70`} >
            Send OTP on given email Id
        </Button>     
          <p>
            Already have an account ?{" "}
            <Button
              handleOnClick={() => {
                navigate("/login")
              }}
            >
              Login here
            </Button>
          </p>
     
      </form>
    </div>
    </>

  )
}

export default SignUp