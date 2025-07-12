import { useCart } from "../context/useCart";

function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart();

  const handleCantidad = (tipo) => {
    if (tipo === "sumar") {
      updateQuantity(item.id, item.count + 1);
    } else if (tipo === "restar") {
      updateQuantity(item.id, item.count - 1);
    }
  };
  

  return (
    <div className="d-flex align-items-center border-bottom mb-3 pb-3 cart-item">
      <img src={item.image} alt={item.title} style={{ width: "80px", marginRight: "20px" }} />
      <div style={{ flex: 1 }}>
        <h5>{item.title}</h5>
        <div className="d-flex align-items-center mb-1">
          <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => handleCantidad("restar")}>-</button>
          <span>{item.count}</span>
          <button className="btn btn-outline-secondary btn-sm ms-2" onClick={() => handleCantidad("sumar")}>+</button>
        </div>
        <p className="mb-1">Precio: ${item.price}</p>
        <p className="fw-bold">Subtotal: ${item.price * item.count}</p>
      </div>
      <button className="btn btn-eliminar" onClick={() => removeFromCart(item.id)}>Eliminar</button>
    </div>
  );
}

export default CartItem;
