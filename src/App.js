//IMPORTs

//REACT
import { useState } from "react";

//STYLEs
import "./styles/App.css";

//COMPONENTs
import Navbar from "./components/Navbar";
import ProjectsList from "./components/ProjectsList";

//APP DECLARATION
function App() {
  //RETURN
  return (
    <>
    <div className="container">
    <div className="content">
      <Navbar />
      <div className="body">
        <ProjectsList/>
      </div>
    </div>
    </div>
    </>
  );
}

export default App;
