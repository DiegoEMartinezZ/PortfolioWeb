import React, { useContext } from "react";
import { languageContext } from "../../App";

const Experience = () => {
  const { language } = useContext(languageContext);
  const { work_experience } = language[2];
  const { title, description } = work_experience;
  return (
    <>
      <section className="description-container">
        <h1 className="subtitle">{title}</h1>
        <ul>
          {description.map((exp, idx) => {
            return (
              <li key={idx} className="exp-info">
                <h1 className="exp-date">{exp.date}</h1>
                <h4 className="exp-rol">{exp.rol}</h4>
                <h1 className="exp-name">{exp.name}</h1>
                <p className="exp-txt">{exp.txt}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Experience;
