import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'


function App() {
  const [cartLength, setCartLength] = useState([]);

  const addToCart = (item) => {
    setCartLength((prevCart) => [...prevCart, item])
  }

    console.log(cartLength)
  return (
    <>
    <div>
      <Navbar cartLength={cartLength}/> 
      <Products addToCart={addToCart}/>
    </div>

    </>
  )
}

export default App
