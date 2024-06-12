import "../navBar/navbar.css";
import React, { useContext } from "react";
import { languageContext } from "../../App";

export const NavBar = () => {
  const { languageHandler, language } = useContext(languageContext);
  const { select_language } = language[4];
  const { languages } = select_language;

  return (
    <>
      <nav className="navbar-container" id="navbar">
        <ul className="navbar-list">
          <li className="language-btn" onClick={languageHandler}>
            {languages}
          </li>
        </ul>
      </nav>
    </>
  );
};
