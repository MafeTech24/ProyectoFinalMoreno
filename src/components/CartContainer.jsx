import { useCart } from "../context/useCart";
import CartEmpty from "./CartEmpty";
import CartView from "./CartView";

function Cart() {
  const { cart } = useCart();

  return cart.length === 0 ? <CartEmpty /> : <CartView />;
}

export default Cart;








