import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Verify from "./components/Verify";
import PlaceOrder from "./components/PlaceOrder";
import MyOrders from "./components/MyOrders";
import { ToastContainer, toast } from "react-toastify";

import { Toaster } from "react-hot-toast";

import LoginPage from "./components/LoginPage";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
const App = () => {
  return (
    <BrowserRouter basename="/Foodies_frontend">
    <ToastContainer/>

      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
