import React from "react";
import { Link } from "react-router-dom";
import { NavBarButtons } from "./NavBarButtons";
import "../navBar/navbar.css";
import { IconHome } from "@tabler/icons-react";

export const NavBar = () => {
  return (
    <>
      <header className="navbar-container">
        <Link to="/" className="back-to-home">
          <IconHome />
        </Link>
        <div className="navbar-container-right">
          <NavBarButtons />
        </div>
      </header>
    </>
  );
};
