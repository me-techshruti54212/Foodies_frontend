import React, { useState } from "react";
import Button from "./Button";
import axios from "axios";
// import { set } from 'mongoose'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase/firebase";
import { openLogin, setToken } from "../redux/slices/SigninSlice";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useStateContext } from "../components/GlobalContext/ContextProvider";
// const navigateto=(url)=>{
//     // window.location.href=url;
// }
// let data;
// async function auth()
// {
//     try{
//     const res=axios.post(`${import.meta.env.VITE_BACKENDURL}api/auth/request`)
//     // navigateto(res.data.url);
// data=res;

//     }
//     catch(Err)
//     {
//         console.log(Err)
//     }
// }
const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useStateContext();
  const [authing, setAuthing] = useState();
  //     const [user,setUser]=useState();

  //     const getAuth=async()=>{
  //         await axios.post(`${import.meta.env.VITE_BACKENDURL}api/auth/request`).then((res)=>setUser(res));
  //     }
  //     console.log(user);
  // console.log(data);

  const SigninWithGoogle = async () => {
    setAuthing(true);
   await signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        dispatch(setToken(response.user?.accessToken));
        console.log("Res",response.user);
        localStorage.setItem("token", response.user?.accessToken);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };
  return (
    <Button
      handleOnClick={() => SigninWithGoogle()}
      property={"bg-brand-dark font-semibold p-2 rounded-lg uppercase"}
      type="button"
    >
      Sign In with Google
    </Button>
  );
};

export default OAuth;
