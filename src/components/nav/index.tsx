import { Link } from "react-router-dom";
import CartIcon from "../../assets/nav/cart";
import innkLogo from "../../assets/nav/innklogo.webp";
import { useAppSelector } from "../../store/store";
import { getProducts } from "../../api/products.service";
import { useEffect } from "react";
import { setProducts } from "../../store/product";
import { useDispatch } from "react-redux";
import { useCart } from "../../hooks/useCart";

export default function Nav() {
  const dispatch = useDispatch();
  const { getCartData } = useCart();

  const cartLength = useAppSelector((state) => state.cart).length;

  const getProductsData = async () => {
    try {
      const response = await getProducts();
      if (response.success && response.products) {
        dispatch(setProducts(response.products));
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProductsData();
    getCartData();
  }, []);

  return (
    <nav className="w-full h-14 md:h-16 bg-white shadow-md flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-12 sticky top-0 z-10">
      <Link to="/">
        <img
          className="w-12 h-12 md:w-16 md:h-16 object-contain"
          src={innkLogo}
          alt="logo"
        />
      </Link>
      <Link to="/cart" className="relative cursor-pointer p-2">
        <CartIcon />
        {cartLength > 0 && (
          <span className="absolute -top-0.5 -right-0.5 bg-primary text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">
            {cartLength > 99 ? "99+" : cartLength}
          </span>
        )}
      </Link>
    </nav>
  );
}
