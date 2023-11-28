import "../styles/skills.css";
import Skill from "./Skill";
import {skills} from "../data/data"

const SkillsList = () => {

  return (
    <div id="skills" className="skills_container">
      <div className="header">My tech stack</div>
      <ul className="skills-list">
        {skills.map((skill, index) => {
          return <Skill key={index} label={skill.label} logo={skill.logo} />;
        })}
      </ul>

    </div>
  );
};

export default SkillsList;
