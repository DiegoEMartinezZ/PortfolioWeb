import React, { useContext } from "react";
import { SocialMedia } from "../../resources/socialmedia/SocialMedia";
import { languageContext } from "../../App";

export const Footer = () => {
  const { language } = useContext(languageContext);
  const { contact } = language[5];
  const { title } = contact;

  return (
    <>
      <footer className="footer-container" id="contact">
        <h1 className="subtitle"> {title} </h1>
        <ul className="info-list">
          <li>Diego Ernesto Martínez Zambrano</li>
          <li> diermaza.23@gmail.com</li>
          <li> (+57) 300 302 7598</li>
          <li> Bogotá - Colombia (GMT-5)</li>
          <li>
            <SocialMedia />
          </li>
          <li>
            <h5 className="copyrights"> &copy; Diego Martínez - 2023 </h5>
          </li>
        </ul>
      </footer>
    </>
  );
};
