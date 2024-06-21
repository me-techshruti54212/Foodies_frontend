import React from "react";
import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/foodieslogo2.png";
import cartlock from "../assets/cartlock.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { openLogin, setToken } from "../redux/slices/SigninSlice";
import profile_icon from "../assets/profile_icon.png";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const [nav, setnav] = useState(false);
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cart);
  const [profile_dropdown, setProfile_DropDown] = useState(false);

  const dispatch = useDispatch();
  const token = useSelector((state) => state.signin.token);
  const handleNav = () => {
    setnav(!nav);
  };

  const menuRef = useRef();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.clear();

    dispatch(setToken(""));
    navigate("/");
  };
  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current?.contains(e.target)) {
        setProfile_DropDown(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(setToken(localStorage.getItem("token")));
    }
  }, []);
  return (
    <nav>
      <div className="bg-brand-dark flex items-center justify-between px-10 py-1  relative">
        <img className="w-[9rem] lg:w-[12rem] ml-5 " src={logo} />

        <div
          className={`${
            nav
              ? "flex flex-col gap-10 absolute right-0 top-[0] w-[100%] text-center bg-[#1AC073] h-screen justify-center "
              : "hidden"
          } sm:flex gap-7`}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
  
   <div className="flex gap-3 items-center relative ">
          <div
            className="relative  mr-3"
            onClick={() => {
              cartItems.length
                ? token
                  ? navigate("/placeorder")
                  : toast.error("SignIn to Place Order")
                : toast.error(`Cart Is Empty`);
            }}
          >
            <img src={cartlock} className=" w-[26px]" />
            <span
              className="absolute top-[6px] left-[3px] cursor-pointer"
              title="Place order"
            >
              ✅
            </span>
          </div>
        
          {!token ? (
            <Button
              property={
                "lg:px-3 sm:py-1 sm:px-2 px-1 sm:border border rounded-[10px] sm:rounded-[25px] hover:bg-slate-100 hover:text-black"
              }
              handleOnClick={() => dispatch(openLogin(true))}
            >
              Sign In
            </Button>
          ) : (
            <div className="flex flex-col relative" ref={menuRef}>
              <img
                src={profile_icon}
                className="w-[28px]  p-1 cursor-pointer  "
                onClick={() => setProfile_DropDown(!profile_dropdown)}
              />
              {profile_dropdown && (
                <ul className="p-2  absolute right-[-27%] top-[88%] w-[150px] ">
                  <li
                    onClick={() => navigate("/myorders")}
                    className="p-2 bg-green-300 border cursor-pointer hover:text-black"
                  >
                    My Orders
                  </li>
                  <li
                    className="p-2 cursor-pointer hover:text-black bg-green-300 border"
                    onClick={logout}
                  >
                    LogOut
                  </li>
                </ul>
              )}
             
            </div>
           
          )}
          <div onClick={handleNav} className="sm:hidden">
            {nav ? (
              <AiOutlineClose size={20}  />
            ) : (
              <AiOutlineMenu size={20} />
            )}
          </div> 
          </div>
         
       
       
      </div>
    </nav>
  );
};

export default Navbar;
