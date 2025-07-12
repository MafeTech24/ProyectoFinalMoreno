import { Link } from "react-router";

function CartEmpty() {
  return (
    <div className="container mt-5 text-center">
      <h3>Tu carrito está vacío 😕</h3>
      <Link to="/" className="btn btn-primary mt-3">
        Volver al catálogo
      </Link>
    </div>
  );
}

export default CartEmpty;
