import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "Search",
  initialState: {
    search: "",
  },
  reducers: {
    filterSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default SearchSlice.reducer;
export const { filterSearch } = SearchSlice.actions;
