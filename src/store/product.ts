import type { ApiProduct as Product } from "../types";
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [] as Product[],
  },
  reducers: {
    setProducts: (state, action: { payload: Product[] }) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
