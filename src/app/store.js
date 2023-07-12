import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./AccountSlice";

export const store = configureStore({
  reducer: { account: accountReducer },
});
