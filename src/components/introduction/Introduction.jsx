import "../../styles/styles.css";
import React from "react";
export const Introduction = () => {
  return (
    <>
      <main id="introduction">
        <section className="description-container">
          <h5 className="subtitle">My name is </h5>
          <h1 className="title">Diego Martínez</h1>
          <p className="txt">
            I am a fullstack developer and graphic designer.
            <br />I specialize in making {""}
            <em>
              eye-catching, functional and interactive products to create
              exceptional digital experiences.
            </em>
          </p>
        </section>
      </main>
    </>
  );
};
