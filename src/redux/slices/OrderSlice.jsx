import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const PlaceFoodOrder=createAsyncThunk("order",async(tokenidobj)=>{
    // console.log(tokenidobj)
    // const AuthStr = `Bearer ${tokenidobj.token}`;
    const token=tokenidobj.token
    const response=await axios.post(`${import.meta.env.VITE_BACKENDURL}api/order/place`,{"orderdata":tokenidobj.orderdata},{headers: {token}});
  
    if(response.data.success)
      {
        const {session_url}=response.data
        window.location.replace(session_url)
      }
  
   else
      {
        console.log("failed")
        // console.log(response)
      }

  });
const OrderSlice = createSlice({
  name: "order",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(PlaceFoodOrder.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(PlaceFoodOrder.fulfilled, (state, action) => {
      state.isLoading = false;
    //   state.data = action.payload;
    });
    builder.addCase(PlaceFoodOrder.rejected, (state, action) => {
      console.log(action.payload);
      state.isError = true;
    });
  },
});

export default OrderSlice.reducer;