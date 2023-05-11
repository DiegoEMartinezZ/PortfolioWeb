import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";

export const NavBarButtons = () => {
  return (
    <>
      <ul className="navbar-buttons">
        <li>
          <a href="/portfolio-web">
            <FontAwesomeIcon icon={faGlobe} />
          </a>
        </li>

        <li>
          <a href="/portfolio-web">
            <FontAwesomeIcon icon={faBars} />
          </a>
        </li>
      </ul>
    </>
  );
};
