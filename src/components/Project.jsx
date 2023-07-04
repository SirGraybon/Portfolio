import "../styles/Project.css";
import gitHubLogo from "../assets/github-mark.png";

function Project(props) {
  const { projectTitle, gif, projectDescription, url } = props;

  return (
    <a className="project" target="_blank" href={url}>
      <img className="gif" src={gif} />
      <div className="coverTitle">
        <div className="innerCover">
          <h3 className="title">{projectTitle}</h3>
          <img className="contactLogo" src={gitHubLogo} />
        </div>
        <p>{projectDescription}</p>
      </div>
    </a>
  );
}

export default Project;
