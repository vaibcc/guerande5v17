const db = globalThis.__B44_DB__ || {
  auth: {
    isAuthenticated: async () => false,
    me: async () => null,
  },
  entities: new Proxy(
    {},
    {
      get: () => ({
        filter: async () => [],
        get: async () => null,
        create: async () => ({}),
        update: async () => ({}),
        delete: async () => ({}),
      }),
    }
  ),
  integrations: {
    Core: {
      UploadFile: async () => ({
        file_url: "",
      }),
    },
  },
};

// ============================================================
// GUÉRANDE 5 — DONNÉES DU SITE
// ============================================================

export const teamInfo = {
  name: "Guérande 5",
  club: "Billard Presqu'île Guérande",
  federation: "Fédération Française de Billard",
  federationShort: "FFB",
  location: "Guérande, Loire-Atlantique",
  type: "Équipe départementale de billard",
  tagline:
    "Passion, compétition et esprit d'équipe au cœur de la Presqu'île guérandaise.",
};

export const quickStats = [
  { value: "7", label: "Joueurs présentés" },
  { value: "FFB", label: "Fédération Française de Billard" },
  { value: "Guérande", label: "Presqu'île guérandaise" },
];

export const players = [
  {
    id: "vaibhav-kamra",
    name: "Vaibhav KAMRA",
    role: "Capitaine",
    photo: "/66666.jpg",
    bio: "Capitaine de Guérande 5, il pilote l'équipe depuis 2025. Il met sa maîtrise technique et son sens de la stratégie au service du collectif.",
    stats: "Informations à venir",
  },
  {
    id: "belen-lopez-samaniego",
    name: "Belén López Samaniego",
    role: "Joueur",
    photo: "/belen lopez.png",
    bio: "Présentation à venir",
    stats: "Informations à venir",
  },
  {
    id: "noemie-chapelais",
    name: "Noémie Chapelais",
    role: "Joueur",
    photo: "/noemie.png",
    bio: "Présentation à venir",
    stats: "Informations à venir",
  },
  {
    id: "arthur-rubin",
    name: "Arthur Rubin",
    role: "Joueur",
    photo: "/authur.png",
    bio: "Présentation à venir",
    stats: "Informations à venir",
  },
  {
    id: "sebastien-gautier",
    name: "Sebastien GAUTIER",
    role: "Joueur",
    photo: "/sebastian.png",
    bio: "Présentation à venir",
    stats: "Informations à venir",
  },
  {
    id: "tiphaine-legros",
    name: "Tiphaine Legros",
    role: "Joueur",
    photo: "/tiphaine.png",
    bio: "Présentation à venir",
    stats: "Informations à venir",
  },
  {
    id: "louise-dorigny",
    name: "Louise Dorigny",
    role: "Joueur",
    photo: "/louise.png",
    bio: "Présentation à venir",
    stats: "Informations à venir",
  },
];

export const results = [
  {
    id: "m1",
    teamA: "Guérande 4",
    scoreA: 9,
    teamB: "Guérande 5",
    scoreB: 7,
    result: "DÉFAITE",
    description:
      "Un match disputé face à Guérande 4, qui s'impose sur le score de 9 à 7.",
    date: "Informations à venir",
    venue: "Informations à venir",
  },
  {
    id: "m2",
    teamA: "Guérande 5",
    scoreA: 12,
    teamB: "Guérande 6",
    scoreB: 4,
    result: "VICTOIRE",
    description:
      "Une belle performance collective de Guérande 5, avec une victoire 12 à 4 face à Guérande 6.",
    date: "Informations à venir",
    venue: "Informations à venir",
  },
];

export const ranking = {
  available: false,
  division: "Informations à venir",
  position: "Informations à venir",
  points: "Informations à venir",
  played: "Informations à venir",
};

export const upcomingMatches = [];

export const galleryCategories = [
  "Matchs",
  "Entraînements",
  "Équipe",
  "Événements",
  "Vie du club",
];

export const galleryImages = [
  {
    src: "/galarie2.jpeg",
    category: "Matchs",
    alt: "Joueur en action sur le tapis bleu",
  },
  {
    src: "/galarie3.jpeg",
    category: "Matchs",
    alt: "Joueur en pleine concentration sur le tapis vert",
  },
  {
    src: "/galarie4.jpeg",
    category: "Matchs",
    alt: "Action de match en compétition",
  },
];

export const images = {
  hero: "/c7c349a4-2cb6-485d-8fdd-76967644cb94c.jpeg",
  about: "/c7c349a4-2cb6-485d-8fdd-76967644cb94c.jpeg",
  teamSpirit: "/c7c349a4-2cb6-485d-8fdd-76967644cb94c.jpeg",
  club: "/c7c349a4-2cb6-485d-8fdd-76967644cb94c.jpeg",
};

export const contact = {
  email: "Informations à venir",
  phone: "Informations à venir",
  address: "Informations à venir",
  facebook: "Informations à venir",
  instagram: "Informations à venir",
  other: "Informations à venir",
};

export const clubInfo = {
  name: "Billard Presqu'île Guérande",
  description:
    "Guérande 5 évolue au sein du Billard Presqu'île Guérande, club de billard situé à Guérande et engagé dans la pratique et la compétition.",
  address: "Informations à venir",
  website: "Informations à venir",
  facebook: "Informations à venir",
  instagram: "Informations à venir",
};

export const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "L'équipe", href: "#equipe" },
  { label: "Résultats", href: "#resultats" },
  { label: "Calendrier", href: "#calendrier" },
  { label: "Classement", href: "#classement" },
  { label: "Le club", href: "#club" },
  { label: "Galerie", href: "#galerie" },
  { label: "Contact", href: "#contact" },
];
