import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: {},
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { product, quantity } = action.payload;
      const productInCart = state.carts[product.id];
      if (productInCart) {
        productInCart.quantity = productInCart.quantity + quantity;
      } else {
        state.carts[product.id] = { product, quantity: quantity };
      }
    },
    updateQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const productInCart = state.carts[productId];
      if (productInCart) {
        productInCart.quantity = parseInt(quantity);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, updateQuantity } = CartSlice.actions;

const cartReducer = CartSlice.reducer;
export { cartReducer };
