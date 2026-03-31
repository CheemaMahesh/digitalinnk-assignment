import { useDispatch } from "react-redux";
import {
  addToCart,
  checkout,
  clearCart,
  deleteCartItem,
  getCart,
  removeFromCart,
} from "../api/cart.service";
import { addItem, decrementItem, setCart } from "../store/cart";
import { setCheckout } from "../store/checkout";

export function useCart() {
  const dispatch = useDispatch();

  const getCartData = async () => {
    try {
      const response = await getCart();
      if (response.success) {
        dispatch(setCart(response.list));
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const getCheckout = async () => {
    try {
      const res = await checkout();
      if (res.success) {
        dispatch(setCheckout(res.data));
      }
    } catch (error) {
      console.error("Error checking out:", error);
    }
  };

  const onAddToCart = async (productId: string, callCheckout?: boolean) => {
    try {
      dispatch(addItem(productId));
      const res = await addToCart(productId);
      if (res.success) {
        await getCartData();
        if (callCheckout) {
          setTimeout(() => {
            getCheckout();
          }, 100);
        }
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const onRemoveFromCart = async (
    productId: string,
    callCheckout?: boolean,
  ) => {
    try {
      dispatch(decrementItem(productId));
      const res = await removeFromCart(productId);
      if (res.success) {
        await getCartData();
        if (callCheckout) {
          setTimeout(() => {
            getCheckout();
          }, 100);
        }
      }
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  const onDeleteCartItem = async (productId: string) => {
    try {
      dispatch(decrementItem(productId));
      const res = await deleteCartItem(productId);
      if (res.success) {
        await getCartData();
      }
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };

  const clearCartList = async () => {
    try {
      const res = await clearCart();
      if (res.success) {
        await getCartData();
      }
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  return {
    getCartData,
    onAddToCart,
    onRemoveFromCart,
    onDeleteCartItem,
    clearCartList,
    getCheckout,
  };
}
