import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";



const Portfolio = () => {
  return (
    <div className="container">
      <div id="portfolio" className="portfolio-section">
        <div className="portfolio-header">
          <p className="port-title">PORTFOLIO</p>
          <p className="port-subtitle">Please take a peek 👀</p>
        </div>
        <div className="proj-section">
          <img src="./taskhub.dev-screenshot.png" className="proj-image"></img>
          <div className="proj-about">
            <p className="proj-title">www.taskhub.dev</p>
            <p className="proj-desc">A life management app inspired by Tony Robbins RPM framework. Organize your goals by project, 
            each project having organizable tasks, and each task having organizable todos.</p>
            <div className="proj-btns">
              <div className="proj-btn">CODE <FaGithub /></div>
              <div className="proj-btn">LIVE PREVIEW <FaExternalLinkAlt /></div>
            </div>
            <hr></hr>
            <div className="tech">
              <div className="tech-title">Key Features</div>
              <ul className="tech-list">
                <li>REST API</li>
                <li>Authorization (bcrypt)</li>
                <li>Authentication (jwt)</li>
                <li>NoSQL</li>
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