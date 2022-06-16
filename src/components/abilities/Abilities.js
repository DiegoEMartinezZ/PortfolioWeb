import React from "react";
import {
  faCircleCheck,
  faLaptop,
  faPalette,
  faWandSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { AbilitiesSection } from "./AbilitiesSection";

export const Abilities = () => {
  return (
    <div className="abilities-container">
      {/*Parte de habilidades que tengo como desarrollador/ lo que puedo aportar*/}
      <section className="abilities">
        <AbilitiesSection
          icon={faLaptop}
          title="Responsive"
          description="  Each one of my apps can be use in all kind of devices regardless of
          his size. From big to small devices."
        />

        <AbilitiesSection
          icon={faCircleCheck}
          title="Effective"
          description="Achieved his objective to solve a problem that the user has in a
          quick and efficient way."
        />

        <AbilitiesSection
          icon={faWandSparkles}
          title="Innovate"
          description="Excellent interaction with the users. UX/UI design."
        />

        <AbilitiesSection
          icon={faPalette}
          title="Good-Looking "
          description="Great combination of colors creating a more familiar experience."
        />
      </section>
    </div>
  );
};
