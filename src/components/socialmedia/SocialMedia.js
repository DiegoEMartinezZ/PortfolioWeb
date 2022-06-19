import React from 'react';
import {
  faBehance,
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SocialMedia = () => {
  return (
    <div className="socialmedia-container">
      <li>
        <a
          href="https://github.com/DiegoEMartinezZ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/diegomz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/srmiel_/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
      <li>
        <a
          href="https://www.behance.net/srmiel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faBehance} />
        </a>
      </li>
    </div>
  );
};
