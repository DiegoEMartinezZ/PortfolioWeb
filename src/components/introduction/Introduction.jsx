import React, { useContext } from "react";
import { languageContext } from "../../App";
import { SocialMedia } from "../../resources/socialmedia/SocialMedia";

export const Introduction = () => {
  const { language } = useContext(languageContext);
  const { introduction } = language[0];
  const { name, resume, is_available } = introduction;
  return (
    <>
      <div id="introduction">
        <section className="description-container">
          <h1 className="title">{name}</h1>
          <p className="txt">{resume}</p>
          <div className="available">
            <div className="green-light"></div>
            <p className="is-available">{is_available}</p>
          </div>
          <SocialMedia />
        </section>
      </div>
    </>
  );
};
