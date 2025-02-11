import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMediaBtns = ({ icon, url }) => {
  return (
    <>
      <li className="mr-2 px-2 bg-teal-300 text-black rounded-lg">
        <button>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={icon} className="px-1" />
          </a>
        </button>
      </li>
    </>
  );
};

export default SocialMediaBtns;
