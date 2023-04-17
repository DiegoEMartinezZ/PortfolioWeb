import React from "react";
import { ProjectContainer } from "./ProjectContainer";
import prueba from "../../images/prueba.jpg";
import "./projectContainer.css";

export const ProjectWrap = () => {
  return (
    <>
      {" "}
      <p className="p-projects-container">
        <h2 className="title-projects-container"> Proyectos </h2>
        <br />
        Cada uno de estos proyectos tiene como objetivo aplicar los
        conocimientos que tengo de desarrollo web (backend y frontend), diseño
        UI/UX, diagramación y manejo de color. Dando solución a los problemas
        que pueda tener el usuario frente a una necesidad que tenga.
        <br />
        <br />
        <em>
          Cualquier comentario, sugerencia o duda que existan frente a estos
          proyectos son más que bienvenidas.
        </em>
      </p>
      <ProjectContainer titleProject={"ToDoList"} imageProject={prueba} />
      <ProjectContainer titleProject={"MusicWeather"} imageProject={prueba} />
      <ProjectContainer titleProject={"Icebox"} imageProject={prueba} />
    </>
  );
};
