import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <header className="navbar">
      <nav>
        <ul>
          <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/counties" activeClassName="active">Counties</NavLink></li>
          <li><NavLink to="/crops" activeClassName="active">Crops</NavLink></li>
          <li><NavLink to="/climate-change" activeClassName="active">Climate Change</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
