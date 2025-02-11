import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconNav = ({ icon, url }) => {
  return (
    <>
      <li className=" bg-yellow-200 text-black rounded-lg mx-2">
        <button>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={icon} className="px-3" />
          </a>
        </button>
      </li>
    </>
  );
};

export default IconNav;
