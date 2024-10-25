import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">NEXUS</h1>
        <div className="nav-links">
          <a href="#games">Games</a>
          <a href="#news">News</a>
          <a href="#tournaments">Tournaments</a>
          <a href="#leaderboard">Leaderboard</a>
        </div>
        <button className="sign-in-btn">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;