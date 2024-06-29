import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { changeCategory } from "../redux/slices/CategorySlice";
import { useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import { FetchFood } from "../redux/slices/FetchFoodListSlice";
const Menu = () => {
  const dispatch = useDispatch();
const FoodData = useSelector((state) => state.foodlist.data);
  const selectedCategory = useSelector((state) => state.category.category);
  const [categories, setCategories] = useState([]);
  const listUniqueCategories = () => {
    const allcategories = [...new Set(FoodData?.map((food) => food.category))];
    setCategories(allcategories);
  };
  useEffect(() => {
    dispatch(FetchFood())
    window.scroll(0,0);
  }, []);
  useEffect(() => {
    listUniqueCategories();
  }, [FoodData]);

  return (
    <>

    <div className="text-black  p-5 ">
      <h3 className="font-semibold ">Home Kitchen</h3>
      <p className="font-mono mt-2 mb-5 text-lg ">Find the best foods here..</p>
      <div className="flex gap-2 md:gap-5 flex-wrap ">
        <Button
          property={`border border-gray-400 px-4 md:px-6 py-2 rounded-xl ${
            selectedCategory === "All" && "text-white bg-brand-dark border-none"
          } `}
          handleOnClick={() => dispatch(changeCategory("All")) }
        >
          All
        </Button>
        
        {categories.map((category, index) => {
          return (
            <Button
              handleOnClick={() => dispatch(changeCategory(category))}
              property={`border border-gray-400 px-6 py-2 rounded-xl ${
                selectedCategory === category &&
                "text-white bg-brand-dark border-none"
              }`}
              key={index}
            >
              {category}
            </Button>
          );
        })}
      </div>

      <FoodItems />
    </div>
    </>
  );
};

export default Menu;
