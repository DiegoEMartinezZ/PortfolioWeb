import { faComputer, faDatabase } from "@fortawesome/free-solid-svg-icons";
import SectionsPortfolio from "../UI/texts/SectionsPortfolio";
import IconProject from "../UI/buttons/IconProject";
import { faCss, faReact } from "@fortawesome/free-brands-svg-icons";
import Paragraph from "../UI/texts/Paragraph";
import IconSkills from "../UI/buttons/IconSkills";
import LinksProjects from "../UI/containers/LinksProjects";

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
                  "The Color Crafter allows the user to choose a color and automatically generates different color palettes so that the user can choose the one that works best for him. Select the color from a generic color palette or with the hexadecimal value of the color. Allow to copy and paste the different colors from the palette or a specific color."
                }
              />
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
                  "Music Weather allows the user to select a country* and then one of the cities in that country, when this information is selected a play button will appear, which will bring the weather information of the city. Ideal tool for the general public, travelers/tourists, event organizers and people interested in technology and data."
                }
              />
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
