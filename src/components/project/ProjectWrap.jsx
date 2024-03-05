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
          titleProject={"Color Crafter"}
          descriptionProject={descriptions[1]}
          previewURL={""}
          gitURL={""}
        />

        <ProjectContainer
          titleProject={"Boardify"}
          descriptionProject={descriptions[0]}
          previewURL={""}
          gitURL={""}
        />

        <ProjectContainer
          titleProject={"Music Weather"}
          descriptionProject={"PENDIENTE"}
          previewURL={""}
          gitURL={""}
        />

        <ProjectContainer
          titleProject={"Icebox"}
          descriptionProject={descriptions[2]}
          previewURL={""}
          gitURL={""}
        />
      </div>
    </>
  );
};
