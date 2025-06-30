import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-box">
        <h2>Développement</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>REACT</li>
          <li>ANGULAR</li>
          <li>PYTHON</li>
          <li>NODE JS</li>
          <li>SQL</li>
          <li>POSTGRESQL</li>
          <li>MONGODB</li>
        </ul>
      </div>

      <div className="skills-box">
        <h2>Outils</h2>
        <ul>
          <li>PHOTOSHOP</li>
          <li>FIGMA</li>
          <li>PROCREATE</li>
          <li>CANVA</li>
          <li>CAPCUT</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
