import React from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addToCart, ChangeToCartData } from "../redux/slices/CartSlice";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodCard = ({ item }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.signin.token);
  return (
    <>
      <div className="w-[270px] p-2 flex flex-col gap-3  shadow-lg rounded-[10px] bg-[#E8E4C2] ">
        <img
          src={`${import.meta.env.VITE_BACKENDURL}images/${item.image}`}
          className="w-[100%] h-[150px] "
        />
        <div className="flex justify-between ">
          <span className="font-semibold">{item.name}</span>
          <span className="font-semibold">₹{item.price}</span>
        </div>
        <p >{item.description?.slice(0, 60)}...</p>
        <div className="text-center">
          <Button
            property="bg-green-300 px-2 py-1 rounded-[10px] font-medium hover:bg-brand-dark"
            handleOnClick={() => {
              if (token) {
                dispatch(addToCart({ ...item, qty: 1 }));
                dispatch(
                  ChangeToCartData({ id: `${item._id}`, token, action: "add" })
                );
                toast.success(`${item.name} is Added`);
              } else {
                toast("Please login to add items");
              }
            }}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
