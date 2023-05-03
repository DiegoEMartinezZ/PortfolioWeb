import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./projectContainer.css";
import React from "react";

export const ProjectContainer = ({ titleProject, imageProject }) => {
  return (
    <>
      <section className="project-container">
        <h2 className="title-projects"> {titleProject} </h2>
        <img src={imageProject} alt="example" className="project-img" />
        <form className="buttons-container">
          <button className="button-code">
            <FontAwesomeIcon icon={faCode} /> Código
          </button>
          <button className="button-codePreview">
            <FontAwesomeIcon icon={faEye} /> Preview
          </button>
          <button className="button-codeGithub">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </button>
        </form>
      </section>
    </>
  );
};
