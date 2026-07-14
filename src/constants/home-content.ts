import type { Locale } from "@/types/resume";

export type FeaturedCase = {
  id: string;
  role: string;
  company: string;
  period: string;
  challenge: string;
  action: string;
  outcome: string;
  stack: string[];
  image?: string;
  href?: string;
};

export type HomeCopy = {
  heroLine: string;
  heroSupport: string;
  ctaWork: string;
  ctaContact: string;
  hookLabel: string;
  hookTitle: string;
  hookBody: string;
  workLabel: string;
  workTitle: string;
  workSupport: string;
  trajectoryLabel: string;
  trajectoryTitle: string;
  craftLabel: string;
  craftTitle: string;
  craftBody: string;
  craftStackNote: string;
  contactLabel: string;
  contactTitle: string;
  contactBody: string;
  contactLinkedIn: string;
  contactGitHub: string;
  contactProjects: string;
  caseChallenge: string;
  caseAction: string;
  caseOutcome: string;
  caseStack: string;
  featured: FeaturedCase[];
};

const homePt: HomeCopy = {
  heroLine: "Full stack em produtos reais — do checkout ao PDV.",
  heroSupport:
    "Mais de três anos com React, Next.js, Node.js e TypeScript. Arquitetura, APIs REST e confiabilidade em fluxos críticos.",
  ctaWork: "Ver trabalho",
  ctaContact: "Falar comigo",
  hookLabel: "Posicionamento",
  hookTitle: "Confiabilidade onde o dinheiro e a operação passam.",
  hookBody:
    "Atuo em produtos em produção com foco em performance, contratos claros entre módulos e design system. Integro gateways de pagamento, padronizo componentes (Storybook/MUI) e já cobri o papel de Tech Lead quando o time precisou de continuidade. Formação em Química — o mesmo rigor analítico, agora em software.",
  workLabel: "Trabalho em destaque",
  workTitle: "Casos tirados do dia a dia em produção.",
  workSupport:
    "Pagamentos, design system e PDV — o que realmente figura no currículo.",
  trajectoryLabel: "Trajetória",
  trajectoryTitle: "Onde essa experiência foi construída.",
  craftLabel: "Como trabalho",
  craftTitle: "TypeScript, APIs e design system no centro.",
  craftBody:
    "Stack do dia a dia: React/Next no front, Nest.js e Prisma no back, MongoDB e PostgreSQL nos dados, Redis quando o fluxo exige velocidade e consistência. Testo com Jest e Testing Library; entrego em times Scrum/Kanban remotos. Inglês intermediário.",
  craftStackNote: "Ferramentas frequentes",
  contactLabel: "Próximo passo",
  contactTitle: "Vamos conversar sobre o próximo produto?",
  contactBody:
    "Araraquara – SP · Aberto a oportunidades full stack e front-end. LinkedIn, GitHub ou e-mail.",
  contactLinkedIn: "LinkedIn",
  contactGitHub: "GitHub",
  contactProjects: "Arquivo de projetos",
  caseChallenge: "Desafio",
  caseAction: "O que fiz",
  caseOutcome: "Resultado",
  caseStack: "Stack",
  featured: [
    {
      id: "beta",
      role: "Desenvolvedor Front-end | React · Next.js",
      company: "Beta Online",
      period: "maio/2023 — presente · Remoto",
      challenge:
        "Evoluir um produto React/Next em produção com menos bugs em runtime, pagamentos confiáveis e componentes reutilizáveis entre times.",
      action:
        "Migração e padronização JS → TS; integrações de checkout com Pagar.me, Iugu, Mercado Pago e DomPagamentos; Storybook + MUI; Formik/Zod; arquitetura de estado (Context) para cortar re-renders; alinhamento com UX no Figma. Cobertura temporária como Tech Lead.",
      outcome:
        "Contratos entre módulos mais seguros, checkout com tratamento robusto de falhas, design system documentado e continuidade da entrega sem o lead principal.",
      stack: [
        "React",
        "Next.js",
        "TypeScript",
        "Storybook",
        "MUI",
        "Zod",
        "Pagar.me / Mercado Pago",
      ],
    },
    {
      id: "dfcom",
      role: "Desenvolvedor Full Stack | React · Node",
      company: "DFCom Software House",
      period: "jan/2023 — maio/2023 · Remoto",
      challenge:
        "Garantir vendas, transações e notas fiscais consistentes em um PDV full stack sob uso operacional real.",
      action:
        "PDV full stack com React e Node: Redis para desafogar o banco, transactions para confiabilidade financeira; Nest.js/Prisma nas APIs; React Query no sync; Zustand/Context e Styled Components no fluxo de vendas.",
      outcome:
        "Fluxos de caixa e emissão mais confiáveis, com menos carga no banco e arquitetura pensada para consistência financeira.",
      stack: [
        "React",
        "Nest.js",
        "Prisma",
        "MongoDB",
        "Redis",
        "React Query",
        "Zustand",
      ],
    },
    {
      id: "stripe",
      role: "Projeto pessoal",
      company: "e-commerce-with-stripe",
      period: "GitHub · Em andamento",
      challenge:
        "Aplicar conhecimentos em gateways de pagamento em um checkout real e evoluir o produto com busca inteligente.",
      action:
        "Full-stack com integração Stripe (pagamento e gestão de produtos) e RAG para pesquisa de projetos — feature ainda em andamento.",
      outcome:
        "Laboratório prático de gateways de pagamento e arquitetura full-stack com busca semântica via RAG.",
      stack: ["React", "Node.js", "Stripe", "RAG"],
      image: "/e-commerce-with-stripe.png",
      href: "https://github.com/GuiOrlandin/e-commerce-with-stripe",
    },
  ],
};

