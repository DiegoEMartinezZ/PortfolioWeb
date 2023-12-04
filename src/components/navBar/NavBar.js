import "../navBar/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { languageContext } from "../../App";

export const NavBar = () => {
  const { languageHandler } = useContext(languageContext);

  return (
    <>
      <nav className="navbar-container" id="navbar">
        <ul className="navbar-list">
          <li>
            <section className="navbar-buttons-wrap">
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faGlobe}
                    className="menu-btn"
                    onClick={languageHandler}
                  />
                </li>
              </ul>
            </section>
          </li>
        </ul>
      </nav>
    </>
  );
};
