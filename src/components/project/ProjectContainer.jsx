import { faBehance, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { languageContext } from "../../App";
import React, { useContext } from "react";

export const ProjectContainer = ({ titleProject, previewURL, gitURL }) => {
  const { language } = useContext(languageContext);
  const { buttons } = language[4];
  const { web, github, behance } = buttons;

  return (
    <>
      <section className="description-container" id="project-container">
        <h1 className="subtitle" id="project-title">
          {titleProject}
        </h1>

        <div className="buttons-wrap">
          <button className="code-btn" id="preview">
            <a href={previewURL} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEye} /> {web}
            </a>
          </button>

          <button className="code-btn" id="coding">
            <a href={gitURL} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> {github}
            </a>
          </button>

          <button className="code-btn">
            <a href="{behanceURL}" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faBehance} /> {behance}
            </a>
          </button>
        </div>
      </section>
    </>
  );
};
