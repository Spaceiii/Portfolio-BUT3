// Définition des types pour les projets
export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  features?: string[];
  challenges?: string;
  learnings?: string;
  screenshots?: string[];
}

// Liste de tous les projets
export const projects: Project[] = [
  {
    slug: "portfolio-personnel",
    title: "Portfolio Personnel",
    description: "Site portfolio moderne construit avec Astro pour présenter mes projets et compétences.",
    longDescription: "Ce portfolio a été conçu pour présenter mes compétences en développement web de manière professionnelle et moderne. Utilisant Astro pour des performances optimales, il met en valeur mes projets et mon parcours.",
    tags: ["Astro", "TypeScript", "CSS"],
    githubUrl: "https://github.com/Spaceiii",
    features: [
      "Design moderne et responsive",
      "Performance optimisée avec Astro",
      "Animations fluides et interactives",
      "Accessibilité WCAG 2.1"
    ],
    challenges: "Le principal défi était de créer une expérience utilisateur fluide tout en maintenant d'excellentes performances. J'ai optimisé les images et utilisé le lazy loading pour garantir des temps de chargement rapides.",
    learnings: "Ce projet m'a permis de maîtriser Astro et ses concepts de composants. J'ai également approfondi mes connaissances en accessibilité web et en optimisation des performances."
  },
  {
    slug: "application-web-react",
    title: "Application Web React",
    description: "Application web interactive utilisant React et Node.js avec une base de données MongoDB.",
    longDescription: "Application full-stack permettant aux utilisateurs de gérer leurs tâches et projets de manière collaborative. L'architecture MERN garantit flexibilité et évolutivité.",
    tags: ["React", "Node", "Express", "MongoDB"],
    githubUrl: "https://github.com/Spaceiii",
    features: [
      "Authentification sécurisée JWT",
      "Gestion d'état avec Redux",
      "API RESTful robuste",
      "Temps réel avec WebSockets",
      "Interface utilisateur réactive"
    ],
    challenges: "La gestion de l'état global et la synchronisation en temps réel entre plusieurs utilisateurs représentaient un défi technique important. J'ai utilisé Redux pour l'état et Socket.io pour la communication en temps réel.",
    learnings: "J'ai développé une compréhension approfondie de l'architecture MERN et des meilleures pratiques pour construire des applications web évolutives."
  },
  {
    slug: "dashboard-vuejs",
    title: "Dashboard Vue.js",
    description: "Tableau de bord d'administration avec Vue.js et Tailwind CSS.",
    longDescription: "Interface d'administration complète pour gérer les utilisateurs, visualiser les statistiques et monitorer les performances en temps réel. Design moderne avec Tailwind CSS.",
    tags: ["Vue", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/Spaceiii",
    features: [
      "Graphiques et visualisations de données",
      "Gestion des utilisateurs et permissions",
      "Design responsive avec Tailwind CSS",
      "Tableaux de données interactifs",
      "Thème clair/sombre"
    ],
    challenges: "L'intégration de multiples bibliothèques de visualisation de données tout en maintenant des performances optimales était un défi. J'ai implémenté du lazy loading pour les composants lourds.",
    learnings: "Ce projet m'a permis de maîtriser Vue 3 avec la Composition API et d'explorer les possibilités offertes par Tailwind CSS pour créer des interfaces modernes rapidement."
  },
  {
    slug: "api-restful",
    title: "API RESTful",
    description: "API backend robuste construite avec Node.js, Express et TypeScript.",
    longDescription: "API RESTful complète avec authentification, validation des données, gestion des erreurs et documentation automatique. Déployée avec Docker pour faciliter le déploiement.",
    tags: ["Node", "Express", "TypeScript", "Docker"],
    githubUrl: "https://github.com/Spaceiii",
    features: [
      "Architecture REST complète",
      "Authentification JWT et refresh tokens",
      "Validation avec Joi",
      "Documentation Swagger",
      "Tests unitaires et d'intégration",
      "Conteneurisation Docker"
    ],
    challenges: "Assurer la sécurité de l'API tout en maintenant de bonnes performances était crucial. J'ai implémenté rate limiting, validation stricte des données et gestion sécurisée des tokens.",
    learnings: "J'ai approfondi mes connaissances en architecture backend, sécurité des APIs et bonnes pratiques de développement avec TypeScript."
  },
  {
    slug: "site-web-responsive",
    title: "Site Web Responsive",
    description: "Site web responsive moderne avec HTML5, CSS3 et JavaScript.",
    longDescription: "Site web entièrement responsive construit avec les technologies web fondamentales. Focus sur l'accessibilité, les performances et l'expérience utilisateur sur tous les appareils.",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Spaceiii",
    features: [
      "Design mobile-first",
      "Animations CSS avancées",
      "Optimisation SEO",
      "JavaScript vanilla performant",
      "Compatible tous navigateurs"
    ],
    challenges: "Créer un site moderne sans framework tout en garantissant la compatibilité avec les anciens navigateurs nécessitait une approche progressive enhancement.",
    learnings: "Ce projet m'a rappelé l'importance de maîtriser les fondamentaux du web et m'a permis d'approfondir CSS Grid, Flexbox et les APIs JavaScript modernes."
  },
  {
    slug: "projet-python",
    title: "Projet Python",
    description: "Application Python avec analyse de données et visualisation.",
    longDescription: "Application d'analyse de données utilisant pandas, numpy et matplotlib pour traiter et visualiser de grands ensembles de données. Interface utilisateur créée avec Streamlit.",
    tags: ["Python", "Git"],
    githubUrl: "https://github.com/Spaceiii",
    features: [
      "Analyse de données avec pandas",
      "Visualisations interactives",
      "Interface Streamlit",
      "Export des résultats",
      "Traitement de gros volumes de données"
    ],
    challenges: "Optimiser les performances lors du traitement de fichiers de plusieurs Go nécessitait l'utilisation de techniques avancées comme le chunking et le traitement parallèle.",
    learnings: "J'ai développé mes compétences en analyse de données et découvert l'écosystème Python pour la data science."
  }
];

// Fonction pour obtenir un projet par son slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

// Fonction pour obtenir tous les slugs de projets
export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug);
}

