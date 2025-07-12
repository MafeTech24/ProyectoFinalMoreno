import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getProduct } from '../firebase/db';
import ItemCount from './ItemCount';

function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducts] = useState();

  useEffect(() => {
    getProduct(id)
      .then(producto => setProducts(producto))      
  }, [id]);

   if (!producto) {
    return <p className="text-center mt-5">Cargando producto...</p>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-5">
          <img src={producto.image} alt={producto.title} className="img-fluid" />
        </div>
        <div className="col-md-7">
          <h2>{producto.title}</h2>
          <p>{producto.description}</p>
          <h4 className="text-success">${producto.price}</h4>
          <p><strong>Categoría:</strong> {producto.category}</p>
          <ItemCount item = {producto} />
        </div>        
      </div>
    </div>
  );  
}

export default ItemDetailContainer;