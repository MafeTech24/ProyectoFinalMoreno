import { useState,} from 'react';
import { useCart } from '../context/useCart';

function ItemCount({ item }) {
  const [count, setCount] = useState(1);
  const { addToCart } = useCart();

  const handleSumar = () => setCount(count + 1);
  const handleRestar = () => setCount(count - 1);
  const handleAgregar = () => addToCart ({ ...item, count})

  return (
    <div className="d-flex flex-column align-items-start">
  <div className="quantity-control d-flex align-items-center gap-2">
    <button className="btn btn-outline-secondary btn-sm" onClick={handleRestar} disabled={count <= 1}>-</button>
    <span className="quantity-number">{count}</span>
    <button className="btn btn-outline-secondary btn-sm" onClick={handleSumar}>+</button>
  </div>

  <button className="btn btn-primary mt-2" onClick={handleAgregar}>
    Agregar al carrito
  </button>
</div>
  )
}

export default ItemCount;



