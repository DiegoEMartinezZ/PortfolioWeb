import { faJava, faReact } from "@fortawesome/free-brands-svg-icons";
import IconSkills from "../UI/buttons/IconSkills";
import SectionsPortfolio from "../UI/texts/SectionsPortfolio";
import {
  faDatabase,
  faLaptop,
  faLaptopCode,
  faPenClip,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <>
      <section className="m-auto my-8">
        <SectionsPortfolio title={"Skills"} icon={faLaptopCode} />
        <div className="grid grid-cols-2 m-auto w-fit md:grid-cols-6">
          <IconSkills text={"React"} icon={faReact} />
          <IconSkills text={"Java"} icon={faJava} />
          <IconSkills text={"MySQL"} icon={faDatabase} />
          <IconSkills text={"Figma"} icon={faPenNib} />
          <IconSkills text={"Illustrator"} icon={faLaptop} />
          <IconSkills text={"Photoshop"} icon={faPenClip} />
        </div>
      </section>
    </>
  );
};
export default Skills;
