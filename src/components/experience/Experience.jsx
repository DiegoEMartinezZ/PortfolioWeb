import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { ExpSlider } from "../../resources/expSlider/ExpSlider";

const Experience = () => {
  return (
    <section>
      <h1 id="details-info">
        {" "}
        <FontAwesomeIcon icon={faChevronRight} /> Work Experience
      </h1>

      <ExpSlider />
    </section>
  );
};

export default Experience;
