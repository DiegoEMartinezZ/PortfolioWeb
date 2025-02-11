import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconSkills = ({ text, icon }) => {
  return (
    <>
      <li className="flex p-1 my-2 mx-1 items-center justify-center bg-teal-300 text-black rounded-lg">
        <FontAwesomeIcon icon={icon} className="px-1" />
        <h4 className="font-base text-xs px-1 cursor-pointer">{text}</h4>
      </li>
    </>
  );
};

export default IconSkills;
