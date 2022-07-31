import React from 'react';
import './nav.css';
import Logo from "../images/logo.png"
import Cart from "../images/shop.png"
import { Link } from 'react-router-dom';
import {FaBars} from "react-icons/fa";


const Nav = () => {
  return (
      <>
          <div className="container">
              <span className="logo">
                  <Link to="/home">
                      <img src={Logo} alt="logo"/>
                  </Link>
              </span>
              <nav className="nav">
                  <ul className="list">
                      <li>
                          <Link to="/home" className="links">Home</Link>
                      </li>
                      <li>
                          <Link to="/products" className="links">Products</Link>
                      </li>
                      <li>
                          <Link to="/cart" className="links">
                              <img src={Cart} alt="cart" />
                          </Link>
                      </li>
                  </ul>
              </nav>
              <span className="open-btn">
                  <FaBars />
              </span>
          </div>
      </>
  );
}

export default Nav;