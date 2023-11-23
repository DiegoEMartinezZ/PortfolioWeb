import { faBehance, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const ProjectContainer = ({
  titleProject,
  imageProject,
  previewURL,
  gitURL,
}) => {
  return (
    <>
      <section className="description-container" id="project-name">
        <h1 className="subtitle">{titleProject} </h1>

        <div className="buttons-wrap">
          <button className="code-btn">
            <a href={previewURL} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEye} /> Preview
            </a>
          </button>

          <button className="code-btn">
            <a href={gitURL} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </button>

          <button className="code-btn">
            <a href="{behanceURL}" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faBehance} /> Behance
            </a>
          </button>
        </div>
      </section>
    </>
  );
};
