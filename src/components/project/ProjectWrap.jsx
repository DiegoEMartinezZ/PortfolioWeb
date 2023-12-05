import React, { useContext } from "react";
import { languageContext } from "../../App";
import { ProjectContainer } from "./ProjectContainer";

export const ProjectWrap = () => {
  const { language } = useContext(languageContext);
  const { projects } = language[2];
  const { title, txt } = projects;
  return (
    <>
      <section className="description-container">
        <h1 className="subtitle">{title}</h1>
        <p className="txt">
          {txt[0]}
          <em> {txt[1]}</em>
        </p>
      </section>

      <ProjectContainer
        titleProject={"ToDoList"}
        previewURL={"https://cheery-frangipane-226060.netlify.app/"}
        gitURL={"https://github.com/DiegoEMartinezZ/To-Do-List"}
      />
      <ProjectContainer
        titleProject={"Music Weather"}
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
