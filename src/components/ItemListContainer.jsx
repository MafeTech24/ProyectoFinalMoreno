import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/db';
import { collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from './ItemList';


function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const productsRef = collection(db, "producto");
    const q = categoryId 
      ? query(productsRef, where("category", "==", categoryId))
      : productsRef;

    getDocs(q)
      .then((snapshot) => {
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(products);
      })
      .catch((error) => {
        console.error("Error fetching products: ", error);
      });
  }, [categoryId]);

  return <ItemList items={items} />;
}

export default ItemListContainer;

