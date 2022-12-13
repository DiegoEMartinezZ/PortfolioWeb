import React from "react";
import "../about/about.css";

import { Buttons } from "../../resources/buttons/Buttons";

export const About = () => {
  return (
    <>
      <section className="description-container">
        <h3 className="description">
          Mi nombre es Diego Martínez, soy desarrollador web fullstack enfocado
          en frontend, diseñador gráfico e ilustrador digital.
        </h3>
        <nav className="buttons-container">
          <Buttons name={"Proyectos"} />
          <Buttons name={"Acerca de mi"} />
        </nav>
      </section>
    </>
  );
};
