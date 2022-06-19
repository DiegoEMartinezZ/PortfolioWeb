import React from 'react';
import '../navBar/navbar.css';
import { SocialMedia } from '../socialmedia/SocialMedia';
import { NavbarBtn } from './NavbarBtn';

export const NavBar = () => {
  return (
    <div className="navbar-container">
      <ul className="navbar" id="navbar">
        <NavbarBtn linkSection="#navbar" title="Inicio" />
        <NavbarBtn linkSection="#about" title="Acerca de" />
        <NavbarBtn linkSection="#projects" title="Portafolio" />
        <NavbarBtn linkSection="#contact" title="Contacto" />
        <SocialMedia />
      </ul>
    </div>
  );
};
