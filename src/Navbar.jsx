import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <div className="logo-section">
          <div className="logo">cainespiwak.dev</div>
        </div>
        <div className="menu">
          <ul className="menu-items">
            <li><Link to='/'>Home</Link></li>
            <li><a href='/#portfolio'>Projects</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
