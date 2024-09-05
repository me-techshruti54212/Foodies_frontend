import React from "react";
import Button from "../components/Button"
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";
const ResetPassword = () => {
  const navigate=useNavigate()
  const {id,token}=useParams();
  console.log(id ,"    ",token)
  const [input, setInput] = useState({
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState({
    password: '',
    confirmPassword: '',
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: '' };

      switch (name) {
        
        case 'password':
          if (!value) {
            stateObj[name] = 'Please enter Password.';
          }
          else if(!(value.length >=8)){
            stateObj[name] = 'Your password must have at least 8 characters.';
          }
           else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj['confirmPassword'] =
              'Password and Confirm Password does not match.';
          }           

          break;

        case 'confirmPassword':
          if (!value) {
            stateObj[name] = 'Please enter Confirm Password.';
          } else if (input.password && value !== input.password) {
            stateObj[name] = 'Password and Confirm Password does not match.';
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };
const handlePasswordGeneration=async(e)=>{
  e.preventDefault();
  const password=input.password;
  if(error.password == '' && error.confirmPassword == '' && password==input.confirmPassword && password.length>=8)
  {
    const response=await axios.post(`${import.meta.env.VITE_BACKENDURL}api/user/reset-password/${id}/${token}`,{password});
    if(response.data.success)
    {
      toast.success(response.data.message)
    }
    else{
      toast.error(response.data.message)
    }
    navigate("/")
  }

}
  return (
   
    <div className="mt-1 flex justify-center text-black flex-col items-center gap-2 ">
      <h3 className="text-brand-dark text-center ">Reset password</h3>

      <form className="flex flex-col flex-wrap justify-center sm:w-[400px]  rounded-lg h-[400px] border-2 border-brand-light  p-4 bg-[#90EE90] gap-6" onSubmit={handlePasswordGeneration}>
        <div className="flex flex-col gap-2 ">
          <label className="text-lg ">New password:</label>
          <input type="text" name="password" required className="outline-none  rounded-lg p-2"  value={input.password}
          onChange={onInputChange}
          onBlur={validateInput}/>
           {error.password && <span className="text-[#A52A2A]">**{error.password}</span>}
        </div>
        <div className="flex gap-2 flex-col">
          <label  className="text-lg">Confirm password:</label>
          <input type="text"  name="confirmPassword" required className="outline-none  rounded-lg p-2"   value={input.confirmPassword}
          onChange={onInputChange} 
          onBlur={validateInput}/>
           {error.confirmPassword && (
          <span className="text-[#A52A2A]">**{error.confirmPassword}</span>
        )}
        </div>
        <Button property={"bg-brand-dark mt-8 m-2 rounded p-1 text-white font-semibold"}>Generate Password</Button>
      </form>
    </div>
  );
};

export default ResetPassword;
