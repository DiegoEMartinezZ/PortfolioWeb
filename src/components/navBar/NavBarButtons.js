import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";

export const NavBarButtons = () => {
  return (
    <>
      <header className="navbar-buttons">
        <a href="/portfolio-web">
          <FontAwesomeIcon icon={faGlobe} />
        </a>
        <a href="/portfolio-web">
          <FontAwesomeIcon icon={faBars} />
        </a>
      </header>
    </>
  );
};
