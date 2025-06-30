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
    title: "SAE Analyse des données GEIl de Parcoursup",
    date: "févr. 2024",
    description: `Dans le cadre de cette Situation d'apprentissage et d'évaluation (SAE), nous devions fournir des critères pour comparer les candidats, puis les utiliser pour développer un programme qui établit un classement.
Pour mener à bien ce projet, nous avons gardé en tête un principe que notre professeur en système informatique décisionnel nous a enseigné : l'importance fondamentale de comprendre les données que l'on manipule.`,
    competences: [
      "Analyse des exigences",
      "Python",
      "Jupyter Notebook",
      "Algorithmique",
    ],
  },
  {
    title: "Dashboard de gestion de tâches",
    date: "mai 2025 - juin 2025",
    description: `Pour cette Situation d'apprentissage et d'évaluation
(SAE), nous avions carte blanche quant au choix du sujet. Mes camarades et moi avons décidé de développer un agenda, intégrant une gestion des événements. L’interface permet de créer, modifier, et suprimer des tâches. `,
    competences: ["Flask", "Python", "MongoDB", "Trello", "GitHub"],
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
