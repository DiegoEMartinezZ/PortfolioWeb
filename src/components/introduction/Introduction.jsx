import React from "react";
import "./introduction.css";
export const Introduction = () => {
  return (
    <>
      <header className="description-container">
        <main className="description">
          <h5 className="my_name_is">Mi nombre es</h5>
          <h1 className="name">Diego Martínez</h1>
          <p className="activities">
            Soy{" "}
            <em>
              desarrollador frontend, diseñador gráfico e ilustrador digital.{" "}
            </em>
            <br />
            <br />
            Me especializo en realizar productos llamativos, funcionales e
            interactivos para crear{" "}
            <em> experiencias digitales excepcionales. </em>
          </p>
        </main>
      </header>
    </>
  );
};
