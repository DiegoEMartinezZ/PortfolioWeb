import React from "react";
import "../navBar/navbar.css";
import { SocialMedia } from "../socialmedia/SocialMedia";

export const NavBar = () => {
  return (
    <div className="navbar-container">
      <ul className="navbar" id="navbar">
        <a href="#navbar">
          <li> Inicio </li>
        </a>

        <a href="#about">
          <li> Acerca de </li>
        </a>

        <a href="#projects">
          <li> Portafolio </li>
        </a>

        <a href="#contact">
          <li> Contacto </li>
        </a>
        <SocialMedia />
      </ul>
    </div>
  );
};
