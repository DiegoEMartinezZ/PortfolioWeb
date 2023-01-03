import React from 'react';
import { Footer } from '../../components/footer/Footer';
import { NavBar } from '../../components/navBar/NavBar';
import { OwnDescription } from '../../components/ownDescription/OwnDescription';
import { ContactUs } from '../../resources/contactUs/ContactUs';
import { Form } from '../../resources/form/Form';

export const AboutMe = () => {
  return (
    <>
      <NavBar />
      <OwnDescription />
      <Form />
      <ContactUs />
      <Footer />
    </>
  );
};
