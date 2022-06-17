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
          title="Responsivo"
          description="Cada una de las aplicaciones que realizo pueden ser vistas desde pequeños a grandes dispositivos"
        />

        <AbilitiesSection
          icon={faCircleCheck}
          title="Efectiva"
          description="Logran el objetivo por el cual fueron diseñadas, llevando al usuario por una ruta clara e intuitiva"
        />

        <AbilitiesSection
          icon={faWandSparkles}
          title="Innovador"
          description="Excelente interacción con el ususario. Diseño UI/UX"
        />

        <AbilitiesSection
          icon={faPalette}
          title="Llamativo"
          description="Gran combinación de colores que crean una experiencia agradable"
        />
      </section>
    </div>
  );
};
