import React from "react";
import { NavBar } from "../components/navBar/NavBar";
import { Footer } from "../components/footer/Footer";
import MainContent from "../components/mainContent/MainContent";

export const Home = () => {
  return (
    <>
      <NavBar />
      <MainContent />
      <Footer />
    </>
  );
};
