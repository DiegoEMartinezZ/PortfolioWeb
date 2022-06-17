import React from "react";
import "../about/styles.css";
import { ProjectSection } from "./ProjectSection";

export const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <section className="projects">
        <br />
        <h1 className="section-title"> Portafolio </h1>
        <div className="space"> </div>
        <section className="project-description">
          <p className="info">
            En esta sección verán mis proyectos más recientes en los que aplico
            los conocimientos que tengo frente al desarrollo web. Cualquier
            comentario, sugerencia o pregunta es más que bienvenida.
          </p>
          <section className="project-preview">
            <ProjectSection title="PokéQuiz" />
            <ProjectSection title="MusicWeather" />
            <ProjectSection title="To-Do List!" />
            <ProjectSection title="CurrencyNow" />
          </section>
        </section>
      </section>
    </div>
  );
};
