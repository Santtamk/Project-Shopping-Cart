import CartItems from "./CartItems";
import "./Cart.css";
import { useState } from "react";

const Cart = ({ cartLength, autoRemoveCartItemOn0, updateCartLength }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = (item) => {
    const updatedQuantities = { ...quantity };//initiates a spread operator for a dummy quantity
    updatedQuantities[item.id] = (updatedQuantities[item.id] || 1) + 1;//gets the quantity checked with id and updates 
    setQuantity(updatedQuantities);

    const updatedCart = cartLength.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: updatedQuantities[item.id] }
        : cartItem
    );
    updateCartLength(updatedCart);
  };

  const decrementQuantity = (item) => {
    if (quantity[item.id] > 1) {
      const updatedQuantities = { ...quantity };//initiates a spread operator for a dummy quantity
      updatedQuantities[item.id] = updatedQuantities[item.id] - 1;//gets the quantity checked with id and updates 
      setQuantity(updatedQuantities);

      const updatedCart = cartLength.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: updatedQuantities[item.id] }
          : cartItem
      );
      updateCartLength(updatedCart);
    } else if (quantity[item.id] === 1) {
      autoRemoveCartItemOn0(item);
    }
  };

  const subTotal = (item) => {
    console.log("quantity", quantity[item.id] * item.price, "price");
    return quantity[item.id] * item.price;
  };

  const total = cartLength.reduce((acc, item) => acc + subTotal(item), 0);

  return (
    <div className="shoppingCart">
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
  );
};

export default Cart;
