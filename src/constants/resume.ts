import type { Locale, ResumeData } from "@/types/resume";

const PROFILE_PICTURE = "/profile.png";

const SUMMARY_PT = `Desenvolvedor Full Stack com mais de três anos de experiência em React, Next.js, Node.js e TypeScript, atuando em produtos reais com foco em arquitetura, APIs REST, performance e confiabilidade em fluxos críticos — checkout, pagamentos e PDV. Experiência em componentização e design system (Storybook/MUI), integrações com serviços de terceiros e times ágeis remotos. Perfil analítico (graduação e mestrado em Química), com histórico em produção e projetos no GitHub.`;

const SUMMARY_EN = `Full-stack developer with over three years of experience in React, Next.js, Node.js, and TypeScript, shipping real products with a focus on architecture, REST APIs, performance, and reliability in critical flows — checkout, payments, and POS. Experience with componentization and design systems (Storybook/MUI), third-party integrations, and remote agile teams. Analytical background (BSc and MSc in Chemistry), with production history and personal projects on GitHub.`;

const HEADLINE_PT =
  "Desenvolvedor Full Stack | React, Next.js, Node.js e TypeScript — arquitetura, APIs e fluxos críticos.";

const HEADLINE_EN =
  "Full-Stack Developer | React, Next.js, Node.js & TypeScript — architecture, APIs, and critical flows.";

