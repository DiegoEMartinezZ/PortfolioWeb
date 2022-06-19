import React from 'react';

export const NavbarBtn = ({ linkSection, title }) => {
  return (
    <div>
      <a href={linkSection}>
        <li> {title} </li>
      </a>
    </div>
  );
};
