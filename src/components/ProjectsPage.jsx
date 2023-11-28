import React from "react";
import ProjectsList from "./ProjectsList";
import {completedProjects, currentProjects} from "../data/data.js"
import "../styles/ProjectList.css"









const PojectsPage = ()=> {


  return (
    <div id="projects" className="projects">
      <ProjectsList data={currentProjects} headline="Current projects"/>
      <ProjectsList data={completedProjects} headline="Completed projects"/>
    </div>
  );
}

export default PojectsPage