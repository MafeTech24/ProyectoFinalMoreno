import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getProduct } from '../firebase/db';
import ItemCount from './ItemCount';

const buildImgSrc = (path = "") => {
  const base = import.meta.env.BASE_URL || "/";
  const b = base.endsWith("/") ? base : `${base}/`;
  const p = path.startsWith("/") ? path.slice(1) : path;
  return `${b}${p}`;
};

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
          <img
  src={buildImgSrc(producto.image)}
  alt={producto.title}
  className="img-fluid"
  onError={(e) => (e.currentTarget.src = buildImgSrc("products/no-image.png"))}
/>
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