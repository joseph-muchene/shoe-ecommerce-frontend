import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: false,
};

export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addItemToCart: (state, { payload }) => {
      const existItem = state.cartItems.find(
        (item) => item.productId === payload.productId
      );
      if (existItem !== undefined) {
        return;
      }
      state.cartItems.push(payload);
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      console.log(itemId);
      state.cartItems = state.cartItems.filter(
        (item) => item.productId !== itemId
      );
    },
    increaseItem: (state, { payload }) => {
      console.log(payload);
      const cartItem = state.cartItems.find(
        (item) => item.productId === payload
      );
      cartItem.quantity = cartItem.quantity + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find(
        (item) => item.productId === payload
      );
      cartItem.quantity = cartItem.quantity - 1;
    },
  },
});

export const {
  clearCart,
  removeItem,
  increaseItem,
  decrease,
  calculateTotals,
  addItemToCart,
} = CartSlice.actions;

export default CartSlice.reducer;
