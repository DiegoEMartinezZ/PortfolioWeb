import React from "react";
import { Abilities } from "../abilities/Abilities";

export const About = () => {
  return (
    <div className="about-container" id="about">
      <section className="about">
        <br />
        <h1 className="section-title"> Acerca de </h1>
        <div className="space"> </div>

        {/*Parte de foto mia + descripcion*/}
        <section className="about-description">
          <p className="info">
            Mi nombre es Diego Martínez, soy Desarrollador web Full - Stack. Me
            encuentro ubicado en Bogotá - Colombia. Tengo experiencia en diseño
            gráfico, ilustración digital, editorial y piezas para redes e
            impresas. Me apasiona crear experiencias de usuario a través del
            desarrollo web y que sean intuitivas, responsivas y sean atractivas
            visualmente.
            <br />
            <br />
            Te invito a que veas más de mis
            <a href="#projects"> proyectos. </a>
          </p>
        </section>
        <Abilities />
      </section>
    </div>
  );
};
