import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router';

function CartWidget() {
  const { getQuantities } = useContext(CartContext)
  const quantity = getQuantities()
  return (
    <Link to="/cart">
      <Button>
        Cart <FaShoppingCart size={24} /> {quantity}
      </Button>
    </Link>    
  );
}

export default CartWidget;