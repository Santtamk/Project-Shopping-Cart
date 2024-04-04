import "./Cart.css";

const CartItems = (props) => {
  return (
    <div>
      <div className="item">
        <div className="image">
          {/* <img src={props.image} alt={props.title} /> */}
        </div>

        <div className="description">
          <span>{props.title}</span>
        </div>

        <div className="quantity">
          <button onClick={() => props.incrementQuantity(props.item)}>+</button>
          <input
            type="text"
            name="name"
            value={props.quantity || 1}
            // onChange={props.handle}
          />
          <button onClick={() => props.decrementQuantity(props.item)}>-</button>
        </div>

        <div className="total-price">${props.price}</div>
        <div className="total-price">
          Sub Total : ${props.subTotal(props.item)}
        </div>
      </div>
    </div>
  );
};

export default CartItems;
