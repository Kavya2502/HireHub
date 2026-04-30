import { createSlice, createSelector } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
   setUser: (state, action) => {
   state.user = action.payload;
   },
  },
});

// Export the actions
export const { setLoading, setUser } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;

// Export the authSlice if needed
export const authSliceReducer = authSlice.reducer;

// ✅ Memoized Selectors - prevents returning new object reference on same data
const selectAuthRoot = (state) => state.auth;

// Memoized selector for loading
export const selectLoading = createSelector(
  [selectAuthRoot],
  (authRoot) => authRoot.loading
);

// Memoized selector for user
export const selectUser = createSelector(
  [selectAuthRoot],
  (authRoot) => authRoot.user
);
