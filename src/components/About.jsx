import "../styles/about.css";
import avatar from "../assets/avatar.jpg";

const About = () => {
  return (
    <div id="about">

    <div  className="about">
      <img className="avatar" src={avatar} alt="" />

      <div className="about_box">
        <div className="about_segment">
          Driven by a passion for problem-solving and a love for technology, I
          embarked on a transformative journey from the world of Human Resources
          to become a seasoned full-stack developer.

        </div>
        <div className="about_segment">
          With a unique blend of technical expertise and a deep understanding of
          human dynamics, I bring a fresh perspective to every project. From
          crafting elegant front-end interfaces to architecting robust back-end
          systems, I thrive in the dynamic and ever-evolving landscape of
          software development. My journey is a testament to the power of
          curiosity and the belief that with dedication, one can master any
          field. 

        </div>
        <div className="about_segment">
        Let's build something extraordinary together!
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
