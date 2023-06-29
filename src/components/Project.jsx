import "../styles/Project.css";

function Project(props) {
  const { projectTitle, gif, projectDescription } = props;

  return (
    <div className="project">
      <img className="gif" src={gif} />
      <div className="coverTitle">

      <h3 className="title" >{projectTitle}</h3>
      <p >{projectDescription}</p>
      </div>
    </div>
  );
}

export default Project;
