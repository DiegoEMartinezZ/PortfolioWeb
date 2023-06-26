import React from "react";
import { ProjectContainer } from "./ProjectContainer";
import prueba from "../../images/To-Do-List-Preview.png";
import toDoListPreview from "../../images/To-Do-List-Preview.png";
import "./projectContainer.css";

export const ProjectWrap = () => {
  return (
    <>
      <h2 className="title-projects-container"> Proyectos </h2>
      <p className="p-projects-container">
        <br />
        Cada uno de estos proyectos tiene como objetivo mostrar los
        conocimientos que tengo de desarrollo web (backend y frontend), diseño
        UI/UX, diagramación, manejo de color, jerarquías, entre otras . Para que
        el usuario pueda utilizar de manera intuitiva, eficiente y rápida la
        aplicación dando solución a alguno de los problemas que pueda encontrar
        en la cotidianidad.
        <br />
        <br />
        <em>
          Cualquier comentario, sugerencia o duda que existan frente a estos
          proyectos son más que bienvenidos.
        </em>
      </p>
      <ProjectContainer
        titleProject={"ToDoList"}
        imageProject={toDoListPreview}
        previewURL={"https://cheery-frangipane-226060.netlify.app/"}
        gitURL={"https://github.com/DiegoEMartinezZ/To-Do-List"}
      />
      <ProjectContainer titleProject={"MusicWeather"} imageProject={prueba} />
      <ProjectContainer titleProject={"Icebox"} imageProject={prueba} />
    </>
  );
};
