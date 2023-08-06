import React from "react";
import { ProjectContainer } from "./ProjectContainer";
import toDoListPreview from "../../images/To-Do-List-Preview.png";

export const ProjectWrap = () => {
  return (
    <>
      <section className="description-container">
        <h1 className="title"> Proyectos </h1>
        <p className="txt">
          <em>Cada uno de estos proyectos tiene como objetivo </em> general
          mostrar los conocimientos que tengo de desarrollo web, tanto en la
          parte de backend y frontend, diseño UI/UX, diagramación, manejo de
          color, jerarquías, entre otros conocimientos. Todo esto con el fin de
          que el usuario pueda utilizar de manera intuitiva y efectiva la
          aplicación web.
          <br />
          <br />
          <em>
            Cualquier comentario, sugerencia o duda que existan frente a estos
            proyectos son más que bienvenidos.
          </em>
        </p>
      </section>
      <ProjectContainer
        titleProject={"ToDoList"}
        imageProject={toDoListPreview}
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
