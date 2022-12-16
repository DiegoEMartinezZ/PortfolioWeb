import React from 'react';
import '../projects/projects.css';
import prueba from '../../images/prueba.jpg';

import { NavBar } from '../../components/navBar/NavBar';
import { ProjectBox } from '../../components/projectBox/ProjectBox';
import { Footer } from '../../components/footer/Footer';

export const Projects = () => {
  return (
    <>
      <NavBar />
      <ProjectBox titleProject={'To-Do List'} imageProject={prueba} />
      <ProjectBox titleProject={'MusicWeather'} imageProject={prueba} />
      <ProjectBox titleProject={'SaveYourMoney'} imageProject={prueba} />
      <Footer />
    </>
  );
};
