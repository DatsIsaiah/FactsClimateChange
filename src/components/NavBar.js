import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <header id="navbar" className="navbar navbar-visible"> {/* Always visible */}
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/counties" className={({ isActive }) => (isActive ? 'active' : '')}>
              Counties
            </NavLink>
          </li>
          <li>
            <NavLink to="/crops" className={({ isActive }) => (isActive ? 'active' : '')}>
              Crops
            </NavLink>
          </li>
          <li>
            <NavLink to="/climate-change" className={({ isActive }) => (isActive ? 'active' : '')}>
              Climate Change
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
