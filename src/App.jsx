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
import Footer from "./components/Footer";

//APP DECLARATION
function App() {

  const [width, setWidth] = useState(window.innerWidth)

  //HELPER FUNCTIONs
 

  addEventListener("resize", (event) => {setWidth(window.innerWidth)});

  //RETURN
  return (
    <>
      <div className="container">
        {width > 1000 && <Navbar  />}
        <div className="content">
        <div className="header">{width < 1000 && "Graydon Ritchie"} </div>
          <About  />
          <SkillsList/>
          <ProjectsPage />
          {width < 1000 && <Footer/>}
          

        </div>
      </div>
    </>
  );
}

export default App;
