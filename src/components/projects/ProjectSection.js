import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPlayCircle } from "@fortawesome/free-solid-svg-icons";

export const ProjectSection = ({ title }) => {
  return (
    <div>
      <article className="project-section-preview">
        <h3 className="project-title"> {title} </h3>
        <div className="space"> </div>
        <section className="links-container">
          <a href="/" className="view-site">
            <FontAwesomeIcon icon={faPlayCircle} /> App
          </a>
          <a href="/" className="view-code">
            <FontAwesomeIcon icon={faCode} /> Code
          </a>
        </section>
      </article>
    </div>
  );
};
