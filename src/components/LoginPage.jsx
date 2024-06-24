import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { setToken, openLogin } from "../redux/slices/SigninSlice";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import eye from "../assets/eyeicon.png"
import eyeslash from "../assets/invisible_pwd.png";
import axios from "axios";
const LoginPage = () => {
  const [status, setStatus] = useState("SignIn");
  const [message,setMessage]=useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type,setType]=useState("password");
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const eventHandle = (e) => {
    if (e.target.name === "name") setName(e.target.value);
    else if (e.target.name === "email") setEmail(e.target.value);
    else if (e.target.name === "password") setPassword(e.target.value);
  };
  const handleEventLoginSignUp = async (e) => {
    e.preventDefault();
    navigate("/")
    var newUrl = `${import.meta.env.VITE_BACKENDURL}`;
    if (status === "SignIn") {
      newUrl += "api/user/login";
    } else {
      newUrl += "api/user/register";
    }
    
    const res = await axios.post(newUrl, {
      "name": name,
      "email": email,
      "password": password,
    });

      
    if (!res) {
      toast("Some error occured");
    } else if (res.data.success) {
      // console.log(res.data.token);
      dispatch(setToken(res.data.token));
      localStorage.setItem("token", res.data.token);
      dispatch(openLogin(false));
      setName("");
      setEmail("");
      setPassword("");
      setStatus("SignIn");
    } else if (!res.data.success) {
      setMessage(res.data.message);
      toast(res.data.message);
    }
  };
  return (
   
      <div className="fixed top-0 w-full h-full flex items-center justify-center bg-[#00000090] transition-[1s]">

        <form
          className="flex flex-col  p-4 gap-4 border rounded-[25px] bg-[#b19671]"
          onSubmit={handleEventLoginSignUp}
        >
          <div className="flex items-center justify-between">
            <h3>{status}</h3>
            <AiOutlineClose
              className="cursor-pointer"
              onClick={() => {
                dispatch(openLogin(false));
                setStatus("SignIn");
                setName("");
                setEmail("");
                setPassword("");
                navigate("/")
              }}
            />
          </div>
          {status === "SignUp" && (
            <input
              type="text"
              placeholder="Enter your name"
              required
              name="name"
              value={name}
              onChange={eventHandle}
              className="p-2 rounded-[10px] text-black outline-none"
            />
          )}
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            required
            onChange={eventHandle}
            className="p-2 text-black  rounded-[10px] outline-none"
          />
          <div className="flex relative items-center">
          <input
            type={type}
            placeholder="Enter your password"
            value={password}
            required
            name="password"
            onChange={eventHandle}
            className="p-2 rounded-[10px] text-black w-full  outline-none"
          />
          <img src={`${type==="text"? eye : eyeslash}`} className="w-[30px] absolute right-[5px] cursor-pointer " onClick={()=>setType((type)=>{
            if(type==="password")
            setType("text")
            else
            setType("password")
          })} />
          </div>
          <p>
            <input type="checkbox" required />
            By continuing, I agree by the terms of use and privacy policy.
          </p>
          <Button property={"bg-black mt-10 p-2 rounded-[10px]"}>
            {status === "SignUp" ? "Create Account" : "SignIn"}
          </Button>

        
          {status === "SignIn" ? (
            <p>
              Create a new account?
              <Button
                handleOnClick={() => {
                  setStatus("SignUp");
                  setName("");
                  setEmail("");
                  setPassword("");
                  setMessage("");
                }}
                property={" font-semibold ml-1 "}
              >
                Click here
              </Button>
            </p>
          ) : (
            <p>
              Already have an account ?{" "}
              <Button
                handleOnClick={() => {
                  setStatus("SignIn");
                  setName("");
                  setEmail("");
                  setPassword("");
                }}
              >
                Login here
              </Button>
            </p>
          )}
        </form>
      </div>
    
  );
};

export default LoginPage;
