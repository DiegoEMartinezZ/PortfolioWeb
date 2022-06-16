import React from "react";
import { Abilities } from "../abilities/Abilities";

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
          <p className="info">
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
        <Abilities />
      </section>
    </div>
  );
};
