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
            titleProject={"The Color Crafter"}
            descriptionProject={descriptions[1]}
            previewURL={"https://thecolorcrafter.netlify.app/"}
            gitURL={"https://github.com/DiegoEMartinezZ/colorCrafter"}
          />

          <ProjectContainer
            titleProject={"Music Weather"}
            descriptionProject={descriptions[2]}
            previewURL={"https://weather-frontend-4fv5.onrender.com/"}
            gitURL={"https://github.com/DiegoEMartinezZ/musicWeather"}
          />
        </div>
      </section>
    </>
  );
};
