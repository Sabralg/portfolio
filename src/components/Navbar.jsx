import { Link } from "react-router-dom"
import "./NavbarStyle.css"
import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"


const Navbar = () => {

  const [click, setClick]  = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () =>{
    if(window.scrollY >=100){
      setColor(true);
    }else{
      setColor(false)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  return (
    <div className={color ? ".header header-bg":"header"}>
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