import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({brand}) => {
  return (
    <div className="navbar">
      <h1>{brand}</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

NavBar.defaultProps={
  brand: 'React Router'
}

export default NavBar;
