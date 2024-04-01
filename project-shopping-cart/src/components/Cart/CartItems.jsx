import "./Cart.css";

const CartItems = (props) => {
  return (
    <div>
      <div className="item">
            <div className="image">
                <img src={props.image} alt={props.title} />
            </div>

            <div className="description">
                <span>{props.title}</span>
            </div>

            <div className="quantity">
                <button onClick={()=> props.incrementQuantity()}>
                    +
                </button>
            <input type="text" name="name" value={props.quantity} />
            <button onClick={()=> props.decrementQuantity()}>
                -
            </button>
            </div>

            <div className="total-price">${props.price}</div>
            <div className="total-price">Sub Total : ${props.subTotal()}</div>
      </div>
    </div>
  );
};

export default CartItems;
