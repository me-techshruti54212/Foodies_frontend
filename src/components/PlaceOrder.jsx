import React from "react";
import { useState,useEffect } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { PlaceFoodOrder } from "../redux/slices/OrderSlice";
import { useDispatch } from "react-redux";
import { removeAllItemsFromCart } from "../redux/slices/CartSlice";
import { TailSpin } from "react-loader-spinner";
const PlaceOrder = () => {
  const navigate=useNavigate()
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
  const isloading=useSelector((state)=>state.order.isLoading)
  const totalPriceOfItems = cartItems.reduce(
    (totalQty, item) => totalQty + item.qty * item.price,
    0
  );
  useEffect(()=>{
    window.scroll(0,0);
    if(cartItems.length==0 || !token) 
    {
      navigate("/");
    }
  },[])
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
    <div className="min-h-screen bg-brand-dark flex flex-wrap sm:justify-around justify-center text-white items-center">
      <form className=" text-black flex flex-col   gap-5 " onSubmit={placeOrder} >
        <h3 >Delivery Information</h3>
        <div className="flex gap-3 justify-between w-full   ">
          <input className="p-1 rounded outline-none inline-block w-[50%]"
           required
            type="text"
            name="firstName"
            placeholder="First name" onChange={(e)=>setfirstName(e.target.value)}
            value={firstName}
          />
          <input  className=" p-1 rounded outline-none w-[50%]"
            type="text"
            name="lastName"
            placeholder="Last name"  onChange={(e)=>setlastName(e.target.value)}
            value={lastName} required
          />
        </div>

     
        <div className="flex  gap-3 justify-between w-full ">
          <input   className="inline-block w-[50%] p-1 rounded outline-none "
            type="text"
            name="city"
            placeholder="City" onChange={(e)=>setCity(e.target.value)}
            value={city} required
          />
          <input required className="inline-block w-[50%] p-1 rounded outline-none "
            type="text"
            name="state"
            placeholder="State"  onChange={(e)=>setState(e.target.value)}
            value={state} 
          />
        </div>
        <div className="flex gap-3 justify-between w-full">
          <input required className="inline-block w-[50%] p-1 rounded outline-none "
            type="number"
            name="zipcode"
            placeholder="Zip code"  onChange={(e)=>setZipcode(e.target.value)}
            value={zipcode}
          />
          <input required className="inline-block w-[50%] p-1 rounded outline-none "
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
           <input className=" p-1 rounded outline-none "
          type="email"
          name="email"
          placeholder="Email"  onChange={(e)=>setEmail(e.target.value)}
          value={email}
          required 
        />
        <input required className="w-full p-1 rounded outline-none "
          type="text"
          name="street"
          placeholder="Street"  onChange={(e)=>setStreet(e.target.value)}
          value={street}
        />
         
       <Button  property={"w-[200px] flex justify-between bg-yellow-500 rounded  p-2 tracking-tighter"}>Proceed to Payment
       {isloading === true ? (
        <>
        <TailSpin 
          visible={true}
          height="20"
          width="20"
          color="#111"
          ariaLabel="tail-spin-loading"
          radius="0.5"
          wrapperStyle={{}}
          wrapperClass=""
        />
        </>
      ) : null}
      </Button>
      </form>
      <div className="w-[80%] bg-grey-800  p-4 mt-10 flex flex-col gap-3 font-semibold sm:w-[40%] ">
        <h4>Cart Totals</h4>
        <div className="font-semibold flex  flex-col gap-3">
          <div className="flex justify-between border-b-2 flex-row ">
            <p>Subtotal</p>
            <p>₹{totalPriceOfItems}</p>
          </div>
          <div className="flex justify-between border-b-2  ">
          <p>Delivery Fee</p>
          <p>₹2</p>

          </div>
          <div className="flex justify-between mb-2 font-bold  tracking-tight ">
          <p>Total</p>
          <p>₹{totalPriceOfItems+2}</p>

          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default PlaceOrder;
