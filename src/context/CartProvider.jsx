import { useState } from 'react';
import { CartContext } from './CartContext'


function CartProvider({ children }) {
    const [cart, setCart] = useState([])
   
    const addToCart = (prod) => {
        const isInCart = cart.some(item => item.id === prod.id)


        if (isInCart) {
            const productoRepetido = cart.find(item => item.id === prod.id)
            const cartSinProductoRepetido = cart.filter(item => item.id !== prod.id)
           
            setCart([ ...cartSinProductoRepetido, {...productoRepetido, count:productoRepetido.count + prod.count }])
        } else {
            setCart([...cart, prod])
        }      


    }
   
    const getQuantities = () => {
        const totalQuantity = cart.map(prod => prod.count)
        const quantity = totalQuantity.reduce((acc, current) => acc + current, 0,)
        return quantity
    }      
   
    const updateQuantity = (id, newCount) => {
        if (newCount <= 0) {
          setCart(cart.filter(item => item.id !== id));
        } else {
          setCart(
            cart.map(item =>
              item.id === id ? { ...item, count: newCount } : item
            )
          );
        }
      };
     


    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };
   
    const clearCart = () => {
        setCart([]);
      };    
   
    return (
        <CartContext.Provider value={{ cart, addToCart, getQuantities, updateQuantity, removeFromCart, clearCart }}>
            { children }
        </CartContext.Provider>
    )
}


export default CartProvider
