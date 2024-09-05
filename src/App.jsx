import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Verify from "./components/Verify";
import PlaceOrder from "./components/PlaceOrder";
import MyOrders from "./components/MyOrders";
import toast, { Toaster } from "react-hot-toast";
import LoginPage from "./components/LoginPage";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Verifymail from "./components/Verifymail";
import SignUp from "./components/SignUp";
import OtpVerification from "./components/OtpVerification";

const App = () => {
  return (
    <BrowserRouter basename="/Foodies_frontend">
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
        <Route path="/verifyemail" element={<Verifymail />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;
