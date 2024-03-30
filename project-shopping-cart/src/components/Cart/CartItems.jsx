import "./Cart.css";

const CartItems = (props) => {
  return (
    <div>
      <div className="item">
        
            {/* <div className="buttons">
                <span className="delete-btn"></span>
                <span className="like-btn"></span>
            </div> */}

            <div className="image">
                <img src={props.image} alt={props.title} />
            </div>

            <div className="description">
                <span>{props.title}</span>
            </div>

            <div className="quantity">
                <button className="plus-btn" type="button" name="button">
                    <img src="plus.svg" alt="" />
                </button>
            <input type="text" name="name" value="1" />
            <button className="minus-btn" type="button" name="button">
                <img src="minus.svg" alt="" />
            </button>
            </div>

            <div className="total-price">${props.price}</div>
      </div>
    </div>
  );
};

export default CartItems;
