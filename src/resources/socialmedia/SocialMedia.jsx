import React from "react";
import {
  faBehance,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { SocialMediaIcon } from "./SocialMediaIcon";
import "./socialMedia.css";

export const SocialMedia = () => {
  return (
    <>
      <ul className="socialMedia-container">
        <SocialMediaIcon
          url={"https://github.com/DiegoEMartinezZ"}
          image={faGithub}
        />
        <SocialMediaIcon
          url={"https://www.linkedin.com/in/diegomz/"}
          image={faLinkedin}
        />
        <SocialMediaIcon
          url={"https://www.behance.net/lowoncyan_"}
          image={faBehance}
        />
        <SocialMediaIcon
          url={"https://www.instagram.com/lowoncyan_"}
          image={faInstagram}
        />
      </ul>
    </>
  );
};
