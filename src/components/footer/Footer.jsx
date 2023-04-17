import React from "react";
import "../footer/footer.css";
import { SocialMedia } from "../../resources/socialmedia/SocialMedia";

export const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <SocialMedia />
        <h5> &copy; Diego Martínez - 2023 </h5>
      </footer>
    </>
  );
};
