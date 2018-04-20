import React from 'react';

import './Menu.css';

const Menu = () => (
  <menu>
    <ul>
      <li>
        <a href="/login" className="colorize-font">
          <i className="fa fa-sign-in" /> Sign In
        </a>
      </li>
      <li>
        <a href="/signup" className="colorize-font">
          <i className="fa fa-user-plus" /> Sign Up
        </a>
      </li>
      <li>
        <a href="/upload" className="colorize-font">
          <i className="fa fa-cloud-upload" /> Upload your coneja
        </a>
      </li>
    </ul>
  </menu>
);

export default Menu;
