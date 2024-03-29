import './Navbar.css';

const Navbar = ({ cartLength }) => {
  return (
    <nav className='nav'>
        <div>The Store</div>
        <div className='nav-sub'>
            <div>Products</div>
            {(cartLength.length===0) ? 
            <div>Cart</div> : <div>Cart ({cartLength.length}) </div>
}
        </div>
    </nav>
  )
}

export default Navbar