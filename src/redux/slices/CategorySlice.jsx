import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
  name: "category",
  initialState: {
    category: "All",
  },
  reducers: {
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export default CategorySlice.reducer;
export const { changeCategory } = CategorySlice.actions;
