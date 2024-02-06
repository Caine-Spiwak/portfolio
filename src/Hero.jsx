import { 
  FaFacebook,
  FaLinkedin,
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3Alt,
  FaGithub
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiRedux } from "react-icons/si";










const Hero = () => {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-top">
          <div className="hero-top-left">
            <p>Caine Spiwak</p>
            <h1 className="title">Full Stack <br/>Web Developer</h1>
            <p className="sub-title">Hi, I&apos;m Caine Spiwak. I&apos;m looking for the next team to join, that I can become an immediate asset for.</p>
            <div className="social-icons">
            <FaGithub />
            <FaLinkedin />
            <FaFacebook />
            </div>
          </div>
          <div className="hero-top-right">
            <div className="image"></div>
          </div>
        </div>
        <div className="hero-bottom">
          <div>Tech Stack</div>
          <hr />
          <div className="tech-icons">
            <FaHtml5 style={{'color': '#ff6300'}}/>
            <FaCss3Alt style={{'color': '#105dbd'}}/>
            <SiJavascript style={{'color': '#fffc00', 'background': 'black'}}/>
            <FaReact style={{'color': '#0cc0df'}}/>
            <SiRedux style={{'color': 'purple'}}/>
            <FaNode style={{'color': 'green', 'font-size': '2.5rem'}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero