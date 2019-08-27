import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Header = () => (
  <header className="header">
    <Link to="/" className="router-link">HomeAway</Link>
    <div className="header-right">
      <Link className="router-link" to="/aboutUs">
        About Us
      </Link>
    </div>
  </header>
);

export default Header;
