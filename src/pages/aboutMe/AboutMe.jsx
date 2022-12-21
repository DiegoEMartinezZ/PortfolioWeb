import React from 'react';
import { Footer } from '../../components/footer/Footer';
import { NavBar } from '../../components/navBar/NavBar';
import { OwnDescription } from '../../components/ownDescription/OwnDescription';
import { Form } from '../../resources/form/Form';

import '../aboutMe/aboutMe.css';

export const AboutMe = () => {
  return (
    <>
      <NavBar />
      <OwnDescription />
      <Form />
      <Footer />
    </>
  );
};
