import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { ExpSlider } from "../../resources/expSlider/ExpSlider";
import english from "../../resources/languages/english.json";

const Experience = () => {
  const workExperienceHandler = () => {
    const openingArrow = document.querySelector(".arrow-work-exp");
    const visibleWorkExperience = document.querySelector(".exp-container");

    openingArrow.classList.toggle("active");
    visibleWorkExperience.classList.toggle("show");
  };

  const { aboutMe } = english[1];

  return (
    <section>
      <h1 id="details-info" onClick={workExperienceHandler}>
        {" "}
        <FontAwesomeIcon
          icon={faChevronRight}
          className="arrow-work-exp"
        />{" "}
        {aboutMe.workExp}
      </h1>

      <ExpSlider value={workExperienceHandler} />
    </section>
  );
};

export default Experience;
