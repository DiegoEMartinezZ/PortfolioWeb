import React from "react";
import "../about/about.css";
import { Buttons } from "../../resources/buttons/Buttons";

export const About = () => {
  return (
    <>
      <section className="description-container">
        <p className="description">
          Mi nombre es Diego Martínez, soy desarrollador web fullstack enfocado
          en frontend, diseñador gráfico e ilustrador digital.
        </p>
        <nav className="buttons-container">
          <Buttons name={"Proyectos"} page={"/Projects"} />

          <Buttons name={"Acerca de mi"} page={"/AboutMe"} />
        </nav>
      </section>
    </>
  );
};
