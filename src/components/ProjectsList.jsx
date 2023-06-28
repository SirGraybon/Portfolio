import Project from "./Project";
import tweeter from "../assets/tweeter.gif";


import "../styles/ProjectList.css";

function ProjectsList() {
  const projects = [
    { 
      title: "Tweeter", gif: tweeter 
    }
  ];

  return (
    <ul className="project-list">
      {projects.map((project) => {
        return <Project key={project} projectTitle={project.title} gif={project.gif} />;
      })}
    </ul>
  );
}

export default ProjectsList;
