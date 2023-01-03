import React from 'react';
import { NavBar } from '../../components/navBar/NavBar';
import { About } from '../../components/about/About';
import { Footer } from '../../components/footer/Footer';

export const Home = () => {
  return (
    <>
      <NavBar />
      <About />
      <Footer />
    </>
  );
};
