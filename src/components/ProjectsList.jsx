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
      },
      {
        title: "Quik-a-nik",
        gif: quikanik,
        description:
          "Tweeter is a simple, single-page Twitter clone built using JQuery, AJAX, HTML and CSS. Tweeter allows users to share their thoughts in real time and is presented in a modern minimalist style with tastefull CSS animations and transitions.",
        },
        {
          title: "ThinkFast",
          gif: thinkfast,
          description:
            "Tweeter is a simple, single-page Twitter clone built using JQuery, AJAX, HTML and CSS. Tweeter allows users to share their thoughts in real time and is presented in a modern minimalist style with tastefull CSS animations and transitions.",
    },
    {
      title: "Tweeter",
      gif: tweeter,
      description:
        "Tweeter is a simple, single-page Twitter clone built using JQuery, AJAX, HTML and CSS. Tweeter allows users to share their thoughts in real time and is presented in a modern minimalist style with tastefull CSS animations and transitions.",
      },
      {
        title: "Quik-a-nik",
        gif: quikanik,
        description:
          "Tweeter is a simple, single-page Twitter clone built using JQuery, AJAX, HTML and CSS. Tweeter allows users to share their thoughts in real time and is presented in a modern minimalist style with tastefull CSS animations and transitions.",
        },
        {
          title: "ThinkFast",
          gif: thinkfast,
          description:
            "Tweeter is a simple, single-page Twitter clone built using JQuery, AJAX, HTML and CSS. Tweeter allows users to share their thoughts in real time and is presented in a modern minimalist style with tastefull CSS animations and transitions.",
    },
    {
      title: "Tweeter",
      gif: tweeter,
      description:
        "Tweeter is a simple, single-page Twitter clone built using JQuery, AJAX, HTML and CSS. Tweeter allows users to share their thoughts in real time and is presented in a modern minimalist style with tastefull CSS animations and transitions.",
      },
      {
        title: "Quik-a-nik",
        gif: quikanik,
        description:
          "Tweeter is a simple, single-page Twitter clone built using JQuery, AJAX, HTML and CSS. Tweeter allows users to share their thoughts in real time and is presented in a modern minimalist style with tastefull CSS animations and transitions.",
        },
        {
          title: "ThinkFast",
          gif: thinkfast,
          description:
            "Tweeter is a simple, single-page Twitter clone built using JQuery, AJAX, HTML and CSS. Tweeter allows users to share their thoughts in real time and is presented in a modern minimalist style with tastefull CSS animations and transitions.",
    },
  ];

  return (
    <ul className="project-list">
      {projects.map((project) => {
        return (
          <Project
            key={project}
            projectTitle={project.title}
            projectDescription={project.description}
            gif={project.gif}
          />
        );
      })}
    </ul>
  );
}

export default ProjectsList;
