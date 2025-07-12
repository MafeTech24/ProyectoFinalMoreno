import { useCart } from "../context/useCart";
import { Link } from "react-router";

function CartTotal() {
  const { cart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className="text-end mt-4 cart-total">
      <h4>Total: ${total.toFixed(2)}</h4>
      <button className="btn btn-vaciar mt-2 me-2" onClick={clearCart}>
        Vaciar carrito
      </button>
      <Link to="/" className="btn btn-seguir mt-2">
        Seguir comprando
      </Link>
    </div>
  );
}

export default CartTotal;
