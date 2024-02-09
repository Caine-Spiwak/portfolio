import { useState } from 'react';
import style from './Navbar.module.css'
import { IoMenu } from "react-icons/io5";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }


  return (
    <div>
       <header>
        <nav className={style.nav}>
          <div className={style.logoSection}>
            <div className={style.logo}>cainespiwak.dev</div>
          </div>
          <div className={style.menu}>
            <ul className={style.menuItems}>
              <li><Link to='/'>Home</Link></li>
              <li><a href='/#portfolio'>Projects</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </div>
          <div className={style.menuIcon}>
            <IoMenu 
              onClick={() => toggleMenu()}
            />
          </div>
            <ul className={menuOpen ? style.dropdown : style.hidden}>
              <li><Link to='/'>Home</Link></li>
              <li className='x'><a href='/#portfolio'>Projects</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
