import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SectionsPortfolio = ({ title, icon }) => {
  return (
    <>
      <h1 className="text-white text-center text-lg font-bold mt-12 py-6 md:text-xl lg:text-2xl">
        <FontAwesomeIcon icon={icon} className="mr-2 text-teal-300" />
        {title}
      </h1>
    </>
  );
};

export default SectionsPortfolio;
