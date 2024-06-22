import React from "react";
import HeroSection from "../components/HeroSection";
import { useSelector } from "react-redux";

import Menu from "../components/Menu";
import Cart from "../components/Cart";
import LoginPage from "../components/LoginPage";

const Home = () => {
  const login = useSelector((state) => state.signin.signin);

  return (
    <>
     
      <HeroSection />
      <Menu />
      <Cart />

    </>
  );
};

export default Home;
