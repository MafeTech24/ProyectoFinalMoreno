import CartList from "./CartList";
import CartTotal from "./CartTotal";
import { useNavigate } from "react-router";

function CartView() {
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Tu carrito</h2>
      <CartList />
      <CartTotal />
      <div className="text-end mt-4">
        <button className="btn btn-primary" onClick={() => navigate("/checkout")}>
          Finalizar compra
        </button>
      </div>
    </div>
  );
}

export default CartView;
