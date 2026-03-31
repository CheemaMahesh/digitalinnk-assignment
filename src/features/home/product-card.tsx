import type { ProductCardProps } from "../../types";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { addItem, decrementItem } from "../../store/cart";
import { lazy, Suspense } from "react";
import { getProductEmoji } from "../../utils/functions";

const MinusIcon = lazy(() => import("../../assets/nav/minus"));
const PlusIcon = lazy(() => import("../../assets/nav/pluse"));

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();
  const cartItem = useAppSelector((state) =>
    state.cart.find((item) => item.productId === product.id),
  );
  const quantity = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    dispatch(addItem(product.id));
  };

  const handleDecrement = () => {
    dispatch(decrementItem(product.id));
  };

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="relative h-48 bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
        <div className="text-6xl opacity-60 group-hover:scale-110 transition-transform duration-300">
          {getProductEmoji(product.name)}
        </div>

        {quantity > 0 && (
          <div className="absolute top-3 right-3 bg-primary text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-lg">
            {quantity} in cart
          </div>
        )}
      </div>

      <div className="p-5">
        <div>
          <div className="flex items-center gap-2 justify-between">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <span className="text-xl lg:text-2xl font-bold text-gray-900">
              {product.currency}
              {product.price.toFixed(2)}
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-0.5 w-full">Fresh & Quality</p>
        </div>

        {quantity === 0 ? (
          <button
            onClick={handleAddToCart}
            className="w-full mt-4 bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-6 rounded-md transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg text-xs md:text-sm lg:text-base cursor-pointer"
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center justify-between mt-4 bg-gray-50 rounded-md px-1">
            <button
              onClick={handleDecrement}
              className="w-12 h-7 md:h-9 lg:h-10 flex items-center justify-center bg-white hover:bg-gray-100 text-gray-700 font-bold rounded-md transition-colors shadow-sm"
            >
              <Suspense fallback="-">
                <MinusIcon />
              </Suspense>
            </button>
            <span className="text-lg font-bold text-gray-900 min-w-12 text-center">
              {quantity}
            </span>
            <button
              onClick={handleAddToCart}
              className="w-12 h-7 md:h-9 lg:h-10 flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-bold rounded-sm transition-colors shadow-sm"
            >
              <Suspense fallback="+">
                <PlusIcon />
              </Suspense>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
