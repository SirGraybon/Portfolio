import gitHubLogo from "../assets/github-mark.png";
import "../styles/skills.css"
const Skill = (props)=> {
  return(
    <div className="skill">
    {props.logo && <img className="skill_logo" src={props.logo} />}
    <p className="skill_label">{props.label}</p>
  </div>
  )
}

export default Skill