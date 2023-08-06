import { faGithub } from "@fortawesome/free-brands-svg-icons";
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
      <section className="description-container" id="projects">
        <h1 className="title">{titleProject} </h1>

        <img src={imageProject} alt="project-cover" className="project-img" />
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
        </div>
      </section>
    </>
  );
};
