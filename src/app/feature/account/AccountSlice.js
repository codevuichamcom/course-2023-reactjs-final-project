import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: {
    id: 0,
    username: "",
    email: "",
    avatar: "",
  },
  carts: {},
};

export const AccountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setLoggedInAccount(state, action) {
      state.loggedIn = action.payload;
    },
    addToCart(state, action) {
      const product = action.payload;
      const productInCart = state.carts[product.id];
      if (productInCart) {
        productInCart.quantity = productInCart.quantity + 1;
      } else {
        state.carts[product.id] = { product, quantity: 0 };
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoggedInAccount, addToCart } = AccountSlice.actions;

const accountReducer = AccountSlice.reducer;
export { accountReducer };
