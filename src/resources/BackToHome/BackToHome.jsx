import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import "./backToHome.css";

export const BackToHome = () => {
  return (
    <>
      <a href="/portfolio-web" className="backToHome">
        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
      </a>
    </>
  );
};
