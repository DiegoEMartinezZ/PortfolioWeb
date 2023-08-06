import React from "react";
import { AboutMe } from "../aboutMe/AboutMe";
import { Introduction } from "../introduction/Introduction";
import { ProjectWrap } from "../project/ProjectWrap";

const MainContent = () => {
  return (
    <>
      <Introduction />
      <AboutMe />
      <ProjectWrap />
    </>
  );
};

export default MainContent;
