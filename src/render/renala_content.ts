import type { Lang } from "../context";

interface FeatureItem {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface RenalaContent {
  hero: {
    title: string;
    tagline: string;
    ctaLabel: string;
    heroAlt: string;
  };
  features: FeatureItem[];
  accessibility: {
    title: string;
    description: string;
    items: string[];
  };
  privacy: {
    title: string;
    description: string;
  };
  darkMode: {
    title: string;
    description: string;
    imageAlt: string;
  };
  cta: {
    title: string;
    subtitle: string;
    ctaLabel: string;
    requirements: string;
  };
  links: {
    support: string;
    supportHref: string;
    privacy: string;
    privacyHref: string;
  };
}

export const APP_STORE_URL = "https://apps.apple.com/app/renala/id6759845223";

export const RENALA_CONTENT: Record<Lang, RenalaContent> = {
  en: {
    hero: {
      title: "Renala",
      tagline: "See what takes space.\nReclaim your Mac.",
      ctaLabel: "Download on the Mac App Store",
      heroAlt: "Renala treemap overview showing disk usage as a colorful interactive map",
    },
    features: [
      {
        title: "Your disk, visualized",
        description: "An interactive treemap turns gigabytes of clutter into a clear, colorful map. Spot oversized files instantly.",
        image: "/renala/01-hero-treemap",
        imageAlt: "",
      },
      {
        title: "Drill down to the byte",
        description: "Click any block to zoom in. Navigate from volume to folder to file \u2014 fast, fluid, intuitive.",
        image: "/renala/02-drill-down",
        imageAlt: "Drilling into folders and files in Renala",
      },
      {
        title: "Search and filter",
        description: "Find specific files or focus on file types with the sidebar. The treemap updates in real time.",
        image: "/renala/03-sidebar-search",
        imageAlt: "Sidebar search and filter panel in Renala",
      },
    ],
    accessibility: {
      title: "Accessible to everyone",
      description: "Every part of Renala works without a mouse.",
      items: [
        "Full keyboard navigation with arrow keys and shortcuts",
        "VoiceOver support across the entire treemap",
        "Localized in 11 languages, including right-to-left",
        "Respects Reduce Motion and system preferences",
      ],
    },
    privacy: {
      title: "Private by design",
      description: "Renala scans your disk locally. Nothing leaves your Mac \u2014 no cloud, no telemetry, no account required.",
    },
    darkMode: {
      title: "Light and dark",
      description: "Adapts to your system appearance. The vibrant treemap colors shine in both modes.",
      imageAlt: "Renala in dark mode",
    },
    cta: {
      title: "Ready to reclaim space?",
      subtitle: "Free on the Mac App Store.",
      ctaLabel: "Download Renala",
      requirements: "Requires macOS 14 Sonoma or later.",
    },
    links: {
      support: "Support",
      supportHref: "/renala/support",
      privacy: "Privacy Policy",
      privacyHref: "/renala/privacy",
    },
  },
  fr: {
    hero: {
      title: "Renala",
      tagline: "Visualisez ce qui prend de la place.\nLib\u00e9rez votre Mac.",
      ctaLabel: "T\u00e9l\u00e9charger sur le Mac App Store",
      heroAlt: "Treemap Renala\u00a0: vue d\u2019ensemble de l\u2019espace disque en carte color\u00e9e",
    },
    features: [
      {
        title: "Votre disque, en un coup d\u2019\u0153il",
        description: "Une treemap interactive transforme l\u2019encombrement de votre disque en une carte claire et color\u00e9e. Rep\u00e9rez instantan\u00e9ment les fichiers volumineux.",
        image: "/renala/01-hero-treemap",
        imageAlt: "",
      },
      {
        title: "Explorez en profondeur",
        description: "Cliquez sur un bloc pour zoomer, puis naviguez du volume au dossier, puis au fichier\u00a0: rapide, fluide, intuitif.",
        image: "/renala/02-drill-down",
        imageAlt: "Exploration des dossiers et fichiers dans Renala",
      },
      {
        title: "Recherche et filtres",
        description: "Trouvez des fichiers pr\u00e9cis ou filtrez par type dans la barre lat\u00e9rale\u00a0: la treemap se met \u00e0 jour en temps r\u00e9el.",
        image: "/renala/03-sidebar-search",
        imageAlt: "Barre lat\u00e9rale de recherche et filtres dans Renala",
      },
    ],
    accessibility: {
      title: "Accessible \u00e0 tous",
      description: "Chaque fonction de Renala est utilisable sans souris.",
      items: [
        "Navigation compl\u00e8te au clavier avec fl\u00e8ches et raccourcis",
        "Prise en charge de VoiceOver sur toute la treemap",
        "Disponible en 11\u00a0langues, y compris de droite \u00e0 gauche",
        "Respecte le mode R\u00e9duire les animations et vos pr\u00e9f\u00e9rences syst\u00e8me",
      ],
    },
    privacy: {
      title: "Confidentiel par conception",
      description: "Renala analyse votre disque localement. Rien ne quitte votre Mac\u00a0: ni cloud, ni t\u00e9l\u00e9m\u00e9trie, ni compte requis.",
    },
    darkMode: {
      title: "Mode clair et sombre",
      description: "Renala s\u2019adapte \u00e0 l\u2019apparence de votre syst\u00e8me. Les couleurs vibrantes de la treemap ressortent dans les deux modes.",
      imageAlt: "Renala en mode sombre",
    },
    cta: {
      title: "Pr\u00eat \u00e0 lib\u00e9rer de l\u2019espace\u00a0?",
      subtitle: "Gratuit sur le Mac App Store.",
      ctaLabel: "T\u00e9l\u00e9charger Renala",
      requirements: "N\u00e9cessite macOS 14 Sonoma ou ult\u00e9rieur.",
    },
    links: {
      support: "Support",
      supportHref: "/renala/support",
      privacy: "Politique de confidentialit\u00e9",
      privacyHref: "/renala/privacy",
    },
  },
};
