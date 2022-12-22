import React from 'react';
import { Link } from 'react-router-dom';
import '../navBar/navbar.css';
import { NavBarButtons } from './NavBarButtons';

export const NavBar = () => {
  return (
    <>
      <header className="navbar-container">
        <Link to="/portfolio-web" className="back-to-home">
          <h4> HOME </h4>
        </Link>
        <div className="navbar-container-right">
          <NavBarButtons />
        </div>
      </header>
    </>
  );
};
