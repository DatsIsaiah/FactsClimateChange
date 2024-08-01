import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const location = useLocation();

  useEffect(() => {
    const navbar = document.getElementById('navbar');

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-visible');
      } else {
        navbar.classList.remove('navbar-visible');
      }
    };

    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check on initial render
    } else {
      navbar.classList.add('navbar-visible');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header id="navbar" className="navbar">
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
