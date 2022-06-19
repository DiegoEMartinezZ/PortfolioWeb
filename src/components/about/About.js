import React from 'react';
import { Abilities } from '../abilities/Abilities';

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
            <h4 className="about-important">
              Mi nombre es Diego Martínez, soy Desarrollador Web Full - Stack
              con conocimientos en Diseño Gráfico e Ilustración Digital.
            </h4>
            <br />
            Soy de Bogotá - Colombia. Tengo 5 años de experiencia en desarrollo
            de piezas gráficas, elaboración de piezas editoriales, diagramación
            de textos, creación y diseño de personajes así como en ilustraciones
            digitales de acuerdo a las necesidades de cada cliente.
            <br />
            <br />
            Entre al mundo del Desarrollo Web cuando ví que podía aplicar toda
            mi experiencia en este nuevo entorno y combinar lo mejor de cada
            mundo. Mi prioridad es crear soluciones efectivas para las
            necesidades de los usuarios.
            <br />
            <br />
            Te invito a que veas mis
            <a href="#projects"> trabajos. </a>
            <br />
            Para ver mi portafolio como diseñador e ilustrador puedes entrar
            <a
              href="https://www.behance.net/srmiel"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              acá.
            </a>
          </p>
        </section>
        <h1 className="section-title"> Mis aplicaciones son </h1>
        <div className="space"> </div>
        <Abilities />
      </section>
    </div>
  );
};
