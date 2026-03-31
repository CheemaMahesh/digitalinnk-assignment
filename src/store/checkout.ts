import { createSlice } from "@reduxjs/toolkit";
import type { CheckoutData } from "../types";

const INITIAL_STATE: CheckoutData = {
  totalItems: 0,
  totalAmount: 0,
  discounts: [],
  totalDiscount: 0,
  finalTotal: 0,
};

const checkout = createSlice({
  name: "checkout",
  initialState: INITIAL_STATE,
  reducers: {
    setCheckout: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setCheckout } = checkout.actions;
export default checkout.reducer;
