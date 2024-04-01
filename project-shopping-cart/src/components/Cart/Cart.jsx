import CartItems from "./CartItems";
import "./Cart.css";
import { useState } from "react";

const Cart = ({ cartLength, autoRemoveCartItemOn0 }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const decrementQuantity = () => {
    if(quantity > 0 ){
      setQuantity((prevQuantity) => prevQuantity - 1);
    }else{
      autoRemoveCartItemOn0(id)
    }
  };

  const subTotal = (item) => {
    return quantity * item.price;
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
          quantity={quantity}
          incrementQuantity={incrementQuantity}
          decrementQuantity={() =>decrementQuantity(item)}
          subTotal={() => subTotal(item)}
          autoRemoveCartItemOn0 ={() => autoRemoveCartItemOn0(item)}
        />
      ))}
      <div>
        Total : ${total}
      </div>
    </div>
  );
};

export default Cart;
