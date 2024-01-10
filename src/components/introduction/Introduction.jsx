import React, { useContext } from "react";
import { languageContext } from "../../App";
import { SocialMedia } from "../../resources/socialmedia/SocialMedia";

export const Introduction = () => {
  const { language } = useContext(languageContext);
  const { introduction } = language[0];
  const { title, name, txt } = introduction;
  return (
    <>
      <div id="introduction">
        <section className="description-container">
          <h5 className="subtitle">{title}</h5>
          <h1 className="title">{name}</h1>
          <p className="txt">
            {txt[0]}
            <br />
            <em>{txt[1]} </em>
          </p>
          <SocialMedia />
        </section>
        <div id="about"></div>
      </div>
    </>
  );
};
