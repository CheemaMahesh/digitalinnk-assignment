import type { CartResponse, CheckoutResponse, GetCartResponse } from "../types";
import https from "./https";

export const getCart = async (): Promise<GetCartResponse> => {
  return https.get<GetCartResponse>("/v1/cart");
};

export const addToCart = async (productId: string): Promise<CartResponse> => {
  return https.patch<CartResponse>("/v1/cart/add", { productId });
};

export const removeFromCart = async (
  productId: string,
): Promise<CartResponse> => {
  return https.patch<CartResponse>("/v1/cart/remove", { productId });
};

export const checkout = async (): Promise<CheckoutResponse> => {
  return https.get<CheckoutResponse>("/v1/cart/checkout");
};

export const clearCart = async (): Promise<CartResponse> => {
  return https.delete<CartResponse>("/v1/cart/clear");
};

export const deleteCartItem = async (
  productId: string,
): Promise<CartResponse> => {
  return https.delete<CartResponse>(`/v1/cart/${productId}`);
};
