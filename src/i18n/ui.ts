export const languages = ["en", "es"] as const;
export const languageNames: Record<(typeof languages)[number], string> = {
  en: "English",
  es: "Español",
} as const;

export const defaultLang = languages[0];

export const ui = {
  en: {
    position: "Web developer",

    avatarAlt: "Profile picture",

    "nav.home": "Home",
    "nav.experience": "Work Experience",
    "nav.education": "Education",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",

    "about.title": "About me",
    "about.keys.age": "Age",
    "about.keys.residence": "Residence",
    "about.keys.cuit": "CUIT",

    "languages.title": "Languages",
    "languages.keys.en": "English",
    "languages.keys.es": "Spanish",
    "languages.values.en": "Bilingual proficiency",
    "languages.values.es": "Native proficiency",

    "skills.title": "Top skills",
    "skills.uidesign": "UI Design",

    cvDownload: "Download CV",

    "theme.toggle": "Toggle theme",
    "theme.light": "Light",
    "theme.dark": "Dark",
    "theme.system": "System",
  },
  es: {
    position: "Desarrollador web",

    avatarAlt: "Foto de perfil",

    "nav.home": "Inicio",
    "nav.experience": "Experiencia laboral",
    "nav.education": "Educación",
    "nav.portfolio": "Portafolio",
    "nav.contact": "Contacto",

    "about.title": "Sobre mí",
    "about.keys.age": "Edad",
    "about.keys.residence": "Residencia",
    "about.keys.cuit": "CUIT",

    "languages.title": "Idiomas",
    "languages.keys.en": "Inglés",
    "languages.keys.es": "Español",
    "languages.values.en": "Proficiencia bilingüe",
    "languages.values.es": "Proficiencia nativa",

    "skills.title": "Habilidades destacadas",
    "skills.uidesign": "Diseño de UI",

    cvDownload: "Descargar CV",

    "theme.toggle": "Cambiar tema",
    "theme.light": "Claro",
    "theme.dark": "Oscuro",
    "theme.system": "Sistema",
  },
} as const;
