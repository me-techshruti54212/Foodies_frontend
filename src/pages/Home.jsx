import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";


import Menu from "../components/Menu";
import Cart from "../components/Cart";
import LoginPage from "../components/LoginPage";

const Home = () => {
  return (
    <>
      {/* <ToastContainer />
      <Navbar /> */}
      <HeroSection />
      <Menu />
      <Cart />

      <LoginPage />
    </>
  );
};

export default Home;
