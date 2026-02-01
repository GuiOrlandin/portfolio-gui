import type { Locale } from "@/types/resume";

export const translations = {
  pt: {
    nav: {
      home: "Início",
      projects: "Projetos",
    },
    sections: {
      about: "Sobre",
      experience: "Experiência",
      technologies: "Tecnologias",
      softSkills: "Soft skills",
      certifications: "Certificações",
      projects: "Projetos",
    },
    certificationsEmpty:
      "Certificações podem ser adicionadas em src/constants/resume.ts",
    viewOnGitHub: (name: string) => `Ver ${name} no GitHub`,
    softSkillNames: [
      "Gestão de tempo",
      "Capacidade analítica",
      "Atenção aos detalhes",
      "Tomada de decisão",
    ],
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
    },
    sections: {
      about: "About",
      experience: "Experience",
      technologies: "Technologies",
      softSkills: "Soft skills",
      certifications: "Certifications",
      projects: "Projects",
    },
    certificationsEmpty:
      "Certifications can be added in src/constants/resume.ts",
    viewOnGitHub: (name: string) => `View ${name} on GitHub`,
    softSkillNames: [
      "Time management",
      "Analytical capability",
      "Attention to detail",
      "Decision making",
    ],
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}
