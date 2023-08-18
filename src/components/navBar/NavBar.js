import "../navBar/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar-container">
        <ul className="navbar-list">
          <li>
            <section className="navbar-buttons-wrap">
              <ul>
                <li>
                  <FontAwesomeIcon icon={faBars} className="menu-btn" />
                </li>
              </ul>
            </section>
          </li>
        </ul>
      </nav>
    </>
  );
};
