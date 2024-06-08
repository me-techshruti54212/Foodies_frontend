import React, { useEffect, useState } from "react";
// import FoodData from "../data/FoodData";
import FoodCard from "./FoodCard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FetchFood } from "../redux/slices/FetchFoodListSlice";
const FoodItems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  const FoodData = useSelector((state) => state.foodlist.data);
  const dispatch = useDispatch();
  const fetchfooddata = () => {
    dispatch(FetchFood());
  };
  useEffect(() => fetchfooddata(), []);
  return (
    <>
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
        ))}
      </div>
    </>
  );
};

export default FoodItems;
