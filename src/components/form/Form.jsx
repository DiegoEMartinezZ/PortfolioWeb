import "../../styles/styles.css";
import React, { useContext } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import emailjs from "@emailjs/browser";
import { languageContext } from "../../App";

const Form = () => {
  const { language } = useContext(languageContext);
  const { form } = language[7];
  const { title, email, msg, btn, labelEmail, labelTextarea } = form;

  const randomID = uuidv4();
  const [formData, setformData] = useState({
    id: randomID,
    email: "",
    message: "",
  });

  const formDataHandler = (e) => {
    const { name, value } = e.target;
    setformData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    if (formData.email && formData.message === !null) {
      e.preventDefault();

      // Send to the google Sheet data base

      const dataBaseURL =
        "https://script.google.com/macros/s/AKfycbwZ8KhnwvDO_Tub4p_eAF1qefUObMBxDZU4M_AAo35TgxcifBwH8oZbk2B2VRgn8lQT/exec";
      const formFinal = document.querySelector("form");
      const formInfo = new FormData(formFinal);

      fetch(dataBaseURL, {
        method: "POST",
        body: formInfo,
      });

      // EmailJs, service Id, template ID , public Key

      const serviceId = "service_ssquvgn";
      const templateId = "template_ahzq2v9";
      const publicKey = "n8h3fQNz_5V3LUjEH";

      // New object that contains dynamic template params

      const templateParams = {
        to_name: "Diego Martínez",
        from_email: formData.email,
        message: formData.message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("Send", response);
          setformData({
            id: randomID,
            email: "",
            message: "",
          });
        })
        .catch((error) => {
          console.error("Error", error);
        });
    }
  };

  return (
    <div className="form-container" id="form">
      <h3 className="title-form"> {title} </h3>
      <form onSubmit={submitHandler}>
        <br />
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={formDataHandler}
          className="id-novisible"
        />
        <label className="label-form"> {labelEmail} </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder={email}
          value={formData.email}
          onChange={formDataHandler}
        />
        <br />

        <br />
        <label className="label-form"> {labelTextarea} </label>

        <textarea
          id="message"
          name="message"
          placeholder={msg}
          value={formData.message}
          onChange={formDataHandler}
        ></textarea>

        <br />
        <button type="submit" className="btn-submit">
          {btn}
        </button>
      </form>
    </div>
  );
};
export default Form;
