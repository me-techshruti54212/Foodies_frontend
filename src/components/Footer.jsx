import React, { useState } from "react";
import logo from "../assets/foodieslogo2.png";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  return (
    <div className="w-[100%] bg-brand-dark">
      <div className="px-1 py-2 text-white bg-brand-dark sm:flex gap-6 justify-around sm:w-[85%] mx-auto">
        <div className="flex flex-col gap-1 sm:w-1/3  sm:text-left text-center">
          <img src={logo} className="w-40 block mx-auto" />
          <p>
            Foodies is a platform through which people can order food and it
            provides home delivery of food to their customers.{" "}
          </p>
        </div>
        <div className="flex flex-col gap-1 mt-4 sm:text-left text-center">
          <div className="flex justify-center gap-3 items-center">
            <h3 className="font-semibold  ">Useful Links </h3>
            <button className="sm:hidden">
              {servicesOpen ? (
                <IoIosArrowUp
                  onClick={() => setServicesOpen(false)}
                  size={20}
                />
              ) : (
                <IoIosArrowDown
                  onClick={() => setServicesOpen(true)}
                  size={20}
                />
              )}
            </button>
          </div>
          {
            <ul className={`sm:block ${servicesOpen ? "block" : "hidden"}`}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          }
        </div>
        <div className="flex flex-col gap-1 mt-4 sm:text-left text-center">
          <h3 className="font-semibold">Contact Us</h3>
          <p>contact@foodies.com</p>
          <p>+91 9528234654</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
