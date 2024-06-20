import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./components/Menu";
// import Success from "./pages/Success";
// import ProtectedRoute from "./components/ProtectedRoute";
import Verify from "./components/Verify";
import PlaceOrder from "./components/PlaceOrder";
import MyOrders from "./components/MyOrders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <BrowserRouter basename="/Foodies_frontend">
    <ToastContainer/>
    <Navbar/>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} /> 
        <Route path="/placeorder" element={<PlaceOrder/>}/>
        <Route path="/myorders" element={<MyOrders/>}/>
        <Route path="/verify" element={<Verify/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
