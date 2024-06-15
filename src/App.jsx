import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Success from "./pages/Success";
import ProtectedRoute from "./components/ProtectedRoute";
import PlaceOrder from "./components/PlaceOrder";
import Verify from "./components/Verify";
import MyOrders from "./components/MyOrders";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/success"
          element={<ProtectedRoute element={<Success />} />}
        />
         <Route path="/verify" element={<Verify />} />
        
        <Route path="/placeorder" element={<PlaceOrder/>}/>
        <Route path="/myorders" element={<MyOrders/>}/>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
