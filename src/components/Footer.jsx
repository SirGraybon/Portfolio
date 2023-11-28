import "../styles/footer.css";
import gitHubLogo from "../assets/github-mark.png";
import linkedInLogo from "../assets/linkedin-logo-png-2026.png";
import emailLogo from "../assets/mail-142.png";
import figmaLogo from "../assets/figma.png";


const Footer =() => {
  return(
    <div className="footer_nav_grouping">
    <a
      target="_blank"
      href="https://github.com/SirGraybon"
      className="footer_contactLink"
    >
      <div className="footer_contactGroup">
        <img className="footer_contactLogo" src={gitHubLogo} />
        <p className="footer_contactLabel">GitHub</p>
      </div>
      <div>
        <p className="footer_contactLabel"> </p>
      </div>
    </a>
    <a
      target="_blank"
      href="https://www.linkedin.com/in/graydonritchie/"
      className="contactLink"
    >
      <div className="footer_contactGroup">
        <img className="footer_contactLogo" src={linkedInLogo} />
        <p className="footer_contactLabel">LinkedIn</p>
      </div>
      <div>
        <p className="footer_contactLabel"> </p>
      </div>
    </a>
    <a
      target="_blank"
      href="mailto:graydonritchie@gmail.com"
      className="footer_contactLink"
    >
      <div className="footer_contactGroup">
        <img className="footer_contactLogo" src={emailLogo} />
        <p className="footer_contactLabel">Email me</p>
      </div>
      <div>
        <p className="footer_contactLabel"> </p>
      </div>
    </a>
    <a
      target="_blank"
      href="https://flowcv.com/resume/p3iowipl9s"
      className="footer_contactLink"
    >
      <div className="footer_contactGroup">
        <img className="footer_contactLogo" src={figmaLogo} />
        <p className="footer_contactLabel">Resume</p>
      </div>
      <div>
        <p className="footer_contactLabel"> </p>
      </div>
    </a>
  </div>
  )
}

export default Footer