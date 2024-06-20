import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import cartlock from "../assets/cartlock.png";
import ItemCard from "./ItemCard";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Button from "./Button";
const Cart = () => {
  const navigate = useNavigate();
  const [activeCart, setActiveCart] = useState(false);
  const token=useSelector((state)=>state.signin.token)
  const cartItems = useSelector((state) => state.cart.cart);
 
  // console.log(cartItems);
  const totalQtyOfItems = cartItems.reduce(
    (totalQty, item) => totalQty + item.qty,
    0
  );
  const totalPriceOfItems = cartItems.reduce(
    (totalQty, item) => totalQty + item.qty * item.price,
    0
  );
  // console.log(cartItems)

  // console.log(cartItems.length)
  return (
    <>
 <div
        className={`flex justify-center items-center h-full w-full fixed top-0 border backdrop-blur-md ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500`}
      >
        <div className="text-black h-[90vh] w-[85vw] bg-white rounded-[20px] relative ">
          <AiOutlineClose
            onClick={() => setActiveCart(!activeCart)}
            className="text-black text-xl absolute right-[2%] top-[4%]"
          />
    
          <div className="flex flex-col gap-y-2 overflow-y-scroll max-h-full py-4 scrollbar-none">
            {cartItems.length && token ? (
              <>
                {cartItems.map((item, i) => (
                  <ItemCard item={item} key={i} />
                ))}

                <div className="flex flex-col gap-3">
                  <div className="flex justify-around">
                    <p className="text-brand-dark">
                      Total Items : {totalQtyOfItems}
                    </p>
                    <p className="text-brand-dark">
                      Total Amount : {totalPriceOfItems}
                    </p>
                  </div>
                  <Button
                    property="bg-green-300 px-3 py-2 rounded-[10px] font-medium mx-auto "
                    handleOnClick={() => navigate("/placeorder")}
                  >
                    Checkout
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col items-center justify-center gap-3 h-[90vh]">
                  <img src={cartlock} className="w-[5rem] " />
                  <h2>Cart is Empty</h2>
                  <p className="font-semibold">Add some items to the cart to checkout</p>
                  <p>If items already added , <b>Register/SignIn</b> to see the items added </p>
                  <Button
                    property="bg-green-300 px-3 py-2 rounded-[10px] font-medium"
                    handleOnClick={() => navigate("/menu")}
                  >
                    Back to Menu
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <AiOutlineShoppingCart
        className={`fixed bottom-[1rem] right-[1rem] bg-black text-5xl rounded-full p-2 cursor-pointer ${
          totalQtyOfItems && "animate-bounce delay-500 transition-all"
        }`}
        onClick={() => setActiveCart(true)}
      />
    </>
  );
};

export default Cart;
