import React from 'react';
import '../about/about.css';

import { Buttons } from '../../resources/Buttons';

export const About = () => {
  return (
    <>
      <section className="description-container">
        <h3 className="description">
          Mi nombre es Diego Martínez, soy un desarrollador web full stack
          enfocado en frontend
        </h3>
        <nav className="buttons-container">
          <Buttons name={'Proyectos'} />
          <Buttons name={'Acerca de mi'} />
        </nav>
      </section>
    </>
  );
};
