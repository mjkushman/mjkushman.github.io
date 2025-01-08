import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const element = <FontAwesomeIcon icon={faEnvelope} />;
  return (
    <footer className="w-full h-20 bg-red-400">
        <div className="flex flex-row justify-center items-center">

      <div className="w-12">
      Element?: {element}
      </div>
        </div>
    </footer>
  );
};

export default Footer;
