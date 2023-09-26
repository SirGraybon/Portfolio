import Project from "./Project";
import tweeter from "../assets/tweeter.gif";
import quikanik from "../assets/quikanik.gif";
import thinkfast from "../assets/thinkfast.gif";

import "../styles/ProjectList.css";

function ProjectsList() {
  const projects = [
    {
      title: "Tweeter",
      gif: tweeter,
      description:
        "Tweeter is a simple, single-page Twitter clone built using JQuery, AJAX, HTML and CSS. Tweeter allows users to share their thoughts in real time and is presented in a modern minimalist style with tastefull CSS animations and transitions.",
      url: "https://github.com/SirGraybon/tweeter",
    },
    {
      title: "Quik-a-nik",
      gif: quikanik,
      description:
        "Quik-a-nik is a dynamic picnic delivery app developed in React Native for both web and Android simultaniously. Quik-a-nik takes advantage of both the Google maps and stripe payment API's to deliver a coherent e-commerce experience.",
      url: "https://github.com/SirGraybon/quik-a-nik",
    },
    {
      title: "ThinkFast",
      gif: thinkfast,
      description:
        "ThinkFast is a quiz building platform that allows users to craft and share their creations with the world. ThinkFast was built using JavaScript, HTML, CSS, jQuery and AJAX, and powered by Node, Express, postgreSQL in the back-end.",
      url: "https://github.com/SirGraybon/ThinkFast",
    },

  ];

  return (
    <div className="projects">
    <div className="header">Projects</div>
      <ul className="project-list">
        {projects.map((project) => {
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
    </div>
  );
}

export default ProjectsList;
