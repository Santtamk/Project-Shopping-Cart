import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartLength, setCartLength] = useState([]);
  const addToCart = (item) => {
    setCartLength((prevCart) => [...prevCart, item]);
    console.log(item)
  };
  const autoRemoveCartItemOn0 = (id) => {
    const updatedCart = cartLength.filter((item) => item.id != id)
    setCartLength(updatedCart);
  }
  // console.log(cartLength)
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar cartLength={cartLength} />
          <Routes>
            <Route
              path="/products"
              element={<Products addToCart={addToCart} />}
            />
            <Route path="/cart" element={<Cart cartLength={cartLength} autoRemoveCartItemOn0={() => autoRemoveCartItemOn0(id)}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
