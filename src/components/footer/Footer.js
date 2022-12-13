import React from "react";
import "../footer/footer.css";
import { SocialMedia } from "../../resources/socialmedia/SocialMedia";

export const Footer = () => {
  return (
    <>
      <SocialMedia />
      <footer className="footer-container">
        <h5> &copy; Diego Martínez - 2023 </h5>
      </footer>
    </>
  );
};
