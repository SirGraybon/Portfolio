//IMPORTs

//REACT
import React, { useEffect, useState } from "react";

//STYLEs
import "./styles/App.css";

//COMPONENTs
import Navbar from "./components/Navbar";
import ProjectsPage from "./components/ProjectsPage";
import About from "./components/About";
import SkillsList from "./components/SkillsList";

//APP DECLARATION
function App() {

  const [width, setWidth] = useState(window.innerWidth)

  //HELPER FUNCTIONs
 

  addEventListener("resize", (event) => {setWidth(window.innerWidth)});

  //RETURN
  return (
    <>
      <div className="container">
        {width > 900 && <Navbar  />}
        <div className="content">
        {width}
          <About  />
          <SkillsList/>
          <ProjectsPage />

        </div>
      </div>
    </>
  );
}

export default App;
