import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios';


export const ChangeToCartData=createAsyncThunk("cartData",async(tokenidobj)=>{
  console.log(tokenidobj)
  // const AuthStr = `Bearer ${tokenidobj.token}`;
  const token=tokenidobj.token
  const response=await axios.post(`${import.meta.env.VITE_URL}api/cart/${tokenidobj.action}`,{"itemId":tokenidobj.id},{headers: {token}});

  if(response.data.success)
    {
      console.log("SUCCESSSSSSSSSSS")
      // dispatch
    }

 else
    {
      console.log("k")
      // console.log(response)
    }
});

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        state.cart = state.cart.map((item) =>
          item._id === action.payload._id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        state.cart.push(action.payload);
      }

    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload._id);
    },
    incrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item._id === action.payload._id ? { ...item, qty: item.qty + 1 } : item
      );
    },
    decrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item._id === action.payload._id
      ? { ...item, qty: item.qty > 1 ? item.qty - 1 : item.qty }
          : item
      );
    },
  },
 
});

export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  CartSlice.actions;
export default CartSlice.reducer;
// 