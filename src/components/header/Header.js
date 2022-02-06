import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="/">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <NavLink to="/people">People</NavLink>
        </li>
        <li>
          <NavLink to="/planets">Planets</NavLink>
        </li>
        <li>
          <NavLink to="/starships">Starships</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;