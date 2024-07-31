import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/counties">Counties</Link></li>
          <li><Link to="/crops">Crops</Link></li>
          <li><Link to="/climate-change">Climate Change</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
