import React, { useState } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { TailSpin } from "react-loader-spinner";

import { ForgotPwd } from "../redux/slices/ForgotPasswordSlice";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const {data,isLoading}=useSelector((s)=>s.fgtpwd);
  const handleResetPwd = async(e) => {
    e.preventDefault();
   if(email!==""){
     console.log(email);
   await dispatch(ForgotPwd(email));
    if(data?.success)
    {
      toast.success(data?.message)
    }
    else{
      toast.error(data?.message)

    }}
  };
  return (
    <div className="mt-1 flex justify-center text-black flex-col items-center gap-2">
      <h3  className="text-brand-dark text-center ">Forgot password</h3>

      <div className="flex flex-col  justify-center   sm:w-[400px]  rounded-lg h-[400px] border-2 border-brand-light  p-4 bg-[#90EE90]">
        <form className="flex flex-col gap-10 " onSubmit={handleResetPwd}>

          <div className="flex  flex-col gap-1">
            <label>Email:</label>
            <input
              type="email"
              required
              className="rounded p-2 outline-none"
              placeholder="Enter your email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        
         <Button
            property={"p-1 rounded border-2 bg-grey font-semibold flex gap-5 justify-center"}
        
          >
            Get Reset Password link on mail{isLoading && 
           
        <TailSpin 
          visible={true}
          height="20"
          width="20"
          color="#111"
          ariaLabel="tail-spin-loading"
          radius="0.5"
          wrapperStyle={{}}
          wrapperClass=""
        />
      
          }
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
