import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import SectionsPortfolio from "../UI/texts/SectionsPortfolio";
import ListEducation from "../UI/texts/ListEducation";

const Studies = () => {
  return (
    <>
      <SectionsPortfolio title={"Education"} icon={faBuildingColumns} />
      <ul className="text-center mx-10">
        <ListEducation
          name={"Code Your Future By Globant University"}
          rol={"Scholarship Java Developer"}
          time={"Aug 2024 - May 2025"}
        />
        <ListEducation
          name={"Digital House"}
          rol={"Fullstack Developer"}
          time={"Jun 2021 - Jan 2022"}
        />
        <ListEducation
          name={"Universidad Jorge Tadeo Lozano"}
          rol={"Graphic Designer"}
          time={"Jan 2011 - Mar 2016"}
        />
      </ul>
    </>
  );
};

export default Studies;
