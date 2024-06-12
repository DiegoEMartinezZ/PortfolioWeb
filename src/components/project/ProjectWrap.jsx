import React, { useContext } from "react";
import { languageContext } from "../../App";
import { ProjectContainer } from "./ProjectContainer";

export const ProjectWrap = () => {
  const { language } = useContext(languageContext);
  const { projects } = language[1];
  const { title, descriptions } = projects;

  return (
    <>
      <section className="description-container">
        <h1 className="subtitle">{title}</h1>

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
            titleProject={"Music Weather"}
            descriptionProject={descriptions[2]}
            previewURL={""}
            gitURL={""}
          />
        </div>
      </section>
    </>
  );
};
