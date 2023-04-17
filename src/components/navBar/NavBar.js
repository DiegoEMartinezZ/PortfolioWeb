import React from "react";
import { Link } from "react-router-dom";
import { NavBarButtons } from "./NavBarButtons";
import "../navBar/navbar.css";

export const NavBar = () => {
  return (
    <>
      <header className="navbar-container">
        <Link to="/" className="back-to-home">
          <h4> ILUSTRACIÓN </h4>
        </Link>
        <div className="navbar-container-right">
          <NavBarButtons />
        </div>
      </header>
    </>
  );
};
