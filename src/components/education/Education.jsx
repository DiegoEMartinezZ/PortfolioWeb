import React, { useContext } from "react";
import { languageContext } from "../../App";

const Education = () => {
  const { language } = useContext(languageContext);
  const { education } = language[6];
  const { title, description } = education;
  return (
    <>
      <section className="description-container">
        <h1 className="subtitle">{title}</h1>
        <ul>
          {description.map((edu, idx) => {
            return (
              <li key={idx} className="exp-info">
                <h1 className="exp-date">{edu.date}</h1>
                <h4 className="exp-rol">{edu.rol}</h4>
                <h1 className="exp-name">{edu.name}</h1>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Education;
