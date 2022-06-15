import React from "react";
import "../navBar/navbar.css";
import { SocialMedia } from "../socialmedia/SocialMedia";

export const NavBar = () => {
  return (
    <div className="navbar-container">
      <ul className="navbar">
        <a href="#about">
          <li> Home </li>
        </a>

        <a href="#about">
          <li> About </li>
        </a>

        <a href="#projects">
          <li> Portfolio </li>
        </a>

        <a href="#contact">
          <li> Contact </li>
        </a>
        <SocialMedia />
      </ul>
    </div>
  );
};
