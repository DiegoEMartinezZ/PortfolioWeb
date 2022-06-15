import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faLaptop,
  faWandSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { faTeamspeak } from "@fortawesome/free-brands-svg-icons";

export const About = () => {
  return (
    <div className="about-container" id="about">
      <section className="about">
        <br />
        <h1 className="section-title"> About </h1>
        <div className="space"> </div>

        {/*Parte de foto mia + descripcion*/}
        <section className="about-description">
          <h2 className="about-title"> Hello World! </h2>
          <p className="about-info">
            My name is Diego Martínez, I'm a Full-stack Developer from Bogotá -
            Colombia. I have experience in graphic design, character design,
            branding and advertising creatives. Passionate on creating
            intuitive, responsive and good looking user experiences through
            website development.
            <br />
            <br />
            Feel free to take a look at my lates{" "}
            <a href="#projects"> projects. </a>
          </p>
        </section>

        {/*Parte de habilidades que tengo como desarrollador/ lo que puedo aportar*/}
        <section className="abilities">
          <article className="ability-container">
            <FontAwesomeIcon icon={faLaptop} className="abilitiesIcon" />
            <h2 className="ability-title"> Responsive </h2>
            <p className="ability-description">
              Each app can be used in big and small devices. From PC to
              smartphones.
            </p>
          </article>

          <article className="ability-container">
            <FontAwesomeIcon icon={faCircleCheck} className="abilitiesIcon" />
            <h2 className="ability-title"> Effective </h2>
            <p className="ability-description">
              Achieve his objective to solve a problem that the user has in a
              quick and efficient way.
            </p>
          </article>

          <article className="ability-container">
            <FontAwesomeIcon icon={faWandSparkles} className="abilitiesIcon" />
            <h2 className="ability-title"> Innovate </h2>
            <p className="ability-description">
              New apps that seek to be more interactives with the user who is
              using it.
            </p>
          </article>

          <article className="ability-container">
            <FontAwesomeIcon icon={faTeamspeak} className="abilitiesIcon" />
            <h2 className="ability-title"> Teamwork </h2>
            <p className="ability-description">
              New apps that seek to be more interactives with the user who is
              using it.
            </p>
          </article>
        </section>
      </section>
    </div>
  );
};
