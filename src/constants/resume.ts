import type { Locale, ResumeData } from "@/types/resume";

const PROFILE_PICTURE = "/profile.png";

const SUMMARY_PT = `Comecei minha jornada nos estudos de desenvolvimento de software no front-end, utilizando React e Next.js para criar interfaces dinâmicas e responsivas. Posteriormente, direcionei meu foco para o desenvolvimento back-end com Node.js, onde explorei a construção de APIs.

Atualmente estou empenhado em consolidar minha expertise em desenvolvimento full-stack, unindo habilidades front-end e back-end para criar soluções completas para os usuários. Minha transição para o desenvolvimento de software reflete minha paixão por aprendizado contínuo e minha determinação em me destacar neste campo em constante evolução.

Estou sempre em busca de oportunidades que me permitam colaborar, aprender e agregar valor através da tecnologia.`;

const SUMMARY_EN = `I started my journey in software development on the front-end, using React and Next.js to build dynamic, responsive interfaces. I then shifted my focus to back-end development with Node.js, where I explored building APIs.

I am currently focused on consolidating my expertise in full-stack development, combining front-end and back-end skills to deliver complete solutions for users. My transition into software development reflects my passion for continuous learning and my determination to stand out in this ever-evolving field.

I am always looking for opportunities to collaborate, learn, and add value through technology.`;

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
      period: "maio de 2025 — Presente",
      description:
        "Atuação em desenvolvimento front-end com React e tecnologias modernas.",
    },
    {
      companyName: "DFCom Software House",
      title: "Full-stack Developer",
      period: "janeiro de 2025 — maio de 2025 (5 meses)",
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
        description:
          "E-commerce com integração Stripe para pagamentos.",
      },
      {
        title: "E-commerce",
        description:
          "Loja virtual full-stack com carrinho e gestão de produtos.",
      },
      {
        title: "find-a-friend",
        description:
          "Plataforma para conectar pessoas e causas.",
      },
      {
        title: "GymPass",
        description:
          "Sistema de gestão de academias e planos.",
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
      period: "May 2025 — Present",
      description:
        "Working on front-end development with React and modern technologies.",
    },
    {
      companyName: "DFCom Software House",
      title: "Full-stack Developer",
      period: "January 2025 — May 2025 (5 months)",
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
        description:
          "Community feed project built with React and Node.js.",
      },
      {
        title: "e-commerce-with-stripe",
        description:
          "E-commerce with Stripe payment integration.",
      },
      {
        title: "E-commerce",
        description:
          "Full-stack online store with cart and product management.",
      },
      {
        title: "find-a-friend",
        description:
          "Platform to connect people and causes.",
      },
      {
        title: "GymPass",
        description:
          "Gym and membership management system.",
      },
    ],
  },
};

export const resumeData = resumeDataPt;

export function getResumeData(locale: Locale = "pt"): ResumeData {
  return locale === "en" ? resumeDataEn : resumeDataPt;
}
