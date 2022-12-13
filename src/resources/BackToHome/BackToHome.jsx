import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";

export const BackToHome = () => {
  return (
    <>
      <a href="/" className="backToHome">
        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
      </a>
    </>
  );
};
