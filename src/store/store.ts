import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import productReducer from "./product";
import checkoutReducer from "./checkout";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    checkout: checkoutReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
