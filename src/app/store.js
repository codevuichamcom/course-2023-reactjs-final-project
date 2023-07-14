import { configureStore } from "@reduxjs/toolkit";
import { accountReducer } from "./feature/account/AccountSlice";
export const store = configureStore({
  reducer: {
    account: accountReducer,
  },
});
