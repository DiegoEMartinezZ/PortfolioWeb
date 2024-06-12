import React from "react";
import { SocialMedia } from "../../resources/socialmedia/SocialMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  const upToHome = () => {
    document
      .querySelector(`#${"navbar"}`)
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <footer className="footer-container" id="contact">
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
            <h5 className="copyrights"> Diego Martínez - 2024 </h5>
          </li>
        </ul>
      </footer>
    </>
  );
};
