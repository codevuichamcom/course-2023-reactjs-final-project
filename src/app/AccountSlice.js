import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: {
    accountId: 0,
    username: "",
    email: "",
  },
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setLoggedInAccount: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoggedInAccount } = accountSlice.actions;

export default accountSlice.reducer;
