import { memo } from "react";
import { Link } from "react-router-dom";
import Nav from "../../../components/nav";

const EmptyCart = memo(function EmptyCart() {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col">
      <Nav />
      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <div className="text-6xl mb-4">🛒</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Your cart is empty
        </h1>
        <p className="text-gray-600 mb-6">Add some products to get started</p>
        <Link
          to="/"
          className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-md transition-all"
        >
          Continue Shopping
        </Link>
      </main>
    </section>
  );
});

export default EmptyCart;
