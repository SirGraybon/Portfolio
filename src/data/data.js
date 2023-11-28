import tweeter from "../assets/tweeter.gif";
import quikanik from "../assets/quikanik.gif";
import thinkfast from "../assets/thinkfast.gif";
import black_jack from "../assets/black_jack.png";
import dream_studio from "../assets/Dream_studio.jpg";

import CSS from "../assets/logos/CSS.png";
import express from "../assets/logos/express.png";
import git from "../assets/logos/git.png";
import HTML from "../assets/logos/HTML.png";
import JavaScript from "../assets/logos/JavaScript.png";
import JQuery from "../assets/logos/JQUERY.png";
import Node from "../assets/logos/node.png";
import React from "../assets/logos/React.png";
import ruby from "../assets/logos/ruby.png";
import SQL from "../assets/logos/SQL.png";
import TypeScript from "../assets/logos/typescript.png";
import vite from "../assets/logos/vite.png";
import openai from "../assets/logos/openai.png";



export const completedProjects = [
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

  {
    title: "Tweeter",
    gif: tweeter,
    description:
      "Tweeter is a simple, single-page Twitter clone built using JQuery, AJAX, HTML and CSS. Tweeter allows users to share their thoughts in real time and is presented in a modern minimalist style with tastefull CSS animations and transitions.",
    url: "https://github.com/SirGraybon/tweeter",
  }
  
];
export const currentProjects = [


  {
    title: "dream_studio (in progress) ",
    gif: dream_studio,
    description:
    "Dream_studio takes advantage of the openAI api to bring your dreams to life with stunning AI-generated imagery. ",
    url: "https://github.com/SirGraybon/dream_studio",
  },
  {
    title: "Black-Jack-Attack (in progress) ",
    gif: black_jack,
    description:
    "Black-Jack-Attack is a simple 1v1 multiplayer card game. This project was taken on as an opportunity to learn about web sockets and animations.",
    url: "https://github.com/SirGraybon/black_jack_attack",
  }

  
];

export const skills = [
  { label: "JavaScript", logo:  JavaScript  },
  { label: "TypeScript", logo:  TypeScript  },
  { label: "OpenAI", logo:  openai },
  { label: "SQL", logo:  SQL },
  { label: "HTML", logo:  HTML  },
  { label: "NodeJS", logo:  Node  },
  { label: "CSS", logo:  CSS  },
  { label: "Ruby on Rails", logo:  ruby  },
  { label: "git", logo:  git  },
  { label: "React", logo:  React  },
  { label: "React Native", logo:  React  },
  { label: "express", logo:  express  },
  { label: "JQuery", logo:  JQuery  },
  { label: "Vite", logo:  vite  },
  { label: "AJAX"},
  { label: "EJS"},
  { label: "Active Record"},
  { label: "SASS"},
  { label: "Jest"},
  { label: "Cyprus"},
  { label: "Mocha & Chai"},
  { label: "Rspec"},
];


// module.exports(projects) 