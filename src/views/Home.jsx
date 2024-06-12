import React from "react";
import { NavBar } from "../components/navBar/NavBar";
import { Footer } from "../components/footer/Footer";
import { Introduction } from "../components/introduction/Introduction";
import { ProjectWrap } from "../components/project/ProjectWrap";
import Experience from "../components/experience/Experience";
import CallToAction from "../components/callToAction/CallToAction";

export const Home = () => {
  return (
    <>
      <NavBar />
      <Introduction />
      <ProjectWrap />
      <CallToAction />
      <Experience />
      <Footer />
    </>
  );
};
