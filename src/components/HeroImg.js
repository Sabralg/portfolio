import "./HeroImgStyle.css";
import IntroImg from "../assets/Illustration_sans_titre.png"
import { Link } from "react-router-dom";
import React from 'react'

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
          <img className="intro-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
          <p>Salut, je suis MANKOUR Yasmine</p>
          <h1>Développeuse Informatique</h1>
          <div>
            <Link to="/project" className="btn">Projets</Link>
            <Link to="/contact" className="btn btn-light">Projets</Link>
          </div>
        </div>
    </div>
  )
}

export default HeroImg