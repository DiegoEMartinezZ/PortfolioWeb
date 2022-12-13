import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./socialMedia.css";

export const SocialMediaIcon = ({ url, image }) => {
  return (
    <>
      <li>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={image} />
        </a>
      </li>
    </>
  );
};
