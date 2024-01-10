import "../../styles/styles.css";
import React, { useContext } from "react";
import Experience from "../experience/Experience";
import { languageContext } from "../../App";

export const AboutMe = () => {
  const { language } = useContext(languageContext);
  const { aboutMe } = language[1];
  const { title, txt } = aboutMe;

  return (
    <>
      <div id="about">
        <section className="description-container">
          <h1 className="subtitle">{title}</h1>
          <p className="txt">
            {txt[0]}
            <em> {txt[1]}</em>
          </p>
          <Experience />
        </section>
      </div>
    </>
  );
};
