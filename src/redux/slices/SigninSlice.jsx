import { createSlice } from "@reduxjs/toolkit";

const SigninSlice = createSlice({
  name: "signin",
  initialState: {
    signin: false,
    token: "",
  },
  reducers: {
    openLogin: (state, action) => {
      state.signin = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export default SigninSlice.reducer;
export const { openLogin, setToken } = SigninSlice.actions;
