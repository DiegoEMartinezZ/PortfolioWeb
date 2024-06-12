import React, { useContext } from "react";
import { languageContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const CallToAction = () => {
  const { language } = useContext(languageContext);
  const { call_to_action } = language[5];
  const { title, txt } = call_to_action;
  return (
    <>
      <section className="description-container">
        <div className="cta-txts-wrap">
          <div>
            <h2 className="cta-title">{title}</h2>
            <p className="cta-txt">{txt}</p>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/in/diegomz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="cta-linkedin-btn">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
