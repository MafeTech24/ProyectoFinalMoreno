import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContainer from "./components/CartContainer";
import CheckoutContainer from "./components/CheckoutContainer";
import CheckoutSuccess from "./components/CheckoutSuccess";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/checkout" element={<CheckoutContainer />} />
        <Route path="/checkout/success/:orderId" element={<CheckoutSuccess />} />
      </Routes>
    </>
  );
}

export default App;
