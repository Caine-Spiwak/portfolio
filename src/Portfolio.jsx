import { FaGithub } from "react-icons/fa";
import style from "./Portfolio.module.css"
import { FaExternalLinkAlt } from "react-icons/fa";



const Portfolio = () => {
  return (
    <div className={style.container}>
      <div id="portfolio" className={style.portSection}>
        <div className={style.portHeader}>
          <p className={style.portTitle}>PORTFOLIO</p>
          <p className={style.portSubtitle}>Please take a peek 👀</p>
        </div>
        <div className={style.projSection}>
          <img src="./taskhub.dev-screenshot.png" className={style.projImage}></img>
          <div className={style.projAbout}>
            <p className={style.projTitle}>www.taskhub.dev</p>
            <p className={style.projDesc}>A life management app inspired by Tony Robbins RPM framework. Organize your goals by project, 
            each project having organizable tasks, and each task having organizable todos.</p>
            <div className={style.projBtns}>
              <div className={style.projBtn}>CODE <FaGithub /></div>
              <div className={style.projBtn}>LIVE PREVIEW <FaExternalLinkAlt /></div>
            </div>
            <hr></hr>
            <div className={style.tech}>
              <div className={style.techTitle}>Key Features</div>
              <ul className={style.techList}>
                <li>NoSQL</li>
                <li>Authorization (bcrypt)</li>
                <li>Authentication (jwt)</li>
                <li>REST API</li>
                <li>React / Redux</li>
                <li>Dnd-Kit</li>
              </ul>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
    </div>
  )
}

export default Portfolio