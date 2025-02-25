import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import SectionsPortfolio from "../UI/texts/SectionsPortfolio";
import ListKnowledge from "../UI/texts/ListKnowledge";

const Experience = () => {
  return (
    <>
      <section className="m-auto my-24 mx-4 xl:mx-72">
        <SectionsPortfolio title={"Experience"} icon={faBriefcase} />
        <div className="text-white text-center font-base lg:grid lg:grid-cols-1 lg:mx-44">
          <ListKnowledge
            name={"Inked Atlas"}
            date={"Feb 2024 - Currently"}
            rol={"Frontend Developer / Digital Designer"}
            description={
              "Built an inventory web page for the products available in the store using React and Tailwind. Tracking customers with MySQL data that have already purchased any of the products in order to send news, discounts and relevant information from the store. "
            }
          />
          <ListKnowledge
            name={"DAI | Colombia Partners for Transparency Project (PfT)"}
            date={"Aug 2023 - Nov 2023"}
            rol={"Communication Specialist | Data Analyst"}
            description={
              "I was able to create reports that communicated the current situation of the company and future improvements to keep growing. Developed digital graphic pieces and I was in charge of building and managing the different social networks of the organization."
            }
          />
          <ListKnowledge
            name={"Misión de Observación - MOE"}
            date={"Feb 2018 - Jun 2020 | Feb 2022 - Dec 2022"}
            rol={"Digital Designer | Frontend Developer | Data Analyst"}
            description={
              "Collaborating with other organizations to show the most relevant data for the 2018 and 2022 elections. Develop both printed and digital graphic pieces based on the most significant and eye-catching data to communicate the results of the organization's various research projects."
            }
          />
        </div>
      </section>
    </>
  );
};

export default Experience;
