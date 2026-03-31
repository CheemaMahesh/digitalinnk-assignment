export type Product = {
  id: number;
  name: string;
  price: number;
  currency: string;
};

export type ProductCardProps = {
  product: Product;
};

export type CartItem = {
  productId: number;
  quantity: number;
  date: string;
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

export type OrderSummaryProps = {
  totalItems: number;
  subtotal: number;
  discounts: Discount[];
  totalDiscount: number;
  finalTotal: number;
};
