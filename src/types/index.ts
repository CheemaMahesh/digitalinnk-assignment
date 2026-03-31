export type ApiProduct = {
  _id: string;
  name: string;
  price: number;
  currency: string;
  date: string;
  __v: number;
};

export type ProductsResponse = {
  message: string;
  products?: ApiProduct[];
  success: boolean;
};

export type CartResponse = {
  success: boolean;
  message: string;
};

export type ApiCartItem = {
  _id: string;
  productId: string;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type GetCartResponse = CartResponse & {
  list: ApiCartItem[];
};

export type ProductCardProps = {
  product: ApiProduct;
};

export type CartItem = {
  productId: string;
  quantity: number;
};

export type Discount = {
  name: string;
  description: string;
  amount: number;
};

export type DiscountResult = {
  discounts: Discount[];
  totalDiscount: number;
};

export type CheckoutData = {
  totalItems: number;
  totalAmount: number;
  discounts: Discount[];
  totalDiscount: number;
  finalTotal: number;
};

export type CheckoutResponse = CartResponse & {
  data: CheckoutData;
};

export type OrderSummaryProps = {
  totalItems: number;
  subtotal: number;
  discounts: Discount[];
  totalDiscount: number;
  finalTotal: number;
};
