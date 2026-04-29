import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    searchedQuery: "",
  },
  reducers: {
    setSearchedQuery: (state, action) => {
      state.searchedQuery = action.payload;
    },
  },
});

// ✅ named export
export const { setSearchedQuery } = jobSlice.actions;

// ✅ default export
export default jobSlice.reducer;