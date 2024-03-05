import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { languageContext } from "../../App";
import React, { useContext, useState } from "react";

export const ProjectContainer = ({
  titleProject,
  descriptionProject,
  previewURL,
  gitURL,
}) => {
  const { language } = useContext(languageContext);
  const { buttons } = language[4];
  const { web, github } = buttons;

  const [descriptionTxt, setDescriptionTxt] = useState(false);

  return (
    <>
      <section
        id="project-container"
        onMouseEnter={() => setDescriptionTxt(true)}
        onMouseLeave={() => setDescriptionTxt(false)}
      >
        <h1 className="subtitle" id="project-title">
          {titleProject}
        </h1>

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
      </section>
    </>
  );
};
