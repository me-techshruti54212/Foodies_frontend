import React from "react";
import { useState } from "react";
import Button from "./Button";
import { useSelector } from "react-redux";
import { PlaceFoodOrder } from "../redux/slices/OrderSlice";
import { useDispatch } from "react-redux";
import { removeAllItemsFromCart } from "../redux/slices/CartSlice";
const PlaceOrder = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName,setlastName]=useState("")
  const [email,setEmail]=useState("")
  const [street,setStreet]=useState("")
  const [city,setCity]=useState("")
  const [state,setState]=useState("")
  const [zipcode,setZipcode]=useState("")
  const [country,setCountry]=useState("")
  const [phone,setPhone]=useState("")
  const cartItems=useSelector((state)=>state.cart.cart)
  const token=useSelector((state)=>state.signin.token)
  const dispatch=useDispatch()

  const totalPriceOfItems = cartItems.reduce(
    (totalQty, item) => totalQty + item.qty * item.price,
    0
  );
  const placeOrder=async(e)=>{
    e.preventDefault();
  let orderItems=cartItems;
  let orderdata={
    items:orderItems,
    amount:totalPriceOfItems +2 ,
    address:{firstName,lastName,email,street,city,state,zipcode,country,phone},
    payment:false
  }
  
dispatch(PlaceFoodOrder({orderdata,token}))
dispatch(removeAllItemsFromCart())

  }
  return (
    <div className="h-screen bg-brand-dark flex flex-wrap sm:justify-around justify-center text-white items-center">
      <form className=" p-4 text-black flex flex-col  rounded-[20px] gap-5 " onSubmit={()=>placeOrder}>
        <h3>Delivery Information</h3>
        <div className="flex gap-3 justify-between ">
          <input required className="p-1 rounded outline-none "
            type="text"
            name="firstName"
            placeholder="First name" onChange={(e)=>setfirstName(e.target.value)}
            value={firstName}
          />
          <input required className=" p-1 rounded outline-none "
            type="text"
            name="lastName"
            placeholder="Last name"  onChange={(e)=>setlastName(e.target.value)}
            value={lastName}
          />
        </div>

     
        <div className="flex  gap-3 justify-between ">
          <input required  className=" p-1 rounded outline-none "
            type="text"
            name="city"
            placeholder="City" onChange={(e)=>setCity(e.target.value)}
            value={city}
          />
          <input required className=" p-1 rounded outline-none "
            type="text"
            name="state"
            placeholder="State"  onChange={(e)=>setState(e.target.value)}
            value={state}
          />
        </div>
        <div className="flex justify-between ">
          <input required className=" p-1 rounded outline-none "
            type="number"
            name="zipcode"
            placeholder="Zip code"  onChange={(e)=>setZipcode(e.target.value)}
            value={zipcode}
          />
          <input required className=" p-1 rounded outline-none "
            type="text"
            name="country"
            placeholder="Country"  onChange={(e)=>setCountry(e.target.value)}
            value={country}
          />
        </div>

        <input required className=" p-1 rounded outline-none "
          type="phone"
          name="phone"
          placeholder="Phone"  onChange={(e)=>setPhone(e.target.value)}
          value={phone}
        />
           <input required className=" p-1 rounded outline-none "
          type="email"
          name="email"
          placeholder="Email"  onChange={(e)=>setEmail(e.target.value)}
          value={email}
        />
        <input required className=" p-1 rounded outline-none "
          type="text"
          name="street"
          placeholder="Street"  onChange={(e)=>setStreet(e.target.value)}
          value={street}
        />
       <Button handleOnClick={placeOrder} property={"w-[200px] bg-yellow-500 rounded  p-2 tracking-tighter"}>Proceed to Payment</Button>
      </form>
      <div className="w-[40%] bg-grey-800  p-4 mt-10 flex flex-col gap-3 font-semibold">
        <h4>Cart Totals</h4>
        <div className="font-semibold flex  flex-col gap-3">
          <div className="flex justify-between border-b-2  ">
            <p>Subtotal</p>
            <p>₹{totalPriceOfItems}</p>
          </div>
          <div className="flex justify-between border-b-2">
          <p>Delivery Fee</p>
          <p>₹2</p>

          </div>
          <div className="flex justify-between mb-2 font-bold tracking-tight ">
          <p>Total</p>
          <p>₹{totalPriceOfItems+2}</p>

          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default PlaceOrder;
