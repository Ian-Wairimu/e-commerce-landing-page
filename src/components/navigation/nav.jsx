import React from 'react';
import Styles from './nav.module.css';

const Nav = () => {
  return (
      <>
          <div className={Styles.navigationContainer}>
              <span>
                  {/*<img src={mm} alt="logo yolom" />*/}
              </span>
              <nav>
                  <ul>
                      <li>Home</li>
                      <li>Product</li>
                      <li></li>
                  </ul>
              </nav>
          </div>
      </>
  );
}

export default Nav;