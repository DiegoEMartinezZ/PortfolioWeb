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

      <ProjectContainer titleProject={"Boardify"} previewURL={""} gitURL={""} />
      <ProjectContainer
        titleProject={"Color Crafter"}
        previewURL={""}
        gitURL={""}
      />
      <ProjectContainer
        titleProject={"Short But Better"}
        previewURL={""}
        gitURL={""}
      />
    </>
  );
};
