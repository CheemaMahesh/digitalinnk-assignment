import { lazy, memo, Suspense, useCallback } from "react";
import { addItem, decrementItem, removeItem } from "../../../store/cart";
import { useAppDispatch } from "../../../store/store";
import type { CartItem as CartItemType, Product } from "../../../types";
import { getProductEmoji } from "../../../utils/functions";

const MinusIcon = lazy(() => import("../../../assets/nav/minus"));
const PlusIcon = lazy(() => import("../../../assets/nav/pluse"));

interface CartItemProps {
  item: CartItemType;
  product: Product;
}

const CartItem = memo(function CartItem({ item, product }: CartItemProps) {
  const dispatch = useAppDispatch();

  const handleIncrement = useCallback(() => {
    dispatch(addItem(item.productId));
  }, [dispatch, item.productId]);

  const handleDecrement = useCallback(() => {
    dispatch(decrementItem(item.productId));
  }, [dispatch, item.productId]);

  const handleRemove = useCallback(() => {
    dispatch(removeItem(item.productId));
  }, [dispatch, item.productId]);

  const itemTotal = product.price * item.quantity;

  return (
    <div className="bg-white rounded-lg p-3 md:p-4 shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 md:gap-4">
        <div className="w-14 h-14 md:w-20 md:h-20 bg-gray-50 rounded-lg flex items-center justify-center text-2xl md:text-4xl shrink-0">
          {getProductEmoji(product.name)}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                {product.name}
              </h3>
              <p className="text-xs md:text-sm text-gray-500 hidden sm:block">
                Fresh & Quality
              </p>
            </div>
            <button
              onClick={handleRemove}
              className="text-gray-400 hover:text-red-500 transition-colors p-1 md:hidden"
              aria-label="Remove item"
            >
              ✕
            </button>
          </div>
          <p className="text-primary font-bold text-sm md:text-base mt-1">
            {product.currency}
            {product.price.toFixed(2)}
          </p>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={handleDecrement}
            className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
            aria-label="Decrease quantity"
          >
            <Suspense fallback="-">
              <MinusIcon />
            </Suspense>
          </button>
          <span className="font-bold text-gray-900 w-8 text-center">
            {item.quantity}
          </span>
          <button
            onClick={handleIncrement}
            className="w-8 h-8 flex items-center justify-center bg-primary hover:bg-primary-dark text-white rounded-md transition-colors"
            aria-label="Increase quantity"
          >
            <Suspense fallback="+">
              <PlusIcon />
            </Suspense>
          </button>
        </div>

        <div className="hidden md:block text-right min-w-[80px]">
          <p className="font-bold text-gray-900">
            {product.currency}
            {itemTotal.toFixed(2)}
          </p>
        </div>

        <button
          onClick={handleRemove}
          className="hidden md:block text-gray-400 hover:text-red-500 transition-colors p-2"
          aria-label="Remove item"
        >
          ✕
        </button>
      </div>

      <div className="flex md:hidden items-center justify-between mt-3 pt-3 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <button
            onClick={handleDecrement}
            className="w-7 h-7 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-md transition-colors text-sm"
            aria-label="Decrease quantity"
          >
            <Suspense fallback="-">
              <MinusIcon />
            </Suspense>
          </button>
          <span className="font-bold text-gray-900 w-6 text-center text-sm">
            {item.quantity}
          </span>
          <button
            onClick={handleIncrement}
            className="w-7 h-7 flex items-center justify-center bg-primary hover:bg-primary-dark text-white rounded-md transition-colors text-sm"
            aria-label="Increase quantity"
          >
            <Suspense fallback="+">
              <PlusIcon />
            </Suspense>
          </button>
        </div>
        <p className="font-bold text-gray-900 text-sm">
          {product.currency}
          {itemTotal.toFixed(2)}
        </p>
      </div>
    </div>
  );
});

export default CartItem;
