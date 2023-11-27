import React, { useContext } from "react";
import Experience from "../experience/Experience";
import { languageContext } from "../../App";

export const AboutMe = () => {
  const { language, languageHandler } = useContext(languageContext);
  console.log(language);
  return (
    <>
      <div id="about">
        <section className="description-container">
          <h1 className="subtitle" onClick={languageHandler}>
            {" "}
            About me{" "}
          </h1>
          <p className="txt">
            I am from Bogotá, Colombia. Fullstack developer, graphic designer
            and digital artist. Motivated, attentive to detail, good team player
            and always ready to create engaging, functional and interactive
            digital experiences. Skills in Adobe Suite, HTML, CSS, JavaScript
            and APIs.
            <em>
              {" "}
              I am currently improving my knowledge in React and React Native to
              improve my projects.
            </em>
          </p>
          <Experience />
        </section>
      </div>
    </>
  );
};