const resumeDataPt: ResumeData = {
  firstName: "Guilherme",
  lastName: "Orlandin",
  profilePicture: PROFILE_PICTURE,
  summary: SUMMARY_PT,
  headline: HEADLINE_PT,
  multiLocaleHeadline: { pt: HEADLINE_PT },
  educations: [
    {
      schoolName: "Universidade Estadual de Londrina",
      degree: "Graduação",
      fieldOfStudy: "Química",
    },
    {
      schoolName: "Universidade Estadual Paulista (UNESP)",
      degree: "Mestrado",
      fieldOfStudy: "Química",
    },
  ],
  certifications: [
    {
      name: "Bootcamp Discover — JavaScript, HTML e CSS",
      authority: "Rocketseat",
    },
    {
      name: "Bootcamp Ignite — Node.js, React.js e Next.js",
      authority: "Rocketseat",
    },
  ],
  fullPositions: [
    {
      companyName: "Beta Online",
      title: "Desenvolvedor Front-end | React · Next.js",
      period: "maio/2023 — Presente · Remoto",
      description: `Desenvolvimento e evolução do produto com React, Next.js e TypeScript, incluindo migração/padronização JS → TS para reduzir bugs em runtime e melhorar refactors e contratos entre módulos.

• Integrações de pagamentos/checkout com Pagar.me, Iugu, Mercado Pago e DomPagamentos (fluxos críticos, tokenização/processamento e tratamento robusto de falhas).
• Integração do front-end com APIs externas e back-ends internos, garantindo consistência de payloads, estados de carregamento/erro e UX confiável.
• Storybook para documentação e padronização de componentes; UI com MUI com foco em consistência visual e reuso.
• Formulários com Formik e validações com Zod; melhorias de performance/UX (redução de re-renders e ajustes em validações que impactavam a fluidez dos inputs).
• Contribuição nas decisões de arquitetura front-end (organização de módulos, estado, componentização e padronização), com foco em escalabilidade, manutenção e redução de débito técnico.
• Arquitetura e organização da camada de estado — incluindo refino de Context API para reduzir re-renders.
• Otimização de performance e experiência do usuário em telas e fluxos de alto uso.
• Colaboração com UX/UI na construção de interfaces (alinhamento em Figma, estados e feedbacks na UI).
• Atuação temporária como Tech Lead, coordenando o time durante ausência do líder principal (priorização, alinhamentos técnicos e continuidade da entrega).`,
    },
    {
      companyName: "DFCom Software House",
      title: "Desenvolvedor Full Stack | React · Node",
      period: "jan/2023 — maio/2023 · Remoto",
      description: `Desenvolvimento e manutenção do módulo de PDV em aplicação full stack com React, Node.js/Nest.js, Prisma e MongoDB, cobrindo fluxos de venda, transações e notas fiscais.

• Participação na definição da arquitetura da solução, com Redis para otimização de fluxos operacionais e transactions para maior confiabilidade e consistência nas operações financeiras do PDV.
• Criação e integração de APIs REST com Nest.js e Prisma (persistência/modelagem e operações consistentes no banco).
• React Query para cache, sincronização e atualização de estado do servidor em fluxos de transações e notas fiscais.
• Gerenciamento de estado com Zustand e Context API no fluxo de vendas; estilização com Styled Components.
• Implementação de componentes reutilizáveis e responsivos no front-end, priorizando legibilidade e manutenção.`,
    },
  ],
  projects: {
    items: [
      {
        title: "Comu-feed",
        description: "Feed comunitário full-stack com React e Node.js.",
      },
      {
        title: "e-commerce-with-stripe",
        description:
          "Projeto full-stack aplicando conhecimentos em gateways de pagamento (Stripe), com RAG para pesquisa de projetos — ainda em andamento.",
      },
      {
        title: "E-commerce",
        description:
          "Loja virtual full-stack com carrinho e gestão de produtos.",
      },
      {
        title: "find-a-friend",
        description:
          "API e aplicação para conectar pessoas a pets para adoção.",
      },
      {
        title: "GymPass",
        description:
          "API de check-in em academias com regras de negócio e Nest.js.",
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
  educations: [
    {
      schoolName: "State University of Londrina (UEL)",
      degree: "Bachelor's",
      fieldOfStudy: "Chemistry",
    },
    {
      schoolName: "São Paulo State University (UNESP)",
      degree: "Master's",
      fieldOfStudy: "Chemistry",
    },
  ],
  certifications: [
    {
      name: "Discover Bootcamp — JavaScript, HTML & CSS",
      authority: "Rocketseat",
    },
    {
      name: "Ignite Bootcamp — Node.js, React.js & Next.js",
      authority: "Rocketseat",
    },
  ],
  fullPositions: [
    {
      companyName: "Beta Online",
      title: "Front-end Developer | React · Next.js",
      period: "May 2023 — Present · Remote",
      description: `Product development and evolution with React, Next.js, and TypeScript, including JS → TS migration/standardization to cut runtime bugs and improve refactors and module contracts.

• Checkout/payment integrations with Pagar.me, Iugu, Mercado Pago, and DomPagamentos (critical flows, tokenization/processing, and robust failure handling).
• Front-end integration with external APIs and internal backends, ensuring consistent payloads, loading/error states, and reliable UX.
• Storybook for component documentation and standards; MUI UI focused on visual consistency and reuse.
• Forms with Formik and Zod validation; performance/UX improvements (fewer re-renders and validation tweaks that affected input fluidity).
• Contributions to front-end architecture decisions (module organization, state, componentization, and standards) aimed at scalability, maintainability, and less technical debt.
• Project/state-layer architecture — including Context API refinements to reduce re-renders.
• Performance and UX optimization on high-traffic screens and flows.
• Collaboration with UX/UI on interfaces (Figma alignment, UI states and feedback).
• Temporary Tech Lead coverage during the main lead’s absence (prioritization, technical alignment, and delivery continuity).`,
    },
    {
      companyName: "DFCom Software House",
      title: "Full-Stack Developer | React · Node",
      period: "Jan 2023 — May 2023 · Remote",
      description: `Built and maintained the POS module in a full-stack app with React, Node.js/Nest.js, Prisma, and MongoDB — sales, transactions, and invoices.

• Helped define the solution architecture, with Redis to optimize operational flows and transactions for stronger reliability and consistency in POS financial operations.
• Built and integrated REST APIs with Nest.js and Prisma (persistence/modeling and consistent database operations).
• React Query for caching, sync, and server-state updates in transaction and invoice flows.
• State management with Zustand and Context API in the sales flow; styling with Styled Components.
• Reusable, responsive front-end components with a focus on readability and maintainability.`,
    },
  ],
  projects: {
    items: [
      {
        title: "Comu-feed",
        description: "Community feed built with React and Node.js.",
      },
      {
        title: "e-commerce-with-stripe",
        description:
          "Full-stack project applying payment gateway knowledge (Stripe), with RAG for project search — still in progress.",
      },
      {
        title: "E-commerce",
        description: "Full-stack store with cart and product management.",
      },
      {
        title: "find-a-friend",
        description: "API and app to connect people with pets for adoption.",
      },
      {
        title: "GymPass",
        description: "Gym check-in API with business rules and Nest.js.",
      },
    ],
  },
};

export const resumeData = resumeDataPt;

export function getResumeData(locale: Locale = "pt"): ResumeData {
  return locale === "en" ? resumeDataEn : resumeDataPt;
}
