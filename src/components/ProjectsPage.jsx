import React from "react";
import ProjectsList from "./ProjectsList";
import {completedProjects, currentProjects} from "../data/data.js"









const PojectsPage = ()=> {


  return (
    <div className="projects">
      <ProjectsList data={currentProjects} headline="Current Projects"/>
      <ProjectsList data={completedProjects} headline="Completed Projects"/>
    </div>
  );
}

export default PojectsPage