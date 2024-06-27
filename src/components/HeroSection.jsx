import React from "react";
import cuate from "../assets/cuate.png";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { filterSearch } from "../redux/slices/SearchSlice";
const HeroSection = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex  h-[100vh] justify-evenly bg-brand-dark  items-center">
      <div className="flex flex-col gap-5 ">
        <h1 className="leading-tight font-semibold tracking-wider text-center lg:text-[4rem]  sm:text-start">
          Authentic Home
          <br />
          food in India
        </h1>
        <p className="tracking-wider text-center sm:text-start">
          Foodies is a courier service in which authentic home
          <br /> cook food is delivered to a customer.
        </p>
        <div className="text-center sm:text-start">
          <input
            className="p-3 outline-none  text-black rounded-l-xl lg:w-[18rem] text-capitalize"
            placeholder="Search food you love"
            onChange={(e) => dispatch(filterSearch(e.target.value))}
          />
          <Button property="p-3 lg:px-7 rounded-r-xl bg-yellowish">Search</Button>
        </div>
      </div>
      <img className="w-[35vw] hidden sm:block" src={cuate} />
    </div>
  );
};

export default HeroSection;
