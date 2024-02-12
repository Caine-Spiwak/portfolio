import { 
  FaLinkedin,
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3Alt,
  FaGithub
} from "react-icons/fa";
import style from './Hero.module.css'
import { SiJavascript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <div className={style.container}>
      <div className={style.hero}>
        <div className={style.heroTop}>
          <div className={style.heroTopLeft}>
            <p>Caine Spiwak</p>
            <h1 className={style.title}>Full Stack <br/>Web Developer</h1>
            <p className={style.subTitle}>Hi, I&apos;m Caine Spiwak. I&apos;m looking for the next team to join, that I can become an immediate asset for.</p>
            <div className={style.socialIcons}>
            <Link to='https://github.com/Caine-Spiwak/taskhub.dev' target="_blank" rel="noopener noreferrer"><FaGithub /></Link>
            <Link to='https://www.linkedin.com/in/caine-spiwak/' target="_blank" rel="noopener noreferrer"><FaLinkedin /></Link>
            </div>
          </div>
          <div className={style.heroTopRight}>
            <div className={style.image}></div>
          </div>
        </div>
        <div className={style.heroBottom}>
          <div>Tech Stack</div>
          <hr />
          <div className={style.techIcons}>
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