import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchFood = createAsyncThunk("foodlist", async () => {
  const response = await axios.get(`${import.meta.env.VITE_BACKENDURL}api/food/list`);
  // console.log(response.data.data);
  return response.data.data;
});
const FetchFoodListSlice = createSlice({
  name: "foodlist",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(FetchFood.pending, (state,action) => {
      state.isLoading = true;
    });
    builder.addCase(FetchFood.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(FetchFood.rejected, (state, action) => {
      // console.log(action.payload);
      state.isLoading=false;
      state.isError = true;
    });
  },
});

export default FetchFoodListSlice.reducer;
