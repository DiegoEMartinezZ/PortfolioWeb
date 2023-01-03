import React from 'react';
import { Buttons } from '../../resources/buttons/Buttons';
import { ContactUs } from '../../resources/contactUs/ContactUs';
import '../about/about.css';

export const About = () => {
  return (
    <>
      <section className="description-container">
        <p className="description">
          Mi nombre es Diego Martínez, soy desarrollador frontend, diseñador
          gráfico e ilustrador digital. Me encanta trabajar en proyectos que
          tengan un impacto positivo para las personas, haciendo productos
          llamativos y funcionales.
        </p>
        <nav className="buttons-container">
          <Buttons name={'Proyectos'} page={'/Projects'} />
          <Buttons name={'Acerca de mi'} page={'/AboutMe'} />
        </nav>
        <ContactUs />
      </section>
    </>
  );
};
