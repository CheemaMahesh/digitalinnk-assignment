import { useAppSelector } from "../../store/store";
import ProductCard from "./components/product-card";

export default function Home() {
  const productsList = useAppSelector((state) => state.product.products);
  return (
    <main className="flex-1 container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Fresh Groceries</h1>
        <p className="text-gray-600 mt-2">Quality products at great prices</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {productsList.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </main>
  );
}
