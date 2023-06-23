import React from "react";
import "./aboutMe.css";

export const AboutMe = () => {
  return (
    <>
      <section id="about-me" className="aboutMe-container">
        <h2 className="title-aboutMe"> Acerca de mi </h2>
        <p className="aboutMe-wrap">
          Tengo conocimientos en HTML, CSS, JS, bases de datos y APIs.
          Actualmente me encuentro trabajando en React para mejorar los
          proyectos de mi portafolio. Mi principal motivación es aprender.
          <br />
          <br />
          Al aprobar mi curso como desarrollador fullstack en Digital House
          comencé a ver videos, cursos en línea y las noticias más recientes
          para profundizar más sobre los temas frontend, para así, dedicarme
          tiempo completo como desarrollador frontend y continuar mejorando mis
          habilidades. Tengo 5 años de experiencia en diseño gráfico.{" "}
          <em>
            Me destaco por ser una persona de aprendizaje rápido, adaptativa y
            constante para cumplir las metas propuestas.{" "}
          </em>
        </p>
      </section>
    </>
  );
};
