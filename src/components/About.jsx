import "../styles/about.css";
import avatar from "../assets/avatar.jpg";

const About = () => {
  return (
    <div id="about">
         <div className="header">About me </div>

      <div className="about">
        <div className="spotlight">
          <img className="avatar" src={avatar} alt="" />

          <div className="about_box">
            <div className="about_segment">
              A full-stack developer with a foundation in human resources,
              equipped with comprehensive skills in web development and a
              passion for creating innovative digital solutions. Combining
              technical expertise with a solid understanding of HR & business
              principles to deliver user-centric and efficient web applications.
            </div>
          </div>
        </div>
        <div className="about_box_full">
          <div className="about_segment">
            Having originally forged my professional path in Human Resources, my
            passion for technology set me on a course of profound career
            transformation. Fueled by an insatiable curiosity and a desire to
            contribute meaningfully to the digital realm, I transitioned into
            the role of a full-stack developer.
          </div>
          <div className="about_segment">
            My journey is a testament to the belief that one's career trajectory
            is not set in stone. Armed with a foundation in HR, I bring a unique
            perspective to the world of coding—a fusion of technical prowess
            with an innate understanding of human dynamics. This blend has
            proven invaluable in creating user-centric solutions that not only
            meet the demands of the digital landscape but also resonate with
            end-users on a human level.
          </div>
          <div className="about_segment">
            As a full-stack developer, I find joy in the meticulous craft of
            building seamless front-end interfaces that captivate users, as well
            as architecting robust back-end systems that form the backbone of
            innovative applications. Embracing the dynamic nature of the tech
            industry, I continuously seek out new challenges and stay abreast of
            the latest advancements to deliver cutting-edge solutions.
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
