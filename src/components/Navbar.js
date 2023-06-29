//IMPORTs
import "../styles/Navbar.css";
import gitHubLogo from "../assets/github-mark.png";
import linkedInLogo from "../assets/linkedin-logo-png-2026.png";
import emailLogo from "../assets/mail-142.png";
import figmaLogo from "../assets/figma.png";

//COMPONENT DEFINITION
function Navbar() {
  //RETURN STATEMENT
  return (
    <div className="navbar">
      <h2>Graydon Ritchie</h2>
      <p className="about">
        A full-stack developer with a strong foundation in human resources,
        equipped with comprehensive skills in web development and a passion for
        creating innovative digital solutions. Combines technical expertise with
        a solid understanding of HR & business principles to deliver
        user-centric and efficient web applications.
      </p>
      <a target="_blank" href="https://github.com/SirGraybon" className="contactLink">
        <div className="contactGroup">
          <img className="contactLogo" src={gitHubLogo} />
          <p className="contactLabel">GitHub</p>
        </div>
        <div>
          <p className="contactLabel"> > </p>
        </div>
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/graydonritchie/" className="contactLink">
        <div className="contactGroup">
          <img className="contactLogo" src={linkedInLogo} />
          <p className="contactLabel">LinkedIn</p>
        </div>
        <div>
          <p className="contactLabel"> > </p>
        </div>
      </a>
      <a target="_blank" href="mailto:graydonritchie@gmail.com" className="contactLink">
        <div className="contactGroup">
          <img className="contactLogo" src={emailLogo} />
          <p className="contactLabel">Email me</p>
        </div>
        <div>
          <p className="contactLabel"> > </p>
        </div>
      </a>
      <a target="_blank" href="https://flowcv.com/resume/p3iowipl9s" className="contactLink">
        <div className="contactGroup">
          <img className="contactLogo" src={figmaLogo} />
          <p className="contactLabel">Resume</p>
        </div>
        <div>
          <p className="contactLabel"> > </p>
        </div>
      </a>
    </div>
  );
}

export default Navbar;
