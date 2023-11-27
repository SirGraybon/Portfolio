//IMPORTs

//REACT
import React, { useEffect, useState } from "react";

//STYLEs
import "./styles/App.css";

//COMPONENTs
import Navbar from "./components/Navbar";
import ProjectsPage from "./components/ProjectsPage";
import About from "./components/About";

//APP DECLARATION
function App() {
const [view, setView] = useState("Projects")

//HELPER FUNCTIONs
const viewSwitcher = (payload)=> {
  setView(payload)
}

  //RETURN
  return (
    <>
      <div className="container">
        <Navbar viewSwitcher={viewSwitcher} />
        <div className="content">
          {view === "Projects" && <ProjectsPage />}
          {view === "About" && <About />}
        </div>
      </div>
    </>
  );
}

export default App;
