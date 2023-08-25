import React from "react";
import { ProjectContainer } from "./ProjectContainer";

export const ProjectWrap = () => {
  return (
    <>
      <section className="description-container">
        <h1 className="title"> Proyectos </h1>
        <p className="txt">
          <em>
            Cada uno de estos proyectos tiene como objetivo mostrar que el
            usuario pueda utilizar de manera intuitiva y efectiva la aplicación
            web con ayuda de los conocimientos y experiencias que tengo en el
            área:
          </em>{" "}
          Backend - Frontend, diseño UI/UX, diagramación, teoria de color,
          jerarquías de información y textos, entre otros conocimientos de
          diseño.
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
