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
