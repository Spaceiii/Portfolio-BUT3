# Système de Pages de Projets

## Structure

Le portfolio utilise maintenant un système de pages détaillées pour chaque projet avec les composants suivants :

### 📁 Fichiers créés

1. **`src/data/projects.ts`** - Données centralisées de tous les projets
   - Interface TypeScript `Project` pour la structure des données
   - Array `projects` contenant tous les projets
   - Fonctions utilitaires : `getProjectBySlug()` et `getAllProjectSlugs()`

2. **`src/pages/projets/[slug].astro`** - Page de détail dynamique
   - Route dynamique Astro pour générer une page par projet
   - Affiche toutes les informations détaillées d'un projet
   - Breadcrumb pour la navigation
   - Liens vers GitHub et site live

### 🎨 Fonctionnalités

#### Page de liste des projets (`/projets`)
- Affiche tous les projets sous forme de cartes
- Bouton "Voir le projet" redirige vers la page de détail

#### Page de détail d'un projet (`/projets/[slug]`)
- **Breadcrumb** : Navigation contextuelle
- **En-tête** : Titre, description courte, tags avec icônes
- **Liens** : GitHub et site live (si disponibles)
- **Image principale** : Grande image du projet
- **Sections détaillées** :
  - À propos du projet
  - Fonctionnalités principales (liste à puces)
  - Défis techniques
  - Apprentissages
- **Bouton retour** : Retour vers la liste des projets

### 📊 Structure des données d'un projet

```typescript
interface Project {
  slug: string;              // Identifiant unique pour l'URL
  title: string;             // Titre du projet
  description: string;       // Description courte (pour les cartes)
  longDescription: string;   // Description complète (page détail)
  image?: string;            // Image du projet
  tags: string[];            // Technologies utilisées
  githubUrl?: string;        // Lien vers le repo GitHub
  liveUrl?: string;          // Lien vers le site en ligne
  features?: string[];       // Liste des fonctionnalités
  challenges?: string;       // Défis rencontrés
  learnings?: string;        // Apprentissages du projet
  screenshots?: string[];    // Captures d'écran additionnelles
}
```

### 🔧 Comment ajouter un nouveau projet

1. Ouvrir `src/data/projects.ts`
2. Ajouter un nouvel objet dans l'array `projects` :

```typescript
{
  slug: "mon-nouveau-projet",
  title: "Mon Nouveau Projet",
  description: "Description courte du projet",
  longDescription: "Description détaillée et complète du projet...",
  image: "/images/mon-projet.png",
  tags: ["React", "TypeScript", "Node"],
  githubUrl: "https://github.com/username/projet",
  liveUrl: "https://mon-projet.com",
  features: [
    "Fonctionnalité 1",
    "Fonctionnalité 2",
    "Fonctionnalité 3"
  ],
  challenges: "Les défis techniques rencontrés...",
  learnings: "Ce que j'ai appris..."
}
```

3. Le projet apparaîtra automatiquement dans la liste et aura sa propre page de détail

### 🎯 URLs générées

- Liste des projets : `/projets`
- Détail d'un projet : `/projets/[slug]`
  - Exemple : `/projets/portfolio-personnel`
  - Exemple : `/projets/application-web-react`

### 🎨 Icônes des technologies

Les icônes suivantes sont automatiquement affichées pour les technologies :
- JavaScript, TypeScript
- React, Vue, Astro
- Node, Express
- Python
- HTML, CSS, Tailwind, Sass
- MongoDB
- Docker, Git
- Et bien d'autres...

Les icônes sont affichées à la fois sur :
- Les cartes de projets
- Les pages de détail

### 📱 Responsive Design

Toutes les pages sont entièrement responsive et s'adaptent aux écrans :
- Desktop (> 1024px)
- Tablette (768px - 1024px)
- Mobile (< 768px)

### ✨ Animations et interactions

- Hover sur les cartes de projets
- Transitions fluides entre les pages
- Animations sur les boutons
- Effets sur les tags de technologies

