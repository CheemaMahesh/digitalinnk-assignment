import type { ProductsResponse } from "../types";
import https from "./https";

export const getProducts = async (): Promise<ProductsResponse> => {
  return https.get<ProductsResponse>("/v1/product");
};
