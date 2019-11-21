import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NavBar = () => {
  return (
    <div className="nav-container">
      <Link to="/fox-image" className="link">Fox</Link>
      <Link to="/dog-image" className="link">Dog</Link>
      <Link to="/cat-image" className="link">Cat</Link>
    </div>
  )
}

export default NavBar;