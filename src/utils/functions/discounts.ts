import type { CartItem } from "../../types";
import type { DiscountResult, Discount } from "../../types";

const PRODUCT_IDS = {
  BREAD: 1,
  MILK: 2,
  CHEESE: 3,
  SOUP: 4,
  BUTTER: 5,
};

const PRICES = {
  BREAD: 1.1,
  CHEESE: 0.9,
  BUTTER: 1.2,
};

export function calculateDiscounts(cart: CartItem[]): DiscountResult {
  const discounts: Discount[] = [];
  let totalDiscount = 0;

  const getQuantity = (productId: number) => {
    const item = cart.find((i) => i.productId === productId);
    return item?.quantity || 0;
  };

  // 1. Cheese BOGOF - Buy One Get One Free
  const cheeseQty = getQuantity(PRODUCT_IDS.CHEESE);
  if (cheeseQty >= 2) {
    const freeCheeseUnits = Math.floor(cheeseQty / 2);
    const cheeseDiscount = freeCheeseUnits * PRICES.CHEESE;
    discounts.push({
      name: "Cheese BOGOF",
      description: `Buy One Get One Free (${freeCheeseUnits} free)`,
      amount: cheeseDiscount,
    });
    totalDiscount += cheeseDiscount;
  }

  // 2. Soup & Bread Combo - Half Price Bread when buying Soup
  const soupQty = getQuantity(PRODUCT_IDS.SOUP);
  const breadQty = getQuantity(PRODUCT_IDS.BREAD);
  if (soupQty > 0 && breadQty > 0) {
    const discountedBreads = Math.min(soupQty, breadQty);
    const breadDiscount = discountedBreads * (PRICES.BREAD / 2);
    discounts.push({
      name: "Soup & Bread Combo",
      description: `Half price bread with soup (${discountedBreads} loaf${discountedBreads > 1 ? "s" : ""})`,
      amount: breadDiscount,
    });
    totalDiscount += breadDiscount;
  }

  // 3. Butter - A Third Off (33.3% discount)
  const butterQty = getQuantity(PRODUCT_IDS.BUTTER);
  if (butterQty > 0) {
    const butterDiscount = butterQty * (PRICES.BUTTER / 3);
    discounts.push({
      name: "Butter 1/3 Off",
      description: `33% off butter (${butterQty} unit${butterQty > 1 ? "s" : ""})`,
      amount: butterDiscount,
    });
    totalDiscount += butterDiscount;
  }

  return { discounts, totalDiscount };
}
