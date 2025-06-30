import React, { useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "SAE sélecteur multimodale",
    date: "oct. 2024 - janv. 2025",
    description: `Dans le cadre d’un projet d’application de recettes intégrant un sélecteur multimodal dans la barre de recherche (texte et images), j’ai été en charge de plusieurs responsabilités clés. J’ai défini l’identité visuelle complète de l’application, incluant la conception du logo, le choix de la palette de couleurs, la typographie, et la création d’une charte graphique cohérente. J’ai également réalisé les maquettes interactives pour structurer l’interface utilisateur (UI). Par ailleurs, j’ai veillé à traduire mes maquettes en code front-end, en m’assurant que le rendu final correspondait fidèlement au design défini, tout en collaborant avec les développeurs back-end pour garantir une intégration fluide. Ce travail a permis de proposer une application intuitive, visuellement cohérente et fonctionnelle.`,
    competences: [
      "Branding",
      "Procreate",
      "Canva",
      "MongoDB",
      "Figma (logiciel)",
      "Design d’interface utilisateur",
      "React.js",
    ],
  },
  {
    title: "Portfolio interactif",
    date: "févr. 2025 - mars 2025",
    description: `J’ai conçu un portfolio personnel interactif mettant en valeur mes compétences techniques et créatives. Ce projet m’a permis de créer une interface moderne et responsive avec React.js, intégrant des animations CSS, une navigation fluide, et un design minimaliste. L’objectif était de refléter ma personnalité tout en facilitant la présentation de mes projets, de manière claire et intuitive.`,
    competences: [
      "React.js",
      "CSS Animation",
      "Responsive Design",
      "GitHub Pages",
      "UI/UX",
    ],
  },
  {
    title: "Dashboard de gestion de tâches",
    date: "mai 2025 - juin 2025",
    description: `Développement d’un dashboard de gestion de tâches pour une petite équipe. L’interface permet de créer, organiser, et suivre l’avancement des tâches via un système de kanban dynamique. L’architecture front-back repose sur React.js, Node.js et MongoDB. J’ai été responsable de l’intégration front-end, des requêtes API, ainsi que du déploiement du projet.`,
    competences: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express",
      "API REST",
      "Kanban UI",
    ],
  },
  {
    title: "Podcast : Discussion sur le jeu vidéo",
    date: "2025",
    description: `Discussion à 5 sur le monde du jeu vidéo et sa complexité.

Par :
Lydia
Yasmine
Amayas
Tristan
Bachir

Toutes et tous étudiant.e.s en BUT3 Informatique à l’Université Sorbonne Paris Nord.`,
    link: "https://www.youtube.com/embed/MNkKboWhlaI",
    competences: ["Podcast", "Communication", "Jeux vidéo", "Analyse critique"],
  },
];

const Projects = () => {
  const [expanded, setExpanded] = useState(Array(projects.length).fill(false));

  const toggleExpand = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p className="project-date">{project.date}</p>
          <p className="project-description">
            {expanded[index]
              ? project.description
              : project.description.slice(0, 200) + "..."}
          </p>
          <button className="toggle-btn" onClick={() => toggleExpand(index)}>
            {expanded[index] ? "Afficher moins" : "Afficher plus"}
          </button>

          {project.link && (
            <a
              className="podcast-link"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Écouter le podcast
            </a>
          )}

          <p className="project-skills">
            <strong>Compétences :</strong> {project.competences.join(" · ")}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
