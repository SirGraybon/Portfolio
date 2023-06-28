import "../styles/Project.css";

function Project(props) {
  const { projectTitle, gif } = props;

  return (
    <div className="project">
      <img src={gif} />
      <h1>{projectTitle}</h1>
    </div>
  );
}

export default Project;
