import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { languageContext } from "../../App";
import React, { useContext, useState } from "react";
import { faChevronDown, faX } from "@fortawesome/free-solid-svg-icons";

export const ProjectContainer = ({
  titleProject,
  descriptionProject,
  previewURL,
  gitURL,
}) => {
  const { language } = useContext(languageContext);
  const { buttons } = language[3];
  const { web, github } = buttons;

  const [descriptionTxt, setDescriptionTxt] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const hiddenBtn = () => {
    setDescriptionTxt(!descriptionTxt);
    setIsHidden(!isHidden);
  };

  return (
    <>
      <section id="project-container">
        <div>
          <div className="title-btn-container">
            <button onClick={hiddenBtn}>
              <FontAwesomeIcon
                icon={isHidden === true ? faChevronDown : faX}
                className="btn-hidden-project"
              />
            </button>

            <h1 className="subtitle" id="project-title">
              {titleProject}
            </h1>
          </div>

          {descriptionTxt && (
            <p className="description-project">{descriptionProject}</p>
          )}

          {descriptionTxt && (
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
            </div>
          )}
        </div>
      </section>
    </>
  );
};
