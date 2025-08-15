import './Header.css';
import { NavLink } from 'react-router';
import CartIcon from '../assets/images/icons/cart-icon.png';
import SearchIcon from '../assets/images/icons/search-icon.png';
import LogoWhite from '../assets/images/logo-white.png';
import MobileLogoWhite from '../assets/images/mobile-logo-white.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Header({cart}) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      navigate(`/?search=${searchQuery}`);
      setSearchQuery(''); 
    }
  }
  let cartQuantity = 0;
  cart.forEach((item) => {
    cartQuantity += item.quantity;
  });
  return (

    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo"
            src={LogoWhite} />
          <img className="mobile-logo"
            src={MobileLogoWhite} />
        </NavLink>
      </div>

      <div className="middle-section">
        <input 
        className="search-bar" 
        type="text" 
        placeholder="Search"
        onChange={(event) => setSearchQuery(event.target.value)}

         />

        <button 
        className="search-button"
        onClick={() => {
          handleSearch();
          
        }}>
          <img className="search-icon" src={SearchIcon} />
        </button>
      </div>

      <div className="right-section">
        <NavLink 
        className="orders-link header-link" 
        activeClassName="active"
        to="/orders">

          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src={CartIcon} />
          <div className="cart-quantity">{cartQuantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );

}
export default Header;
