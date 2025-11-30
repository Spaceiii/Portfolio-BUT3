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
    slug: "domaine-viticole-app",
    title: "Application de gestion pour domaine viticole",
    description: "Application web complète pour gérer les vins, les traductions et les réservations.",
    longDescription: "J’ai développé une application web pour un vigneron comprenant une interface de gestion des stocks, un CRUD complet sur les vins, la gestion multilingue des fiches produits et un espace client permettant la réservation de bouteilles. Le tout a été conçu seul, de l’architecture backend au frontend. J’ai parfois douté sur les choix d’architecture ou la structure des données, mais cela m’a obligé à structurer proprement l’ensemble.",
    tags: ["Vue", "Node.js", "Express", "PostgreSQL", "TypeScript"],
    githubUrl: "",
    liveUrl: "",
    features: [
      "CRUD complet des vins et gammes",
      "Traductions multilingues (fr/en/ja)",
      "Réservation de vins côté client",
      "Authentification JWT",
      "Dashboard d’administration"
    ],
    challenges: "Gérer la relation entre vins et traductions a été plus complexe que prévu. Le fait de travailler seul m’a forcé à tout structurer proprement, même quand je doutais des bonnes pratiques.",
    learnings: "Meilleure compréhension des API REST, structuration d’un backend Express, gestion d’un ORM (Drizzle) et organisation d’un projet web complet.",
    screenshots: []
  },
  {
    slug: "arduino-alcohol-detection",
    title: "Système de détection d’ivresse avec capteurs Arduino",
    description: "Système combinant capteurs Arduino, backend Node et analyse Java.",
    longDescription: "Projet basé sur plusieurs capteurs Arduino mesurant différentes données physiologiques pour estimer si une personne est potentiellement ivre. Le backend Node.js récupère les valeurs, Java traite les données, et MongoDB stocke les résultats. Plusieurs choix techniques m’ont fait hésiter, notamment sur la fiabilité des mesures, mais ça m’a poussé à réfléchir aux limites de l’IA dans un contexte physique.",
    tags: ["Java", "Node.js", "MongoDB", "Arduino"],
    features: [
      "Lecture en temps réel des capteurs",
      "Analyse des données en Java",
      "Stockage des valeurs et historiques",
      "Dashboard simple pour les mesures"
    ],
    challenges: "Synchroniser les mesures avec le backend et gérer l'incertitude des capteurs. La difficulté principale : interpréter des données imparfaites.",
    learnings: "Gestion d’entrées matérielles, structuration d’API simples, stockage NoSQL, réflexion sur la qualité des données.",
    screenshots: []
  },
  {
    slug: "salon-agriculture",
    title: "Gestion d’un événement type Salon de l’Agriculture",
    description: "Simulation de l’organisation d’un grand événement avec outils web.",
    longDescription: "Projet où nous devions simuler l’organisation complète du Salon de l’Agriculture : gestion des exposants, des stands, du planning et de la communication. Nous avons réalisé une application web pour structurer ces données. Plusieurs contraintes d’organisation m’ont poussé à remettre en question certaines approches : comment répartir les stands, comment éviter les collisions de planning, etc.",
    tags: ["Node.js", "JavaScript", "Vue", "PostgreSQL"],
    features: [
      "Gestion des exposants et stands",
      "Planning détaillé",
      "Interface Vue simplifiée",
      "API Node pour centraliser les données"
    ],
    challenges: "La modélisation des données d’un tel événement était moins évidente qu’elle en avait l’air. Beaucoup de cas limites à prévoir.",
    learnings: "Meilleure compréhension de la gestion d’événements, modélisation plus propre, collaboration en équipe.",
    screenshots: []
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

