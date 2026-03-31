import { useEffect } from "react";
import { useCart } from "../../hooks/useCart";
import { useAppSelector } from "../../store/store";
import CartItem from "./components/cart-item";
import EmptyCart from "./components/empty-cart";
import OrderSummary from "./components/order-summary";

export default function Cart() {
  const cart = useAppSelector((state) => state.cart);
  const products = useAppSelector((state) => state.product.products);
  const { clearCartList, getCheckout } = useCart();
  const checkoutData = useAppSelector((state) => state.checkout);

  const getProduct = (productId: string) =>
    products.find((p) => p._id === productId);

  useEffect(() => {
    if (cart.length > 0) {
      getCheckout();
    }
  }, [cart.length]);

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <main className="flex-1 container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 md:mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Shopping Cart
          </h1>
          <p className="text-gray-600 text-sm md:text-base mt-1">
            {checkoutData?.totalItems || cart.length} items in your cart
          </p>
        </div>
        <button
          onClick={clearCartList}
          className="text-red-500 hover:text-red-700 font-medium transition-colors text-sm md:text-base self-start sm:self-auto"
        >
          Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
        <div className="lg:col-span-2 space-y-3 md:space-y-4">
          {cart.map((item) => {
            const product = getProduct(item.productId);
            if (!product) return null;
            return (
              <CartItem key={item.productId} item={item} product={product} />
            );
          })}
        </div>

        {checkoutData && (
          <OrderSummary
            totalItems={checkoutData.totalItems}
            subtotal={checkoutData.totalAmount}
            discounts={checkoutData.discounts}
            totalDiscount={checkoutData.totalDiscount}
            finalTotal={checkoutData.finalTotal}
          />
        )}
      </div>
    </main>
  );
}
