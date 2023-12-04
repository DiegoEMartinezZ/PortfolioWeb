import "../../styles/styles.css";
import React, { useContext } from "react";
import { languageContext } from "../../App";
import english from "../../resources/languages/english.json";

export const Introduction = () => {
  const { language } = useContext(languageContext);
  console.log(language);

  const { introduction } = english[0];

  return (
    <>
      <main id="introduction">
        <section className="description-container">
          <h5 className="subtitle">{introduction.title}</h5>
          <h1 className="title">{introduction.name}</h1>
          <p className="txt">
            {introduction.txt[0]}
            <br />
            <em>{introduction.txt[1]} </em>
          </p>
        </section>
      </main>
    </>
  );
};
