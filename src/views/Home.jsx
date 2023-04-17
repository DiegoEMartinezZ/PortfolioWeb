import React from "react";
import { NavBar } from "../components/navBar/NavBar";
import { Introduction } from "../components/introduction/Introduction";
import { AboutMe } from "../components/aboutMe/AboutMe";
import { Footer } from "../components/footer/Footer";
import { ProjectWrap } from "../components/projectContainer/ProjectWrap";
import { ContactMe } from "../components/contactMe/ContactMe";
import "./home.css";

export const Home = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <NavBar />
        <Introduction />
        <AboutMe />
        <ProjectWrap />
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
};
