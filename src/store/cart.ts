import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem } from "../types";

const INITIAL_CART_STATE: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_CART_STATE,
  reducers: {
    addItem: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const existingItem = state.find((item) => item.productId === productId);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({
          productId,
          quantity: 1,
          date: new Date().toISOString(),
        });
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const index = state.findIndex((item) => item.productId === productId);

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    decrementItem: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const existingItem = state.find((item) => item.productId === productId);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          const index = state.findIndex((item) => item.productId === productId);
          state.splice(index, 1);
        }
      }
    },
    clearCart: () => {
      return [];
    },
  },
});

export const { addItem, removeItem, decrementItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
