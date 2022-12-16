import React from 'react';

export const ProjectBox = ({ titleProject, imageProject }) => {
  return (
    <>
      <section className="project-container">
        <h3> {titleProject} </h3>
        <img src={imageProject} alt="example" className="project-img" />
        <div className="buttons-container">
          <button className="button-code"> Código </button>
          <button className="button-preview"> Preview </button>
          <button className="button-github"> GitHub </button>
        </div>
      </section>
    </>
  );
};
