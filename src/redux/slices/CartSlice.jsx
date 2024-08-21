import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios';
export const ChangeToCartData=createAsyncThunk("cartData",async(tokenidobj)=>{
  console.log(tokenidobj)
  // const AuthStr = `Bearer ${tokenidobj.token}`;
  const token=tokenidobj.token
  const response=await axios.post(`${import.meta.env.VITE_BACKENDURL}api/cart/${tokenidobj.action}`,{"itemId":tokenidobj.id},{headers: {token}});

  if(response.data.success)
    {
      console.log("SUCCESSSSSSSSSSS")

    }

 else
    {
      console.log("failuree")
      // console.log(response)
    }
});
export const getCartData=createAsyncThunk("getCart",async(token)=>{
  try{
    const res=await axios.get(`${import.meta.env.VITE_BACKENDURL}api/cart/get`,{headers: {token}})
  if(res.data.success)
  {
    console.log("cart data added")
    console.log(res.data.cartData)
    return res.data.cartData
  }
 }
 catch(err)
 {
  console.log(err)
 }
  
})
const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart?.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        state.cart = state.cart.map((item) =>
          item._id === action.payload._id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        state.cart?.push(action.payload);
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
    removeAllItemsFromCart:(state,action)=>{
      state.cart=[]
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCartData.pending, (state,action) => {
      // state.isLoading = true;
    });
    builder.addCase(getCartData.fulfilled, (state, action) => {
      // state.isLoading = false;
      state.cart = action.payload;
    });
    builder.addCase(getCartData.rejected, (state, action) => {
      // console.log(action.payload);
      // state.isLoading=false;
      // state.isError = true;
    });
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty ,removeAllItemsFromCart} = CartSlice.actions;
export default CartSlice.reducer;