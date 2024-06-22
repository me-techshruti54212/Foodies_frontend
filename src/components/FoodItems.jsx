import React, { useEffect, useState } from "react";
// import FoodData from "../data/FoodData";
import FoodCard from "./FoodCard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FetchFood } from "../redux/slices/FetchFoodListSlice";
import { TailSpin } from "react-loader-spinner";
const FoodItems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  const FoodData = useSelector((state) => state.foodlist.data);
  const isloading = useSelector((state) => state.foodlist.isLoading);
  
  const dispatch = useDispatch();
  const fetchfooddata = () => {
    dispatch(FetchFood());
  };
  useEffect(() => fetchfooddata(), []);
  return (
    <>
   
        {isloading === true ? (
          <div className="mt-4 flex flex-col items-center gap-3">
        <TailSpin 
          visible={true}
          height="50"
          width="50"
          color="#000"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <p className="text-xl font-semibold">Loading...</p>
        </div>
      ) : null}
      <div className="flex flex-wrap gap-7 my-5 mx-4 justify-center  ">
     
        {FoodData?.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((item, i) => (
          <FoodCard key={i} item={item} />
        ))
        }
      </div>
    
    </>
  );
};

export default FoodItems;
