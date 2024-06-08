import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Menu from "../components/Menu";
import Cart from "../components/Cart";
import LoginPage from "../components/LoginPage";

const Home = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <HeroSection />
      <Menu />
      <Cart />

      <LoginPage />
    </>
  );
};

export default Home;
