import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = (): React.ReactNode => {
  const mail = <FontAwesomeIcon icon={faEnvelope} size="xs" />;
  const github = (
    <FontAwesomeIcon icon={faGithub} size="xs" href="https://google.com" />
  );
  const linkedIn = <FontAwesomeIcon icon={faLinkedin} size="xs" />;

  return (
    <footer className="w-full h-20 justify-items-center flex items-center justify-center">
      <div className="flex-col">
        <p >Ask me anything</p>
        <div className="flex flex-row gap-4 items-center">
          <a href="mailto:mikesextras11+portfolio@gmail.com" target="_blank">
            <div className="w-6">{mail}</div>
          </a>
          <a href="https://github.com/mjkushman" target="_blank">
            <div className="w-6">{github}</div>
          </a>
          <a href="https://www.linkedin.com/in/mjkushman/" target="_blank">
            <div className="w-6">{linkedIn}</div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