const homeEn: HomeCopy = {
  heroLine: "Full stack on real products — from checkout to POS.",
  heroSupport:
    "Over three years with React, Next.js, Node.js, and TypeScript. Architecture, REST APIs, and reliability in critical flows.",
  ctaWork: "See the work",
  ctaContact: "Get in touch",
  hookLabel: "Positioning",
  hookTitle: "Reliability where money and operations flow.",
  hookBody:
    "I ship production products with a focus on performance, clear module contracts, and design systems. I integrate payment gateways, standardize components (Storybook/MUI), and have covered Tech Lead when delivery needed continuity. Chemistry background — the same analytical rigor, now in software.",
  workLabel: "Featured work",
  workTitle: "Cases from day-to-day production work.",
  workSupport:
    "Payments, design systems, and POS — what actually lives on the résumé.",
  trajectoryLabel: "Trajectory",
  trajectoryTitle: "Where that experience was built.",
  craftLabel: "How I work",
  craftTitle: "TypeScript, APIs, and design systems at the center.",
  craftBody:
    "Day-to-day stack: React/Next on the front, Nest.js and Prisma on the back, MongoDB and PostgreSQL for data, Redis when flows need speed and consistency. I test with Jest and Testing Library; I deliver in remote Scrum/Kanban teams. Intermediate English.",
  craftStackNote: "Tools I reach for most often",
  contactLabel: "Next step",
  contactTitle: "Let's talk about the next product?",
  contactBody:
    "Araraquara, SP · Open to full-stack and front-end roles. LinkedIn, GitHub, or email.",
  contactLinkedIn: "LinkedIn",
  contactGitHub: "GitHub",
  contactProjects: "Project archive",
  caseChallenge: "Challenge",
  caseAction: "What I did",
  caseOutcome: "Outcome",
  caseStack: "Stack",
  featured: [
    {
      id: "beta",
      role: "Front-end Developer | React · Next.js",
      company: "Beta Online",
      period: "May 2023 — Present · Remote",
      challenge:
        "Evolve a production React/Next product with fewer runtime bugs, reliable payments, and reusable components across teams.",
      action:
        "JS → TS migration and standardization; checkout integrations with Pagar.me, Iugu, Mercado Pago, and DomPagamentos; Storybook + MUI; Formik/Zod; state architecture (Context) to cut re-renders; UX alignment in Figma. Temporary Tech Lead coverage.",
      outcome:
        "Safer contracts between modules, checkout with robust failure handling, a documented design system, and delivery continuity without the primary lead.",
      stack: [
        "React",
        "Next.js",
        "TypeScript",
        "Storybook",
        "MUI",
        "Zod",
        "Pagar.me / Mercado Pago",
      ],
    },
    {
      id: "dfcom",
      role: "Full-Stack Developer | React · Node",
      company: "DFCom Software House",
      period: "Jan 2023 — May 2023 · Remote",
      challenge:
        "Keep sales, transactions, and invoices consistent in a full-stack POS under real operational load.",
      action:
        "Full-stack POS with React and Node: Redis to offload the database, transactions for financial reliability; Nest.js/Prisma APIs; React Query sync; Zustand/Context and Styled Components in the sales flow.",
      outcome:
        "More trustworthy cash and invoicing flows, with less database load and an architecture built for financial consistency.",
      stack: [
        "React",
        "Nest.js",
        "Prisma",
        "MongoDB",
        "Redis",
        "React Query",
        "Zustand",
      ],
    },
    {
      id: "stripe",
      role: "Personal project",
      company: "e-commerce-with-stripe",
      period: "GitHub · In progress",
      challenge:
        "Apply payment gateway knowledge in a real checkout and evolve the product with intelligent search.",
      action:
        "Full-stack with Stripe integration (payments and product management) and RAG for project search — still in progress.",
      outcome:
        "A hands-on lab for payment gateways and full-stack architecture with semantic search via RAG.",
      stack: ["React", "Node.js", "Stripe", "RAG"],
      image: "/e-commerce-with-stripe.png",
      href: "https://github.com/GuiOrlandin/e-commerce-with-stripe",
    },
  ],
};

export function getHomeCopy(locale: Locale): HomeCopy {
  return locale === "en" ? homeEn : homePt;
}
