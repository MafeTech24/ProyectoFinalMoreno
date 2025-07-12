import {
    getFirestore,
    collection,
    getDocs,
    query,
    where, 
    doc,
    getDoc, 
    addDoc
} from "firebase/firestore";
import { app } from "./config";

export const db = getFirestore(app);

export const getProducts = async () => {
    const documentos = await getDocs(collection(db, "producto"));
    const productos = [];

    documentos.forEach((doc) => {
        productos.push({ ...doc.data(), id: doc.id })
    });
    
    return productos
}

export const getProductsByCategory = async (category) => {
    const q = query(collection(db, "producto"), where("category", "==", category))
    const documentos = await getDocs(q)
    const productos = []

    documentos.forEach((doc) => {
        productos.push({ ...doc.data(), id: doc.id })
    })
    return productos
}

export const getProduct = async (id) => {
    const docRef = doc(db, "producto", id);
    const documento = await getDoc(docRef);

    if (documento.exists()) {
    return { ...documento.data(), id: documento.id};
    } else {
        return null;
    }
}


export const createOrder = async (orden) => {
  const docRef = await addDoc(collection(db, "orders"), orden);
  return docRef.id;
};
