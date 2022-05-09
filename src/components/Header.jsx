import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';

function Header() {
  return (
    <div className='Header'>
      <h1 className="Header-title">
        <Link to='/' >PlatziConf Merch</Link>
      </h1>
      <div className="Header-Checkout">
        <Link to='/checkout' >
        <i className="fa-solid fa-basket-shopping fa-2x" />
        </Link>
      </div>        
    </div>
  );
}

export default Header;