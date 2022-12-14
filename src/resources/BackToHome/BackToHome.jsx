import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import "../BackToHome/backToHome.css";

export const BackToHome = () => {
  return (
    <>
      <a href="/" className="backToHome">
        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
      </a>
    </>
  );
};
