import {
  faBehance,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import SocialMediaBtns from "./SocialMediaBtns";

const SectionSocialMedia = () => {
  return (
    <>
      <section className="flex w-auto items-center justify-center">
        <SocialMediaBtns
          icon={faGithub}
          url={"https://github.com/DiegoEMartinezZ"}
        />
        <SocialMediaBtns
          icon={faLinkedin}
          url={"https://www.linkedin.com/in/diegomz/"}
        />
        <SocialMediaBtns
          icon={faBehance}
          url={"https://www.behance.net/lowoncyan_"}
        />
      </section>
    </>
  );
};

export default SectionSocialMedia;
