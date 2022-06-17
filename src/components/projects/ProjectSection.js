import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
            <FontAwesomeIcon icon={faPlayCircle} /> Probar
          </button>
          <button
            href="/"
            className="view-code"
            onClick={() => {
              alert("En mantenimiento");
            }}
          >
            <FontAwesomeIcon icon={faGithub} /> Código
          </button>
        </section>
      </article>
    </div>
  );
};
