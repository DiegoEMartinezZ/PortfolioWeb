import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";

export const NavBarButtons = () => {
  const languageHandler = () => {
    const languageButton = document.querySelector(".language-button");
    const languageWindow = document.querySelector(".language-options");
    const menuButton = document.querySelector(".menu-button");
    const menuWindow = document.querySelector(".menu-options");
    languageButton.classList.toggle("active");
    languageWindow.classList.toggle("active");
    menuButton.classList.remove("active");
    menuWindow.classList.remove("active");
  };

  const menuHandler = () => {
    const menuButton = document.querySelector(".menu-button");
    const menuWindow = document.querySelector(".menu-options");
    const languageButton = document.querySelector(".language-button");
    const languageWindow = document.querySelector(".language-options");
    menuButton.classList.toggle("active");
    menuWindow.classList.toggle("active");
    languageButton.classList.remove("active");
    languageWindow.classList.remove("active");
  };

  return (
    <ul className="navbar-buttons">
      <li>
        <button onClick={languageHandler} className="language-button">
          <FontAwesomeIcon icon={faGlobe} />
        </button>
      </li>
      <section className="language-options">
        <ul>
          <li> ESP </li>
          <li> ENG </li>
        </ul>
      </section>
      <li>
        <button onClick={menuHandler} className="menu-button">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </li>
      <section className="menu-options">
        <ul>
          <Link to="#introduction">
            <li> Inicio </li>
          </Link>

          <Link to="#about-me">
            <li> Acerca de </li>
          </Link>

          <Link to="#projects">
            <li> Proyectos </li>
          </Link>

          <Link to="#contact">
            <li> Contacto </li>
          </Link>
        </ul>
      </section>
    </ul>
  );
};
