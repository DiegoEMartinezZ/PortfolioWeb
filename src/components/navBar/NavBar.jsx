import "../navBar/navbar.css";
import React, { useContext } from "react";
import { languageContext } from "../../App";

export const NavBar = () => {
  const { languageHandler, language } = useContext(languageContext);
  const { translation } = language[6];
  const { tongue } = translation;

  return (
    <>
      <nav className="navbar-container" id="navbar">
        <ul className="navbar-list">
          <li>
            <section className="navbar-buttons-wrap">
              <ul>
                <li className="language-btn" onClick={languageHandler}>
                  <h5>{tongue}</h5>
                </li>
              </ul>
            </section>
          </li>
        </ul>
      </nav>
    </>
  );
};
