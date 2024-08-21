import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const ForgotPwd = createAsyncThunk("fgtpwd", async (email) => {
  const response = await axios.post(`${import.meta.env.VITE_BACKENDURL}api/user/forgot-password`,{email});
  if(response.data.success)
  {
    console.log(response.data);

  }
  return response.data;
});
const ForgotPasswordSlice = createSlice({
  name: "fgtpwd", 
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(ForgotPwd.pending, (state,action) => {
      state.isLoading = true;
    });
    builder.addCase(ForgotPwd.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(ForgotPwd.rejected, (state, action) => {
      // console.log(action.payload);
      state.isLoading=false;
      state.isError = true;
    });
  },
});

export default ForgotPasswordSlice.reducer;
