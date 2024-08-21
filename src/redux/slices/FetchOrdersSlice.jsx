import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchFoodOrders = createAsyncThunk("foodorders", async (token) => {
  const response = await axios.post(`${import.meta.env.VITE_BACKENDURL}api/order/userOrders`,{},{headers:{token}})
//   console.log(response.data.data);
  return response.data.data;
});
const FetchOrdersSlice = createSlice({
  name: "foodorders",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(FetchFoodOrders.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(FetchFoodOrders.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(FetchFoodOrders.rejected, (state, action) => {
      console.log(action.payload);
      state.isError = true;
    });
  },
});

export default FetchOrdersSlice.reducer;
