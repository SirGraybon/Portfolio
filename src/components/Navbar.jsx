//IMPORTs
import '../styles/Navbar.css'
import gitHubLogo from "../assets/github-mark.png"

//COMPONENT DEFINITION
function Navbar() {

  //RETURN STATEMENT
return(
  <div className="navbar">
  <h2>Graydon Ritchie</h2>
  <p className='about'>A full-stack developer with a strong foundation in human resources, equipped with comprehensive skills in web development and a passion for creating innovative digital solutions. Combines technical expertise with a solid understanding of HR & business principles to deliver user-centric and efficient web applications.</p>
  <a href="https://github.com/SirGraybon" className="contactLink">
    <div className='contactGroup'>
    <img className='contactLogo' src={gitHubLogo}/>
    <p className='contactLabel'>GitHub</p>
    </div>
    <div>
      <p className='contactLabel'> > </p>
    </div>


  </a >

</div>
)
}

export default Navbar 