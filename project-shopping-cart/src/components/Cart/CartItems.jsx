import "./Cart.css";
import PropTypes from 'prop-types';

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
            readOnly
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

CartItems.propTypes = {
  cartLength: PropTypes.array.isRequired,
  incrementQuantity: PropTypes.func.isRequired,
  decrementQuantity: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  subTotal: PropTypes.func.isRequired,
};
export default CartItems;
