import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import { languageContext } from "../../App";

import "../expSlider/expSlider.css";

export const ExpSlider = ({ workExperienceHandler }) => {
  const { language } = useContext(languageContext);
  const { experience } = language[3];
  const [idxSlider, setIdxSlider] = useState(0);
  const { id, name, position, years, txt, tasks } = experience[idxSlider];

  return (
    <div className="exp-container" onClick={workExperienceHandler}>
      <li key={id} className="exp-slider">
        <h1 className="exp-title"> {name} </h1>
        <h5 className="exp-position"> {position} </h5>
        <h5 className="exp-years"> {years} </h5>
        <br />
        <p className="exp-txt"> {txt} </p>
        <ul>
          {tasks.map((task, idx) => {
            return (
              <li key={idx} className="exp-tasks-container">
                <p className="exp-task">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="exp-check-task"
                  />{" "}
                  {""}
                  {task}
                </p>{" "}
              </li>
            );
          })}
        </ul>
        <br />
      </li>
      <section className="exp-btn-container">
        <button
          onClick={() => idxSlider > 0 && setIdxSlider(idxSlider - 1)}
          className="exp-btn"
        >
          <FontAwesomeIcon icon={faCaretLeft} />
        </button>
        <button
          onClick={() =>
            idxSlider < experience.length - 1 && setIdxSlider(idxSlider + 1)
          }
          className="exp-btn"
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </button>
      </section>
    </div>
  );
};
