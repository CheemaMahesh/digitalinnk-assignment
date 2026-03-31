import { memo } from "react";
import { Link } from "react-router-dom";
import type { OrderSummaryProps } from "../../../types";

const OrderSummary = memo(function OrderSummary({
  totalItems,
  subtotal,
  discounts,
  totalDiscount,
  finalTotal,
}: OrderSummaryProps) {
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-100 sticky top-20 md:top-24">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
          Order Summary
        </h2>

        <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
          <div className="flex justify-between text-gray-600 text-sm md:text-base">
            <span>Subtotal ({totalItems} items)</span>
            <span>£{subtotal.toFixed(2)}</span>
          </div>

          {discounts.length > 0 && (
            <div className="border-t border-b border-dashed border-gray-200 py-2 md:py-3 space-y-2">
              <div className="flex items-center gap-2 text-green-600 font-semibold text-sm md:text-base">
                <span>🏷️</span>
                <span>Offers Applied</span>
              </div>
              {discounts.map((discount, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start text-sm"
                >
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{discount.name}</p>
                    <p className="text-xs text-gray-500">
                      {discount.description}
                    </p>
                  </div>
                  <span className="text-green-600 font-medium">
                    -£{discount.amount.toFixed(2)}
                  </span>
                </div>
              ))}
              <div className="flex justify-between text-green-600 font-semibold text-sm md:text-base pt-1">
                <span>Total Savings</span>
                <span>-£{totalDiscount.toFixed(2)}</span>
              </div>
            </div>
          )}

          <div className="flex justify-between text-gray-600 text-sm md:text-base">
            <span>Delivery</span>
            <span className="text-green-600">Free</span>
          </div>
          <div className="border-t pt-2 md:pt-3 flex justify-between font-bold text-gray-900 text-base md:text-lg">
            <span>Total</span>
            <span>£{finalTotal.toFixed(2)}</span>
          </div>
        </div>

        <button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-2.5 md:py-3 px-6 rounded-md transition-all text-sm md:text-base">
          Checkout
        </button>

        <Link
          to="/"
          className="block text-center text-primary hover:text-primary-dark font-medium mt-3 md:mt-4 transition-colors text-sm md:text-base"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
});

export default OrderSummary;
