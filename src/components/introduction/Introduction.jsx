import "../../styles/styles.css";
import React from "react";
export const Introduction = () => {
  return (
    <>
      <main id="introduction">
        <section className="description-container">
          <h5 className="subtitle">Mi nombre es</h5>
          <h1 className="title">Diego Martínez</h1>
          <p className="txt">
            Soy <em>desarrollador fullstack y diseñador gráfico. </em>
            Me especializo en realizar productos llamativos, funcionales e
            interactivos para crear{" "}
            <em> experiencias digitales excepcionales. </em>
          </p>
        </section>
      </main>
    </>
  );
};
