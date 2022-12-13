import React from "react";
import "../navBar/navbar.css";
import { NavBarButtons } from "./NavBarButtons";

export const NavBar = () => {
  return (
    <>
      <header className="navbar-container">
        <h4> DEMZ </h4>
        <div className="navbar-container-right">
          <NavBarButtons />
        </div>
      </header>
    </>
  );
};
