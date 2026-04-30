import type { Locale, ResumeData } from "@/types/resume";

const PROFILE_PICTURE = "/profile.png";

const SUMMARY_PT = `Olá, sou desenvolvedor full-stack com experiência em React.js, Next.js e Node.js, adquirida por meio de projetos práticos e atuação profissional em frentes front-end e full stack, disponíveis no meu GitHub. Minha capacidade de integrar conhecimentos científicos complexos com desenvolvimento de
software me posiciona como um profissional multidisciplinar. Estou entusiasmado com a oportunidade de contribuir, trazendo uma combinação única de expertise técnica e científica. Agradeço a consideração e aguardo a possibilidade de discutir como minhas habilidades podem beneficiar sua
equipe.`;

const SUMMARY_EN = `Hello, I am a full-stack developer with experience in React.js, Next.js, and Node.js, gained through hands-on projects and professional work across front-end and full-stack roles, available on my GitHub. My ability to integrate complex scientific knowledge with software development positions me as a multidisciplinary professional. I am excited about the opportunity to contribute, bringing a unique combination of technical and scientific expertise. Thank you for your consideration, and I look forward to the possibility of discussing how my skills can benefit your team.`;

const HEADLINE_PT =
  "Desenvolvimento de Software | Full-Stack Developer com Foco em React, Node.js e Next.js.";

const HEADLINE_EN =
  "Software Development | Full-Stack Developer with a Focus on React, Node.js and Next.js.";

const resumeDataPt: ResumeData = {
  firstName: "Guilherme",
  lastName: "Orlandin",
  profilePicture: PROFILE_PICTURE,
  summary: SUMMARY_PT,
  headline: HEADLINE_PT,
  multiLocaleHeadline: { pt: HEADLINE_PT },
  educations: [],
  certifications: [
    { name: "Bootcamp - Discover", authority: "Rocketseat" },
    { name: "Bootcamp - Ignite", authority: "Rocketseat" },
  ],
  fullPositions: [
    {
      companyName: "Beta Online",
      title: "Frontend Developer",
      period: "maio de 2023 — Presente",
      description: `Atuação em desenvolvimento front-end com React e tecnologias modernas.

• Construção de interfaces responsivas com React.js e TypeScript.
• Integração do front-end com APIs externas e serviços internos de back-end.
• Contribuição para o Storybook e padronização de padrões de componentes.
• Otimização de performance e experiência do usuário.
• Atuação temporária como Tech Lead, coordenando o time durante a ausência do líder principal.`,
    },
    {
      companyName: "DFCom Software House",
      title: "Full-stack Developer",
      period: "janeiro de 2023 — maio de 2023 (5 meses)",
      description: `Atuação end-to-end no desenvolvimento e manutenção do PDV (Ponto de Venda), engineering completo da stack: React.js + Node.js + MongoDB.

• Front-end do PDV: Desenvolvimento de interfaces com React.js e Styled-Components, gerenciamento de estado global com Zustand e Context API para o fluxo de vendas.

• Gerenciamento de Estado do Servidor: Implementação de React Query para cache, sincronização em tempo real e atualização de estados de transações e notas fiscais.

• API e Back-end: Construção de APIs RESTful com Node.js para operações do PDV e integração com o módulo de tratamento de notas.

• Modelagem de Dados: Projeto e gestão de dados no MongoDB, assegurando performance e consistência nas operações de venda e emissão de notas.`,
    },
  ],
  projects: {
    items: [
      {
        title: "Comu-feed",
        description:
          "Projeto de feed comunitário desenvolvido com React e Node.js.",
      },
      {
        title: "e-commerce-with-stripe",
        description: "E-commerce com integração Stripe para pagamentos.",
      },
      {
        title: "E-commerce",
        description:
          "Loja virtual full-stack com carrinho e gestão de produtos.",
      },
      {
        title: "find-a-friend",
        description: "Plataforma para conectar pessoas e causas.",
      },
      {
        title: "GymPass",
        description: "Sistema de gestão de academias e planos.",
      },
    ],
  },
};

const resumeDataEn: ResumeData = {
  firstName: "Guilherme",
  lastName: "Orlandin",
  profilePicture: PROFILE_PICTURE,
  summary: SUMMARY_EN,
  headline: HEADLINE_EN,
  multiLocaleHeadline: { pt: HEADLINE_EN },
  educations: [],
  certifications: [
    { name: "Bootcamp - Discover", authority: "Rocketseat" },
    { name: "Bootcamp - Ignite", authority: "Rocketseat" },
  ],
  fullPositions: [
    {
      companyName: "Beta Online",
      title: "Frontend Developer",
      period: "May 2023 — Present",
      description: `Working on front-end development with React and modern technologies.

• Building responsive interfaces with React.js and TypeScript.
• Integrating the front end with external APIs and internal back-end services.
• Contributing to Storybook and standardizing component patterns.
• Optimizing performance and user experience.
• Temporarily acting as Tech Lead, coordinating the team during the primary lead's absence.`,
    },
    {
      companyName: "DFCom Software House",
      title: "Full-stack Developer",
      period: "January 2023 — May 2023",
      description: `End-to-end development and maintenance of the POS (Point of Sale) system, full-stack engineering with React.js, Node.js, and MongoDB.

• POS Front-end: Building interfaces with React.js and Styled Components; global state management with Zustand and Context API for the sales flow.

• Server State Management: Implementing React Query for caching, real-time sync, and updates of transaction and invoice states.

• API and Back-end: Building RESTful APIs with Node.js for POS operations and integration with the invoice handling module.

• Data Modeling: Designing and managing data in MongoDB, ensuring performance and consistency for sales and invoice operations.`,
    },
  ],
  projects: {
    items: [
      {
        title: "Comu-feed",
        description: "Community feed project built with React and Node.js.",
      },
      {
        title: "e-commerce-with-stripe",
        description: "E-commerce with Stripe payment integration.",
      },
      {
        title: "E-commerce",
        description:
          "Full-stack online store with cart and product management.",
      },
      {
        title: "find-a-friend",
        description: "Platform to connect people and causes.",
      },
      {
        title: "GymPass",
        description: "Gym and membership management system.",
      },
    ],
  },
};

export const resumeData = resumeDataPt;

export function getResumeData(locale: Locale = "pt"): ResumeData {
  return locale === "en" ? resumeDataEn : resumeDataPt;
}
