import React from "react";
import { incrementQty, decrementQty } from "../redux/slices/CartSlice";
import Button from "./Button";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { removeFromCart } from "../redux/slices/CartSlice";
import { ChangeToCartData } from "../redux/slices/CartSlice";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const token=useSelector((state)=>state.signin.token)

  return (
    <>
      <div className="shadow-sm  border-2 flex p-2 w-[70vw] rounded-[25px] mx-auto">
        <img
          src={`${import.meta.env.VITE_BACKENDURL}images/${item.image}`}
          className="w-[50px] h-[65px] ml-5 mr-4"
        />
        <div className="m-auto w-[85%] flex flex-col gap-2 ">
          <div className="flex items-center justify-between">
            <span>{item.name}</span>
            <Button>
              <AiOutlineDelete
                className="mr-2 text-xl fill-red-600"
                onClick={() => {
                  dispatch(removeFromCart(item));
                  dispatch(ChangeToCartData({id:`${item._id}`,token,action:"removeAll"}));
                  toast(`${item.name} Removed!`, {
                    icon: "👏",
                  });
                }}
              />
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-brand-dark font-semibold">₹{item.price}</span>
            <div className="flex items-center justify-between">
              <Button handleOnClick={() =>{ dispatch(decrementQty(item));
                 dispatch(ChangeToCartData({id:`${item._id}`,token,action:"remove"}))}}>
                <AiOutlineMinus className="hover:bg-yellow transition-all ease-linear rounded-l-[5px] border-slate-600 border-2 h-[23px] w-[20px]" />
              </Button>
              <span className="px-2 border-y-2 text-sm border-slate-600">
                {item.qty}
              </span>
              <Button handleOnClick={() => {dispatch(incrementQty(item));dispatch(ChangeToCartData({token,id:`${item._id}`,action:"add"}))}}>
                <AiOutlinePlus className="hover:bg-yellow transition-all ease-linear rounded-r-[5px] border-slate-600 border-2 h-[23px] w-[20px]" />
              </Button>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default ItemCard;
