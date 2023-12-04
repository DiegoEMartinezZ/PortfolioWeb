import React from "react";
import Experience from "../experience/Experience";
import english from "../../resources/languages/english.json";

export const AboutMe = () => {
  const { aboutMe } = english[1];

  return (
    <>
      <div id="about">
        <section className="description-container">
          <h1 className="subtitle">{aboutMe.title}</h1>
          <p className="txt">
            {aboutMe.txt[0]}
            <em> {aboutMe.txt[1]}</em>
          </p>
          <Experience />
        </section>
      </div>
    </>
  );
};
