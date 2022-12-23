import React from 'react';
import { ContactUs } from '../contactUs/ContactUs';
import '../form/form.css';

export const Form = () => {
  let sendRequest = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="contactUs-container">
        <form className="form-container">
          <h2> Trabajemos juntos </h2>
          <input type="text" placeholder="Nombre completo" />
          <input type="email" placeholder="Email" />
          <textarea name="comment" placeholder="Escribe tu idea"></textarea>
          <button onClick={sendRequest}> Enviar </button>
        </form>
        <ContactUs />
      </section>
    </>
  );
};
