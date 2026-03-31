import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ApiCartItem } from "../types";

const INITIAL_CART_STATE: ApiCartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_CART_STATE,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const existingItem = state.find((item) => item.productId === productId);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({
          _id: productId,
          productId,
          quantity: 1,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          __v: 0,
        });
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const index = state.findIndex((item) => item.productId === productId);

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    decrementItem: (state, action: PayloadAction<string>) => {
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
    setCart: (_state, action: PayloadAction<ApiCartItem[]>) => {
      return action.payload;
    },
  },
});

export const { addItem, removeItem, decrementItem, clearCart, setCart } =
  cartSlice.actions;
export default cartSlice.reducer;
