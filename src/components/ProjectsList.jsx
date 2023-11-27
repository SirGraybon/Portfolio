import React from "react";
import Project from "./Project";

import "../styles/ProjectList.css";

const ProjectsList = (props) => {
  const data = props.data;

  return (
    <>     <div className="header">{props.headline}</div>

      <ul className="project-list">
        {props.data.map((project) => {
          return (
            <Project
              key={project}
              projectTitle={project.title}
              projectDescription={project.description}
              gif={project.gif}
              url={project.url}
            />
          );
        })}
      </ul>
    </>
  );
};

export default ProjectsList;
