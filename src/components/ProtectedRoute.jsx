import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ element }) => {
  const cartItems = useSelector((state) => state.cart.cart);
  return <div>{cartItems.length > 0 ? element : <Navigate to="/" />}</div>;
};

export default ProtectedRoute;
