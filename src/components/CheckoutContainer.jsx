import { useCart } from "../context/useCart";
import { useNavigate } from "react-router";
import CheckoutForm from "./CheckoutForm";

function Checkout() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  if (cart.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h3>No hay productos en el carrito</h3>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Volver al catálogo
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-4 checkout-container">
      <h2 className="mb-4">Resumen de tu compra</h2>

      {cart.map((item) => (
        <div key={item.id} className="d-flex justify-content-between my-2">
          <span>{item.title} x {item.count}</span>
          <span>${(item.price * item.count).toFixed(2)}</span>
        </div>
      ))}

      <h4 className="mt-3">Total: ${total.toFixed(2)}</h4>

      <hr />

      <CheckoutForm />
    </div>
  );
}

export default Checkout;
