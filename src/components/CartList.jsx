import { useCart } from "../context/useCart";
import CartItem from "./CartItem";

function CartList() {
  const { cart } = useCart();

  return (
    <>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </>
  );
}

export default CartList;
