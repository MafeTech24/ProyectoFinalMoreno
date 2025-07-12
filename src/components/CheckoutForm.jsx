import { useState } from "react";
import { useCart } from "../context/useCart";
import { useNavigate } from "react-router";
import { createOrder } from "../firebase/db";
import { serverTimestamp } from "firebase/firestore";

function CheckoutForm() {
  const { cart, clearCart } = useCart();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const pedido = {
      nombre,
      email,
      telefono,
      productos: cart,
      total: Number(cart.reduce((acc, i) => acc + i.price * i.count, 0).toFixed(2)),
      time: serverTimestamp(),
    };

    try {
      const idOrden = await createOrder(pedido);
      localStorage.setItem("ultimoPedido", JSON.stringify({ ...pedido, id: idOrden }));
      clearCart();
      navigate(`/checkout/success/${idOrden}`);
    } catch (error) {
      console.error("Error al guardar la orden: ", error);
      alert("Hubo un error al procesar tu compra. Intenta nuevamente.");
    }
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <h5 className="mb-3">Completa tus datos para finalizar la compra:</h5>
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Teléfono</label>
        <input
          type="number"
          className="form-control"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Finalizar compra
      </button>
    </form>
  );
}

export default CheckoutForm;
