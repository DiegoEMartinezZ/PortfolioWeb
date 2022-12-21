import React from 'react';
import { ContactUs } from '../contactUs/ContactUs';
import '../form/form.css';

export const Form = () => {
  return (
    <>
      <section className="contactUs-container">
        <form className="form-container">
          <h2> Deja tus datos </h2>
          <label> Nombre: </label>
          <br />
          <input type="text" placeholder="Tu nombre ..." />
          <br />
          <label> Email: </label>
          <br />
          <input type="email" placeholder="tucorreo@gmail.com ..." />
          <br />
          <label> Mensaje: </label>
          <br />
          <textarea name="comment">Escribe tu comentario ... </textarea>
          <br />
          <button> Enviar </button>
        </form>
        <ContactUs />
      </section>
    </>
  );
};
