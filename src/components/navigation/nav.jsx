import React from 'react';
import Style from './nav.module.css';
import Logo from "../images/logo.png"
import Cart from "../images/shop.png"
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
      <>
          <div className={Style.container}>
              <span className={Style.logo}>
                  <Link to="/home">
                      <img src={Logo} alt="logo"/>
                  </Link>
              </span>
              <nav className={Style.nav}>
                  <ul className={Style.list}>
                      <li>
                          <Link to="/home" className={Style.links}>Home</Link>
                      </li>
                      <li>
                          <Link to="/products" className={Style.links}>Products</Link>
                      </li>
                      <li>
                          <Link to="/cart" className={Style.links}>
                              <img src={Cart} alt="cart" />
                          </Link>
                      </li>
                  </ul>
              </nav>
          </div>
      </>
  );
}

export default Nav;