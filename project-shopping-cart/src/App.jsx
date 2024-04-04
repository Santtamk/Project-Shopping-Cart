import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartLength, setCartLength] = useState([]);
  const addToCart = (item) => {
    const checkItem = cartLength.some((cartItem) => cartItem.id === item.id);

    {checkItem
      ? alert("Item already in cart, please visit cart")
      : setCartLength((prevCart) => [...prevCart, item]);}
  };
  const autoRemoveCartItemOn0 = (item) => {
    const updatedCart = cartLength.filter((cartItem) => cartItem.id != item.id);
    setCartLength(updatedCart);
  };
  const updateCartLength = (updatedCart) => {
    setCartLength(updatedCart);
  };
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
            <Route
              path="/cart"
              element={
                <Cart
                  cartLength={cartLength}
                  autoRemoveCartItemOn0={autoRemoveCartItemOn0}
                  updateCartLength={updateCartLength}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
