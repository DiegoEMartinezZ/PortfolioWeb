import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import experience from "../experience/experience.json";
import "../expSlider/expSlider.css";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

export const ExpSlider = () => {
  const [idxSlider, setIdxSlider] = useState(0);
  const { id, name, position, years, txt, tasks } = experience[idxSlider];
  return (
    <div>
      <li key={id} className="exp-slider">
        <h1 className="exp-title"> {name} </h1>
        <h5 className="exp-position"> {position} </h5>
        <h5 className="exp-years"> {years} </h5>
        <br />
        <p className="exp-txt"> {txt} </p>
        <ul>
          <h4 className="exp-task"> Roles: </h4>

          {tasks.map((task, idx) => {
            return (
              <li key={idx} className="exp-tasks-container">
                <p className="exp-task">
                  <FontAwesomeIcon icon={faCircleCheck} /> {""}
                  {task}
                </p>{" "}
              </li>
            );
          })}
        </ul>
        <br />
      </li>

      <button onClick={() => idxSlider > 0 && setIdxSlider(idxSlider - 1)}>
        {" "}
        izquierda{" "}
      </button>
      <button
        onClick={() =>
          idxSlider < experience.length - 1 && setIdxSlider(idxSlider + 1)
        }
      >
        {" "}
        derecha{" "}
      </button>
    </div>
  );
};
