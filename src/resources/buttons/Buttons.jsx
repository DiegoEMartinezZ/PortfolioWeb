import React from "react";

import "../../resources/buttons/buttons.css";
import { Link } from "react-router-dom";

export const Buttons = ({ name, page }) => {
  return (
    <>
      <Link className="linkPages" to={page}>
        <button> {name}</button>
      </Link>
    </>
  );
};
