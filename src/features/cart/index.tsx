import { useCallback, useMemo } from "react";
import Nav from "../../components/nav";
import { clearCart } from "../../store/cart";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { products } from "../../utils/data";
import { calculateDiscounts } from "../../utils/functions/discounts";
import CartItem from "./components/cart-item";
import EmptyCart from "./components/empty-cart";
import OrderSummary from "./components/order-summary";

const getProduct = (productId: number) => {
  return products.find((p) => p.id === productId);
};

export default function Cart() {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleClearCart = useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);

  const { totalAmount, totalItems } = useMemo(() => {
    return cart.reduce(
      (acc, item) => {
        const product = getProduct(item.productId);
        return {
          totalAmount: acc.totalAmount + (product?.price || 0) * item.quantity,
          totalItems: acc.totalItems + item.quantity,
        };
      },
      { totalAmount: 0, totalItems: 0 },
    );
  }, [cart]);

  const { discounts, totalDiscount, finalTotal } = useMemo(() => {
    const result = calculateDiscounts(cart);
    return {
      ...result,
      finalTotal: totalAmount - result.totalDiscount,
    };
  }, [cart, totalAmount]);

  const cartItemsWithProducts = useMemo(() => {
    return cart
      .map((item) => ({
        item,
        product: getProduct(item.productId),
      }))
      .filter((entry) => entry.product !== undefined);
  }, [cart]);

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <section className="min-h-screen bg-gray-50 flex flex-col">
      <Nav />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 md:mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Shopping Cart
            </h1>
            <p className="text-gray-600 text-sm md:text-base mt-1">
              {totalItems} items in your cart
            </p>
          </div>
          <button
            onClick={handleClearCart}
            className="text-red-500 hover:text-red-700 font-medium transition-colors text-sm md:text-base self-start sm:self-auto"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
          <div className="lg:col-span-2 space-y-3 md:space-y-4">
            {cartItemsWithProducts.map(({ item, product }) => (
              <CartItem key={item.productId} item={item} product={product!} />
            ))}
          </div>

          <OrderSummary
            totalItems={totalItems}
            subtotal={totalAmount}
            discounts={discounts}
            totalDiscount={totalDiscount}
            finalTotal={finalTotal}
          />
        </div>
      </main>
    </section>
  );
}
