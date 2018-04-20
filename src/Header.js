import React from 'react';
import logo from './logo.svg';
import './Header.css';

const Header = () => (
  <header>
    <div id="logo">
      <img src={logo} id="colorizeLogo" alt="laconeja" />
    </div>
  </header>
);

export default Header;
