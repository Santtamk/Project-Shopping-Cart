import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ cartLength }) => {
  const getCartLinkText = () => {
    return cartLength.length === 0 ? "Cart" : `Cart (${cartLength.length})`;
  }
  return (
    <nav className='nav'>
        <div>The Store</div>
        <div className='nav-sub'>
            <Link to="/products">Products</Link>
            <Link to="/cart">{getCartLinkText()}</Link>
        </div>
    </nav>
  )
}

export default Navbar