import React, { useContext } from "react";
import { languageContext } from "../../App";
import { ProjectContainer } from "./ProjectContainer";

export const ProjectWrap = () => {
  const { language } = useContext(languageContext);
  const { projects } = language[2];
  const { title, txt, descriptions } = projects;

  return (
    <>
      <section className="description-container">
        <h1 className="subtitle">{title}</h1>
        <p className="txt">
          {txt[0]}
          <em> {txt[1]}</em>
        </p>
      </section>

      <div className="project-grip-container">
        <ProjectContainer
          titleProject={"Boardify"}
          descriptionProject={descriptions[0]}
          previewURL={""}
          gitURL={""}
        />
        <ProjectContainer
          titleProject={"Color Crafter"}
          descriptionProject={descriptions[1]}
          previewURL={""}
          gitURL={""}
        />
        <ProjectContainer
          titleProject={"Icebox"}
          descriptionProject={descriptions[2]}
          previewURL={""}
          gitURL={""}
        />
        <ProjectContainer
          titleProject={"D&AM"}
          descriptionProject={descriptions[3]}
          previewURL={"https://majestic-cucurucho-62109b.netlify.app/"}
          gitURL={"https://github.com/DiegoEMartinezZ/DYAM"}
        />
      </div>
    </>
  );
};
