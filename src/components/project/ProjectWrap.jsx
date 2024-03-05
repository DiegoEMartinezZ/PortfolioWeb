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

      <div className="project-grip-container">
        <ProjectContainer
          titleProject={"Boardify"}
          previewURL={""}
          gitURL={""}
          behanceURL={""}
        />
        <ProjectContainer titleProject={"Color Crafter"} previewURL={""} />
        <ProjectContainer
          titleProject={"Icebox"}
          previewURL={""}
          gitURL={""}
          behanceURL={""}
        />
        <ProjectContainer
          titleProject={"D&AM"}
          previewURL={"https://majestic-cucurucho-62109b.netlify.app/"}
          gitURL={"https://github.com/DiegoEMartinezZ/DYAM"}
          behanceURL={""}
        />
        behanceURL={""}
      </div>
    </>
  );
};
