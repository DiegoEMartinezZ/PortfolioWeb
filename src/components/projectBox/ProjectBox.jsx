import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const ProjectBox = ({ titleProject, imageProject }) => {
  return (
    <>
      <section className="project-container">
        <h2> {titleProject} </h2>
        <img src={imageProject} alt="example" className="project-img" />
        <div className="buttons-container">
          <button className="button-code">
            <FontAwesomeIcon icon={faCode} /> Código
          </button>
          <button className="button-codePreview">
            <FontAwesomeIcon icon={faEye} /> Preview
          </button>
          <button className="button-codeGithub">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </button>
        </div>
      </section>
    </>
  );
};
