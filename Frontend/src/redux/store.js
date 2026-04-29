import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import jobReducer from "./jobSlice"; // ✅ add this

const store = configureStore({
  reducer: {
    auth: authReducer,
    job: jobReducer, // ✅ add this
  },
});

export default store;