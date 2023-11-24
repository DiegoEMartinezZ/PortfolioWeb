import React from "react";
import { ProjectContainer } from "./ProjectContainer";

export const ProjectWrap = () => {
  return (
    <>
      <section className="description-container">
        <h1 className="subtitle"> Projects </h1>
        <p className="txt">
          Each of these projects has the general objective to show the knowledge
          I have of web development as my experience in frontend, UI/UX design,
          layout, color management, hierarchies in both text and visual
          elements.
          <em>
            {" "}
            All this in order that the user can use the web application in an
            intuitive and effective way.
          </em>
        </p>
      </section>

      <ProjectContainer
        titleProject={"ToDoList"}
        previewURL={"https://cheery-frangipane-226060.netlify.app/"}
        gitURL={"https://github.com/DiegoEMartinezZ/To-Do-List"}
      />
      <ProjectContainer
        titleProject={"MusicWeather"}
        gitURL={"https://github.com/DiegoEMartinezZ/MusicWeather"}
      />
      <ProjectContainer
        titleProject={"D&AM Digital Media"}
        previewURL={"https://majestic-cucurucho-62109b.netlify.app/"}
        gitURL={"https://github.com/DiegoEMartinezZ/DYAM"}
      />
      <ProjectContainer
        titleProject={"Icebox"}
        gitURL={"https://github.com/DiegoEMartinezZ/Icebox_VisualDesign"}
      />
    </>
  );
};
