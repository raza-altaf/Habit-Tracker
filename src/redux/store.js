import { configureStore } from "@reduxjs/toolkit";
import habitReducer from "./features/habitSlice";

const store = configureStore({
  reducer: {
    habits: habitReducer,
  },
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in non-production environments
});

export default store;
