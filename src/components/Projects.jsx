import {
  faCheckCircle,
  faComputer,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import SectionsPortfolio from "../UI/texts/SectionsPortfolio";
import IconProject from "../UI/buttons/IconProject";
import { faCss, faReact } from "@fortawesome/free-brands-svg-icons";
import Paragraph from "../UI/texts/Paragraph";
import IconSkills from "../UI/buttons/IconSkills";
import LinksProjects from "../UI/containers/LinksProjects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  return (
    <>
      <div className="mx-10">
        <SectionsPortfolio title={"Projects"} icon={faComputer} />
        <ul className="text-white font-base md:grid md:grid-cols-2 lg:mx-24">
          <li className="mb-14">
            <IconProject text={"The Color Crafter"} />
            <div className="grid grid-cols-3 w-fit mx-auto items-center justify-center">
              <IconSkills text={"React"} icon={faReact} />
              <IconSkills text={"Tailwind"} icon={faCss} />
              <IconSkills text={"ColorAPI"} icon={faDatabase} />
            </div>
            <section className="text-center">
              <Paragraph
                text={
                  "The Color Crafter allows the user to select a color or select randomly, creating different color ranges as well as the possibility to change the color palette according to the user's needs. Perfect tool for graphic designers, UI designers, illustrators and developers."
                }
              />
              <ul className="text-left text-sm my-6 mx-6 sm:mx-24">
                <h1 className="text-left my-3 font-bold">Main Features</h1>
                <section className="text-xs text-left">
                  <li className="mb-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />
                    Easy to use thanks to its modern interface
                  </li>
                  <li className="mb-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />
                    Ability to copy colors with just one click
                  </li>
                  <li className="mb-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />
                    Implementation of your colors with examples in real time
                  </li>
                </section>
              </ul>

              <LinksProjects
                gitHub={"https://github.com/DiegoEMartinezZ/colorCrafter"}
                website={"https://thecolorcrafter.netlify.app/"}
              />
            </section>
          </li>
          <li className="mb-14">
            <IconProject text={"Music Weather 1.0"} />
            <div className="grid grid-cols-3 w-fit mx-auto items-center justify-center">
              <IconSkills text={"React"} icon={faReact} />
              <IconSkills text={"Tailwind"} icon={faCss} />
              <IconSkills text={"API"} icon={faDatabase} />
            </div>
            <section className="text-center">
              <Paragraph
                text={
                  "Music Weather allows the user to select a country and then one of the cities in that country, when this information is selected a play button will appear, which will bring the weather information of the city. Ideal tool for the general public, travelers/tourists, event organizers and people interested in technology and data."
                }
              />
              <ul className="text-left text-sm my-6 mx-6 sm:mx-24">
                <h1 className="text-left my-3 font-bold">Main Features</h1>
                <section className="text-xs text-left">
                  <li className="mb-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />
                    Visually appealing. Simple and easy to understand data
                    display.
                  </li>
                  <li className="mb-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />
                    Save/Delete cities of interest in "Favorite Cities" allowing
                    you to consult these cities quickly, without having to
                    resend the search request.
                  </li>
                  <li className="mb-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />
                    Easy to use thanks to its modern interface.
                  </li>
                </section>
              </ul>
              <LinksProjects
                gitHub={"https://github.com/DiegoEMartinezZ/musicWeather"}
                website={"https://weather-frontend-4fv5.onrender.com/"}
              />
            </section>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Projects;
