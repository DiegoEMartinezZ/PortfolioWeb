import React, { useContext } from "react";
import { SocialMedia } from "../../resources/socialmedia/SocialMedia";
import { languageContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Form from "../form/Form";

export const Footer = () => {
  const { language } = useContext(languageContext);
  const { contact } = language[5];
  const { title } = contact;

  const upToHome = () => {
    document
      .querySelector(`#${"navbar"}`)
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <footer className="footer-container" id="contact">
        <h5 className="subtitle"> {title} </h5>
        <Form />
        <ul className="info-list">
          <FontAwesomeIcon
            icon={faChevronUp}
            id="btn-home"
            onClick={upToHome}
          />
          <li>
            <SocialMedia />
          </li>
          <li>
            <h5 className="copyrights"> Diego Martínez &copy; 2024 </h5>
          </li>
        </ul>
      </footer>
    </>
  );
};
