import CartIcon from "../../assets/nav/cart";
import innkLogo from "../../assets/nav/innklogo.webp";
import { useAppSelector } from "../../store/store";

export default function Nav() {
  const cartLength = useAppSelector((state) => state.cart).length;
  return (
    <nav className="w-full h-16 bg-background-primary shadow-md flex items-center justify-between px-8 md:px-10 ld:px-12 bg-white sticky top-0 z-10">
      <img className="w-16 h-16 object-contain" src={innkLogo} alt="logo" />
      <div className="relative cursor-pointer">
        <CartIcon />
        {cartLength > 0 && (
          <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {cartLength > 99 ? "99+" : cartLength}
          </span>
        )}
      </div>
    </nav>
  );
}
