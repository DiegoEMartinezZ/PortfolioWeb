import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconText = ({ text, icon }) => {
  return (
    <>
      <h4 className="font-base text-sm mb-5">
        <FontAwesomeIcon icon={icon} className="pr-1 text-teal-300" /> {text}
      </h4>
    </>
  );
};

export default IconText;
