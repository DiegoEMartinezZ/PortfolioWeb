import { faGithub } from "@fortawesome/free-brands-svg-icons";
import IconNav from "../buttons/IconNav";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const LinksProjects = ({ gitHub, website }) => {
  return (
    <>
      <ul className="flex justify-center pb-4">
        <IconNav icon={faGithub} url={gitHub} />
        <IconNav icon={faLaptopCode} url={website} />
      </ul>
    </>
  );
};

export default LinksProjects;
