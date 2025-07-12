import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getProducts, getProductsByCategory } from '../firebase/db';
import ItemList from './ItemList';


function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    if (categoryName) {
      getProductsByCategory(categoryName)
      .then(products => setItems(products))
    } else {
      getProducts()
      .then(products => {
      setItems(products)
      })
    }      
  }, [categoryName]);  
  return <ItemList items={items} />;
}

export default ItemListContainer;

