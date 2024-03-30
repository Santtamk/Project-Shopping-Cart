import CartItems from "./CartItems"
import "./Cart.css";

const Cart = ({ cartLength }) => {

  return (
    <div className="shoppingCart">
       {/* Title  */}
       <h3 className="title">
            Shopping Bag
        </h3>
        {cartLength.map((item) => (
            <CartItems key={item.id} title={item.title} price={item.price} image={item.image} />
        ))}

    </div>
  )
}

export default Cart