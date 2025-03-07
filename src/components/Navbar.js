import { Link } from "react-router-dom"
import "./NavbarStyle.css"

import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"


const Navbar = () => {

  const [click, setClick]  = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
        <Link to="/">
          <h1>Portfolio</h1>
        </Link>
        <ul className={click ? "nav-menu.activate" : "nav-menu"}>
          <li><Link to="/">Acceuil</Link></li>
          <li><Link to="/parcours">Parcours</Link></li>
          <li><Link to="/competences">Comp&eacute;tences</Link></li>
          <li><Link to="/projets">Projets</Link></li>
          <li><Link to="/certifications">Certifications</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
              <FaTimes size={20} style={{color: "#fff"}}/>
            ) : (
              <FaBars size={20} style={{color: "#fff"}}/>
            )}         
        </div>
    </div>
  )
}

export default Navbar