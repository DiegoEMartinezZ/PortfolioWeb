import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const AbilitiesSection = ({ icon, title, description }) => {
  return (
    <div>
      <article className="ability-container">
        <FontAwesomeIcon icon={icon} className="abilitiesIcon" />
        <h2 className="ability-title"> {title} </h2>
        <div className="space"> </div>
        <p className="ability-description"> {description}</p>
      </article>
    </div>
  );
};
