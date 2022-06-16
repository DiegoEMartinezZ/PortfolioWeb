import React from "react";
import "../about/styles.css";
import { ProjectSection } from "./ProjectSection";

export const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <section className="projects">
        <br />
        <h1 className="section-title"> Projects </h1>
        <div className="space"> </div>
        <section className="project-description">
          <p className="info">
            My most current projects in which I applied all the knowledge that I
            had, feel free to comment, make a suggestion or to ask anything
            about this projects.
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
