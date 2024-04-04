import CartItems from "./CartItems";
import "./Cart.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartLength, autoRemoveCartItemOn0, updateCartLength }) => {
  const [quantity, setQuantity] = useState(cartLength.length);
  useEffect(() => {
    const quantities = {};
    cartLength.forEach((item) => {
      quantities[item.id] = item.quantity || 1;
    });
    setQuantity(quantities);
  }, [cartLength]);

  const incrementQuantity = (item) => {
    const updatedQuantities = { ...quantity }; //initiates a spread operator for a dummy quantity
    updatedQuantities[item.id] = (updatedQuantities[item.id] || 1) + 1; //gets the quantity checked with id and updates
    setQuantity(updatedQuantities);

    const updatedCart = cartLength.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: updatedQuantities[item.id] }
        : cartItem
    );
    updateCartLength(updatedCart);
  };

  const decrementQuantity = (item) => {
    const updatedQuantities = { ...quantity }; //initiates a spread operator for a dummy quantity
    updatedQuantities[item.id] = (updatedQuantities[item.id] || 1) - 1; //gets the quantity checked with id and updates
    setQuantity(updatedQuantities);

    if (quantity[item.id] > 1) {
      const updatedCart = cartLength.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: updatedQuantities[item.id] }
          : cartItem
      );
      updateCartLength(updatedCart);
    } else if (quantity[item.id] === 1) {
      autoRemoveCartItemOn0(item);
    }
    // console.log('updatedQuantities',updatedQuantities)
  };
  console.log("quantity", quantity);

  const subTotal = (item) => {
    return (quantity[item.id] || 1) * item.price;
  };

  const total = cartLength.reduce((acc, item) => acc + subTotal(item), 0);

  return (
    <div className="shoppingCart">
      {cartLength.length === 0 ? (<div>
        <img src="" alt="Cart is empty"></img>
        <div>Back to Products<Link to="/products">Products</Link></div>
        </div>
        ) : 
        (<div>
      <h3 className="title">Shopping Bag</h3>
      {cartLength.map((item) => (
        <CartItems
          key={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          quantity={quantity[item.id]}
          incrementQuantity={() => incrementQuantity(item)}
          decrementQuantity={() => decrementQuantity(item)}
          subTotal={() => subTotal(item)}
        />
      ))}
      <div>Total : ${total}</div>
      </div>
    )}
    </div>
  );
};

export default Cart;
