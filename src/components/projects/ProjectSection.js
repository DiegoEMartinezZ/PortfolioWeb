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
          <button
            href="/"
            className="view-site"
            onClick={() => {
              alert("En mantenimiento");
            }}
          >
            <FontAwesomeIcon icon={faPlayCircle} /> App
          </button>
          <button
            href="/"
            className="view-code"
            onClick={() => {
              alert("En mantenimiento");
            }}
          >
            <FontAwesomeIcon icon={faCode} /> Code
          </button>
        </section>
      </article>
    </div>
  );
};
